/**
 * Commercial Quote Request Zod Validation Schema
 * Strictly validates the 6 approved commercial service categories.
 * Excludes Branding & Digital Media. Separates Technology Consulting and Academic Research & Project Support.
 */

import { z } from 'zod';

export const SERVICE_SLUGS = [
  'web-development',
  'custom-software',
  'ai-automation',
  'data-science-analytics',
  'technology-consulting',
  'academic-research-support',
] as const;

export const BUDGET_TIERS = [
  { value: 'under-1m', label: 'Under ₦1,000,000' },
  { value: '1m-3m', label: '₦1,000,000 – ₦3,000,000' },
  { value: '3m-7.5m', label: '₦3,000,000 – ₦7,500,000' },
  { value: '7.5m-plus', label: '₦7,500,000+' },
  { value: 'advisory', label: 'Undetermined / Consultation Required' },
] as const;

export const TIMELINE_OPTIONS = [
  { value: 'under-1-month', label: '< 1 month (Urgent)' },
  { value: '1-3-months', label: '1 – 3 months (Standard)' },
  { value: '3-6-months', label: '3 – 6 months (Extended)' },
  { value: 'flexible', label: 'Flexible / Discovery Stage' },
] as const;

export const QuoteRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must contain at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  company: z
    .string()
    .max(120, { message: 'Company or institution name cannot exceed 120 characters.' })
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .email({ message: 'Please provide a valid email address.' })
    .max(100, { message: 'Email address cannot exceed 100 characters.' }),
  phone: z
    .string()
    .min(7, { message: 'Please provide a valid telephone or WhatsApp number.' })
    .max(25, { message: 'Phone number cannot exceed 25 characters.' }),
  service: z.enum(SERVICE_SLUGS, {
    errorMap: () => ({ message: 'Please select a valid service specialization.' }),
  }),
  budgetRange: z.enum(['under-1m', '1m-3m', '3m-7.5m', '7.5m-plus', 'advisory'], {
    errorMap: () => ({ message: 'Please select an estimated budget range tier.' }),
  }),
  timeline: z.enum(['under-1-month', '1-3-months', '3-6-months', 'flexible'], {
    errorMap: () => ({ message: 'Please select your desired project timeline.' }),
  }),
  projectDescription: z
    .string()
    .min(20, { message: 'Project description must be at least 20 characters to help us understand your scope.' })
    .max(3500, { message: 'Project description cannot exceed 3500 characters.' }),
  hp_field: z
    .string()
    .max(0, { message: 'Automated submission trapped.' })
    .optional(),
});

export type QuoteRequestFormData = z.infer<typeof QuoteRequestSchema>;
export const quoteRequestSchema = QuoteRequestSchema;
