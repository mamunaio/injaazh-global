import { NextRequest, NextResponse } from 'next/server';

/**
 * WhatsApp Webhook Verification and Event Handling
 */

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    console.log('Incoming WhatsApp verification request:', { mode, token, challenge });

    // This must match the Verify Token set in the Meta Developer Portal
    const VERIFY_TOKEN = 'injaazh_secret_123';

    if (mode && token) {
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        // Meta expects the challenge to be returned as a plain string
        return new Response(challenge, {
          status: 200,
          headers: {
            'Content-Type': 'text/plain',
          },
        });
      } else {
        console.error('Verification failed: Token mismatch');
        return new Response('Forbidden', { status: 403 });
      }
    }

    return new Response('Bad Request', { status: 400 });
  } catch (error) {
    console.error('Error in WhatsApp verification:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('WhatsApp Webhook Event:', JSON.stringify(body, null, 2));

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error processing WhatsApp Webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
