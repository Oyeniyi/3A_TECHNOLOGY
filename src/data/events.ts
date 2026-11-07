/**
 * 3A Techvolution Academy — Seminars, Workshops & Special AI Events Static Data
 * Only displays dates and registration links explicitly configured in this file.
 */

import { AcademyEvent } from '@/types/content';

export const academyEvents: AcademyEvent[] = [
  {
    slug: 'ai-fluency-for-students-and-graduates',
    title: 'AI Fluency & Research Productivity Seminar for Students and Graduates',
    description:
      'An interactive session introducing university students, NYSC members, and recent graduates to practical AI tools for academic research, technical learning, and career readiness.',
    dateDisplay: 'Date to be announced',
    timeDisplay: 'Saturday Morning Session (WAT)',
    format: 'Online',
    targetAudience: ['University Undergraduates', 'Postgraduate Students', 'NYSC Members & Recent Graduates'],
    registrationUrl: 'https://forms.google.com/3a-ai-seminar-registration',
    status: 'Registration Open',
  },
  {
    slug: 'practical-vibe-coding-workshop',
    title: 'Hands-On Vibe Coding Workshop: Idea to Web Prototype with AI',
    description:
      'A practical live build workshop showing how to structure requirements, prompt AI coding assistants effectively, inspect the generated code, and ship a working web application prototype.',
    dateDisplay: 'Date to be announced',
    timeDisplay: 'Weekend Workshop (WAT)',
    format: 'Hybrid',
    targetAudience: ['Aspiring Builders', 'Students & Developers', 'Entrepreneurs & Product Thinkers'],
    registrationUrl: 'https://forms.google.com/3a-vibe-coding-workshop',
    status: 'Upcoming',
  },
  {
    slug: 'corporate-ai-productivity-workshop',
    title: 'Organizational AI Adoption & Workflow Productivity Workshop',
    description:
      'Dedicated workshop for business teams, schools, and institutions looking to adopt generative AI tools safely across administration, documentation, and operations.',
    dateDisplay: 'Scheduled on request for organizations',
    timeDisplay: 'Custom Team Schedule',
    format: 'Physical',
    targetAudience: ['Corporate Teams', 'School & Institutional Administrators', 'Business Leaders'],
    status: 'Registration Closed',
  },
];

