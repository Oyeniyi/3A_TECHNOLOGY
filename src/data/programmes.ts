/**
 * 3A Techvolution Academy — AI-Focused Course Catalogue Static Data
 * Supports course-specific enrolment URLs, 5 lifecycle statuses, and regular updates.
 */

import { AcademyProgramme } from '@/types/content';

export const programmes: AcademyProgramme[] = [
  {
    slug: 'ai-fluency-prompt-engineering',
    title: 'AI Fundamentals, Fluency & Practical Prompt Engineering',
    shortDescription:
      'Move from casual chatbot prompting to structured, reliable AI usage for research, writing, analysis, and daily professional work.',
    overview:
      'Designed for students, graduates, professionals, and business owners who want a clear, practical foundation in Artificial Intelligence. You will learn how modern language models and generative AI tools work, how to write structured prompts that produce dependable results, and how to apply AI responsibly in daily work.',
    learningOutcomes: [
      'Understand how modern Large Language Models (LLMs) and multimodal AI tools operate and where they fail.',
      'Write structured, repeatable prompts for research synthesis, report drafting, data summarization, and problem-solving.',
      'Build personal and team prompt libraries for recurring professional and academic workflows.',
      'Verify AI outputs, avoid hallucinations, and protect sensitive organizational or personal data.',
    ],
    curriculumModules: [
      'Module 1: AI Literacy — How Generative AI & LLMs Actually Work',
      'Module 2: Structured Prompt Engineering & Context Design',
      'Module 3: AI for Research, Writing, Analysis & Documentation',
      'Module 4: AI for Productivity, Spreadsheets & Presentations',
      'Module 5: Responsible AI Use, Verification & Data Privacy',
    ],
    level: 'Beginner',
    format: 'Hybrid',
    duration: '4 Weeks',
    targetAudience: ['University Students & Graduates', 'Working Professionals', 'Business Owners & Entrepreneurs'],
    prerequisites: ['Basic computer and internet literacy', 'A smartphone or laptop'],
    instructor: {
      name: '3A AI Education Team',
      role: 'Practicing AI & Software Engineers',
    },
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Inquire for Cohort Tuition',
    enrollmentUrl: 'https://forms.google.com/3a-ai-fluency-cohort',
    status: 'Open for Enrolment',
    startDate: 'Next Cohort — Rolling Intake',
    featured: true,
  },
  {
    slug: 'vibe-coding-ai-software-development',
    title: 'Vibe Coding & AI-Assisted Software Development',
    shortDescription:
      'Learn how to build, understand, debug, and ship functional web applications and software prototypes using AI coding tools and agents.',
    overview:
      'Vibe coding is the practice of collaborating with AI coding assistants and agents to turn software ideas into working applications. At 3A Techvolution Academy, we teach you how to use AI coding tools responsibly—so you do not just generate code blindly, but understand the architecture, inspect the logic, debug issues, and ship reliable software prototypes.',
    learningOutcomes: [
      'Turn product ideas into structured specifications and prompts that AI coding agents can execute accurately.',
      'Build and style responsive websites and full-stack web prototypes using modern frameworks and AI assistants.',
      'Read, trace, test, and debug AI-generated code so your applications work reliably.',
      'Deploy functional web prototypes and manage version control with Git and GitHub.',
    ],
    curriculumModules: [
      'Module 1: Foundations of AI-Assisted Development & Vibe Coding',
      'Module 2: Specification-Driven Prompting for AI Coding Agents',
      'Module 3: Building Web Interfaces & Full-Stack Prototypes with AI',
      'Module 4: Reading, Debugging, Testing & Securing AI-Generated Code',
      'Module 5: Capstone — From Idea to Deployed Software Prototype',
    ],
    level: 'Beginner',
    format: 'Weekend Cohort',
    duration: '6 Weeks',
    targetAudience: [
      'Aspiring Builders & Founders',
      'Students & Graduates',
      'Designers & Product Managers',
      'Developers Adopting AI Workflows',
    ],
    prerequisites: ['Basic computer literacy', 'A personal laptop', 'Curiosity to build and test working software'],
    instructor: {
      name: '3A Engineering Lead',
      role: 'Full-Stack & AI Systems Engineer',
    },
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Inquire for Cohort Tuition',
    enrollmentUrl: 'https://forms.google.com/3a-vibe-coding-cohort',
    status: 'Open for Enrolment',
    startDate: 'Next Cohort — Weekend Track',
    featured: true,
  },
  {
    slug: 'ai-automation-business-workflows',
    title: 'AI Automation, Agents & Business Workflow Design',
    shortDescription:
      'Design and build practical AI automations, knowledge assistants, and multi-step business workflows without unnecessary complexity.',
    overview:
      'A practical programme for professionals, operations leads, and technical builders who want to connect AI models to real business processes. Learn how to map repetitive tasks, connect APIs and automation tools, build document and knowledge assistants, and measure time saved.',
    learningOutcomes: [
      'Audit business operations to identify high-value tasks suitable for AI automation.',
      'Build automated workflows connecting forms, emails, spreadsheets, documents, and AI models.',
      'Design knowledge retrieval (RAG) assistants grounded in company documents.',
      'Implement human review steps, error handling, and cost guardrails.',
    ],
    curriculumModules: [
      'Module 1: Mapping Business Processes for AI & Automation',
      'Module 2: Connecting LLMs with Workflow Automation Tools & APIs',
      'Module 3: Document Extraction & Knowledge Retrieval Assistants',
      'Module 4: Practical AI Agents & Guardrails',
      'Module 5: Capstone — Building an End-to-End Business Automation',
    ],
    level: 'Intermediate',
    format: 'Online Live',
    duration: '6 Weeks',
    targetAudience: ['Operations & Business Professionals', 'Entrepreneurs', 'Software Developers & Analysts'],
    prerequisites: ['Comfort with digital workplace tools or basic AI prompting', 'A personal laptop'],
    instructor: {
      name: '3A AI Automation Practice',
      role: 'AI & Workflow Engineers',
    },
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Inquire for Cohort Tuition',
    enrollmentUrl: 'https://forms.google.com/3a-ai-automation-cohort',
    status: 'Upcoming',
    startDate: 'Schedule Announced Soon',
    featured: true,
  },
  {
    slug: 'executive-ai-adoption-organisations',
    title: 'Practical AI for Business Leaders & Institutional Teams',
    shortDescription:
      'Executive and team training on adopting AI tools safely, improving team productivity, and planning organizational AI initiatives.',
    overview:
      'Tailored for company teams, school administrators, and institutional leaders seeking clear guidance on how to adopt AI across their organization without risking data security or wasting budget on hype.',
    learningOutcomes: [
      'Evaluate where AI adds measurable value across administration, customer service, research, and operations.',
      'Establish practical workplace guidelines for safe and ethical AI usage.',
      'Equip staff with everyday AI workflows for communication, reporting, and planning.',
    ],
    curriculumModules: [
      'Session 1: Demystifying AI for Decision Makers',
      'Session 2: High-Impact AI Workflows for Teams & Administration',
      'Session 3: Data Privacy, Governance & Organizational Rollout',
    ],
    level: 'All Levels',
    format: 'In-Person',
    duration: '2-Day Intensive / Custom Schedule',
    targetAudience: ['Corporate Teams', 'School & University Leadership', 'Public & Private Institutions'],
    prerequisites: ['No prior programming experience required'],
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Custom Organizational Quote',
    status: 'Registration Closed',
    featured: false,
  },
];

export const ACADEMY_SUBJECT_AREAS = [
  'AI Fundamentals and AI Literacy',
  'AI Fluency and Practical AI Adoption',
  'Prompt Engineering',
  'Generative AI Tools and Applications',
  'AI for Productivity and Professional Work',
  'AI for Business and Entrepreneurship',
  'AI Automation and Workflow Design',
  'AI Agents and Practical AI Applications',
  'AI-Assisted Software Development',
  'Vibe Coding and Building Applications with AI',
] as const;
