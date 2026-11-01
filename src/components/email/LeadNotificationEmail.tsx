import React from 'react';
import { LeadEmailPayload } from '@/lib/email/dispatcher';

export function LeadNotificationEmail({ payload }: { payload: LeadEmailPayload }) {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '24px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
      <h2 style={{ color: '#0B2B6B', marginTop: 0 }}>
        New Inbound {payload.type === 'quote' ? 'Commercial Quote Request' : 'Contact Enquiry'}
      </h2>
      <hr style={{ border: 0, borderTop: '1px solid #E5E7EB', margin: '16px 0' }} />
      <p><strong>From:</strong> {payload.senderName} ({payload.senderEmail})</p>
      {payload.senderPhone && <p><strong>Phone:</strong> {payload.senderPhone}</p>}
      {Object.entries(payload.metadata).map(([k, v]) => (
        v ? <p key={k}><strong>{k}:</strong> {v}</p> : null
      ))}
      <h3 style={{ color: '#1F2937', marginTop: '24px' }}>Project Scope / Message:</h3>
      <div style={{ background: '#F4F6F8', padding: '16px', borderRadius: '6px', whiteSpace: 'pre-wrap', color: '#1F2937' }}>
        {payload.message}
      </div>
    </div>
  );
}
