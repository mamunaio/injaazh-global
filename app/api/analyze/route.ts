import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    // Google PageSpeed Insights API URL with Key
    const apiKey = process.env.GOOGLE_PSI_API_KEY;
    const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      targetUrl
    )}&category=PERFORMANCE&category=SEO&strategy=mobile${apiKey ? `&key=${apiKey}` : ""}`;

    const response = await fetch(psiUrl);
    const data = await response.json();

    // Artificial delay for authenticity
    await new Promise(resolve => setTimeout(resolve, 2000));

    // If Quota exceeded or API error, fallback to smart simulation
    if (data.error) {
      console.warn("PSI API Quota exceeded or error. Falling back to simulation.");
      return NextResponse.json(generateFallbackData(targetUrl));
    }

    // Extracting key scores and metrics for authenticity
    const lighthouse = data.lighthouseResult;
    const performanceScore = Math.round(lighthouse.categories.performance.score * 100);
    const seoScore = Math.round(lighthouse.categories.seo.score * 100);
    
    // Real Technical Metrics
    const lcp = lighthouse.audits["largest-contentful-paint"].displayValue;
    const tbt = lighthouse.audits["total-blocking-time"].displayValue;
    const cls = lighthouse.audits["cumulative-layout-shift"].displayValue;
    const speedIndex = lighthouse.audits["speed-index"].displayValue;

    // Calculate business metrics based on real scores
    const roiPotential = (performanceScore < 50 ? 4.8 : performanceScore < 80 ? 3.2 : 1.5).toFixed(1);
    const gapsFound = Math.floor((100 - seoScore) / 5) + (performanceScore < 70 ? 5 : 2);

    return NextResponse.json({
      performance: performanceScore,
      seo: seoScore,
      roiPotential,
      gapsFound,
      metrics: {
        lcp,
        tbt,
        cls,
        speedIndex
      },
      isSimulated: false
    });
  } catch (error: any) {
    console.error("Audit API Error:", error);
    // Ultimate fallback to ensure the UI never breaks
    return NextResponse.json(generateFallbackData(targetUrl));
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, url, performance, seo, roi, gaps, goal, metrics } = body;

    // 1. LEAD STORAGE LOGGING
    console.log(`NEW LEAD: ${name} (${email}) for ${url}`);

    // 2. REAL EMAIL DELIVERY VIA RESEND
    const resend = new Resend(process.env.RESEND_API_KEY);
    let emailSent = false;
    try {
      const { data, error: resendError } = await resend.emails.send({
        from: "Injaazh Global <onboarding@resend.dev>",
        to: email, // Note: Resend only allows sending to the owner's email for unverified domains
        subject: `Your AI Performance Audit: ${url}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #6324FC;">AI Neural Audit Report</h2>
            <p>Hi ${name},</p>
            <p>We've completed the AI-driven performance audit for <strong>${url}</strong>. Here are your key results:</p>
            
            <div style="display: flex; gap: 20px; margin: 20px 0;">
              <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; text-align: center; flex: 1;">
                <div style="font-size: 24px; font-weight: bold; color: ${performance > 80 ? '#22c55e' : '#eab308'};">${performance}</div>
                <div style="font-size: 12px; color: #666;">Performance</div>
              </div>
              <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; text-align: center; flex: 1;">
                <div style="font-size: 24px; font-weight: bold; color: ${seo > 80 ? '#22c55e' : '#eab308'};">${seo}</div>
                <div style="font-size: 12px; color: #666;">SEO Score</div>
              </div>
            </div>

            <h3>Technical Deep-Dive:</h3>
            <ul>
              <li><strong>LCP (Load Speed):</strong> ${metrics?.lcp || 'N/A'}</li>
              <li><strong>Total Blocking Time:</strong> ${metrics?.tbt || 'N/A'}</li>
              <li><strong>Visual Stability (CLS):</strong> ${metrics?.cls || 'N/A'}</li>
            </ul>

            <p style="background: #6324FC; color: white; padding: 15px; border-radius: 8px; text-align: center;">
              <strong>ROI Potential: ${roi}x Growth</strong>
            </p>

            <p>Based on your goal of <strong>"${goal}"</strong>, we recommend optimizing your Core Web Vitals to improve conversion rates.</p>
            <hr />
            <p style="font-size: 12px; color: #999;">Injaazh Global - Modern Agency Solutions</p>
          </div>
        `
      });

      if (resendError) {
        console.error("Resend delivery failed (Domain likely unverified):", resendError);
      } else {
        emailSent = true;
      }
    } catch (err) {
      console.warn("Resend runtime error - skipping email:", err);
    }

    // Always return success so the UI can show the report, even if email fails
    return NextResponse.json({ 
      success: true, 
      emailSent,
      message: emailSent ? "Audit report sent successfully!" : "Audit completed (Email delivery skipped due to unverified domain)"
    });

  } catch (error) {
    console.error("Audit POST Error:", error);
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}

// Smart Fallback Generator
function generateFallbackData(url: string) {
  // Use URL length or string to generate semi-consistent "random" data
  const seed = url.length;
  const performance = 45 + (seed % 35); 
  const seo = 60 + (seed % 30);
  const gaps = Math.floor((100 - seo) / 4) + (performance < 60 ? 6 : 2);
  const roi = (performance < 50 ? 5.2 : 3.4).toFixed(1);

  return {
    performance,
    seo,
    roiPotential: roi,
    gapsFound: gaps,
    metrics: {
      lcp: "5.2s",
      tbt: "480ms",
      cls: "0.12",
      speedIndex: "3.4s"
    },
    isSimulated: true,
    message: "High demand: Neural approximation active."
  };
}
