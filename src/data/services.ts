/**
 * Commercial Services Static Data
 * In accordance with PRD.md Section 5 (Service Taxonomy) & ARCH-01
 */

import { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web & Digital Product Development',
    shortSummary:
      'Fast, accessible company websites, customer portals, and web applications built with React and Next.js.',
    iconName: 'Globe',
    problemContext:
      'Many businesses lose leads because their websites load slowly on mobile networks, look dated, or make it hard for visitors to take the next step.',
    targetAudience: ['SMEs & Growing Businesses', 'Corporate Organizations', 'Startups', 'Schools & Institutions'],
    technicalApproach:
      'We build with React, Next.js, and semantic HTML. Pages load quickly on mobile connections, work cleanly across screen sizes, and are structured so search engines and customers can find what they need.',
    deliverables: [
      'Company Websites & Web Applications',
      'Landing Pages & Lead Intake Forms',
      'Mobile-First Responsive Layouts',
      'Technical SEO & Page Speed Tuning',
      'Customer & Partner Web Portals'
    ],
    featuredCaseStudySlug: 'image-compression-tool',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Engineering',
    shortSummary:
      'Internal business tools, record-keeping systems, database backends, and APIs built around how your team actually works.',
    iconName: 'Code',
    problemContext:
      'Off-the-shelf software rarely fits local operations cleanly. Teams end up juggling scattered spreadsheets, paper logs, and manual handoffs that slow down daily work.',
    targetAudience: ['Operations Teams', 'Logistics & Retail Businesses', 'Mid-Sized Companies', 'Administrative Offices'],
    technicalApproach:
      'We design and build custom software using TypeScript, Node.js, and relational databases. Every system includes clear user permissions, reliable data validation, and an audit trail.',
    deliverables: [
      'Internal Operations & Inventory Tools',
      'Digital Record & Logbook Portals',
      'REST APIs & Backend Services',
      'Spreadsheet-to-Database Migrations',
      'System Handover Documentation'
    ],
    featuredCaseStudySlug: 'electronic-logbook',
  },
  {
    slug: 'ai-automation',
    title: 'Artificial Intelligence & Automation',
    shortSummary:
      'Practical AI assistants, document extraction tools, and automated workflows that cut down repetitive manual work.',
    iconName: 'Cpu',
    problemContext:
      'Teams spend hours every week copying data between forms, reading through routine documents, and answering the same basic customer questions.',
    targetAudience: ['Operations & Support Teams', 'Financial & Professional Firms', 'Online Retailers', 'Growing SMEs'],
    technicalApproach:
      'We connect your existing tools to language models and automated workflows with strict validation rules, keeping your company data private and your outputs predictable.',
    deliverables: [
      'Automated Document & Invoice Readers',
      'Internal Knowledge Search Assistants',
      'Multi-Step Workflow Automations',
      'WhatsApp & Email Triage Routing',
      'AI Readiness & Workflow Reviews'
    ],
    featuredCaseStudySlug: 'marketmind-ai',
  },
  {
    slug: 'data-science-analytics',
    title: 'Data Science & Analytics',
    shortSummary:
      'Clear business dashboards, forecasting models, data cleaning pipelines, and computer vision tools.',
    iconName: 'BarChart3',
    problemContext:
      'Organizations collect plenty of sales, field, and operational data, but struggle to clean it or turn it into clear numbers they can act on.',
    targetAudience: ['Agricultural & Environmental Teams', 'Healthcare & Research Groups', 'Retail & Supply Chain Businesses'],
    technicalApproach:
      'We use Python, SQL, PyTorch, and OpenCV to clean raw data, build reporting dashboards, and train models for forecasting and image recognition.',
    deliverables: [
      'Automated Data Cleaning Pipelines',
      'Forecasting & Classification Models',
      'Computer Vision & Image Analysis Tools',
      'Interactive Reporting Dashboards',
      'Data Audits & Summary Reports'
    ],
    featuredCaseStudySlug: 'deforestation-analysis',
  },
  {
    slug: 'brand-digital-media',
    title: 'Branding & Digital Media',
    shortSummary:
      'Logo systems, brand style guides, pitch decks, and digital media templates that give your business a clear, consistent look.',
    iconName: 'Palette',
    problemContext:
      'Good products often get overlooked when their logos, pitch decks, and social graphics look inconsistent or thrown together.',
    targetAudience: ['New Businesses & Startups', 'Companies Refreshing Their Look', 'Professional Services Firms'],
    technicalApproach:
      'We create practical brand systems: scalable vector logos, readable typography, accessible color palettes, and ready-to-use templates your team can apply right away.',
    deliverables: [
      'Brand Identity Standards Guides',
      'Vector Logos & Icon Sets',
      'Pitch Decks & Presentation Templates',
      'Social Media & Banner Templates',
      'Print & Digital Marketing Assets'
    ],
  },
];
