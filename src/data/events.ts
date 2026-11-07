/**
 * 3A TECHVOLUTION ACADEMY — Seminars, Workshops & Special Events Static Data
 * Clearly distinguishes events from structured courses and supports:
 * Upcoming, Registration Open, Registration Closed, and Completed statuses.
 * Strictly avoids invented dates or unverified external registration links.
 */

import { AcademyEvent } from '@/types/content';

export const academyEvents: AcademyEvent[] = [
  {
    slug: 'ai-fluency-for-students-and-graduates',
    title: 'AI Fluency & Research Productivity Seminar for Students & Researchers',
    categoryLabel: 'Student Technology Seminar',
    description:
      'An interactive seminar introducing university and polytechnic students to practical AI tools for academic research, technical learning, data analysis, and ethical AI usage.',
    dateDisplay: 'Schedule Announced Per Cohort',
    timeDisplay: 'Weekend Morning Session (WAT)',
    format: 'Online',
    venueOrPlatform: 'Live Virtual Classroom',
    targetAudience: [
      'University & Polytechnic Undergraduates',
      'Postgraduate Researchers',
      'IT / SIWES Students',
    ],
    enquiryHref:
      '/contact?type=seminar-workshop&subject=Seminar+Registration:+AI+Fluency+for+Students',
    status: 'Registration Open',
  },
  {
    slug: 'nysc-ai-employability-career-webinar',
    title: 'AI for Graduates & NYSC Corps Members: Career Readiness & Productivity',
    categoryLabel: 'NYSC Educational Programme',
    description:
      'Focused session for serving NYSC corps members and recent graduates on using AI tools for CV/cover-letter development, interview preparation, prompt engineering, and workplace employability.',
    dateDisplay: 'Upcoming Session — Register Interest',
    timeDisplay: 'Saturday Session (WAT)',
    format: 'Online',
    venueOrPlatform: 'Online Live Webinar',
    targetAudience: [
      'Serving NYSC Corps Members',
      'Recent Graduates',
      'Early-Career Professionals',
    ],
    enquiryHref:
      '/contact?type=seminar-workshop&subject=NYSC+%26+Graduate+AI+Career+Seminar',
    status: 'Upcoming',
  },
  {
    slug: 'practical-vibe-coding-workshop',
    title: 'Hands-On Vibe Coding Session: Idea to Web Prototype with AI',
    categoryLabel: 'Vibe Coding Session',
    description:
      'A practical live build workshop showing how to structure requirements, prompt AI coding assistants effectively, read and verify the generated code, and ship a working web application prototype.',
    dateDisplay: 'Upcoming Weekend Workshop',
    timeDisplay: 'Weekend Practical Session (WAT)',
    format: 'Hybrid',
    venueOrPlatform: 'Hybrid (In-Person & Live Online)',
    targetAudience: [
      'Aspiring Builders & Founders',
      'Computing Students & Developers',
      'Product Thinkers',
    ],
    enquiryHref:
      '/contact?type=seminar-workshop&subject=Workshop+Enquiry:+Hands-On+Vibe+Coding+Session',
    status: 'Upcoming',
  },
  {
    slug: 'corporate-ai-productivity-workshop',
    title: 'Corporate & Institutional AI Adoption Workshop',
    categoryLabel: 'Corporate & Institutional Workshop',
    description:
      'Dedicated workshop for business teams, schools, and institutions looking to adopt generative AI tools safely across administration, documentation, and daily operations.',
    dateDisplay: 'Scheduled on Request for Organizations',
    timeDisplay: 'Custom Team Schedule',
    format: 'Physical',
    venueOrPlatform: 'Client Facility or Hybrid Delivery',
    targetAudience: [
      'Corporate Teams & Businesses',
      'School & Institutional Administrators',
      'Community & Association Leaders',
    ],
    enquiryHref:
      '/contact?type=customized-training&subject=Organizational+AI+Workshop+Request',
    status: 'Registration Closed',
  },
  {
    slug: 'community-ai-awareness-orientation',
    title: 'AI Awareness & Digital Literacy Orientation Programme',
    categoryLabel: 'AI Awareness & Community Event',
    description:
      'Foundational community learning session demystifying Artificial Intelligence, explaining everyday AI applications, and teaching safe, responsible digital literacy for beginners.',
    dateDisplay: 'Previous Community Edition Completed',
    timeDisplay: '2-Hour Orientation Session',
    format: 'Online',
    venueOrPlatform: 'Community Virtual Forum',
    targetAudience: [
      'General Public & Beginners',
      'Student & Youth Communities',
      'Small Business Owners',
    ],
    enquiryHref:
      '/contact?type=seminar-workshop&subject=Community+AI+Awareness+Programme+Enquiry',
    status: 'Completed',
  },
];

export const SEMINAR_PROGRAMME_TYPES = [
  'AI Awareness Programmes',
  'AI Fluency Webinars',
  'NYSC Educational Programmes',
  'Student Technology Seminars',
  'Practical AI Workshops',
  'Vibe Coding Sessions',
  'Corporate & Institutional Workshops',
  'Community Learning Events',
] as const;
