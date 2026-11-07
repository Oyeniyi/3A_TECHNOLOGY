/**
 * 3A TECHVOLUTION ACADEMY — AI Learning Resource Hub Static Data
 * Supports Available, Coming Soon, and In Development statuses.
 * Honestly communicates that most educational materials are currently in development
 * or coming soon, while keeping genuine starter reference guides accessible without
 * invented prices or misleading download links.
 */

import { AcademyResource } from '@/types/content';

export const academyResources: AcademyResource[] = [
  {
    slug: 'practical-ai-fluency-starter-guide',
    title: 'Practical AI Fluency Starter Guide',
    description:
      'A concise beginner-friendly reference sheet covering how modern AI assistants work, setting up effective daily workflows, and verifying AI-generated information.',
    intendedUse:
      'Use this starter reference to build everyday confidence with AI tools for research, writing, summarization, and structured problem-solving.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'AI Learning Guides',
    format: 'PDF Guide',
    accessType: 'Free',
    downloadUrl: '/resources/3a-practical-ai-fluency-starter-guide.pdf',
    availability: 'Available',
    statusNote: 'Available as a free introductory PDF reference sheet.',
  },
  {
    slug: 'structured-prompt-engineering-checklist',
    title: 'Structured Prompt Engineering Reference & Checklist',
    description:
      'A practical reference checklist covering context framing, role specification, output formatting, and verification prompts for reliable results.',
    intendedUse:
      'Keep this checklist beside your workspace when drafting prompts for analysis, documentation, coding, or business tasks.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Prompt Engineering',
    format: 'PDF Guide',
    accessType: 'Free',
    downloadUrl: '/resources/3a-structured-prompt-engineering-checklist.pdf',
    availability: 'Available',
    statusNote: 'Available as a free downloadable PDF checklist.',
  },
  {
    slug: 'vibe-coding-project-specification-template',
    title: 'Vibe Coding Project Specification & Verification Template',
    description:
      'A structured specification template designed to help builders plan features, data models, and quality checks before prompting AI coding agents.',
    intendedUse:
      'Use this specification outline before starting an AI-assisted software project so your coding workflow stays disciplined and verifiable.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Vibe Coding & AI Dev',
    format: 'Template Pack',
    accessType: 'Free',
    availability: 'Coming Soon',
    statusNote:
      'Expanded interactive template pack coming soon. Register interest to receive it when published.',
  },
  {
    slug: 'student-research-and-siwes-documentation-guide',
    title: 'Student Guide to Responsible AI in Academic Research & SIWES Documentation',
    description:
      'Practical handbook for university and polytechnic students on using AI ethically for literature review, technical learning, and structuring SIWES or final-year technical reports.',
    intendedUse:
      'Designed for undergraduates, IT/SIWES trainees, and final-year project students.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'AI Learning Guides',
    format: 'Workbook',
    accessType: 'Free',
    availability: 'Coming Soon',
    statusNote:
      'Currently in final review for upcoming student cohorts. Register interest to be notified upon release.',
  },
  {
    slug: 'applied-ai-workflows-workbook',
    title: 'Applied AI & Business Workflow Design Workbook',
    description:
      'Step-by-step workbook with practical exercises for mapping operational bottlenecks, designing AI-assisted workflows, and testing knowledge retrieval systems.',
    intendedUse:
      'Being developed for professionals, entrepreneurs, and cohort learners building business automations.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Workbooks & Templates',
    format: 'Workbook',
    accessType: 'Paid',
    availability: 'In Development',
    statusNote:
      'Currently in development by the 3A AI Automation curriculum team. Not yet open for purchase or download.',
  },
  {
    slug: 'vibe-coding-complete-builders-handbook',
    title: 'The Vibe Coding Builder’s Handbook: From Prompt to Working Application',
    description:
      'In-depth companion notes covering specification-driven AI development, reading and debugging AI-generated code, and responsible deployment checklists.',
    intendedUse:
      'Being authored as the companion handbook for the Vibe Coding & AI-Assisted Software Development pathway.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Course Notes & Toolkits',
    format: 'E-Book',
    accessType: 'Paid',
    availability: 'In Development',
    statusNote:
      'Currently in active development. No download or purchase links are active while chapters are being finalized.',
  },
];
