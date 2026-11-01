# ADR-003: Static Typed Content Layer & Data Architecture

**ID:** ADR-003  
**Title:** Static Typed Content Layer & Data Architecture  
**Status:** Proposed  
**Date:** October 2026  
**Auditor/Architect:** Senior Software Architect & Technical Research Engineer  
**Related Requirements:** `FR-02`, `FR-03`, `FR-04`, `FR-08`, Architectural Invariants Section 1.2  

---

## 1. Context & Problem Statement
The 3A web platform must publish structured information regarding commercial services, portfolio case studies, and academy educational tracks. 

The core architectural invariant established in `PRD.md` Section 4.2 and `AGENTS.md` Section 1.2 strictly mandates:
> **No Headless or Runtime CMS / Database in Phase 1.** Content for services, projects, and academy tracks is stored as statically typed TypeScript data files (`src/data/*.ts`). Do not spin up PostgreSQL, MySQL, MongoDB, Sanity, or Strapi.

The architecture must design a data abstraction layer that enforces strict type safety, validates schemas at compile-time, guarantees zero runtime database costs, and enables a seamless transition to a headless CMS in Phase 2 or 3 without rewriting presentation components.

---

## 2. Decision Drivers
- **Zero Infrastructure Overhead:** No database servers to patch, back up, migrate, or secure against SQL injection.
- **Strict Compile-Time Verification:** Build checks (`npx tsc --noEmit`) must fail immediately if a required field (e.g., project slug, service description, deliverables list) is missing or malformed.
- **Developer Simplicity:** Content updates made directly in Git through version-controlled commits.
- **Future CMS Compatibility:** Schema contracts designed as clean TypeScript interfaces that mirror typical CMS document models (e.g., Sanity schemas or Strapi collections).

---

## 3. Evaluated Options

### Option 1: TypeScript Data Files with Exported Interface Contracts (`src/data/*.ts`)
- **Description:** Structured TypeScript files exporting typed arrays of plain JavaScript objects conforming to strict interfaces (`Service`, `Project`, `AcademyProgramme`).
- **Pros:**
  - Absolute zero dependency overhead; natively supported by Next.js and TypeScript compiler.
  - 100% build-time type verification.
  - Fast static page rendering with zero I/O latency.
  - Can be easily queried using standard JavaScript methods (`filter()`, `find()`) inside Server Components.
- **Cons:**
  - Non-technical editors cannot update content without committing to Git (acceptable for Phase 1).

### Option 2: MDX (Markdown with JSX)
- **Description:** Content written in `.mdx` files parsed at build time via `next-mdx-remote` or Contentlayer.
- **Pros:**
  - Supports long-form rich text and embedded React components.
- **Cons:**
  - Adds heavy build-time parsing dependencies (`unified`, `remark`, `rehype`).
  - High maintenance burden; Contentlayer is unmaintained/deprecated, and alternative MDX pipelines introduce significant configuration complexity.
  - Overkill for structured marketing cards and short case studies.

### Option 3: Local SQLite / Embedded Database
- **Description:** Storing records in a local SQLite file bundled with the deployment.
- **Pros:**
  - Enables SQL querying.
- **Cons:**
  - Directly violates Phase 1 architectural invariants.
  - Adds binary native bindings (`better-sqlite3`), complicating serverless deployment on Vercel.

---

## 4. Proposed Decision
Adopt **Option 1: TypeScript Data Files with Exported Interface Contracts (`src/data/*.ts`)**.

### Architectural Design:
1. **Schema Contracts (`src/types/content.ts`):**
   ```typescript
   export type ServiceCategory = 
     | 'web-development' 
     | 'custom-software' 
     | 'ai-automation' 
     | 'data-science-analytics' 
     | 'brand-digital-media';

   export interface Service {
     slug: ServiceCategory;
     title: string;
     shortSummary: string;
     iconName: string;
     problemContext: string;
     targetAudience: string[];
     technicalApproach: string;
     deliverables: string[];
     featuredCaseStudySlug?: string;
   }

   export type ProjectStatus = 'Client Project' | 'Live Production' | 'Deployed Prototype' | 'Research & Development';

   export interface Project {
     slug: string;
     title: string;
     category: ServiceCategory;
     status: ProjectStatus;
     shortSummary: string;
     theChallenge: string;
     theSolution: string;
     technologiesUsed: string[];
     imagePlaceholder: string;
     liveUrl?: string;
     githubUrl?: string;
   }

   export interface AcademyProgramme {
     slug: string;
     title: string;
     level: 'Beginner' | 'Intermediate' | 'Advanced';
     format: 'Weekend Cohort' | 'In-Person' | 'Hybrid';
     duration: string;
     overview: string;
     curriculumModules: string[];
     targetAudience: string[];
     prerequisites?: string[];
   }
   ```

2. **Access Abstraction (`src/lib/content.ts`):**
   Create clean data retrieval helper functions (`getAllServices()`, `getServiceBySlug()`, `getAllProjects()`, `getProjectsByCategory()`) so presentation components never access raw files directly. This enables swapping the implementation to an API or CMS in future phases without altering page components.

---

## 5. Consequences & Trade-offs
- **Positive:**
  - Flawless type-safety and instantaneous local build times.
  - Completely immune to database downtime, connection pooling limits, or SQL injection vulnerabilities.
  - Clean separation of concerns between data and presentation.
- **Negative / Risks:**
  - Content updates require a Git commit and redeployment (fully acceptable for Phase 1 corporate release).

---

## 6. References
- TypeScript Documentation: [Interface Contracts and Type Checking](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- `PRD.md` v2.0 Section 5, 6, and 7 (`FR-08`)
- Research Date: October 2026.
