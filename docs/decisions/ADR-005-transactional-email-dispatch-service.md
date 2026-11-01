# ADR-005: Transactional Email Notification Pipeline

**ID:** ADR-005  
**Title:** Transactional Email Notification Pipeline  
**Status:** Proposed  
**Date:** October 2026  
**Auditor/Architect:** Senior Software Architect & Technical Research Engineer  
**Related Requirements:** `FR-05`, `FR-06`, `AGENTS.md` Section 6, Unresolved Business Decision `Q-03`  

---

## 1. Context & Problem Statement
When a prospective enterprise client submits a message on `/contact` or a formal scoping intake on `/request-quote`, the platform must instantly and reliably deliver a formatted notification email to 3A's administrative inbox (`contact@3atechnology.com.ng` or equivalent).

Because Phase 1 operates without a persistent database (per the non-negotiable release invariants), email delivery is the primary operational pipeline for capturing inbound revenue opportunities. The pipeline must be fast, resilient against network timeouts, secure against credential leakage, and cost-effective.

---

## 2. Decision Drivers
- **Deliverability & Reliability:** High inbox placement without being flagged as spam; low latency dispatch from serverless execution environments.
- **Developer Simplicity & Serverless Compatibility:** Clean HTTP-based API that does not suffer from SMTP connection pooling and cold-start timeouts in serverless functions.
- **Cost & Licensing:** Generous free/low-cost tier suitable for initial corporate traffic.
- **Fallback Capability:** Ability to fall back to standard SMTP (via Nodemailer) if an enterprise hosting plan or corporate mail server requires it.
- **Security:** Strict isolation of API keys in server-only environment variables (`RESEND_API_KEY` or `SMTP_PASSWORD`).

---

## 3. Evaluated Options

### Option 1: Resend (Modern Developer-First Email API)
- **Description:** Modern email platform built for React and Next.js, utilizing clean HTTP REST endpoints and native React email templating (`@react-email/components`).
- **Pros:**
  - Fast HTTP API; eliminates serverless SMTP connection handshake overhead.
  - High deliverability with DKIM/SPF domain verification.
  - Generous free tier (up to 3,000 emails/month, 100 emails/day), far exceeding Phase 1 corporate enquiry volumes.
  - Enables authoring clean, branded email templates directly in React components.
- **Cons:**
  - Requires domain DNS verification (adding TXT/DKIM records to 3A's domain).

### Option 2: Postmark
- **Description:** Industry gold standard for transactional email reliability.
- **Pros:**
  - Exceptional deliverability and reputation monitoring.
  - Great analytics and audit logging.
- **Cons:**
  - Strict upfront account vetting process that can delay onboarding.
  - Limited free tier (100 test emails; requires paid subscription starting at $15/month).

### Option 3: Nodemailer with Direct Corporate SMTP
- **Description:** Traditional Node.js library connecting via SMTP (ports 465/587) to a standard email hosting provider (Google Workspace, Microsoft 365, cPanel webmail).
- **Pros:**
  - Uses existing corporate mail server without third-party API accounts.
  - Zero additional SaaS subscription costs.
- **Cons:**
  - SMTP handshake over TLS in serverless functions (e.g., Vercel) can experience cold-start connection latency and occasional gateway timeouts.
  - If corporate mail server rate limits SMTP relays, submissions may be dropped.

---

## 4. Proposed Decision
Adopt **Option 1: Resend API with a Pluggable Nodemailer SMTP Fallback Driver**.

### Architectural Design:
1. **Driver Interface Pattern (`src/lib/email/index.ts`):**
   Create an abstract email sender service that checks the environment configuration:
   - If `RESEND_API_KEY` is set, dispatch via Resend's lightweight HTTP SDK (`resend`).
   - If `SMTP_HOST` is set, dispatch via standard Nodemailer SMTP.
2. **Notification Payload Formatting:**
   Enquiry notifications will format all client metadata into a clean, responsive HTML layout:
   - Client Name & Company
   - Verified Contact Email & WhatsApp Phone Number
   - Selected Service Category
   - Budget Range & Estimated Timeline
   - Full Scoping Description
   - Submission Timestamp & Client IP hash (for audit tracing)
3. **Receipt Acknowledgment:**
   Optionally send an immediate, automated confirmation auto-responder to the prospect confirming receipt: *"Thank you for contacting 3A Technology Solutions. Our technical solutions team will review your project brief and follow up within 24 business hours."*

---

## 5. Consequences & Trade-offs
- **Positive:**
  - Ultra-fast form dispatch (< 400ms) with zero serverless timeout risks.
  - Beautiful, branded email notifications matching 3A's Navy and Charcoal brand standards.
  - Dual-driver architecture ensures zero vendor lock-in; 3A can toggle to SMTP with zero code changes simply by updating environment variables.
- **Negative / Risks:**
  - Requires stakeholder to complete DNS verification (SPF/DKIM) once the production domain is confirmed.

---

## 6. References
- Resend Documentation: [Next.js Integration Guide](https://resend.com/docs/send-with-nextjs)
- React Email: [Component Library](https://react.email/)
- Nodemailer: [Serverless Usage Best Practices](https://nodemailer.com/about/)
- Research Date: October 2026.
