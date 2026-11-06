import { describe, it, expect } from 'vitest';
import { contactEnquirySchema } from '@/lib/validations/enquiry';
import { quoteRequestSchema } from '@/lib/validations/quote';

describe('Form Validation Schema Tests (Zod)', () => {
  describe('contactEnquirySchema', () => {
    it('accepts valid contact payload', () => {
      const valid = {
        fullName: 'Chinedu Okafor',
        email: 'c.okafor@example.com',
        phone: '+234 803 123 4567',
        subject: 'Cloud Migration Architecture',
        message: 'We are seeking an architectural evaluation for our on-prem banking infrastructure.',
      };
      const result = contactEnquirySchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('rejects payload with invalid email', () => {
      const invalid = {
        fullName: 'Chinedu Okafor',
        email: 'invalid-email-string',
        subject: 'General',
        message: 'Test message that meets minimum length requirements.',
      };
      const result = contactEnquirySchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it('rejects payload with message shorter than 15 characters', () => {
      const invalid = {
        fullName: 'Chinedu Okafor',
        email: 'c.okafor@example.com',
        subject: 'General',
        message: 'Short',
      };
      const result = contactEnquirySchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });
  });

  describe('quoteRequestSchema', () => {
    it('accepts valid quote payload with normalized wire enums (VAL-02)', () => {
      const valid = {
        fullName: 'Amina Bello',
        email: 'a.bello@telecoms.ng',
        company: 'National Telecoms Network',
        phone: '08023456789',
        service: 'custom-software',
        projectDescription: 'Full cloud migration from on-prem datacenter to multi-region AWS setup.',
        budgetRange: '3m-7.5m',
        timeline: '3-6-months',
      };
      const result = quoteRequestSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('rejects invalid budget bracket enum', () => {
      const invalid = {
        fullName: 'Amina Bello',
        email: 'a.bello@telecoms.ng',
        company: 'National Telecoms Network',
        phone: '08023456789',
        service: 'custom-software',
        projectDescription: 'Full cloud migration from on-prem datacenter to multi-region AWS setup.',
        budgetRange: 'unlimited-funds', // Invalid enum
        timeline: '1-3-months',
      };
      const result = quoteRequestSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });
  });
});
