# 3A Technology Solutions Web Platform & 3A Techvolution Academy

Official digital flagship for **3A Technology Solutions** and its educational division, **3A TECHVOLUTION ACADEMY**.

- **Brand Essence:** *Technology that works for people and business.*
- **Tagline:** *Ideas • Technology • Impact*
- **Technology Stack:** Next.js 14+ (App Router), React 18/19, TypeScript (Strict Mode), Tailwind CSS, React Hook Form + Zod, Resend API.
- **Architectural Scope:** Phase 1 zero-database, server-rendered static site architecture. External LMS routing, offline enterprise invoicing.

## Project Structure Overview

```text
/
├── public/                 # Static assets, brand marks, and thumbnails
├── src/
│   ├── actions/            # Next.js Server Actions (enquiry, quote)
│   ├── app/                # Next.js App Router (pages, layouts, API routes)
│   ├── components/         # Reusable UI components, navigation, forms, layouts
│   ├── config/             # Centralized site configuration (siteConfig)
│   ├── data/               # Static typed content datastores (services, projects, programmes)
│   ├── lib/                # Utilities, content queries, security, and email drivers
│   └── types/              # TypeScript interfaces and contracts
├── tests/
│   ├── unit/               # Vitest pure unit tests
│   ├── integration/        # Vitest server action integration tests
│   └── e2e/                # Playwright end-to-end and accessibility tests
└── docs/                   # Authoritative architecture, design, and governance specifications
```

## Getting Started

### Prerequisites
- Node.js v20.x LTS or higher
- npm v10.x or higher

### Installation
```powershell
npm install
```

### Development Server
```powershell
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Quality Verification Suite
```powershell
# 1. Typecheck (zero errors required)
npm run typecheck

# 2. Linting
npm run lint

# 3. Unit & Integration Tests
npm run test:unit
npm run test:integration

# 4. End-to-End & Accessibility Tests
npm run test:e2e
npm run test:a11y

# 5. Production Build Validation
npm run build
```

## Governance & Architecture Invariants
This repository strictly enforces the architectural invariants defined in [`docs/architecture-essential.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/architecture-essential.md):
- **ARCH-01:** Zero runtime databases (PostgreSQL, MySQL, MongoDB, SQLite). Content resides in typed files.
- **ARCH-02:** Zero in-house LMS or student login accounts. Enrollment is handled via external channels.
- **ARCH-03:** Zero direct payment gateway SDKs (Paystack, Stripe). Commercial billing is invoiced off-platform.
- **ARCH-04:** Zero secret leakage (`RESEND_API_KEY` restricted to server-side).
- **ARCH-05:** WCAG 2.1 AA brand color contrast rules (Accent Yellow strictly paired with Dark Charcoal text).
- **ARCH-13:** Zero autonomous conversational frontend chatbots.
