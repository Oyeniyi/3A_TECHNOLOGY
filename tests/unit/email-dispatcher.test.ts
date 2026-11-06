import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { dispatchLeadNotification } from '../../src/lib/email/dispatcher';

describe('Transactional Email Notification Pipeline (TASK-025 / ADR-005)', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('dispatches via Resend driver by default and gracefully emulates when unconfigured', async () => {
    delete process.env.EMAIL_DRIVER;
    delete process.env.RESEND_API_KEY;

    const result = await dispatchLeadNotification({
      type: 'contact',
      senderName: 'Adaeze Obi',
      senderEmail: 'adaeze@example.com',
      subject: 'Partnership Inquiry',
      metadata: { Source: 'Unit Test' },
      message: 'Testing the Resend fallback emulation.',
    });

    expect(result.success).toBe(true);
    expect(result.messageId).toMatch(/^mock-resend-/);
  });

  it('switches to SMTP driver when EMAIL_DRIVER=smtp', async () => {
    process.env.EMAIL_DRIVER = 'smtp';
    delete process.env.SMTP_HOST;

    const result = await dispatchLeadNotification({
      type: 'quote',
      senderName: 'Chidi Nwosu',
      senderEmail: 'chidi@enterprise.ng',
      subject: 'New Commercial Quote Request',
      metadata: { Budget: '3m-7.5m' },
      message: 'Testing the SMTP fallback driver.',
    });

    expect(result.success).toBe(true);
    expect(result.messageId).toMatch(/^mock-smtp-/);
  });
});

