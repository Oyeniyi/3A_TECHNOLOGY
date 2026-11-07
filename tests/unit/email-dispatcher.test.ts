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

  it('dispatches via Resend driver by default and gracefully emulates in non-production when unconfigured', async () => {
    process.env = { ...process.env, NODE_ENV: 'test' };
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

  it('refuses to fake delivery success in production when RESEND_API_KEY is missing', async () => {
    process.env = { ...process.env, NODE_ENV: 'production' };
    delete process.env.EMAIL_DRIVER;
    delete process.env.RESEND_API_KEY;

    const result = await dispatchLeadNotification({
      type: 'contact',
      senderName: 'Adaeze Obi',
      senderEmail: 'adaeze@example.com',
      subject: 'Production Inquiry',
      metadata: { Environment: 'Production Test' },
      message: 'Testing production fail-safe.',
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain('Email dispatch service is not configured in production');
  });

  it('switches to SMTP driver when EMAIL_DRIVER=smtp in non-production', async () => {
    process.env = { ...process.env, NODE_ENV: 'test', EMAIL_DRIVER: 'smtp' };
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
