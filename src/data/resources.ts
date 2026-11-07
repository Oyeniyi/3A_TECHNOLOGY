/**
 * 3A Techvolution Academy — Educational Materials & Resource Library Static Data
 * Supports Free downloadable guides and Paid educational materials with strict
 * separation: paid resources never expose unrestricted public file download URLs.
 */

import { AcademyResource } from '@/types/content';

export const academyResources: AcademyResource[] = [
  {
    slug: 'practical-ai-fluency-starter-guide',
    title: 'Practical AI Fluency Starter Guide',
    description:
      'A clear, beginner-friendly guide to understanding how modern AI assistants work, setting up effective daily workflows, and verifying AI-generated information.',
    intendedUse:
      'Use this starter guide to build everyday confidence with AI tools for research, writing, summarization, and structured problem-solving.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'AI Learning Guides',
    format: 'PDF Guide',
    accessType: 'Free',
    downloadUrl: '/resources/3a-practical-ai-fluency-starter-guide.pdf',
    availability: 'Available',
  },
  {
    slug: 'structured-prompt-engineering-checklist',
    title: 'Structured Prompt Engineering Reference & Checklist',
    description:
      'A practical reference sheet covering context framing, role specification, output formatting, and verification prompts for reliable results.',
    intendedUse:
      'Keep this checklist beside your workspace when drafting complex prompts for analysis, documentation, coding, or business tasks.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Prompt Engineering',
    format: 'PDF Guide',
    accessType: 'Free',
    downloadUrl: '/resources/3a-structured-prompt-engineering-checklist.pdf',
    availability: 'Available',
  },
  {
    slug: 'vibe-coding-project-specification-template',
    title: 'Vibe Coding Project Specification & Verification Template',
    description:
      'A structured specification template designed to help builders plan features, data models, and quality checks before prompting AI coding agents.',
    intendedUse:
      'Fill out this template before starting an AI-assisted software project so your AI coding agent builds clean, maintainable software.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Vibe Coding & AI Dev',
    format: 'Template Pack',
    accessType: 'Free',
    downloadUrl: '/resources/3a-vibe-coding-specification-template.pdf',
    availability: 'Available',
  },
  {
    slug: 'applied-ai-workflows-workbook',
    title: 'Applied AI & Business Workflow Design Workbook',
    description:
      'Comprehensive practical workbook with step-by-step exercises for mapping operational bottlenecks, designing AI-assisted workflows, and testing knowledge retrieval systems.',
    intendedUse:
      'Designed for professionals, entrepreneurs, and cohort learners building end-to-end AI workflow automations.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Workbooks & Templates',
    format: 'Workbook',
    accessType: 'Paid',
    priceDisplay: '₦15,000 (Cohort / Institutional Copy)',
    purchaseUrl: '/contact?type=academy-programme&subject=Paid+Resource+Enquiry:+Applied+AI+Workflows+Workbook',
    availability: 'Available',
  },
  {
    slug: 'vibe-coding-complete-builders-handbook',
    title: 'The Vibe Coding Builder’s Handbook: From Prompt to Production',
    description:
      'In-depth e-book and companion course notes covering specification-driven AI development, debugging AI-generated React/Next.js and Python code, and deployment checklists.',
    intendedUse:
      'Companion reference manual for learners in the Vibe Coding & AI-Assisted Software Development programme.',
    thumbnail: '/images/brand/3a-logo-mark.png',
    category: 'Course Notes & Toolkits',
    format: 'E-Book',
    accessType: 'Paid',
    priceDisplay: '₦20,000 (Included with Cohort / Inquire to Purchase)',
    purchaseUrl: '/contact?type=academy-programme&subject=Paid+Resource+Enquiry:+Vibe+Coding+Builders+Handbook',
    availability: 'Coming Soon',
  },
];

