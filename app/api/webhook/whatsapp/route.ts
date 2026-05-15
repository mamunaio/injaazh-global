import { NextRequest, NextResponse } from 'next/server';

/**
 * WhatsApp Webhook Verification and Event Handling
 * 
 * GET: Handles the verification request from Meta (Facebook).
 * POST: Handles incoming messages and status updates from WhatsApp.
 */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  // These are the query parameters Meta sends for verification
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // This must match the Verify Token set in the Meta Developer Portal
  const VERIFY_TOKEN = 'injaazh_secret_123';

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WhatsApp Webhook verified successfully.');
      // Return the challenge code as a plain text response
      return new NextResponse(challenge, { status: 200 });
    } else {
      console.error('WhatsApp Webhook verification failed: Token mismatch.');
      return new NextResponse('Verification failed', { status: 403 });
    }
  }

  return new NextResponse('Missing parameters', { status: 400 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Log the incoming message for debugging
    // In a real application, you would process this message (e.g., save to DB, send to AI, etc.)
    console.log('WhatsApp Webhook Event:', JSON.stringify(body, null, 2));

    // Meta requires a 200 OK response to acknowledge receipt of the event
    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error processing WhatsApp Webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
