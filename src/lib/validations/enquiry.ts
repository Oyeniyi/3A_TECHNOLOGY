/**
 * Contact Enquiry Zod Validation Schema
 * In accordance with PRD.md Section 7 (FR-05) & docs/api-specification.md
 */

import { z } from 'zod';

export const ContactEnquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must contain at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please provide a valid business email address.' })
    .max(100, { message: 'Email address cannot exceed 100 characters.' }),
  phone: z
    .string()
    .max(25, { message: 'Phone number cannot exceed 25 characters.' })
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .max(120, { message: 'Subject cannot exceed 120 characters.' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(15, { message: 'Message must contain at least 15 characters describing your enquiry.' })
    .max(2500, { message: 'Message cannot exceed 2500 characters.' }),
  hp_field: z
    .string()
    .max(0, { message: 'Automated submission trapped.' })
    .optional(),
});

export type ContactEnquiryFormData = z.infer<typeof ContactEnquirySchema>;
export const contactEnquirySchema = ContactEnquirySchema;
