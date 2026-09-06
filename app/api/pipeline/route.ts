import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, services, budget, details } = body;

    // 1. INPUT SANITIZATION & VALIDATION
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    // 2. LOG THE LEAD
    console.log(`NEW PROJECT REQUEST: ${name} (${email})`);
    console.log(`Services: ${Array.isArray(services) ? services.join(", ") : services} | Budget: ${budget}`);

    // 3. SEND NOTIFICATION EMAIL (To Agency/Owner)
    const adminEmail = process.env.ADMIN_EMAIL || "mamunai.me@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;
    let emailSent = false;

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const { data, error: resendError } = await resend.emails.send({
          from: "Injaazh Pipeline <onboarding@resend.dev>",
          to: adminEmail,
          subject: `New Project Inquiry: ${name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 30px; border-radius: 12px; background: #060608; color: white;">
              <h2 style="color: #6324FC; margin-bottom: 20px;">New Pipeline Inquiry</h2>
              
              <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <h3 style="color: #6324FC; font-size: 14px; text-transform: capitalize ;">Selected Services</h3>
                <p>${Array.isArray(services) ? services.join(", ") : services || "Not specified"}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <h3 style="color: #6324FC; font-size: 14px; text-transform: capitalize ;">Investment Range</h3>
                <p>${budget || "Not specified"}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <h3 style="color: #6324FC; font-size: 14px; text-transform: capitalize ;">Project Vision</h3>
                <p style="font-style: italic; color: #ccc;">"${details || "None provided"}"</p>
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
    } else {
      console.warn("RESEND_API_KEY is not configured in environment variables. Lead logged to console only.");
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
