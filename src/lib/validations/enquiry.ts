/**
 * Contact & Academy Enquiry Zod Validation Schema
 * Distinguishes commercial service enquiries, course enrolment/info, IT/SIWES support,
 * academic project consultation, seminar registration, and customized organizational training.
 */

import { z } from 'zod';

export const ENQUIRY_TYPES = [
  'technology-service',
  'course-enrolment',
  'course-info',
  'siwes-support',
  'academic-project',
  'seminar-workshop',
  'customized-training',
  'academy-programme',
  'academic-research',
  'general-inquiry',
] as const;

export const ContactEnquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must contain at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please provide a valid email address.' })
    .max(100, { message: 'Email address cannot exceed 100 characters.' }),
  phone: z
    .string()
    .max(25, { message: 'Phone number cannot exceed 25 characters.' })
    .optional()
    .or(z.literal('')),
  enquiryType: z.enum(ENQUIRY_TYPES).optional().default('general-inquiry'),
  subject: z
    .string()
    .max(150, { message: 'Subject cannot exceed 150 characters.' })
    .optional()
    .or(z.literal('')),
  institution: z
    .string()
    .max(140, { message: 'Institution or organization name cannot exceed 140 characters.' })
    .optional()
    .or(z.literal('')),
  department: z
    .string()
    .max(120, { message: 'Course or department cannot exceed 120 characters.' })
    .optional()
    .or(z.literal('')),
  trainingLevel: z
    .string()
    .max(100, { message: 'Training level cannot exceed 100 characters.' })
    .optional()
    .or(z.literal('')),
  technologyArea: z
    .string()
    .max(120, { message: 'Technology area cannot exceed 120 characters.' })
    .optional()
    .or(z.literal('')),
  projectArea: z
    .string()
    .max(150, { message: 'Project area cannot exceed 150 characters.' })
    .optional()
    .or(z.literal('')),
  projectStage: z
    .string()
    .max(100, { message: 'Project stage cannot exceed 100 characters.' })
    .optional()
    .or(z.literal('')),
  guidanceNeeded: z
    .string()
    .max(150, { message: 'Guidance type cannot exceed 150 characters.' })
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

export type ContactEnquiryFormData = z.input<typeof ContactEnquirySchema>;
export const contactEnquirySchema = ContactEnquirySchema;
