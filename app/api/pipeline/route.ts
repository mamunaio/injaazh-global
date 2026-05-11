import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, services, budget, details } = body;

    // 1. LOG THE LEAD
    console.log(`NEW PROJECT REQUEST: ${name} (${email})`);
    console.log(`Services: ${services.join(", ")} | Budget: ${budget}`);

    // 2. SEND NOTIFICATION EMAIL (To Agency/Owner)
    // Note: We send TO our own email because onboarding@resend.dev can only send to verified addresses
    // In production, you would send a confirmation to the user too.
    let emailSent = false;
    try {
      const { data, error: resendError } = await resend.emails.send({
        from: "Injaazh Pipeline <onboarding@resend.dev>",
        to: "mamunai.me@gmail.com", // Send to your primary email
        subject: `New Project Inquiry: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 30px; border-radius: 12px; background: #060608; color: white;">
            <h2 style="color: #6324FC; margin-bottom: 20px;">New Pipeline Inquiry</h2>
            
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Client Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #6324FC; font-size: 14px; text-transform: uppercase;">Selected Services</h3>
              <p>${services.join(", ")}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #6324FC; font-size: 14px; text-transform: uppercase;">Investment Range</h3>
              <p>${budget}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #6324FC; font-size: 14px; text-transform: uppercase;">Project Vision</h3>
              <p style="font-style: italic; color: #ccc;">"${details}"</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;" />
            <p style="font-size: 10px; color: #666; text-align: center;">Injaazh Neural Pipeline v2.0</p>
          </div>
        `
      });

      if (resendError) {
        console.error("Resend delivery failed for project inquiry:", resendError);
      } else {
        emailSent = true;
      }
    } catch (err) {
      console.warn("Resend runtime error - skipping email:", err);
    }

    return NextResponse.json({ 
      success: true, 
      emailSent,
      message: "Project request received successfully!"
    });

  } catch (error) {
    console.error("Project API Error:", error);
    return NextResponse.json({ error: "Failed to process project request" }, { status: 500 });
  }
}
