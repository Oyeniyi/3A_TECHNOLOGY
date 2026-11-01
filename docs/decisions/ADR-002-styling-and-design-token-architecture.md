# ADR-002: Styling Engine, Design Tokens, and Accessible Primitives

**ID:** ADR-002  
**Title:** Styling Engine, Design Tokens, and Accessible Primitives  
**Status:** Proposed  
**Date:** October 2026  
**Auditor/Architect:** Senior Software Architect & Technical Research Engineer  
**Related Requirements:** `FR-01`, `FR-10`, `FR-11`, Section 8 (Brand Identity & Visual Standards), Finding `AUD-01`  

---

## 1. Context & Problem Statement
The 3A Technology Solutions platform requires a disciplined visual design reflecting "Premium Minimalism" while strictly enforcing the authoritative brand standards:
- Primary Navy: `#0B2B6B`
- Accent Yellow: `#F7C800`
- Dark Charcoal: `#1F2937`
- Light Gray: `#F4F6F8`
- Pure White: `#FFFFFF`

Furthermore, Finding `AUD-01` in [`specification-audit.md`](file:///c:/Users/DELL/Desktop/3A%20TECHNOLOGY/docs/specification-audit.md) revealed that Accent Yellow on White has a non-compliant contrast ratio of 1.35:1 (failing WCAG AA). The styling architecture must prevent accessibility violations, eliminate runtime CSS bloat, ensure mobile drawer keyboard accessibility (`AC-01.3`), and maintain strict design tokens.

---

## 2. Decision Drivers
- **Brand System Enforcement:** Prevent developers or agents from inventing arbitrary hex codes or neon cyberpunk styles.
- **Accessibility & WCAG 2.1 AA:** Enforce contrast compliance and accessible primitive behavior (focus traps, ARIA attributes, keyboard control for mobile drawer).
- **Bundle Efficiency & Mobile Performance:** Zero runtime CSS-in-JS overhead; minimal critical CSS payload.
- **Maintainability:** Semantic token aliases (`brand-navy`, `brand-yellow`, `brand-surface`, `brand-text`).

---

## 3. Evaluated Options

### Option 1: Tailwind CSS with Centralized Semantic Tokens + Radix UI Primitives
- **Description:** Utility-first CSS compiled at build-time using PostCSS, combined with unstyled, accessible Radix UI primitives (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`) and Lucide icons.
- **Pros:**
  - Build-time tree shaking results in microscopic production CSS (< 15kB gzip).
  - Semantic token configuration in `tailwind.config.ts` locks down authorized colors.
  - Radix UI guarantees full keyboard navigation, ARIA attributes, and focus trapping for mobile drawers and modals out of the box without heavy UI libraries.
  - Codifies WCAG token pairings directly into utility classes.
- **Cons:**
  - Class name density in JSX if not properly abstracted into reusable UI components.

### Option 2: Heavy Component Library (MUI or Ant Design)
- **Description:** Pre-styled component frameworks with comprehensive suites.
- **Pros:**
  - Ready-made complex components.
- **Cons:**
  - Massive bundle size (> 80kB gzip), severely degrading mobile LCP/FCP on Nigerian 3G/4G connections.
  - Very difficult to override default component styles to match 3A's custom brand standards.
  - Violates `AGENTS.md` Section 7 rule against heavy UI component libraries.

### Option 3: Vanilla CSS / CSS Modules
- **Description:** Standard scoped CSS modules for every component.
- **Pros:**
  - Zero external styling dependencies.
- **Cons:**
  - Manual overhead in maintaining responsive breakpoints, media queries, and design token synchronization.
  - High risk of CSS divergence and manual focus-trap bugs on mobile drawer accessibility.

---

## 4. Proposed Decision
Adopt **Option 1: Tailwind CSS with Centralized Semantic Design Tokens + Radix UI Primitives**.

### Concrete Token Configuration in `tailwind.config.ts`:
```typescript
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2B6B',      // Primary Anchor: Headings, primary buttons, dark surfaces
          yellow: '#F7C800',    // Accent: CTAs, highlights, badges
          charcoal: '#1F2937',  // Primary Text & deep card contrast
          light: '#F4F6F8',     // Section backgrounds & input fills
          white: '#FFFFFF',     // Clean canvas breathing room
          border: '#E5E7EB',    // Subtle 1px structural outlines
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-jakarta)', 'sans-serif'],
      }
    }
  }
}
```

### Contrast Guardrails (Resolving AUD-01):
1. **Yellow Buttons:** Must strictly apply `bg-brand-yellow text-brand-charcoal hover:bg-yellow-400 font-semibold`. White text on yellow is forbidden in linting/PR reviews.
2. **Yellow Badges/Highlights:** Only rendered over `bg-brand-navy` or `bg-brand-charcoal` where contrast is > 8:1.

---

## 5. Consequences & Trade-offs
- **Positive:**
  - Rapid UI development with guaranteed WCAG 2.1 AA compliance.
  - Full keyboard accessibility on the mobile navigation drawer via Radix Dialog primitive.
  - Minimal CSS footprint (< 15kB) supporting high Lighthouse Performance scores.
- **Negative / Risks:**
  - Requires developers to encapsulate repetitive Tailwind strings into reusable components under `src/components/ui/` (e.g., `Button.tsx`, `Card.tsx`, `Badge.tsx`).

---

## 6. References
- Tailwind CSS: [Configuration Guide](https://tailwindcss.com/docs/configuration)
- Radix UI: [Accessibility Primitives](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- Web Content Accessibility Guidelines (WCAG) 2.1: [Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Research Date: October 2026.
