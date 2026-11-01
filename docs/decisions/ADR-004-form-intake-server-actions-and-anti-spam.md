# ADR-004: Form Intake, Server Actions, Validation, and Anti-Abuse Safeguards

**ID:** ADR-004  
**Title:** Form Intake, Server Actions, Validation, and Anti-Abuse Safeguards  
**Status:** Proposed  
**Date:** October 2026  
**Auditor/Architect:** Senior Software Architect & Technical Research Engineer  
**Related Requirements:** `FR-05`, `FR-06`, `FR-07`, `FR-10`, `AGENTS.md` Section 6  

---

## 1. Context & Problem Statement
The primary commercial objective of the 3A website is capturing qualified enterprise enquiries and quote requests via `/contact` and `/request-quote`. Public forms on the internet are constantly targeted by automated spam bots, mail relay injection attacks, and malicious payloads.

The platform must provide a smooth, accessible user experience with instant client-side validation, backed by an uncompromising server-side validation layer, anti-spam honeypot defense, and IP rate limiting, without frustrating legitimate Nigerian and international clients with cumbersome CAPTCHAs.

---

## 2. Decision Drivers
- **Seamless User Experience:** Immediate field-level feedback on blur and submit; no intrusive visual CAPTCHA puzzles that degrade mobile conversion rates.
- **Robust Defense-in-Depth:** Validation must execute on both client and server; client validation can never be trusted alone.
- **Anti-Spam & Abuse Throttling:** Silently drop automated submissions without alerting spam bots.
- **Zero Secret Leakage:** Email service credentials and recipient configurations must never appear in client bundles.
- **Accessibility:** Accessible inline errors linked to form controls via `aria-describedby` and `aria-invalid`.

---

## 3. Evaluated Options

### Option 1: React Hook Form + Zod (Client) + Next.js Server Action with Honeypot & Rate Limiting (Server)
- **Description:** 
  - Client: React Hook Form with `@hookform/resolvers/zod` for real-time validation and accessible error states.
  - Honeypot: A hidden, visually masked field (`hp_field`) with `tabIndex={-1}`, `aria-hidden="true"`, and off-screen CSS positioning. If populated upon receipt, the submission is silently dropped with an apparent 200 OK success.
  - Server: A Next.js Server Action (`export async function submitQuote(prevState, formData)`) executing strict Zod schema parsing, header sanitization, IP rate limiting, and dispatching transactional email.
- **Pros:**
  - Modern, zero-boilerplate architecture native to Next.js App Router.
  - No external CAPTCHA dependencies (e.g., Google reCAPTCHA) that inject heavy third-party scripts and trigger privacy consent issues under NDPR.
  - Strong defense against email injection and script injection.
- **Cons:**
  - In-memory rate limiting requires distributed state (e.g., Upstash Redis) if scaled to multiple serverless regions; however, a localized Edge/IP cache is sufficient for Phase 1 corporate traffic.

### Option 2: Traditional Next.js API Routes (`/api/contact`) with Google reCAPTCHA v3
- **Description:** Submitting forms via `fetch('/api/contact')` with Google reCAPTCHA score verification.
- **Pros:**
  - Well-understood legacy pattern.
- **Cons:**
  - Google reCAPTCHA injects third-party cookies and tracking scripts, directly conflicting with `FR-11` and NDPR privacy guidelines.
  - Requires maintaining separate API route endpoints rather than type-safe Server Actions.
  - Additional operational complexity and Google Cloud console setup.

---

## 4. Proposed Decision
Adopt **Option 1: React Hook Form + Zod (Client) + Next.js Server Actions with Honeypot & Rate Limiting (Server)**.

### Implementation Architecture:

1. **Shared Zod Validation Schemas (`src/lib/validations/enquiry.ts`):**
   ```typescript
   import { z } from 'zod';

   export const ContactSchema = z.object({
     fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
     email: z.string().trim().email('Please enter a valid email address').max(100),
     phone: z.string().trim().max(20).optional(),
     subject: z.string().trim().max(100).optional(),
     message: z.string().trim().min(15, 'Message must be at least 15 characters').max(2000),
     hp_field: z.string().max(0, 'Spam detected'), // Honeypot must remain completely empty
   });

   export const QuoteSchema = z.object({
     fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
     company: z.string().trim().max(100).optional(),
     email: z.string().trim().email('Please enter a valid email address').max(100),
     phone: z.string().trim().min(7, 'Please provide a contact phone number').max(25),
     service: z.enum([
       'web-development',
       'custom-software',
       'ai-automation',
       'data-science-analytics',
       'brand-digital-media',
     ]),
     budgetRange: z.string().min(1, 'Please select a budget range'),
     timeline: z.string().min(1, 'Please select a timeline'),
     projectDescription: z.string().trim().min(20, 'Please describe your project in at least 20 characters').max(3000),
     hp_field: z.string().max(0, 'Spam detected'),
   });
   ```

2. **Honeypot Masking (`src/components/forms/Honeypot.tsx`):**
   The honeypot input is hidden using CSS (`position: absolute; left: -9999px; opacity: 0; pointer-events: none;`) and excluded from keyboard tab order (`tabIndex={-1}`) with `autoComplete="off"`.

3. **Rate Limiting Guard:**
   Enforce a maximum of 5 submissions per IP address per hour on Server Actions using a sliding-window in-memory or Edge key-value store.

4. **Email Header Sanitization:**
   Strip carriage returns (`\r`) and newlines (`\n`) from submitted name and email strings before injecting them into email notification headers to prevent mail-relay abuse.

---

## 5. Consequences & Trade-offs
- **Positive:**
  - Zero friction for legitimate users (no CAPTCHA puzzles).
  - 100% compliant with NDPR privacy requirements (no third-party tracking scripts loaded).
  - Type-safe end-to-end integration with Next.js Server Actions.
- **Negative / Risks:**
  - Highly determined human spammers can bypass honeypots; however, rate limiting and backend string length constraints mitigate flood attacks.

---

## 6. References
- React Hook Form: [Documentation and Performance Benchmarks](https://react-hook-form.com/)
- Zod: [TypeScript-First Schema Declaration](https://zod.dev/)
- Next.js Documentation: [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- OWASP: [Input Validation and Email Header Injection Prevention](https://owasp.org/www-community/attacks/Email_Injection)
- Research Date: October 2026.
