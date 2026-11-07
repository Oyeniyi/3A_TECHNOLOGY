/**
 * Commercial Services Static Data
 * Strictly contains the 6 approved commercial service categories.
 * Excludes Branding & Digital Media. Separates Technology Consulting and Academic Research & Project Support.
 */

import { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web & Digital Product Development',
    shortSummary:
      'Corporate websites, school and institutional portals, landing pages, customer portals, and web applications built for speed and clarity.',
    iconName: 'Globe',
    problemContext:
      'Businesses, schools, and institutions often lose credibility and enquiries when their websites load slowly on mobile devices, look outdated, or make it difficult for visitors to find information and take action.',
    targetAudience: [
      'Corporate Organizations & SMEs',
      'Schools, Colleges & Universities',
      'Startups & Digital Ventures',
      'Public & Private Institutions',
    ],
    technicalApproach:
      'We build responsive web platforms using React, Next.js, and clean semantic HTML. Every site is structured for fast mobile loading, clear user flows, search visibility, and straightforward content updates.',
    deliverables: [
      'Corporate and business websites',
      'School and institutional websites',
      'Landing pages',
      'Customer portals',
      'Web applications',
      'Online platforms and digital portals',
      'Website redesign and optimization',
    ],
    featuredCaseStudySlug: 'image-compression-tool',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Engineering',
    shortSummary:
      'Custom business applications, administrative systems, school management portals, payment and result portals, digital record systems, and backend APIs.',
    iconName: 'Code',
    problemContext:
      'Off-the-shelf software rarely matches local administrative or operational workflows. Teams end up relying on scattered spreadsheets, paper records, and manual reconciliation that cause delays and errors.',
    targetAudience: [
      'Schools & Educational Administrators',
      'Growing Businesses & Operations Teams',
      'Logistics & Service Organizations',
      'Institutional Departments',
    ],
    technicalApproach:
      'We design and build maintainable software using TypeScript, Node.js, Python, and structured relational databases, complete with role-based access control, clear data validation, and reliable audit trails.',
    deliverables: [
      'Custom business applications',
      'Administrative and management systems',
      'School management portals',
      'Payment and result management systems',
      'Digital record management systems',
      'Workflow and operational software',
      'API and backend development',
    ],
    featuredCaseStudySlug: 'electronic-logbook',
  },
  {
    slug: 'ai-automation',
    title: 'Artificial Intelligence & Automation',
    shortSummary:
      'Practical AI integration into business workflows, AI assistants, document processing, workflow automation, and AI readiness consulting.',
    iconName: 'Cpu',
    problemContext:
      'Organizations spend hours each week on repetitive document handling, manual data entry, routine customer questions, and disconnected software steps that can be automated reliably.',
    targetAudience: [
      'Businesses Adopting AI Practically',
      'Operations & Support Teams',
      'Financial & Professional Services',
      'Organizations Streamlining Workflows',
    ],
    technicalApproach:
      'We assess your current processes first, then integrate language models, retrieval systems, and automated pipelines where they genuinely save time—with strict data privacy and human-in-the-loop controls.',
    deliverables: [
      'AI integration into existing business processes',
      'AI-powered applications',
      'AI assistants and knowledge systems',
      'Business workflow automation',
      'Document processing and extraction',
      'AI consultation and implementation',
      'AI readiness and process assessment',
    ],
    featuredCaseStudySlug: 'marketmind-ai',
  },
  {
    slug: 'data-science-analytics',
    title: 'Data Science & Analytics',
    shortSummary:
      'Data extraction, cleaning, visualization, statistical analysis, predictive machine learning, computer vision, and data-driven research support.',
    iconName: 'BarChart3',
    problemContext:
      'Many organizations and research teams collect large volumes of raw data but lack clean pipelines, clear visual dashboards, or statistical and machine learning models to answer practical questions.',
    targetAudience: [
      'Businesses & Operations Leaders',
      'Research Groups & Environmental Teams',
      'Healthcare & Agricultural Organizations',
      'Data-Driven Enterprises',
    ],
    technicalApproach:
      'We use Python, SQL, Pandas, PyTorch, OpenCV, and modern reporting tools to extract and clean messy datasets, run rigorous statistical analyses, train predictive or computer vision models, and present clear findings.',
    deliverables: [
      'Data extraction and processing',
      'Data cleaning and transformation',
      'Data visualization',
      'Statistical analysis',
      'Machine learning implementation',
      'Predictive modelling',
      'Computer vision and image analysis',
      'Data-driven research support',
    ],
    featuredCaseStudySlug: 'deforestation-analysis',
  },
  {
    slug: 'technology-consulting',
    title: 'Technology Consulting',
    shortSummary:
      'Expert technology advisory, digital transformation guidance, software and tool selection, AI adoption planning, and technical feasibility assessments.',
    iconName: 'Compass',
    problemContext:
      'Businesses, institutions, and entrepreneurs often face costly technology decisions without unbiased technical guidance—leading to mismatched software purchases, stalled digital projects, or unclear AI strategies.',
    targetAudience: [
      'Business Owners & Executives',
      'Organizations & Institutions',
      'Entrepreneurs & Startup Founders',
      'Professionals Planning Digital Initiatives',
    ],
    technicalApproach:
      'We work closely with your team to understand your operational goals, audit existing systems, evaluate build-versus-buy options, assess technical feasibility, and produce a clear, practical implementation roadmap.',
    deliverables: [
      'Technology advisory and professional consultation',
      'Digital transformation guidance',
      'Software and technology solution recommendations',
      'AI adoption and implementation advisory',
      'Technical assessment and feasibility studies',
      'Technology strategy and solution planning',
      'Guidance on selecting and integrating appropriate digital tools',
    ],
  },
  {
    slug: 'academic-research-support',
    title: 'Academic Research & Project Support',
    shortSummary:
      'Technical consultation, implementation mentorship, data analysis, computational modelling, and documentation support for computing and mathematics research.',
    iconName: 'GraduationCap',
    problemContext:
      'University undergraduates, postgraduate researchers, and technical scholars working on computing, data science, or mathematical projects often need structured technical guidance on methodology, code implementation, data analysis, and report presentation.',
    targetAudience: [
      'Undergraduate Computing & Mathematics Students',
      'Postgraduate (PGD, MSc, PhD) Researchers',
      'Academic & Technical Research Teams',
      'Independent Scholars in Computing & Quantitative Fields',
    ],
    technicalApproach:
      'We provide structured research consultation, code and model implementation mentorship in Python and modern web stacks, statistical and computational verification, and clear technical documentation and defence preparation.',
    deliverables: [
      'Research topic exploration and consultation',
      'Research methodology and technical guidance',
      'Student project research and implementation',
      'Software development and system implementation',
      'Data collection, extraction, cleaning, and analysis',
      'Data science and machine learning implementation',
      'Mathematical and computational modelling',
      'Data visualization and interpretation',
      'Technical documentation and project report preparation',
      'Project presentation and technical defence preparation',
    ],
    ethicalNote:
      'We provide research consultation, technical mentorship, software/model implementation support, and documentation guidance to help researchers and students understand and defend their work. We do not offer generic assignment writing or guarantee academic grades.',
    featuredCaseStudySlug: 'medicinal-plant-recognition',
  },
];
