# ADR-001: Frontend Framework and Rendering Strategy

**ID:** ADR-001  
**Title:** Frontend Framework and Rendering Strategy  
**Status:** Proposed  
**Date:** October 2026  
**Auditor/Architect:** Senior Software Architect & Technical Research Engineer  
**Related Requirements:** `FR-01`, `FR-02`, `FR-03`, `FR-04`, `FR-08`, `FR-09`, `FR-10`  

---

## 1. Context & Problem Statement
3A Technology Solutions requires a web platform that delivers exceptional performance, robust search engine optimization (SEO), fast mobile page loads across Nigerian network conditions, and seamless maintainability. The platform must serve two distinct audiences (commercial clients and learners) while strictly operating without an in-house database or CMS in Phase 1. 

The architecture must decide on the frontend application framework and its rendering paradigm (Static Site Generation [SSG], Server-Side Rendering [SSR], or React Server Components [RSC]).

---

## 2. Decision Drivers
- **Page Load Performance & Core Web Vitals:** First Contentful Paint (FCP) < 1.2s and Cumulative Layout Shift (CLS) < 0.05 on standard 3G/4G connections.
- **Search Engine Discovery:** Pre-rendered HTML for search bots indexing commercial technology and academy keywords.
- **Developer Experience & Maintainability:** Strict TypeScript integration, component modularity, and seamless routing.
- **Form Interactivity without Client Bloat:** Ability to securely handle contact and quote enquiries via server actions without exposing API keys or shipping large JavaScript bundles to mobile devices.
- **Architectural Invariant:** Zero runtime database required in Phase 1; content served from static data.

---

## 3. Evaluated Options

### Option 1: Next.js 14+ (App Router with React Server Components)
- **Description:** Modern React framework utilizing React Server Components (RSC) by default, streaming SSR, and static route pre-rendering (`generateStaticParams`).
- **Pros:**
  - Zero-bundle-size server components reduce client-side JavaScript sent to mobile browsers.
  - Native support for Next.js Server Actions enables form handling without managing manual API endpoints.
  - First-class TypeScript support and built-in Next.js `Metadata` API for dynamic Open Graph and JSON-LD injection.
  - Seamless deployment on Vercel or modern Node.js environments.
- **Cons:**
  - Slightly steeper learning curve regarding the server/client component boundary (`'use client'`).
  - Requires Node.js runtime for dynamic Server Actions unless configured strictly for static export.

### Option 2: Astro (Content-First Framework)
- **Description:** Multi-page architecture (MPA) framework rendering HTML with opt-in client "islands".
- **Pros:**
  - Exceptional zero-JS baseline for content pages.
  - Very fast static build times.
- **Cons:**
  - React interactivity (complex quote forms, mobile drawer states) requires adding React integration overhead.
  - Smaller corporate ecosystem compared to Next.js; transitioning to future client portals or dynamic web apps requires migration.

### Option 3: Next.js Pages Router (Legacy Architecture)
- **Description:** Traditional Next.js architecture using `getStaticProps` and `getServerSideProps`.
- **Pros:**
  - Highly familiar, stable API.
- **Cons:**
  - Lacks React Server Components, meaning larger client-side JavaScript bundles.
  - Does not support Server Actions natively (requires manual `/api` route handlers).
  - Mainstream Next.js investment and feature development are concentrated on the App Router.

---

## 4. Proposed Decision
Adopt **Option 1: Next.js 14+ with App Router and React Server Components (RSC)**.

### Architectural Strategy:
- **Default to RSC:** All marketing, service detail, portfolio, and academy pages will be rendered as Server Components with zero client-side JavaScript overhead.
- **Selective Client Islands:** Only interactive controls (mobile navigation drawer, filter tabs, and form input controls) will be designated as Client Components via `'use client'`.
- **Pre-rendering:** Static routes and dynamic slugs (`/services/[slug]`, `/projects/[slug]`) will be statically generated at build time using `generateStaticParams()`.

---

## 5. Consequences & Trade-offs
- **Positive:**
  - Achieves near-instant page transitions and maximum Lighthouse performance scores (> 95).
  - Keeps form backend logic co-located with components using Server Actions.
  - Prepares the codebase for seamless future expansion (Phase 2/3) without refactoring.
- **Negative / Risks:**
  - Engineers must strictly police component boundaries to prevent accidental inclusion of `'use client'` at high levels in the component tree.
  - Requires hosting environment with serverless runtime support (e.g., Vercel or Node.js server) rather than a pure static S3 bucket.

---

## 6. References
- Next.js Official Documentation: [App Router and React Server Components](https://nextjs.org/docs/app)
- Vercel: [Core Web Vitals and Next.js Performance Guide](https://vercel.com/blog/core-web-vitals)
- React Documentation: [Server and Client Components Architecture](https://react.dev/reference/rsc/server-components)
- Research Date: October 2026.
