/**
 * Resend HTTP API Driver
 * In accordance with ADR-005 & docs/security-specification.md
 */

import { LeadEmailPayload, EmailDispatchResult } from './dispatcher';

export async function sendViaResend(payload: LeadEmailPayload): Promise<EmailDispatchResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.NOTIFICATION_INBOX || 'contact@3atechnology.com.ng';

  // Handle unconfigured API key gracefully for local/test environments
  if (!apiKey || apiKey.startsWith('re_placeholder') || apiKey.includes('placeholder')) {
    console.warn('[Resend Driver] RESEND_API_KEY is not configured. Emulating successful dispatch.');
    return {
      success: true,
      messageId: `mock-resend-${Date.now()}`,
    };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: '3A Web Platform <notifications@3atechnology.com.ng>',
        to: [recipient],
        reply_to: payload.senderEmail,
        subject: `[3A Inbound Lead] ${payload.subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E7EB; border-radius: 8px;">
            <h2 style="color: #0B2B6B; margin-top: 0;">New Inbound ${payload.type === 'quote' ? 'Commercial Quote Request' : 'Contact Enquiry'}</h2>
            <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
            <p><strong>From:</strong> ${payload.senderName} (${payload.senderEmail})</p>
            ${payload.senderPhone ? `<p><strong>Phone:</strong> ${payload.senderPhone}</p>` : ''}
            ${Object.entries(payload.metadata)
              .filter(([_, v]) => Boolean(v))
              .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
              .join('')}
            <h3 style="color: #1F2937; margin-top: 24px;">Project Scope / Message:</h3>
            <div style="background: #F4F6F8; padding: 16px; border-radius: 6px; white-space: pre-wrap; color: #1F2937;">${payload.message}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `Resend API Error: ${response.status} - ${errorText}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      messageId: data.id,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown network failure during email dispatch.',
    };
  }
}
