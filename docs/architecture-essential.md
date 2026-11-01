# Architecture Essentials: Invariants and Engineering Governance Rules
**Project:** 3A Technology Solutions Corporate Web Platform & 3A Techvolution Academy  
**Role:** Software Architecture Governance Specialist  
**Status:** Authoritative Governance Baseline  
**Governing Documents:** [`PRD.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/prd.md) (v2.0), [`AGENTS.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/AGENTS.md), [`docs/architecture.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/architecture.md), [`docs/decisions/`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions)  

---

## 1. Overview & Governance Model

This document establishes the essential, non-negotiable architectural invariants and code review rules governing the **3A Technology Solutions** codebase. 

### Rule Classification:
- **MANDATORY:** Non-negotiable architectural invariants. Violations block pull requests, commits, and releases. Any departure requires explicit written human architectural sign-off.
- **ADVISORY:** Best practices and recommended conventions. May be departed from only with documented technical justification in the pull request description.

### Enforcement Feasibility Notice:
Verification methods indicate whether a rule is verified via static analysis (`tsc`, ESLint), automated testing (Vitest, Playwright), CI/CD workflows, or manual code review. In accordance with governance principles, rules that *can* be automated are flagged as `Feasible for Automation`, but are not claimed as currently active until the tool configurations are committed.

---

## 2. Invariants Matrix Summary

| Rule ID | Invariant Category | Rule Name | Status | Primary Enforcement |
| :--- | :--- | :--- | :--- | :--- |
| **ARCH-01** | Scope & Runtime | Zero Database & Zero Runtime CMS Invariant | **MANDATORY** | Static Analysis / Code Review |
| **ARCH-02** | Scope & Identity | Zero In-House LMS & User Accounts Invariant | **MANDATORY** | Code Review / Dependency Check |
| **ARCH-03** | Scope & Payments | Zero Direct Payment Gateway Invariant | **MANDATORY** | Dependency Check / CI |
| **ARCH-04** | Security & Secrets | Zero Secret Leakage & Credential Isolation | **MANDATORY** | ESLint / Git Hook / CI Scan |
| **ARCH-05** | Accessibility & Brand | Brand Palette & Contrast Safety Invariant | **MANDATORY** | ESLint / Code Review |
| **ARCH-06** | Configuration | Centralized Communication Constants Invariant | **MANDATORY** | ESLint / Code Review |
| **ARCH-07** | Module Boundaries | Unidirectional Content Layer Dependency | **MANDATORY** | ESLint `no-restricted-imports` |
| **ARCH-08** | Component Architecture| React Server Component (RSC) Default Boundary | **MANDATORY** | Code Review / Next.js Compiler |
| **ARCH-09** | Form Security | Honeypot, Rate Limiting & Input Sanitization | **MANDATORY** | Vitest / Server Action Guard |
| **ARCH-10** | Error Handling | Graceful Degradation & Non-Destructive Form State | **MANDATORY** | Playwright E2E / Vitest |
| **ARCH-11** | Privacy & Telemetry | Zero Unauthorized Third-Party Tracking Pixels | **MANDATORY** | Code Review / Network Audit |
| **ARCH-12** | Code Structure | Prohibited Circular Dependencies | **MANDATORY** | Madge / Dependency Cruiser |
| **ARCH-13** | AI Boundaries | Zero Autonomous Frontend Conversational Agents | **MANDATORY** | Code Review |
| **ARCH-14** | Code Quality | Zero TypeScript `any` and Strict Typing | **MANDATORY** | `tsc --noEmit` / CI |
| **ARCH-15** | Performance | WebP/AVIF Image Optimization with Dimensions | **ADVISORY** | Lighthouse / ESLint |

---

## 3. Detailed Architecture Invariants & Rules

### ARCH-01: Zero Database & Zero Runtime CMS Invariant
- **Status:** **MANDATORY**
- **Invariant:** The application must not establish connections to runtime databases (PostgreSQL, MySQL, MongoDB, SQLite, Redis) or runtime headless CMS engines (Sanity, Strapi, Contentful). Published content must reside exclusively in statically typed TypeScript data files (`src/data/*.ts`).
- **Rationale:** Preserves Phase 1 zero-cost hosting, eliminates database connection pool bottlenecks and SQL injection vulnerabilities, and ensures maximum static pre-rendering speed.
- **Affected Components:** Entire repository, `package.json`, `src/lib/`, `src/app/`.
- **Compliant Example:**
  ```typescript
  // src/lib/content.ts
  import { services } from '@/data/services';
  export function getAllServices() {
    return services;
  }
  ```
- **Violation Example:**
  ```typescript
  // VIOLATION: Introducing runtime database ORM
  import { PrismaClient } from '@prisma/client';
  const prisma = new PrismaClient();
  ```
- **Verification Method:** Package manifest audit (`package.json`) and automated dependency check. Feasible for automated CI grep.
- **Related Specs / ADRs:** `PRD.md` Section 4.2; `AGENTS.md` Section 1.2; [`ADR-003`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-003-static-content-data-layer.md).

---

### ARCH-02: Zero In-House LMS & User Accounts Invariant
- **Status:** **MANDATORY**
- **Invariant:** The application must not contain user authentication libraries, login forms, session cookies, student profile schemas, or course video delivery mechanisms. All course enrollment actions must link to external intake endpoints (Google Form or approved WhatsApp chat).
- **Rationale:** Eliminates identity management risks, database requirements, student credential theft vectors, and video streaming hosting costs.
- **Affected Components:** `src/app/academy/`, `src/components/`, `package.json`.
- **Compliant Example:**
  ```tsx
  // src/components/academy/EnrollButton.tsx
  <a
    href={siteConfig.academy.enrollmentFormUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
  >
    Enroll in Cohort
  </a>
  ```
- **Violation Example:**
  ```tsx
  // VIOLATION: Implementing user login or auth session
  import { signIn, useSession } from 'next-auth/react';
  ```
- **Verification Method:** Manual code review; automated dependency audit rejecting `next-auth`, `@supabase/auth-helpers`, `clerk`, or `lucia`.
- **Related Specs / ADRs:** `PRD.md` Section 4.2; `AGENTS.md` Section 1.2; `FR-04`.

---

### ARCH-03: Zero Direct Payment Gateway Invariant
- **Status:** **MANDATORY**
- **Invariant:** The application must not import, configure, or execute direct payment gateway SDKs (Paystack, Flutterwave, Stripe, PayPal). Invoicing for corporate clients is handled strictly off-platform.
- **Rationale:** Keeps the platform exempt from PCI-DSS compliance audits, financial transaction liabilities, and regulatory burdens in Phase 1.
- **Affected Components:** `src/app/`, `package.json`, `src/actions/`.
- **Compliant Example:**
  Submitting `/request-quote` delivers a project scope document to `contact@3atechnology.com.ng`; commercial billing is issued as a formal invoice PDF via corporate email.
- **Violation Example:**
  ```typescript
  // VIOLATION: Adding inline payment processor
  import PaystackPop from '@paystack/inline-js';
  ```
- **Verification Method:** Automated dependency check in CI rejecting payment SDKs; code review.
- **Related Specs / ADRs:** `PRD.md` Section 4.2; `AGENTS.md` Section 1.2.

---

### ARCH-04: Zero Secret Leakage & Credential Isolation
- **Status:** **MANDATORY**
- **Invariant:** Private credentials, API tokens (`RESEND_API_KEY`), and SMTP passwords must reside exclusively in `.env.local` and never be prefixed with `NEXT_PUBLIC_`. Private environment variables must never be referenced inside Client Components (`'use client'`).
- **Rationale:** Any variable prefixed with `NEXT_PUBLIC_` is inlined into public client JavaScript bundles, resulting in immediate API key compromise.
- **Affected Components:** `.env*`, `src/actions/`, `src/lib/email/`, all Client Components.
- **Compliant Example:**
  ```typescript
  // src/lib/email/resend.ts (Executed exclusively on server)
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  ```
- **Violation Example:**
  ```typescript
  // VIOLATION: Exposing private key to browser bundles
  const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
  ```
- **Verification Method:** ESLint rule banning `process.env.RESEND_*` in client components; automated git pre-commit hook scanning for secrets.
- **Related Specs / ADRs:** `AGENTS.md` Section 6; [`ADR-005`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-005-transactional-email-dispatch-service.md).

---

### ARCH-05: Brand Palette & Contrast Safety Invariant (Resolving AUD-01)
- **Status:** **MANDATORY**
- **Invariant:** All interface styling must strictly use the 5 locked brand color tokens (`#0B2B6B`, `#F7C800`, `#1F2937`, `#F4F6F8`, `#FFFFFF`). To comply with WCAG 2.1 AA (contrast ratio ≥ 4.5:1):
  1. Accent Yellow (`#F7C800`) elements must strictly pair with Dark Charcoal (`#1F2937`) or Deep Navy (`#0B2B6B`) text. **White text on Accent Yellow is strictly prohibited.**
  2. Accent Yellow text or iconography must **never** be rendered directly on Pure White (`#FFFFFF`) or Light Gray (`#F4F6F8`) surfaces.
- **Rationale:** Mathematical contrast of `#F7C800` on `#FFFFFF` is 1.35:1, which creates illegible text and violates accessibility mandates.
- **Affected Components:** `tailwind.config.ts`, `src/components/ui/Button.tsx`, all UI cards and badges.
- **Compliant Example:**
  ```tsx
  // Compliant button styling with > 8:1 contrast
  <button className="bg-brand-yellow text-brand-charcoal hover:bg-yellow-400 font-semibold px-6 py-3 rounded-md">
    Request a Quote
  </button>
  ```
- **Violation Example:**
  ```tsx
  // VIOLATION: Fails WCAG AA contrast (1.35:1)
  <button className="bg-[#F7C800] text-white">
    Request a Quote
  </button>
  ```
- **Verification Method:** Automated Playwright axe-core accessibility audit; code review inspection of color pairing classes.
- **Related Specs / ADRs:** [`docs/specification-audit.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/specification-audit.md) Finding `AUD-01`; [`ADR-002`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-002-styling-and-design-token-architecture.md).

---

### ARCH-06: Centralized Communication Constants Invariant
- **Status:** **MANDATORY**
- **Invariant:** Contact numbers, WhatsApp links, official email addresses, social URLs, and brand constants must reside in a single configuration file (`src/config/site.ts`). Telephone numbers, email addresses, and external URLs must never be hardcoded inside individual page components.
- **Rationale:** Prevents scattered contact data, broken phone numbers upon updates, and ensures auditability.
- **Affected Components:** `src/config/site.ts`, all pages and layout components.
- **Compliant Example:**
  ```tsx
  import { siteConfig } from '@/config/site';
  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
  ```
- **Violation Example:**
  ```tsx
  // VIOLATION: Hardcoded telephone number
  <a href="tel:+2348012345678">+234 80 1234 5678</a>
  ```
- **Verification Method:** ESLint regex check searching for literal `tel:`, `mailto:`, and `wa.me/` outside `src/config/site.ts`.
- **Related Specs / ADRs:** `AGENTS.md` Section 3.5; `PRD.md` Section 7 (`FR-07`).

---

### ARCH-07: Unidirectional Content Layer Dependency
- **Status:** **MANDATORY**
- **Invariant:** Presentation components and pages must query content exclusively through the abstraction helper functions in `src/lib/content.ts`. Presentation components must not import raw data arrays directly from `src/data/*.ts`.
- **Rationale:** Ensures clean separation of concerns and enables swapping the static file store for a headless CMS in Phase 2 with zero changes to presentation components.
- **Affected Components:** `src/app/`, `src/components/`, `src/lib/content.ts`.
- **Compliant Example:**
  ```tsx
  // src/app/services/page.tsx
  import { getAllServices } from '@/lib/content';
  const services = getAllServices();
  ```
- **Violation Example:**
  ```tsx
  // VIOLATION: Direct coupling to static data file
  import { services } from '@/data/services';
  ```
- **Verification Method:** ESLint `no-restricted-imports` blocking `@/data/*` inside `src/app/` and `src/components/`. Feasible for automated CI enforcement.
- **Related Specs / ADRs:** [`ADR-003`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-003-static-content-data-layer.md); `docs/architecture.md` Section 4.3.

---

### ARCH-08: React Server Component (RSC) Default Boundary
- **Status:** **MANDATORY**
- **Invariant:** All route layouts, static marketing views, and service/project pages must be implemented as React Server Components (RSC). The `'use client'` directive is restricted exclusively to interactive leaf nodes (forms, mobile drawer, interactive filter tabs).
- **Rationale:** Eliminates client-side JavaScript execution overhead for content, yielding optimal mobile performance across bandwidth-constrained networks.
- **Affected Components:** All files under `src/app/` and `src/components/`.
- **Compliant Example:**
  `src/app/services/[slug]/page.tsx` is an async Server Component that fetches data and passes plain props down to an isolated client quote button.
- **Violation Example:**
  Adding `'use client'` at the top of `src/app/layout.tsx` or `src/app/services/page.tsx`.
- **Verification Method:** Code review and Next.js bundle analyzer inspection.
- **Related Specs / ADRs:** `AGENTS.md` Section 3.3; [`ADR-001`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-001-frontend-framework-and-rendering-strategy.md).

---

### ARCH-09: Honeypot, Rate Limiting & Input Sanitization
- **Status:** **MANDATORY**
- **Invariant:** All public form submissions (`/contact` and `/request-quote`) must execute through Server Actions that enforce three mandatory defenses:
  1. **Honeypot Evaluation:** If `hp_field` is populated, the action must return `{ success: true }` silently without dispatching an email.
  2. **IP Rate Limiting:** Enforce a maximum threshold of 5 submissions per IP address per rolling hour.
  3. **Header Sanitization:** Strip all carriage return (`\r`) and newline (`\n`) characters from string inputs before email header injection.
- **Rationale:** Prevents automated spam floods, mail-relay abuse, and resource exhaustion without annoying users with CAPTCHAs.
- **Affected Components:** `src/actions/enquiry.ts`, `src/components/forms/`.
- **Compliant Example:**
  ```typescript
  // src/actions/enquiry.ts
  if (data.hp_field && data.hp_field.length > 0) {
    return { success: true, message: "Enquiry received." }; // Silent drop
  }
  ```
- **Violation Example:**
  Submitting form data directly to a mailer service without inspecting `hp_field` or verifying rate limits.
- **Verification Method:** Automated unit tests with Vitest simulating populated honeypots and flood attacks.
- **Related Specs / ADRs:** `AGENTS.md` Section 6; [`ADR-004`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-004-form-intake-server-actions-and-anti-spam.md).

---

### ARCH-10: Graceful Degradation & Non-Destructive Form State
- **Status:** **MANDATORY**
- **Invariant:** If a form submission fails due to a network glitch, email provider timeout, or validation error, the UI must:
  1. Display a prominent, accessible error alert (`role="alert"`).
  2. **Preserve all previously entered user inputs.** Never clear form fields upon failure.
  3. Provide a fallback communication action (e.g., direct WhatsApp link).
- **Rationale:** Form wiping upon submission failure causes severe user frustration and leads to high drop-off rates for high-value enterprise leads.
- **Affected Components:** `src/components/forms/ContactForm.tsx`, `QuoteForm.tsx`.
- **Compliant Example:**
  React Hook Form state is maintained; error toast or inline alert renders while inputs retain client-typed values.
- **Violation Example:**
  Calling `form.reset()` inside the `.catch()` block or before submission confirmation.
- **Verification Method:** Playwright end-to-end integration test simulating an email API timeout.
- **Related Specs / ADRs:** `PRD.md` Section 7 (`FR-05`, `FR-10`); [`ADR-004`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-004-form-intake-server-actions-and-anti-spam.md).

---

### ARCH-11: Zero Unauthorized Third-Party Tracking Pixels
- **Status:** **MANDATORY**
- **Invariant:** The application must not load third-party behavioral tracking scripts (Meta Pixel, Google Tag Manager, TikTok Pixel, Hotjar) without explicit stakeholder authorization and compliant consent mechanisms under the Nigeria Data Protection Act (NDPA 2023).
- **Rationale:** Prevents unlawful personal data tracking, eliminates mobile script bloat, and preserves user privacy.
- **Affected Components:** `src/app/layout.tsx`, `next.config.mjs`.
- **Compliant Example:**
  Conversion buttons utilize declarative HTML data attributes (`data-analytics-event="quote_request"`) without firing external network tracking calls.
- **Violation Example:**
  Injecting `<Script src="https://connect.facebook.net/en_US/fbevents.js" />` into the root layout.
- **Verification Method:** Code review and browser network trace inspection during automated testing.
- **Related Specs / ADRs:** `AGENTS.md` Section 6; `PRD.md` Section 7 (`FR-11`).

---

### ARCH-12: Prohibited Circular Dependencies
- **Status:** **MANDATORY**
- **Invariant:** Circular module dependencies (e.g., Module A imports Module B, which imports Module A) are strictly prohibited across all layers of the application.
- **Rationale:** Circular dependencies cause runtime `undefined` evaluation bugs, memory leaks, and prevent clean tree-shaking in Next.js builds.
- **Affected Components:** All TypeScript modules in `src/`.
- **Compliant Structure:**
  `src/types/` $\rightarrow$ `src/config/` $\rightarrow$ `src/data/` $\rightarrow$ `src/lib/` $\rightarrow$ `src/actions/` $\rightarrow$ `src/components/` $\rightarrow$ `src/app/`.
- **Violation Example:**
  `src/lib/content.ts` importing a component from `src/components/ui/Card.tsx`, while `Card.tsx` imports from `src/lib/content.ts`.
- **Verification Method:** Automated static analysis using `madge --circular src/` in CI. Feasible for automated CI enforcement.
- **Related Specs / ADRs:** `AGENTS.md` Section 3.2; `docs/architecture.md` Section 4.

---

### ARCH-13: Zero Autonomous Frontend Conversational Agents
- **Status:** **MANDATORY**
- **Invariant:** The application must not mount autonomous conversational LLM widgets, chat popups, or floating AI assistants on the frontend.
- **Rationale:** Uncontrolled frontend AI chatbots create hallucinations, security prompt injection vectors, high operational inference costs, and detract from clear commercial pathways.
- **Affected Components:** All UI components and layout templates.
- **Compliant Example:**
  3A's AI capabilities are demonstrated through transparent, static case studies (e.g., *MarketMind AI*, *Medicinal Plant Recognition System*), and visitors are invited to book an AI consultation via `/request-quote`.
- **Violation Example:**
  Embedding a third-party chat iframe (e.g., Chatbase, Tidio) or custom streaming OpenAI chat widget on the homepage.
- **Verification Method:** Code review; absence of chat widget DOM elements in Playwright smoke tests.
- **Related Specs / ADRs:** `PRD.md` Section 4.2; `AGENTS.md` Section 1.2.

---

### ARCH-14: Zero TypeScript `any` and Strict Typing
- **Status:** **MANDATORY**
- **Invariant:** TypeScript `strict` mode must remain permanently enabled. Use of `any`, `@ts-ignore`, or loose type casting (`as unknown as T`) is strictly forbidden.
- **Rationale:** Guarantees runtime stability, prevents `TypeError: Cannot read property of undefined`, and maintains clean refactoring boundaries.
- **Affected Components:** `tsconfig.json`, all `.ts` and `.tsx` files.
- **Compliant Example:**
  ```typescript
  export interface ServiceCardProps {
    service: Service;
    variant?: 'compact' | 'detailed';
  }
  ```
- **Violation Example:**
  ```typescript
  // VIOLATION: Using any to bypass compiler checks
  export function renderCard(data: any) { ... }
  ```
- **Verification Method:** `npx tsc --noEmit` and ESLint rule `@typescript-eslint/no-explicit-any: error`. Automated in CI.
- **Related Specs / ADRs:** `AGENTS.md` Section 3.3, 5.2.

---

### ARCH-15: WebP/AVIF Image Optimization with Explicit Dimensions
- **Status:** **ADVISORY**
- **Invariant:** All non-vector photography, case study screenshots, and banner images should be rendered using the Next.js `<Image />` component with explicit `width`, `height`, and responsive `sizes` attributes. Hero images above the fold should declare `priority={true}`.
- **Rationale:** Prevents Cumulative Layout Shift (CLS < 0.05), serves compressed WebP/AVIF formats, and reduces mobile bandwidth consumption.
- **Affected Components:** All page and card components rendering photography.
- **Compliant Example:**
  ```tsx
  <Image
    src="/images/projects/marketmind-hero.webp"
    alt="MarketMind AI Analytics Dashboard Screenshot"
    width={800}
    height={450}
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  ```
- **Violation Example:**
  ```tsx
  // VIOLATION: Unoptimized HTML image tag with missing dimensions
  <img src="/images/projects/marketmind.png" />
  ```
- **Verification Method:** ESLint Next.js plugin (`@next/next/no-html-link-for-pages`, `@next/next/no-img-element`); Lighthouse CLS audit.
- **Related Specs / ADRs:** `PRD.md` Section 11; [`ADR-001`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-001-frontend-framework-and-rendering-strategy.md).

---

## 4. Code Review Checklist for Engineers and AI Agents

Prior to merging any pull request or approving code, reviewers must verify:
- [ ] **ARCH-01 to ARCH-03:** Are databases, in-house LMS accounts, and payment gateways strictly absent?
- [ ] **ARCH-04:** Are all private secrets kept out of client components and free of `NEXT_PUBLIC_` prefixes?
- [ ] **ARCH-05:** Does any text on Accent Yellow buttons use Dark Charcoal (`#1F2937`) or Deep Navy (`#0B2B6B`) text (never white)?
- [ ] **ARCH-06:** Are all telephone numbers, emails, and WhatsApp URLs imported from `@/config/site`?
- [ ] **ARCH-07:** Do presentation components query `@/lib/content` rather than raw `@/data/*` files?
- [ ] **ARCH-08:** Is `'use client'` used strictly on interactive leaf components rather than whole pages?
- [ ] **ARCH-09 & ARCH-10:** Do Server Actions validate honeypots, rate limits, and preserve user input on failure?
- [ ] **ARCH-14:** Does `npx tsc --noEmit` complete with zero errors and zero `any` usage?
