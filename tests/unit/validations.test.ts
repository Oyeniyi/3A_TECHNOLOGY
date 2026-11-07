import { describe, it, expect } from 'vitest';
import { contactEnquirySchema } from '@/lib/validations/enquiry';
import { quoteRequestSchema } from '@/lib/validations/quote';

describe('Form Validation Schema Tests (Zod)', () => {
  describe('contactEnquirySchema', () => {
    it('accepts valid contact payload with enquiryType and optional IT/SIWES or Academic Project context fields', () => {
      const valid = {
        fullName: 'Chinedu Okafor',
        email: 'c.okafor@example.com',
        phone: '+234 803 123 4567',
        enquiryType: 'siwes-support',
        institution: 'Kwara State University',
        department: 'Computer Science',
        trainingLevel: '300 Level • 6-Month SIWES',
        technologyArea: 'Python & Machine Learning',
        subject: 'IT / SIWES Training Support Request',
        message: 'I am starting my 6-month SIWES next month and would like structured weekly practical tasks.',
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
    it('accepts valid quote payload for all 6 supported services including technology-consulting and academic-research-support', () => {
      const services = [
        'web-development',
        'custom-software',
        'ai-automation',
        'data-science-analytics',
        'technology-consulting',
        'academic-research-support',
      ] as const;

      for (const service of services) {
        const result = quoteRequestSchema.safeParse({
          fullName: 'Amina Bello',
          email: 'a.bello@telecoms.ng',
          company: 'National Telecoms Network',
          phone: '08023456789',
          service,
          projectDescription: 'Full technical implementation and research consultation scope.',
          budgetRange: '3m-7.5m',
          timeline: '3-6-months',
        });
        expect(result.success).toBe(true);
      }
    });

    it('strictly rejects deprecated brand-digital-media service option', () => {
      const invalidService = {
        fullName: 'Amina Bello',
        email: 'a.bello@telecoms.ng',
        company: 'National Telecoms Network',
        phone: '08023456789',
        service: 'brand-digital-media',
        projectDescription: 'Full cloud migration from on-prem datacenter to multi-region AWS setup.',
        budgetRange: '3m-7.5m',
        timeline: '1-3-months',
      };
      const result = quoteRequestSchema.safeParse(invalidService);
      expect(result.success).toBe(false);
    });

    it('rejects invalid budget bracket enum', () => {
      const invalid = {
        fullName: 'Amina Bello',
        email: 'a.bello@telecoms.ng',
        company: 'National Telecoms Network',
        phone: '08023456789',
        service: 'custom-software',
        projectDescription: 'Full cloud migration from on-prem datacenter to multi-region AWS setup.',
        budgetRange: 'unlimited-funds',
        timeline: '1-3-months',
      };
      const result = quoteRequestSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });
  });
});
