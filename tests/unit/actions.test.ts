import { describe, it, expect, beforeEach } from 'vitest';
import { submitContactEnquiry } from '../../src/actions/enquiry';
import { submitQuoteRequest } from '../../src/actions/quote';
import { resetRateLimitStore } from '../../src/lib/security/rate-limiter';

describe('Next.js Server Actions Integration (TASK-026 / ARCH-09 / ARCH-10)', () => {
  beforeEach(() => {
    resetRateLimitStore();
  });

  it('processes a valid contact enquiry end-to-end', async () => {
    const response = await submitContactEnquiry(
      {
        fullName: 'Tunde Bakare',
        email: 'tunde@bakareholdings.ng',
        phone: '+2348031234567',
        subject: 'Enterprise Web Portal',
        message: 'We would like to discuss building a customer portal for our logistics operations.',
        hp_field: '',
      },
      '192.0.2.10'
    );

    expect(response.success).toBe(true);
    expect(response.message).toContain('Thank you');
  });

  it('silently drops honeypot spam on contact enquiry while returning fake success', async () => {
    const response = await submitContactEnquiry(
      {
        fullName: 'Spam Bot',
        email: 'bot@spam.net',
        message: 'Buy cheap backlinks right now!',
        hp_field: 'filled-by-automated-script',
      },
      '192.0.2.20'
    );

    expect(response.success).toBe(true);
  });

  it('returns structured field validation errors on invalid quote request', async () => {
    const response = await submitQuoteRequest(
      {
        fullName: 'A',
        company: 'Test Co',
        email: 'not-an-email',
        phone: '123',
        service: 'ai-automation',
        budgetRange: '1m-3m',
        timeline: '1-3-months',
        projectDescription: 'Too short',
        hp_field: '',
      },
      '192.0.2.30'
    );

    expect(response.success).toBe(false);
    expect(response.errors).toBeDefined();
    expect(response.errors?.fullName).toBeDefined();
    expect(response.errors?.email).toBeDefined();
    expect(response.errors?.projectDescription).toBeDefined();
  });

  it('enforces the 5-requests-per-hour sliding-window rate limit on quote submissions', async () => {
    const validPayload = {
      fullName: 'Ngozi Okafor',
      company: 'Okafor Logistics',
      email: 'ngozi@okafor.ng',
      phone: '+2348098765432',
      service: 'custom-software' as const,
      budgetRange: '3m-7.5m' as const,
      timeline: '1-3-months' as const,
      projectDescription: 'We need an end-to-end fleet tracking and electronic logbook platform.',
      hp_field: '',
    };

    const clientIp = '198.51.100.42';
    for (let i = 0; i < 5; i++) {
      const res = await submitQuoteRequest(validPayload, clientIp);
      expect(res.success).toBe(true);
    }

    const sixthRes = await submitQuoteRequest(validPayload, clientIp);
    expect(sixthRes.success).toBe(false);
    expect(sixthRes.message.toLowerCase()).toContain('too many');
  });
});

