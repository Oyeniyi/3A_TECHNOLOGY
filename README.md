# 3A Technology Solutions Web Platform & 3A Techvolution Academy

Official digital platform for **3A Technology Solutions** (`3A TECHNOLOGY SOLUTION CONCEPTS`, CAC `BN 9931488`) and its AI-focused educational division, **3A TECHVOLUTION ACADEMY**.

- **Brand Essence:** *Technology that works for people and business.*
- **Tagline:** *Ideas • Technology • Impact*
- **Technology Stack:** Next.js 14+ (App Router), React 18, TypeScript (Strict Mode), Tailwind CSS, React Hook Form + Zod, Resend / SMTP.
- **Architectural Scope:** Zero-database, server-rendered static and dynamic site architecture with typed content datastores, external course registration routing, and hardened Server Actions.

---

## Business Divisions & Services

### A. 3A Technology Solutions (`/services`)
1. **Web & Digital Product Development (`/services/web-development`)**
2. **Custom Software Engineering (`/services/custom-software`)**
3. **Artificial Intelligence & Automation (`/services/ai-automation`)**
4. **Data Science & Analytics (`/services/data-science-analytics`)**
5. **Technology Consulting (`/services/technology-consulting`)**
6. **Academic Research & Project Support (`/services/academic-research-support`)** — Ethical computing & mathematics research consultation, technical mentorship, implementation support, and documentation assistance.

*(Note: Branding & Digital Media is not offered as a standalone commercial service.)*

### B. 3A TECHVOLUTION ACADEMY (`/academy`)
An AI-focused educational academy helping individuals, students, graduates, professionals, business owners, and organizations understand and practically use Artificial Intelligence:
- **AI Course Catalogue (`/academy/programmes` & `/academy/programmes/[slug]`):** Cohort-based AI training with per-course registration links and lifecycle statuses.
- **AI Seminars & Workshops (`/academy/events`):** Upcoming AI webinars, awareness seminars, and organizational workshops.
- **Vibe Coding & AI-Assisted Development (`/academy/vibe-coding`):** Responsible software prototyping, code comprehension, and debugging with AI coding agents.
- **Academy Resource Library (`/academy/resources`):** Searchable/filterable library of free downloadable PDF guides and paid AI workbooks/toolkits.

---

## Content & Course Update Workflow

All courses, seminars, resources, services, and portfolio projects are managed in strongly typed static datastores under `src/data/` so updates never require rebuilding UI components:

1. **Adding or Updating an Academy Course (`src/data/programmes.ts`):**
   - Add or update an `AcademyProgramme` object in `programmesData`.
   - Set `status` to one of: `'Open for Enrolment' | 'Upcoming' | 'Ongoing' | 'Completed' | 'Registration Closed'`.
   - Provide the course-specific Google Form or registration URL in `enrollmentUrl` (e.g., `https://forms.gle/...`). Each course has its own `enrollmentUrl` and is validated via `isSafeActionUrl()`.
   - When `status === 'Open for Enrolment'` and `enrollmentUrl` is present, the UI automatically renders an external **Enrol Now** button (`target="_blank" rel="noopener noreferrer"`). For all other statuses, it automatically routes learners to `/contact` with the course title prefilled (`Notify Me` / `Register Interest`).
   - A dedicated detail route `/academy/programmes/[slug]` and sitemap entry are generated automatically at build time.

2. **Adding or Updating Seminars & Workshops (`src/data/events.ts`):**
   - Add or update an `AcademyEvent` entry with `status` (`'Open for Registration' | 'Upcoming' | 'Completed' | 'Registration Closed'`) and optional `registrationUrl`.

3. **Adding Free or Paid Learning Resources (`src/data/resources.ts`):**
   - For **Free** resources (`accessType: 'Free'`), place the PDF in `public/resources/` and set `downloadUrl: '/resources/<filename>.pdf'`.
   - For **Paid** resources (`accessType: 'Paid'`), set `price` (e.g., `'₦15,000'`) and `purchaseUrl` (enquiry or external payment link). Never set a public `downloadUrl` on a paid resource.

4. **Adding Portfolio Projects (`src/data/projects.ts`):**
   - Assign `primaryCollection` and `collections` from `'business-client-solutions' | 'websites-digital-experiences' | 'student-research-projects'`.
   - Set `classification` accurately (e.g., `'AI-Powered Business Operations Tool'`, `'Institutional Platform'`, `'Website & Landing Page'`, `'Custom Digital Experience'`, `'Student Project'`, `'Research Project'`).
   - Enforce confidentiality via `visibility: 'public' | 'confidential'`: when `visibility === 'confidential'`, omit `liveUrl` and `githubUrl` so private URLs are never exposed in HTML, metadata, JSON-LD, client JS, or the sitemap.
   - Link the wider student project collection via `siteConfig.studentProjectsGithubUrl` (`https://github.com/psalm001`).

---

## Getting Started & Quality Verification Suite

```powershell
# 1. Install dependencies
npm install

# 2. Typecheck (zero errors required)
npm run typecheck

# 3. Linting
npm run lint

# 4. Unit & Integration Tests
npm run test:unit
npm run test:integration

# 5. End-to-End & Accessibility Tests
npm run test:e2e
npm run test:a11y

# 6. Production Build Validation
npm run build
```
