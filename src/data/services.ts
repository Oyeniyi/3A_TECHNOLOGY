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
      'High-performance corporate websites, scalable digital platforms, and accessible web applications built with modern engineering standards.',
    iconName: 'Globe',
    problemContext:
      'Businesses frequently lose credibility and qualified leads due to sluggish, unoptimized, or outdated web presences that fail on mobile devices and provide poor conversion flows.',
    targetAudience: ['SMEs & Growing Enterprises', 'Corporate Organizations', 'Tech Startups', 'Educational Institutions'],
    technicalApproach:
      'We engineer web solutions using React, Next.js, and clean semantic HTML. We focus on sub-second load times, mobile-first responsiveness, search engine visibility, and intuitive UI/UX.',
    deliverables: [
      'Bespoke Corporate Web Applications',
      'High-Converting Landing Pages & Lead Funnels',
      'Mobile-Optimized Responsive Frontends',
      'Technical SEO & Core Web Vitals Optimization',
      'Interactive Web Portals'
    ],
    featuredCaseStudySlug: 'image-compression-tool',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Engineering',
    shortSummary:
      'Tailored internal tools, workflow digitization systems, robust database architectures, and RESTful API backends engineered for business operations.',
    iconName: 'Code',
    problemContext:
      'Off-the-shelf software often fails to address unique local operational bottlenecks, resulting in fragmented manual spreadsheets, data discrepancies, and workflow delays.',
    targetAudience: ['Mid-Market Enterprises', 'Operational Teams', 'Logistics Companies', 'Administrative Bodies'],
    technicalApproach:
      'We architect decoupled, maintainable software systems using TypeScript, Node.js, and resilient data models designed for data integrity, audit trails, and high reliability.',
    deliverables: [
      'Custom Internal Business Systems',
      'Record Management & Workflow Portals',
      'Secure RESTful API Architecture',
      'Data Migration & Systems Integration',
      'Technical Architecture Documentation'
    ],
    featuredCaseStudySlug: 'electronic-logbook',
  },
  {
    slug: 'ai-automation',
    title: 'Artificial Intelligence & Automation',
    shortSummary:
      'Applied generative AI integration, intelligent document processing pipelines, automated data transformations, and operational workflows.',
    iconName: 'Cpu',
    problemContext:
      'Organizations expend hundreds of valuable staff hours on repetitive data entry, manual document parsing, and unstructured information triage.',
    targetAudience: ['Businesses Seeking Operational Efficiency', 'Financial Services', 'Professional Firms', 'E-commerce Platforms'],
    technicalApproach:
      'We connect enterprise workflows with modern LLMs, embedding models, and serverless automation pipelines, prioritizing data privacy, deterministic guardrails, and auditability.',
    deliverables: [
      'Document Parsing & Information Extraction Pipelines',
      'Generative AI Business Assistants & Knowledge Retrieval',
      'Automated Multi-Step Workflow Pipelines',
      'Smart Notification & Triage Integrations',
      'AI Feasibility & Integration Audits'
    ],
    featuredCaseStudySlug: 'marketmind-ai',
  },
  {
    slug: 'data-science-analytics',
    title: 'Data Science & Analytics',
    shortSummary:
      'Actionable business intelligence dashboards, predictive machine learning models, automated data cleaning pipelines, and applied computer vision.',
    iconName: 'BarChart3',
    problemContext:
      'Companies amass vast operational datasets but lack the pipelines and analytics infrastructure to extract predictive insights or guide strategic decisions.',
    targetAudience: ['Agricultural Enterprises', 'Environmental Research Groups', 'Healthcare Organizations', 'Commercial Retails'],
    technicalApproach:
      'We develop end-to-end data pipelines from exploratory data analysis to production predictive models utilizing Python, PyTorch, OpenCV, and modern analytics dashboards.',
    deliverables: [
      'Automated Data Ingestion & Transformation Pipelines',
      'Custom Predictive Machine Learning Models',
      'Applied Computer Vision Image Recognition',
      'Interactive Business Intelligence Dashboards',
      'Exploratory Data Analysis & Strategic Reports'
    ],
    featuredCaseStudySlug: 'deforestation-analysis',
  },
  {
    slug: 'brand-digital-media',
    title: 'Branding & Digital Media',
    shortSummary:
      'Corporate brand identity systems, vector asset design, technical presentations, and unified marketing collateral aligned with company positioning.',
    iconName: 'Palette',
    problemContext:
      'Innovative technology offerings often suffer from inconsistent visual presentation, amateur graphics, and fragmented branding that diminishes commercial authority.',
    targetAudience: ['New Product Launches', 'Established Companies Rebranding', 'Professional Services Firms'],
    technicalApproach:
      'We develop disciplined visual identity standards, vector mark suites, and technical collateral founded on mathematical grid structures, typography hierarchy, and color harmony.',
    deliverables: [
      'Corporate Visual Identity Guidelines',
      'Vector Logo Marks & Brand Asset Suites',
      'Technical Slide Decks & Executive Presentations',
      'Digital Collateral & Social Asset Templates',
      'Branded Marketing Materials'
    ],
  },
];
