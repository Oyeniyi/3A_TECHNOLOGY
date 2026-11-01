# Requirements Traceability Matrix & Verification Governance
**Project:** 3A Technology Solutions Corporate Web Platform & 3A Techvolution Academy  
**Role:** Requirements Traceability & Quality Assurance Engineer  
**Status:** Authoritative Traceability Baseline  
**Version:** 1.0  
**Date:** November 2026  
**Governing Documents:** [`PRD.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/prd.md) (v2.0), [`AGENTS.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/AGENTS.md), [`docs/architecture.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/architecture.md), [`docs/architecture-essential.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/architecture-essential.md), [`docs/tasks.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/tasks.md), [`docs/implementation-plan.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/implementation-plan.md), [`docs/testing-strategy.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/testing-strategy.md), [`docs/definition-of-done.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/definition-of-done.md), [`docs/design.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/design.md), [`docs/api-specification.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/api-specification.md), [`docs/security-specification.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/security-specification.md), [`docs/specification-audit.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/specification-audit.md), [`docs/research-and-decisions.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/research-and-decisions.md)

---

## 1. Executive Summary & Traceability Governance

This document establishes the end-to-end, bidirectional **Requirements Traceability Matrix (RTM)** for the **3A Technology Solutions** corporate web platform and **3A TECHVOLUTION ACADEMY**.

### 1.1 Traceability & Quality Principles
1. **Zero Fabrication Policy (`AGENTS.md` §5.1 & `definition-of-done.md` §1.1):** No requirement is marked `Implemented` or `Verified` without existing, inspectable source code and terminal test execution logs. At the current project state, all requirements have complete architectural and design coverage and are mapped to implementation tasks, but application code implementation has not yet commenced.
2. **Status Taxonomy:**
   - **`Designed`:** Requirement is fully elaborated in architectural, design, or API specifications.
   - **`Planned`:** Implementation task and test specification exist in `docs/tasks.md` and `docs/testing-strategy.md`.
   - **`Blocked`:** Implementation is gated by an external asset or formal stakeholder sign-off (e.g., `AUD-02`/`DEC-04`).
   - **`Deferred`:** Scope item is explicitly excluded from Phase 1 by approved business decision (`PRD.md` §4.2).
   - **`Implemented`:** Source code is fully authored and checked into the repository (Requires verifiable file diff).
   - **`Verified`:** Concrete verification commands executed with clean exit code `0` (Requires terminal log evidence).
   - **`Unverified`:** Test suite planned or written, but not yet executed against working code.
3. **Comprehensive Traceability Scope:** Covers Functional Requirements (`FR-01` to `FR-11`), Non-Functional Quality Attributes (Performance, Accessibility, Security, Brand Integrity, Privacy), Business Invariants (`ARCH-01` to `ARCH-15`), and Explicitly Deferred Capabilities.

---

## 2. Master Requirements Traceability Matrix (RTM)

### 2.1 Functional Requirements (FR-01 to FR-11)

| Req ID | Requirement Summary | PRD Location | Architecture Component | Relevant Specification | Task IDs | Test / Evaluation IDs | Implementation Status | Verification Status | Evidence / Reference | Outstanding Gaps & Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **FR-01** | Global Responsive Navigation & Mobile Drawer | `PRD.md` §7 (AC-01.1–01.4) | `src/components/navigation/` (`Header.tsx`, `MobileDrawer.tsx`) | `docs/design.md` §5.1; `docs/architecture.md` §4.2 | `TASK-009`, `TASK-010` | `L3-Drawer-01`, `L5-Nav-01`, `L6-Axe-01` | **Planned** | **Unverified** | [`ADR-002`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-002-styling-and-design-token-architecture.md); `docs/tasks.md#task-010` | Needs Radix Dialog spike (`SPK-04`) to verify focus trapping on mobile Safari. |
| **FR-02** | Commercial Services Directory & Dynamic Slugs | `PRD.md` §7 (AC-02.1–02.3) | `src/app/services/`, `src/lib/content.ts` | `docs/design.md` §7.2; `docs/api-specification.md` §3 | `TASK-014`, `TASK-015` | `L3-ServiceCard-01`, `L5-Services-01` | **Planned** | **Unverified** | `docs/data-architecture.md` §4.1; `docs/tasks.md#task-015` | Pre-rendered via `generateStaticParams()`. Pre-selected quote query param (`?service=[slug]`). |
| **FR-03** | Portfolio Showcase & Case Study Engine | `PRD.md` §7 (AC-03.1–03.4) | `src/app/projects/`, `src/data/projects.ts` | `docs/design.md` §7.3; `docs/data-architecture.md` §4.2 | `TASK-016`, `TASK-017` | `L3-FilterBar-01`, `L5-Projects-01` | **Planned** | **Unverified** | `docs/tasks.md#task-016`; `docs/specification-audit.md` (AUD-04) | Initial case studies require 3A leadership sign-off on public text/images (`AUD-09`). |
| **FR-04** | 3A Techvolution Academy Gateway | `PRD.md` §7 (AC-04.1–04.4) | `src/app/academy/`, `src/data/programmes.ts` | `docs/design.md` §7.4; `docs/architecture-essential.md` (ARCH-02) | `TASK-018`, `TASK-019` | `L3-ProgrammeCard-01`, `L5-Academy-01` | **Planned** | **Unverified** | [`ADR-003`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-003-static-content-data-layer.md); `docs/tasks.md#task-019` | Primary intake link requires confirmation of Google Form URL vs WhatsApp (`AUD-05`). |
| **FR-05** | General Contact Enquiry Form | `PRD.md` §7 (AC-05.1–05.4) | `src/components/forms/ContactForm.tsx`, `src/actions/enquiry.ts` | `docs/design.md` §6; `docs/api-specification.md` §2, §4 | `TASK-022`, `TASK-026` | `L2-EnquirySchema-01`, `L3-ContactForm-01`, `L4-Action-01` | **Planned** | **Unverified** | [`ADR-004`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-004-form-intake-server-actions-and-anti-spam.md); `docs/tasks.md#task-022` | Zod schema validation; honeypot trap (`hp_field`); rate limiting; non-destructive form state. |
| **FR-06** | Commercial Project Quote Request Intake | `PRD.md` §7 (AC-06.1–06.4) | `src/components/forms/QuoteForm.tsx`, `src/actions/quote.ts` | `docs/design.md` §6, §7.6; `docs/api-specification.md` §2, §4 | `TASK-023`, `TASK-026` | `L2-QuoteSchema-01`, `L3-QuoteForm-01`, `L4-Action-02`, `L5-QuoteFlow-01` | **Planned** | **Unverified** | `docs/tasks.md#task-023`; `docs/specification-audit.md` (AUD-03) | Budget & timeline dropdowns codified in audit proposal matrix pending final sign-off (`AUD-03`). |
| **FR-07** | Centralized WhatsApp & Direct Contact Gateway | `PRD.md` §7 (AC-07.1–07.3) | `src/config/site.ts`, `src/lib/whatsapp.ts` | `docs/design.md` §5.3; `docs/architecture-essential.md` (ARCH-06) | `TASK-005`, `TASK-027` | `L2-WhatsAppUrl-01`, `L3-WhatsAppButton-01` | **Planned** | **Unverified** | `docs/tasks.md#task-005`, `docs/tasks.md#task-027` | Requires stakeholder verification of official Nigerian WhatsApp phone number (`DEC-03`). |
| **FR-08** | Statically Typed Content Architecture | `PRD.md` §7 (AC-08.1–08.3) | `src/types/`, `src/data/`, `src/lib/content.ts` | `docs/data-architecture.md` §3; `docs/architecture-essential.md` (ARCH-01, ARCH-07) | `TASK-006`, `TASK-007`, `TASK-008` | `L1-Typecheck-01`, `L2-ContentData-01`, `L2-ContentQueries-01` | **Planned** | **Unverified** | [`ADR-003`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-003-static-content-data-layer.md); `docs/tasks.md#task-007` | 100% strict TypeScript types. Zero runtime database or CMS dependencies (`ARCH-01`). |
| **FR-09** | Search Engine Optimization & Social Sharing Metadata | `PRD.md` §7 (AC-09.1–09.4) | `src/app/sitemap.ts`, `src/app/robots.ts`, `layout.tsx` | `docs/architecture.md` §4.1; `docs/api-specification.md` §6 | `TASK-012`, `TASK-029` | `L5-Sitemap-01`, `L5-Robots-01`, `L7-Lighthouse-SEO` | **Planned** | **Unverified** | `docs/tasks.md#task-029`; `docs/specification-audit.md` (AUD-07) | Default Open Graph preview image asset to be authored (`AUD-07`). |
| **FR-10** | Resilient Error Handling & Empty States | `PRD.md` §7 (AC-10.1–10.3) | `src/app/not-found.tsx`, `error.tsx`, `EmptyState.tsx` | `docs/design.md` §7.7; `docs/architecture-essential.md` (ARCH-10) | `TASK-028` | `L3-EmptyState-01`, `L5-Error404-01`, `L5-Error500-01` | **Planned** | **Unverified** | `docs/tasks.md#task-028`; `docs/specification-audit.md` (AUD-10) | Custom branded 404 recovery page; Next.js client error boundary with reset. |
| **FR-11** | Privacy-First Analytics Readiness | `PRD.md` §7 (AC-11.1–11.2) | Declarative DOM tags, `src/app/api/health/` | `docs/architecture.md` §4.1; `docs/architecture-essential.md` (ARCH-11) | `TASK-021`, `TASK-032` | `L8-NoCookies-01`, `L5-TelemetryTags-01` | **Planned** | **Unverified** | `docs/tasks.md#task-021`; `docs/specification-audit.md` (AUD-11) | Declarative `data-analytics-event` attributes; zero third-party tracking cookies under NDPR. |

---

### 2.2 Non-Functional & Quality Attribute Requirements

| Req ID | Requirement Summary | PRD Location | Architecture Component | Relevant Specification | Task IDs | Test / Evaluation IDs | Implementation Status | Verification Status | Evidence / Reference | Outstanding Gaps & Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **NFR-PERF-01** | Mobile Core Web Vitals (LCP < 2.2s, CLS < 0.05, Score $\ge$ 90) | `PRD.md` §2.2, §9.2 | `next/image`, `next/font`, Server Components | `docs/architecture.md` §2; `docs/testing-strategy.md` §3.7 | `TASK-001`, `TASK-012`, `TASK-031` | `L7-CWV-01`, `L7-Lighthouse-Perf` | **Planned** | **Unverified** | `docs/tasks.md#task-031`; `docs/definition-of-done.md` (DOD-R3.2) | Measured via `@lhci/cli` against production build on mobile emulation. |
| **NFR-A11Y-01** | WCAG 2.1 Level AA Accessibility Conformance | `PRD.md` §9.3 | Global Theme, Radix Dialog, Focus Rings | `docs/design.md` §4.3; `docs/architecture-essential.md` (ARCH-05) | `TASK-002`, `TASK-010`, `TASK-031` | `L6-AxeAudit-01`, `L6-ContrastScan-01` | **Planned** | **Unverified** | [`ADR-002`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-002-styling-and-design-token-architecture.md); `docs/tasks.md#task-031` | Zero critical/serious axe-core violations; 4.5:1 text contrast minimum. |
| **NFR-BRAND-01** | Locked 5-Color Brand Palette System | `PRD.md` §8.1 | `tailwind.config.ts`, `globals.css` | `docs/design.md` §4.1; `docs/architecture-essential.md` (ARCH-05) | `TASK-002` | `L2-TokenValidation-01`, `L6-ContrastScan-01` | **Planned** | **Unverified** | `docs/specification-audit.md` (AUD-01); `docs/tasks.md#task-002` | Yellow (`#F7C800`) strictly paired with Charcoal (`#1F2937`); white on yellow forbidden (`AUD-01`). |
| **NFR-BRAND-02** | Modern Geometric Sans Typography Scale | `PRD.md` §8.2 | `next/font/google` (Plus Jakarta Sans & Inter) | `docs/design.md` §4.2; `docs/specification-audit.md` (AUD-06) | `TASK-002`, `TASK-012` | `L1-FontLoading-01`, `L7-CLS-01` | **Planned** | **Unverified** | `docs/tasks.md#task-012`; `docs/specification-audit.md` (AUD-06) | Self-hosted via Next.js to eliminate third-party DNS hops and layout shifts. |
| **NFR-BRAND-03** | Official Logo Integrity & Clear Space | `PRD.md` §8.3 | `public/images/brand/` (`3a-logo.svg`) | `docs/design.md` §4.4; `docs/specification-audit.md` (AUD-02) | `TASK-004` | `L3-LogoRender-01` | **Blocked** | **Unverified** | `docs/research-and-decisions.md` (DEC-04); `docs/tasks.md#task-004` | **Gated by DEC-04:** Stakeholder must provide transparent SVG vector mark or approve vectorization. |
| **NFR-BRAND-04** | "Premium Minimalism" Aesthetic & Authentic Context | `PRD.md` §8.4 | Clean grids, 1px borders (`#E5E7EB`), authentic imagery | `docs/design.md` §1.1, §4.5 | `TASK-013`, `TASK-014`, `TASK-016` | `L5-VisualRegression-01` | **Planned** | **Unverified** | `docs/design.md` §1.1; `docs/tasks.md#task-013` | No sci-fi holograms, neon cyberpunk styles, or non-contextual Western stock photos. |

---

### 2.3 Security, Privacy & Anti-Abuse Requirements

| Req ID | Requirement Summary | PRD Location | Architecture Component | Relevant Specification | Task IDs | Test / Evaluation IDs | Implementation Status | Verification Status | Evidence / Reference | Outstanding Gaps & Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **NFR-SEC-01** | Input Sanitization & Cross-Site Scripting (XSS) Defense | `PRD.md` §9.4 | `src/lib/security/sanitizer.ts`, Zod Schemas | `docs/security-specification.md` §3; `docs/architecture-essential.md` (ARCH-09) | `TASK-006`, `TASK-024` | `L2-Sanitizer-01`, `L4-XSSPayload-01` | **Planned** | **Unverified** | `docs/security-specification.md` §3; `docs/tasks.md#task-024` | All user text stripped of script tags and malicious control characters before handling. |
| **NFR-SEC-02** | Email Header Injection (CRLF) Prevention | `PRD.md` §9.4 | `src/lib/security/sanitizer.ts` | `docs/security-specification.md` §3; `docs/testing-strategy.md` §3.2 | `TASK-024` | `L2-CRLFStrip-01` | **Planned** | **Unverified** | `docs/security-specification.md` §3; `docs/tasks.md#task-024` | Strips `\r` and `\n` characters from email header fields (`name`, `email`, `subject`). |
| **NFR-SEC-03** | IP-Based Sliding-Window Rate Limiting (5 req/hr/IP) | `PRD.md` §9.4 | `src/lib/security/rate-limiter.ts` | `docs/security-specification.md` §4; `docs/architecture-essential.md` (ARCH-09) | `TASK-024` | `L2-RateLimiter-01`, `L4-RateLimit429-01` | **Planned** | **Unverified** | `docs/security-specification.md` §4; `docs/tasks.md#task-024` | In-memory sliding-window limiter; returns HTTP 429 when threshold exceeded. |
| **NFR-SEC-04** | Hidden Honeypot Anti-Spam Field (`hp_field`) | `PRD.md` §9.4 | `src/components/forms/Honeypot.tsx`, `src/lib/security/honeypot.ts` | `docs/security-specification.md` §3; `docs/architecture-essential.md` (ARCH-09) | `TASK-024` | `L2-HoneypotDrop-01` | **Planned** | **Unverified** | [`ADR-004`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-004-form-intake-server-actions-and-anti-spam.md); `docs/tasks.md#task-024` | Silently drops submissions with populated honeypot without triggering outbound emails. |
| **NFR-SEC-05** | Zero Secret Leakage & Credential Isolation | `PRD.md` §9.4 | Server Action Environment Boundaries, `.env.local` | `docs/security-specification.md` §6; `docs/architecture-essential.md` (ARCH-04) | `TASK-025`, `TASK-033` | `L8-Gitleaks-01`, `L1-ClientEnvCheck-01` | **Planned** | **Unverified** | `docs/architecture-essential.md` (ARCH-04); `docs/definition-of-done.md` (DOD-R3.4) | `RESEND_API_KEY` and SMTP credentials isolated strictly to server runtime; zero `NEXT_PUBLIC_` secrets. |
| **NFR-SEC-06** | Production HTTP Security Headers (CSP, HSTS, DENY) | `PRD.md` §9.4 | `next.config.mjs` (`headers()`) | `docs/security-specification.md` §5; `docs/definition-of-done.md` (DOD-R3.5) | `TASK-032` | `L8-SecurityHeaders-01` | **Planned** | **Unverified** | `docs/security-specification.md` §5; `docs/tasks.md#task-032` | Enforces `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`. |
| **NFR-PRIV-01** | NDPR Compliance & Zero Third-Party Tracking Pixels | `PRD.md` §4.1, §7 (FR-11) | `src/app/privacy/page.tsx`, Clean Layout | `docs/security-specification.md` §7; `docs/architecture-essential.md` (ARCH-11) | `TASK-021`, `TASK-032` | `L8-ZeroCookies-01` | **Planned** | **Unverified** | `docs/specification-audit.md` (AUD-11); `docs/tasks.md#task-021` | No Meta Pixel, Google Analytics, or third-party cookies deployed; NDPR privacy rights articulated. |

---

### 2.4 Business Rules & Phase 1 Invariants

| Req ID | Invariant & Rule Summary | PRD Location | Architecture Component | Relevant Specification | Task IDs | Test / Evaluation IDs | Implementation Status | Verification Status | Evidence / Reference | Outstanding Gaps & Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BR-INV-01** | Zero Runtime Database & Zero Runtime CMS Invariant | `PRD.md` §4.2 | Entire Repository, `package.json`, `src/lib/` | `docs/architecture-essential.md` (ARCH-01); `docs/architecture.md` §1.2 | `TASK-001`, `TASK-007` | `L1-DepAudit-DB` | **Planned** | **Unverified** | [`ADR-003`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/decisions/ADR-003-static-content-data-layer.md); `docs/tasks.md#task-001` | Strict prohibition of PostgreSQL, MySQL, MongoDB, Sanity, Strapi in dependencies. |
| **BR-INV-02** | Zero In-House LMS & User Accounts Invariant | `PRD.md` §4.2 | `src/app/academy/`, `package.json` | `docs/architecture-essential.md` (ARCH-02); `docs/architecture.md` §1.2 | `TASK-018`, `TASK-019` | `L1-DepAudit-Auth` | **Planned** | **Unverified** | `docs/architecture-essential.md` (ARCH-02); `docs/tasks.md#task-018` | All student enrollment routed to external intake (Google Form / WhatsApp). No login tables. |
| **BR-INV-03** | Zero Direct Payment Gateways Invariant | `PRD.md` §4.2 | `package.json`, `src/app/` | `docs/architecture-essential.md` (ARCH-03); `docs/architecture.md` §1.2 | `TASK-001`, `TASK-023` | `L1-DepAudit-Pay` | **Planned** | **Unverified** | `docs/architecture-essential.md` (ARCH-03); `docs/tasks.md#task-001` | Commercial invoicing handled off-platform. Zero Paystack/Flutterwave/Stripe SDKs. |
| **BR-INV-04** | Zero Autonomous Conversational Frontend Chatbots | `PRD.md` §4.2 | Global Layout, `src/app/` | `docs/architecture-essential.md` (ARCH-13); `docs/architecture.md` §1.2 | `TASK-012`, `TASK-013` | `L5-ChatbotExclusion-01` | **Planned** | **Unverified** | `docs/architecture-essential.md` (ARCH-13); `docs/tasks.md#task-013` | Direct customer contact channeled through verified WhatsApp and structured web forms. |
| **BR-TAX-01** | Standardized 5 Commercial Service Taxonomies | `PRD.md` §5 | `src/data/services.ts`, `src/types/content.ts` | `docs/data-architecture.md` §4.1; `docs/specification-audit.md` (AUD-04) | `TASK-006`, `TASK-007` | `L2-TaxonomySync-01` | **Planned** | **Unverified** | `docs/specification-audit.md` (AUD-04); `docs/tasks.md#task-007` | Service slugs and portfolio tags aligned 1:1 (`web-development`, `custom-software`, etc.). |
| **BR-PATH-01**| Dual-Pathway Intent Routing (Commercial vs. Academy) | `PRD.md` §3.2 | Homepage Hero, Global Header CTAs | `docs/design.md` §2, §7.1 | `TASK-009`, `TASK-013` | `L5-DualPathway-01` | **Planned** | **Unverified** | `docs/design.md` §2; `docs/tasks.md#task-013` | Equal prominence for Commercial Solutions (`/services`, `/request-quote`) and Academy (`/academy`). |
| **BR-CONF-01**| Centralized Communication Channels Single Source | `PRD.md` §7 (AC-07.1) | `src/config/site.ts` | `docs/architecture-essential.md` (ARCH-06) | `TASK-005` | `L2-CentralConfig-01` | **Planned** | **Unverified** | `docs/architecture-essential.md` (ARCH-06); `docs/tasks.md#task-005` | Phone numbers, emails, WhatsApp links, and physical addresses must never be hardcoded. |

---

### 2.5 Explicitly Deferred Capabilities (Approved Dispositions)

| Deferred Item ID | Deferred Capability | PRD Authority | Approved Architectural Disposition | Re-Evaluation Trigger / Future Roadmap |
| :--- | :--- | :--- | :--- | :--- |
| **DEF-01** | In-House Learning Management System (LMS) | `PRD.md` §4.2 | External enrollment via Google Forms / WhatsApp. Video streaming and quizzes strictly out of scope. | Phase 2+ (Post 500 active cohort enrollments and dedicated LMS funding). |
| **DEF-02** | Direct Online Payment Gateway (Paystack/Stripe) | `PRD.md` §4.2 | Offline enterprise invoicing and manual tuition transfer. Keeps site exempt from PCI-DSS burdens. | Phase 2+ (When self-service automated course purchase is formally authorized). |
| **DEF-03** | Client Management Portal & Ticket System | `PRD.md` §4.2 | Structured commercial quote intake emailed to administrative team. No client accounts. | Phase 2+ (When ongoing SLA contract management requires authenticated ticketing). |
| **DEF-04** | Autonomous Conversational Web Chatbot | `PRD.md` §4.2 | Contextual WhatsApp deep links (`wa.me`) connect prospects directly with human 3A engineers. | Phase 2+ (When 3A's proprietary LLM assistant API is packaged for public chat). |
| **DEF-05** | Headless CMS or Relational Database Runtime | `PRD.md` §4.2 | Strongly typed static TypeScript data files (`src/data/*.ts`) queried via `src/lib/content.ts`. | Phase 2+ (When non-engineering marketing staff require a web-based editorial UI). |

---

## 3. Bidirectional Traceability Analysis & Coverage Gap Report

### 3.1 Requirements Without Design Coverage, Implementation Tasks, or Verification
- **Audit Finding:** **Zero Gaps.** Every requirement defined in `PRD.md` (v2.0) has:
  1. Detailed architectural and visual design specifications documented in `docs/architecture.md`, `docs/architecture-essential.md`, and `docs/design.md`.
  2. One or more dedicated engineering task IDs assigned in `docs/tasks.md` (`TASK-001` through `TASK-033`).
  3. Formally cataloged verification levels and test IDs defined in `docs/testing-strategy.md` (Levels L1 through L8).

### 3.2 Tasks Without Traceable Requirements or Engineering Justification
- **Audit Finding:** **Zero Orphan Tasks.** All 33 tasks in `docs/tasks.md` map directly to either:
  - Explicit PRD functional requirements (`FR-01` through `FR-11`).
  - Architectural quality attributes and mandatory invariants (`ARCH-01` through `ARCH-15`).
  - Audited remediation items (`AUD-01` through `AUD-11`) or approved architectural decisions (`ADR-001` through `ADR-007`).

### 3.3 Tests Without Traceable Requirements
- **Audit Finding:** **Zero Orphan Tests.** All 8 testing levels in `docs/testing-strategy.md` (static analysis, unit tests, component tests, server action integration tests, Playwright E2E journeys, axe-core a11y scans, Lighthouse performance audits, and Gitleaks security scans) directly trace to acceptance criteria in `PRD.md` §7, performance thresholds in `PRD.md` §2.2, or Definition of Done criteria in `docs/definition-of-done.md`.

### 3.4 Partially Implemented or Unverified Requirements
- **Audit Finding:** Because application source code has not yet been authored (greenfield codebase), **100% of active requirements are currently categorized as `Planned` and `Unverified`**.
- In strict adherence to `AGENTS.md` §5.1, no synthetic test executions, phantom commits, or fabricated verification logs are asserted.

### 3.5 Actionable Outstanding Gaps & Upstream Blockers Matrix

The following table summarizes all open findings and pending decisions that must be resolved as prerequisites for downstream stages:

| Item ID | Category | Governing Requirement | Description of Blocker / Dependency | Downstream Impact | Resolution Action Required | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AUD-01** | Defect Prevention | `NFR-BRAND-01`, `NFR-A11Y-01` | Accent Yellow (`#F7C800`) fails WCAG AA on white (1.35:1). | Blocks UI button styling if white text on yellow is used. | Codified in `TASK-002`: Yellow buttons strictly enforce Dark Charcoal text (`#1F2937`). | **Resolved in Spec (Pending Code)** |
| **AUD-02 / DEC-04** | Asset Blocker | `NFR-BRAND-03` | Standalone transparent SVG vector assets for 3A logo emblem and wordmark are absent in workspace. | Blocks high-fidelity header and footer implementation (`TASK-004`). | 3A stakeholders must supply `3a-logo.svg` or approve vectorization from `ending_slide.png`. | **BLOCKED (Gated by Stakeholder)** |
| **AUD-03** | Commercial Intake | `FR-06` (`AC-06.1`) | Budget ranges and timeline dropdown options for `/request-quote` lack defined values in PRD. | Blocks finalized Zod enum schema (`TASK-006`, `TASK-023`). | Proposed 5-tier budget matrix in `docs/specification-audit.md` §4 adopted for implementation pending final sign-off. | **Resolved in Spec (Pending Code)** |
| **AUD-04** | Taxonomy Alignment | `FR-03`, `FR-08` | Portfolio category filter tags and Service slugs had minor naming differences in PRD. | Blocks TypeScript union types in data layer (`TASK-006`, `TASK-007`). | 1:1 synchronization enforced: `web-development`, `custom-software`, `ai-automation`, `data-science-analytics`, `brand-digital-media`. | **Resolved in Spec (Pending Code)** |
| **AUD-05** | Academy Routing | `FR-04` (`AC-04.4`) | Academy primary CTA routing mechanism (dedicated Google Form vs. WhatsApp) was bifurcated in PRD. | Affects button destination in `TASK-019`. | Configured via `siteConfig.academy.enrollmentUrl` with dual fallback to WhatsApp advisor. | **Resolved in Spec (Pending Code)** |
| **AUD-09** | Content Sign-Off | `FR-03` (`AC-03.3`) | Public screenshots, architecture diagrams, and approved technical summaries for initial case studies require sign-off. | Affects case study page depth (`TASK-017`). | 3A leadership review of case study texts prior to Phase 4 content freeze. | **Open (Tracked in Phase 4)** |
| **DEC-01** | External Service | `FR-05`, `FR-06` | Confirmation of transactional lead notification email provider (Resend API vs Corporate SMTP). | Affects production email delivery credentials in `TASK-025`. | Resend API recommended (`ADR-005`); Nodemailer SMTP supported as fallback driver. | **Proposed (Pending Client Key)** |
| **DEC-03** | Official Channels | `FR-07` (`AC-07.1`) | Exact official corporate phone number with Nigeria prefix (`+234...`) and official email address. | Affects centralized config in `TASK-005`. | Provisional defaults codified in `siteConfig`; final verification prior to public launch. | **Open (Tracked in Phase 2)** |
