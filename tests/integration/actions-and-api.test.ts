import { describe, it, expect, beforeEach } from 'vitest';
import { submitContactEnquiry } from '../../src/actions/enquiry';
import { submitQuoteRequest } from '../../src/actions/quote';
import { resetRateLimitStore } from '../../src/lib/security/rate-limiter';

describe('Integration Tests: Server Actions & Enquiry/Quote Flows', () => {
  beforeEach(() => {
    resetRateLimitStore();
  });

  it('processes a valid contact enquiry with enquiryType end-to-end', async () => {
    const response = await submitContactEnquiry(
      {
        fullName: 'Tunde Bakare',
        email: 'tunde@bakareholdings.ng',
        phone: '+2348031234567',
        enquiryType: 'technology-service',
        subject: 'Enterprise Web Portal',
        message: 'We would like to discuss building a customer portal for our logistics operations.',
        hp_field: '',
      },
      '192.0.2.10'
    );

    expect(response.success).toBe(true);
    expect(response.message).toContain('Thank you');
  });

  it('processes an Academic Research & Project Support quote request end-to-end', async () => {
    const response = await submitQuoteRequest(
      {
        fullName: 'Ibrahim Musa',
        company: 'University of Ilorin (M.Sc. Research)',
        email: 'ibrahim.musa@unilorin.edu.ng',
        phone: '+2348039998877',
        service: 'academic-research-support',
        budgetRange: 'under-1m',
        timeline: '1-3-months',
        projectDescription:
          'Seeking technical consultation and Python machine learning pipeline mentorship for medical image classification research.',
        hp_field: '',
      },
      '192.0.2.15'
    );

    expect(response.success).toBe(true);
    expect(response.message).toContain('Thank you');
  });
});
