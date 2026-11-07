/**
 * Commercial Services Static Data
 * Strictly contains the 6 approved commercial service categories.
 * Excludes Branding & Digital Media. Separates Technology Consulting and Academic Research & Project Support.
 * Maps each service to verified commercial or research portfolio evidence.
 */

import { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web & Digital Product Development',
    shortSummary:
      'Business websites, landing pages, school and institutional portals, customer portals, and custom digital experiences built for speed and clarity.',
    iconName: 'Globe',
    problemContext:
      'Businesses, schools, and organizations often lose credibility and enquiries when their websites load slowly on mobile phones, look outdated, or make it hard for visitors to understand what they offer and take action.',
    targetAudience: [
      'Corporate Organizations & SMEs',
      'Schools, Colleges & Universities',
      'Service Businesses & Brands',
      'Events & Custom Digital Experiences',
    ],
    technicalApproach:
      'We design and build responsive business websites, interactive landing pages, institutional portals, and custom digital experiences using React, Next.js, TypeScript, and Tailwind CSS. Every site is built for fast mobile loading, clear enquiry paths, and strong search visibility.',
    deliverables: [
      'Corporate and business websites',
      'School and institutional websites',
      'Landing pages',
      'Customer portals',
      'Web applications',
      'Online platforms and digital portals',
      'Website redesign and optimization',
    ],
    featuredCaseStudySlug: 'raph2-interiors',
    relatedProjectSlugs: [
      'raph2-interiors',
      'dominion-college-portal',
      'custom-wedding-invitation-platform',
    ],
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
      'Supermarkets, Retail & Operations Teams',
      'Logistics & Service Organizations',
      'Institutional Departments',
    ],
    technicalApproach:
      'We design and build maintainable software using TypeScript, Node.js, Python, and structured relational databases, complete with role-based access control, payment and result workflows, and reliable audit trails.',
    deliverables: [
      'Custom business applications',
      'Administrative and management systems',
      'School management portals',
      'Payment and result management systems',
      'Digital record management systems',
      'Workflow and operational software',
      'API and backend development',
    ],
    featuredCaseStudySlug: 'dominion-college-portal',
    relatedProjectSlugs: [
      'marketmind-ai',
      'dominion-college-portal',
      'custom-wedding-invitation-platform',
    ],
  },
  {
    slug: 'ai-automation',
    title: 'Artificial Intelligence & Automation',
    shortSummary:
      'Practical AI integration into business workflows, internal AI operations tools, AI assistants, document processing, and AI readiness consulting.',
    iconName: 'Cpu',
    problemContext:
      'Businesses and operations teams spend hours each week on repetitive document handling, manual operational lookups, routine questions, and disconnected software steps that can be simplified with practical AI tools.',
    targetAudience: [
      'Retail, Supermarkets & Commercial Enterprises',
      'Operations & Support Teams',
      'Financial & Professional Services',
      'Organizations Streamlining Workflows',
    ],
    technicalApproach:
      'We review your current processes first, then build and integrate internal AI-enabled operations tools, retrieval assistants, and automated workflows where they genuinely save time, with clear data privacy and operational controls.',
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
    relatedProjectSlugs: ['marketmind-ai'],
  },
  {
    slug: 'data-science-analytics',
    title: 'Data Science & Analytics',
    shortSummary:
      'Data extraction, cleaning, visualization, statistical analysis, predictive machine learning, computer vision, and data-driven research support.',
    iconName: 'BarChart3',
    problemContext:
      'Many organizations and research teams collect large volumes of raw data or imagery but lack clean pipelines, clear visual dashboards, or statistical and machine learning models to answer practical questions.',
    targetAudience: [
      'Businesses & Operations Leaders',
      'Research Groups & Environmental Teams',
      'Healthcare & Agricultural Organizations',
      'Data-Driven Enterprises',
    ],
    technicalApproach:
      'We use Python, SQL, Pandas, Scikit-Learn, TensorFlow, PyTorch, OpenCV, and interactive reporting tools to clean messy datasets, run rigorous statistical evaluations, train predictive or computer vision models, and present clear findings.',
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
    featuredCaseStudySlug: 'medicinal-plant-recognition',
    relatedProjectSlugs: [
      'medicinal-plant-recognition',
      'image-compression-analysis',
      'deforestation-analysis',
    ],
  },
  {
    slug: 'technology-consulting',
    title: 'Technology Consulting',
    shortSummary:
      'Expert technology advisory, digital transformation guidance, software and tool selection, AI adoption planning, and technical feasibility assessments.',
    iconName: 'Compass',
    problemContext:
      'Businesses, institutions, and entrepreneurs often face costly technology decisions without independent technical guidance, which leads to mismatched software purchases, stalled digital projects, or unclear AI plans.',
    targetAudience: [
      'Business Owners & Executives',
      'Schools, Colleges & Institutions',
      'Entrepreneurs & Startup Founders',
      'Professionals Planning Digital Initiatives',
    ],
    technicalApproach:
      'We work closely with your leadership and operational teams to understand your goals, audit existing processes, evaluate build-versus-buy options, assess technical feasibility, and produce a clear implementation roadmap.',
    deliverables: [
      'Technology advisory and professional consultation',
      'Digital transformation guidance',
      'Software and technology solution recommendations',
      'AI adoption and implementation advisory',
      'Technical assessment and feasibility studies',
      'Technology strategy and solution planning',
      'Guidance on selecting and integrating appropriate digital tools',
    ],
    featuredCaseStudySlug: 'marketmind-ai',
    relatedProjectSlugs: ['marketmind-ai', 'dominion-college-portal', 'raph2-interiors'],
  },
  {
    slug: 'academic-research-support',
    title: 'Academic Research & Project Support',
    shortSummary:
      'Technical consultation, implementation mentorship, data analysis, computational modelling, and documentation support for computing and mathematics research.',
    iconName: 'GraduationCap',
    problemContext:
      'University undergraduates, postgraduate researchers, and technical scholars working on computing, data science, or mathematical projects often need structured technical guidance on methodology, code implementation, experimental evaluation, and report presentation.',
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
    relatedProjectSlugs: [
      'medicinal-plant-recognition',
      'image-compression-analysis',
      'deforestation-analysis',
    ],
  },
];
