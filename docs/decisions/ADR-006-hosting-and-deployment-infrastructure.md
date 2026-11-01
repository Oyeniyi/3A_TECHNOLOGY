# ADR-006: Hosting Platform, Edge Distribution, and Deployment Infrastructure

**ID:** ADR-006  
**Title:** Hosting Platform, Edge Distribution, and Deployment Infrastructure  
**Status:** Proposed  
**Date:** October 2026  
**Auditor/Architect:** Senior Software Architect & Technical Research Engineer  
**Related Requirements:** `FR-09`, `FR-11`, Section 9.4 (Deployment & Infrastructure)  

---

## 1. Context & Problem Statement
The 3A web platform must be reliably hosted, automatically deployed from Git commits, globally distributed for low latency across Nigeria and international visitors, and secured with automated TLS/SSL certificates.

The hosting topology must natively support Next.js App Router features (React Server Components, dynamic Server Actions, image optimization, dynamic sitemaps) without operational maintenance overhead, server patching, or high fixed monthly infrastructure costs.

---

## 2. Decision Drivers
- **Native Next.js Support:** Full compatibility with Next.js 14+ App Router, Server Actions, and Next.js Image Optimization without custom adapter hacks.
- **African & Global Edge Distribution:** Fast Content Delivery Network (CDN) edge points of presence (PoP) in or near Nigeria (Lagos/Johannesburg/Europe) for rapid asset delivery.
- **Automated CI/CD & Preview Environments:** Automatic build checks, branch preview deployments, and zero-downtime production rollouts upon Git push.
- **Cost & Operational Maintenance:** Generous free/hobby tier during development and low-cost scaling ($20/month team tier if needed).
- **Security & HTTPS:** Automatic Let's Encrypt SSL/TLS renewal and customizable HTTP security headers (`Content-Security-Policy`, `HSTS`, `X-Frame-Options`).

---

## 3. Evaluated Options

### Option 1: Vercel Cloud Platform (Recommended)
- **Description:** Purpose-built serverless platform engineered by the creators of Next.js.
- **Pros:**
  - 100% native Next.js feature compatibility out of the box with zero configuration.
  - Native Edge network caching and automated image optimization.
  - Instant git-based preview deployments for stakeholder review.
  - Generous Hobby/Pro tiers with automatic global HTTPS and DNS management.
  - Built-in analytics and Web Vitals monitoring without invasive tracking cookies.
- **Cons:**
  - Bandwidth and serverless function execution costs can scale if traffic becomes massive (not a concern for Phase 1 corporate volume).

### Option 2: Self-Hosted Docker Container on VPS (DigitalOcean / Hetzner / AWS EC2)
- **Description:** Containerizing Next.js in a Docker image (`node:20-alpine`) managed via Nginx reverse proxy on a Linux virtual private server.
- **Pros:**
  - Predictable fixed cost ($5 – $12/month).
  - Total control over the hosting operating system.
- **Cons:**
  - High operational maintenance: Requires configuring Nginx, Certbot SSL renewals, system security updates, firewall rules, and container restart policies.
  - Lacks global multi-region edge caching unless manually paired with Cloudflare.
  - Substantially delays initial launch.

### Option 3: Cloudflare Pages with `@cloudflare/next-on-pages`
- **Description:** Hosting on Cloudflare's global edge network via OpenNext / Cloudflare adapter.
- **Pros:**
  - Exceptional global edge distribution and DDoS protection.
- **Cons:**
  - Next.js App Router feature compatibility often lags behind new Next.js releases.
  - Certain Node.js native runtime modules and dynamic Server Actions require edge-runtime polyfills.

---

## 4. Proposed Decision
Adopt **Option 1: Vercel Cloud Platform**.

### Implementation Strategy:
1. **GitHub Integration:** Connect the GitHub repository directly to Vercel. Commits to the `main` branch automatically trigger production builds; pull requests generate isolated preview URLs.
2. **Domain Configuration:** Point the official domain (`3atechnology.com.ng` or equivalent) to Vercel via CNAME/A records.
3. **Security Headers in `next.config.mjs`:**
   Configure strict production HTTP response headers:
   ```javascript
   const securityHeaders = [
     { key: 'X-DNS-Prefetch-Control', value: 'on' },
     { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
     { key: 'X-Frame-Options', value: 'DENY' },
     { key: 'X-Content-Type-Options', value: 'nosniff' },
     { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
     { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
   ];
   ```

---

## 5. Consequences & Trade-offs
- **Positive:**
  - Eliminates server administration overhead entirely.
  - Guarantees sub-second page loads across mobile networks.
  - Simplifies stakeholder reviews with instantaneous preview deployment links.
- **Negative / Risks:**
  - Requires stakeholder to maintain an active Vercel account.

---

## 6. References
- Vercel Documentation: [Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
- Mozilla Developer Network (MDN): [HTTP Security Headers Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- Research Date: October 2026.
