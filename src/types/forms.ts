/**
 * Form Intake & Mutation Type Definitions
 * In accordance with docs/api-specification.md and docs/openapi.yaml
 */

import { ServiceSlug } from './content';

export type EnquiryTypeKey =
  | 'technology-service'
  | 'academy-programme'
  | 'academic-research'
  | 'general-inquiry';

export interface ContactEnquiryInput {
  fullName: string;
  email: string;
  phone?: string;
  enquiryType?: EnquiryTypeKey;
  subject?: string;
  message: string;
  hp_field?: string;
}

export type BudgetTierKey =
  | 'under-1m'
  | '1m-3m'
  | '3m-7.5m'
  | '7.5m-plus'
  | 'advisory';

export type TimelineKey =
  | 'under-1-month'
  | '1-3-months'
  | '3-6-months'
  | 'flexible';

export interface QuoteRequestInput {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  service: ServiceSlug;
  budgetRange: BudgetTierKey;
  timeline: TimelineKey;
  projectDescription: string;
  hp_field?: string;
}

export interface FormResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface ApiErrorEnvelope {
  success: false;
  error: {
    code: string;
    message: string;
    fields?: Record<string, string[]>;
    timestamp: string;
  };
}
