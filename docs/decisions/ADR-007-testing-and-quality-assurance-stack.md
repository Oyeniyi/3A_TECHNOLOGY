# ADR-007: Automated Testing and Verification Strategy

**ID:** ADR-007  
**Title:** Automated Testing and Verification Strategy  
**Status:** Proposed  
**Date:** October 2026  
**Auditor/Architect:** Senior Software Architect & Technical Research Engineer  
**Related Requirements:** `AGENTS.md` Section 5, Section 12 (Testing & Acceptance Criteria)  

---

## 1. Context & Problem Statement
`AGENTS.md` Section 5 establishes an uncompromising standard for engineering verification:
> **Golden Rule:** Never declare a feature "complete," "working," or "verified" without executing concrete verification commands and inspecting the output. Hypotheses, assumptions, or silent omissions are unacceptable.

To ensure that the 3A website platform maintains zero defects, flawless accessibility compliance, and robust form validation, the architecture must define a lean, high-velocity testing suite that runs fast locally and integrates seamlessly into CI/CD pipelines.

---

## 2. Decision Drivers
- **Execution Speed:** Fast feedback loop for developers and AI agents during local iteration.
- **Coverage of Critical User Paths:** Automated validation for responsive mobile drawer toggling, keyboard accessibility, Zod schema constraints, and form submission states.
- **Native TypeScript & ESM Compatibility:** Flawless compatibility with modern Next.js and TypeScript without complicated Babel polyfills.
- **Cross-Browser Verification:** Confidence across modern mobile and desktop browsers (Chromium, WebKit, Mobile Safari).

---

## 3. Evaluated Options

### Option 1: Vitest + React Testing Library + Playwright (Recommended)
- **Description:** 
  - **Vitest:** Ultra-fast, Vite-powered unit test runner executing TypeScript schemas, content model validation, and utility functions in milliseconds.
  - **React Testing Library:** Component-level testing for accessibility attributes, keyboard trap logic, and inline form error states.
  - **Playwright:** End-to-end browser automation for full user flows (navigation drawer open/close, mobile viewports, form submission flows).
- **Pros:**
  - Vitest runs significantly faster than Jest (~3x to 5x faster) with zero configuration for TypeScript/ESM.
  - Playwright provides native multi-browser testing (including Mobile Safari emulation) and generates rich visual trace artifacts.
  - Standardized modern web stack.
- **Cons:**
  - Requires maintaining two test runners (Vitest for unit/integration; Playwright for end-to-end).

### Option 2: Jest + Cypress
- **Description:** Traditional testing stack with Jest for unit tests and Cypress for browser testing.
- **Pros:**
  - Established market longevity.
- **Cons:**
  - Jest has well-documented configuration friction with ESM modules, Next.js App Router, and TypeScript path aliases.
  - Cypress has heavier memory overhead and slower execution compared to Playwright.

---

## 4. Proposed Decision
Adopt **Option 1: Vitest + React Testing Library + Playwright**.

### Verification Command Suite (Adhering to `AGENTS.md` Section 5.2):
```powershell
# 1. Typecheck: Zero compiler errors
npm run typecheck       # npx tsc --noEmit

# 2. Lint & Code Style: Zero linting errors
npm run lint            # next lint

# 3. Unit & Component Tests: Schema and accessibility verification
npm run test:unit       # vitest run

# 4. End-to-End Smoke Tests: Core user journey and responsive drawer validation
npm run test:e2e        # playwright test

# 5. Production Compilation: Successful static generation and bundle validation
npm run build           # next build
```

### Critical Automated Test Scenarios:
1. **Schema Integrity:** Verify every entry in `src/data/services.ts`, `src/data/projects.ts`, and `src/data/programmes.ts` conforms to required TypeScript interface properties.
2. **WCAG Contrast & Keyboard Trap:** Validate that the mobile drawer traps focus, responds to `Escape`, and exposes `aria-expanded` attributes correctly.
3. **Form Validation Defense:** Verify that empty submissions, invalid emails, short messages, and populated honeypot fields (`hp_field`) trigger the expected rejection or silent drop behaviors.

---

## 5. Consequences & Trade-offs
- **Positive:**
  - Eliminates regressions and guarantees evidence-based verification before every commit.
  - Extremely fast local execution time (< 5 seconds for full unit test suite).
  - High confidence in cross-device mobile responsiveness.
- **Negative / Risks:**
  - Playwright requires local browser binary installation (`npx playwright install --with-deps`) on developer and CI machines.

---

## 6. References
- Vitest: [Documentation and Architecture](https://vitest.dev/)
- React Testing Library: [Guiding Principles](https://testing-library.com/docs/react-testing-library/intro/)
- Playwright: [Next.js Testing Guide](https://playwright.dev/docs/intro)
- Research Date: October 2026.
