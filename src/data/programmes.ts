/**
 * 3A TECHVOLUTION ACADEMY — Learning Pathways, Courses, Cohorts & Support Services Data
 * Separates permanent course definitions from cohort/intake schedules and maps courses
 * into audience-based learning pathways without invented registration URLs.
 */

import {
  AcademyProgramme,
  LearningPathway,
  AcademySupportService,
} from '@/types/content';

export const learningPathways: LearningPathway[] = [
  {
    slug: 'ai-for-beginners',
    title: 'AI for Beginners',
    shortTitle: 'Beginners & Everyday Users',
    audienceSummary: 'Individuals new to AI and technology seeking a solid, practical foundation.',
    description:
      'Start from first principles. Understand what Artificial Intelligence is, how modern generative AI tools work, how to write effective prompts, and how to use AI safely in everyday tasks.',
    focusAreas: [
      'AI fundamentals and literacy',
      'Understanding different categories of AI',
      'Effective use of AI tools',
      'Prompt engineering',
      'Practical everyday AI applications',
    ],
    recommendedFor: [
      'Complete beginners to AI and modern digital tools',
      'Students and career switchers building foundational digital literacy',
      'Anyone who wants to move beyond trial-and-error chatbot prompting',
    ],
    courseSlugs: ['ai-fluency-prompt-engineering'],
    ctaLabel: 'Explore Beginner Pathway',
    ctaHref: '/academy/pathways#ai-for-beginners',
  },
  {
    slug: 'ai-for-students-researchers',
    title: 'AI for Students & Researchers',
    shortTitle: 'Students & Researchers',
    audienceSummary: 'Undergraduates, postgraduates, and academic researchers.',
    description:
      'Use AI responsibly to accelerate literature discovery, structure technical learning, assist with data analysis, and improve research productivity without compromising academic integrity.',
    focusAreas: [
      'AI-assisted learning',
      'Research productivity',
      'AI-assisted data analysis',
      'Responsible AI use in academic work',
      'AI-supported technical learning',
    ],
    recommendedFor: [
      'University and polytechnic students across computing, science, and engineering',
      'Final-year project students and postgraduate researchers',
      'Educators and academic staff exploring responsible AI workflows',
    ],
    courseSlugs: ['ai-fluency-prompt-engineering', 'vibe-coding-ai-software-development'],
    ctaLabel: 'Explore Student & Research Pathway',
    ctaHref: '/academy/pathways#ai-for-students-researchers',
  },
  {
    slug: 'ai-for-graduates-nysc',
    title: 'AI for Graduates & NYSC Members',
    shortTitle: 'Graduates & NYSC Members',
    audienceSummary: 'Recent graduates and NYSC corps members preparing for the modern workplace.',
    description:
      'Stand out in the job market by combining practical AI fluency, prompt engineering, career positioning, and workplace productivity workflows.',
    focusAreas: [
      'AI fluency',
      'Prompt engineering',
      'Career preparation',
      'CV and cover-letter development',
      'Interview preparation',
      'AI-powered productivity and employability',
    ],
    recommendedFor: [
      'Serving NYSC corps members preparing for post-service careers',
      'Recent university and polytechnic graduates entering the workforce',
      'Early-career professionals upgrading their workplace toolkit',
    ],
    courseSlugs: ['ai-fluency-prompt-engineering', 'vibe-coding-ai-software-development'],
    ctaLabel: 'Explore Graduate & NYSC Pathway',
    ctaHref: '/academy/pathways#ai-for-graduates-nysc',
  },
  {
    slug: 'ai-for-professionals-businesses',
    title: 'AI for Professionals & Businesses',
    shortTitle: 'Professionals & Businesses',
    audienceSummary: 'Working professionals, entrepreneurs, business owners, and institutional teams.',
    description:
      'Adopt AI practically across daily operations, communication, reporting, and business workflows to save time and improve decision-making.',
    focusAreas: [
      'Workplace AI adoption',
      'Business productivity',
      'AI-assisted workflows',
      'Business process automation',
      'Practical AI applications',
    ],
    recommendedFor: [
      'Business owners, managers, and operations leads',
      'Working professionals in administration, finance, consulting, and services',
      'Corporate and institutional teams seeking structured AI adoption',
    ],
    courseSlugs: [
      'ai-fluency-prompt-engineering',
      'ai-automation-business-workflows',
      'executive-ai-adoption-organisations',
    ],
    ctaLabel: 'Explore Professional Pathway',
    ctaHref: '/academy/pathways#ai-for-professionals-businesses',
  },
  {
    slug: 'ai-development-vibe-coding',
    title: 'AI Development & Vibe Coding',
    shortTitle: 'Builders & Vibe Coding',
    audienceSummary: 'Aspiring software builders, developers, founders, and technical creators.',
    description:
      'Learn how to collaborate with AI coding assistants and agents to design, build, understand, debug, and deploy functional web applications and automated systems.',
    focusAreas: [
      'AI-assisted software development',
      'Prompt-driven application development',
      'Building practical applications',
      'AI integration and automation',
      'Development workflows',
    ],
    recommendedFor: [
      'Aspiring builders who want to turn ideas into working software prototypes',
      'Students and developers adopting AI-assisted software engineering workflows',
      'Technical founders and product creators building web and AI tools',
    ],
    courseSlugs: ['vibe-coding-ai-software-development', 'ai-automation-business-workflows'],
    ctaLabel: 'Explore Vibe Coding Pathway',
    ctaHref: '/academy/pathways#ai-development-vibe-coding',
  },
];

export const programmes: AcademyProgramme[] = [
  {
    slug: 'ai-fluency-prompt-engineering',
    title: 'AI Fundamentals, Fluency & Practical Prompt Engineering',
    shortDescription:
      'Move from casual chatbot prompting to structured, reliable AI usage for learning, research, writing, career preparation, and daily professional work.',
    overview:
      'Designed for beginners, students, NYSC members, graduates, and working professionals who want a clear, practical foundation in Artificial Intelligence. You will learn how modern language models and generative AI tools work, how to write structured prompts that produce dependable results, and how to apply AI responsibly in academic and workplace tasks.',
    learningPathways: [
      'ai-for-beginners',
      'ai-for-students-researchers',
      'ai-for-graduates-nysc',
      'ai-for-professionals-businesses',
    ],
    learningOutcomes: [
      'Understand how modern Large Language Models (LLMs) and multimodal AI tools operate and where they fail.',
      'Write structured, repeatable prompts for research synthesis, report drafting, data summarization, and problem-solving.',
      'Apply AI responsibly for academic learning, CV/interview preparation, and workplace productivity.',
      'Verify AI outputs, avoid hallucinations, and protect sensitive organizational or personal data.',
    ],
    curriculumModules: [
      'Module 1: AI Literacy — Understanding Categories of AI & How LLMs Work',
      'Module 2: Structured Prompt Engineering & Context Design',
      'Module 3: AI for Research, Academic Learning & Documentation',
      'Module 4: AI for Career Readiness, Productivity & Workplace Workflows',
      'Module 5: Responsible AI Use, Verification & Data Privacy',
    ],
    level: 'Beginner',
    format: 'Hybrid',
    duration: '4 Weeks',
    targetAudience: [
      'Beginners to AI & Technology',
      'University Students, Graduates & NYSC Members',
      'Working Professionals & Business Owners',
    ],
    prerequisites: ['Basic computer and internet literacy', 'A smartphone or laptop'],
    instructor: {
      name: '3A AI Education Team',
      role: 'Practicing AI & Software Engineers',
    },
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Inquire for Cohort Tuition',
    cohortInfo: {
      cohortLabel: 'Rolling Cohort Intake',
      intakeWindow: 'Enrolment Open for Upcoming Cohort',
      scheduleNotes: 'Weekend live sessions + guided practical exercises',
    },
    enquiryRoute:
      '/contact?type=course-enrolment&subject=Course+Enrolment:+AI+Fundamentals+%26+Prompt+Engineering',
    status: 'Open for Enrolment',
    startDate: 'Next Cohort — Rolling Intake',
    published: true,
    featured: true,
  },
  {
    slug: 'vibe-coding-ai-software-development',
    title: 'Vibe Coding & AI-Assisted Software Development',
    shortDescription:
      'Learn how to build, understand, debug, and ship functional web applications and software prototypes using AI coding tools and agents.',
    overview:
      'Vibe coding is the practice of collaborating with AI coding assistants and agents to turn software ideas into working applications. At 3A Techvolution Academy, we teach you how to use AI coding tools responsibly—so you do not just generate code blindly, but understand the architecture, inspect the logic, debug issues, and ship reliable software prototypes.',
    learningPathways: ['ai-development-vibe-coding', 'ai-for-students-researchers', 'ai-for-graduates-nysc'],
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
      'Students, IT/SIWES Trainees & Graduates',
      'Designers & Product Managers',
      'Developers Adopting AI Workflows',
    ],
    prerequisites: [
      'Basic computer literacy',
      'A personal laptop',
      'Curiosity to build and test working software',
    ],
    instructor: {
      name: '3A Engineering Lead',
      role: 'Full-Stack & AI Systems Engineer',
    },
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Inquire for Cohort Tuition',
    cohortInfo: {
      cohortLabel: 'Weekend Builder Track',
      intakeWindow: 'Enrolment Open',
      scheduleNotes: '6-week hands-on build cohort with code review mentorship',
    },
    enquiryRoute:
      '/contact?type=course-enrolment&subject=Course+Enrolment:+Vibe+Coding+%26+AI-Assisted+Development',
    status: 'Open for Enrolment',
    startDate: 'Next Cohort — Weekend Track',
    published: true,
    featured: true,
  },
  {
    slug: 'ai-automation-business-workflows',
    title: 'AI Automation, Agents & Business Workflow Design',
    shortDescription:
      'Design and build practical AI automations, knowledge assistants, and multi-step business workflows without unnecessary complexity.',
    overview:
      'A practical programme for professionals, operations leads, and technical builders who want to connect AI models to real business processes. Learn how to map repetitive tasks, connect APIs and automation tools, build document and knowledge assistants, and measure operational impact.',
    learningPathways: ['ai-for-professionals-businesses', 'ai-development-vibe-coding'],
    learningOutcomes: [
      'Audit business operations to identify high-value tasks suitable for AI automation.',
      'Build automated workflows connecting forms, emails, spreadsheets, documents, and AI models.',
      'Design knowledge retrieval (RAG) assistants grounded in organizational documents.',
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
    targetAudience: [
      'Operations & Business Professionals',
      'Entrepreneurs & Founders',
      'Software Developers & Analysts',
    ],
    prerequisites: ['Comfort with digital workplace tools or basic AI prompting', 'A personal laptop'],
    instructor: {
      name: '3A AI Automation Practice',
      role: 'AI & Workflow Engineers',
    },
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Inquire for Cohort Tuition',
    cohortInfo: {
      cohortLabel: 'Upcoming Live Cohort',
      intakeWindow: 'Register Interest for Next Intake',
      scheduleNotes: 'Cohort dates announced to registered applicants',
    },
    enquiryRoute:
      '/contact?type=course-info&subject=Register+Interest:+AI+Automation+%26+Business+Workflows',
    status: 'Upcoming',
    startDate: 'Upcoming Cohort — Register Interest',
    published: true,
    featured: true,
  },
  {
    slug: 'executive-ai-adoption-organisations',
    title: 'Practical AI for Business Leaders & Institutional Teams',
    shortDescription:
      'Customized executive and team training on adopting AI tools safely, improving team productivity, and planning organizational AI initiatives.',
    overview:
      'Tailored for company teams, school administrators, and institutional leaders seeking clear guidance on how to adopt AI across their organization without risking data security or wasting budget on hype.',
    learningPathways: ['ai-for-professionals-businesses'],
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
    format: 'Customized Schedule',
    duration: 'Customized Duration (e.g., 2-Day Intensive)',
    targetAudience: [
      'Corporate Teams & Departments',
      'School & University Leadership',
      'Public & Private Institutions',
    ],
    prerequisites: ['No prior programming experience required'],
    imagePlaceholder: '/images/brand/3a-brand-slide.png',
    feeDisplay: 'Custom Organizational Quote',
    cohortInfo: {
      cohortLabel: 'Institutional & Corporate Delivery',
      intakeWindow: 'Scheduled on Request for Teams',
      scheduleNotes: 'Delivered in-person, online, or hybrid based on organizational needs',
    },
    enquiryRoute:
      '/contact?type=customized-training&subject=Customized+Training:+Practical+AI+for+Teams',
    isCustomizedTraining: true,
    status: 'Registration Closed',
    published: true,
    featured: false,
  },
];

export const academySupportServices: AcademySupportService[] = [
  {
    slug: 'siwes-support',
    title: 'IT / SIWES Training Support',
    badgeLabel: 'Industrial Training & SIWES Guidance',
    shortSummary:
      'Practical technology skill development, structured weekly learning activities, programming and AI mentorship, and logbook/report documentation guidance for university and polytechnic students.',
    whatItIs:
      'Our IT / SIWES Training Support programme provides university and polytechnic students undertaking Industrial Training (IT) or the Student Industrial Work Experience Scheme (SIWES) with genuine hands-on technology mentorship. Instead of spending your placement period without technical direction, you follow structured learning tracks, complete weekly practical exercises, build real mini-projects, and learn how to accurately document and defend the technical work you perform.',
    whoItIsFor: [
      'University undergraduates undertaking 3-month or 6-month SIWES / Industrial Training',
      'Polytechnic and Monotechnic students on mandatory Industrial Training placements',
      'Students in Computer Science, Software Engineering, Information Technology, Mathematics, Engineering, and related disciplines',
      'Trainees who want genuine programming, web development, data science, or AI skills before graduation',
    ],
    whatToExpect: [
      'An initial skill assessment to match your current level with a practical technology track',
      'Weekly technical tasks, hands-on coding exercises, and guided project milestones',
      'Code review and mentorship from practicing software and AI engineers',
      'Clear guidance on how to structure your SIWES logbook entries around the actual technical tasks you complete each week',
      'Mentorship on writing a clear, well-structured SIWES technical report and preparing for your departmental seminar defence',
    ],
    areasCovered: [
      'Practical technology skill development',
      'Programming and software development guidance (Python, JavaScript/TypeScript, Web Development)',
      'Data science and AI learning support',
      'Technical task guidance and code reviews',
      'Weekly learning activities and practical exercises',
      'SIWES logbook documentation guidance',
      'Technical report preparation guidance',
      'IT/SIWES presentation and defence preparation',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Submit Your IT/SIWES Support Request',
        description:
          'Share your institution, department, training duration, and the technology area you want to focus on during your placement.',
      },
      {
        step: '02',
        title: 'Skill Diagnostic & Learning Plan',
        description:
          'We review your current foundation and map out a structured weekly learning and practical task schedule aligned with your SIWES timeline.',
      },
      {
        step: '03',
        title: 'Hands-On Weekly Tasks & Mentorship',
        description:
          'You work through practical coding, data, or AI exercises with regular guidance so you gain real technical competence.',
      },
      {
        step: '04',
        title: 'Documentation & Defence Preparation',
        description:
          'We guide you on organizing your logbook records, structuring your technical report, and preparing your presentation slides to defend the work you completed.',
      },
    ],
    ethicalNotice:
      'Academic & Industrial Training Integrity Policy: 3A Techvolution Academy does not issue fabricated attendance records, backdated SIWES logbooks, or ghostwritten reports for placements that did not occur. Our support is designed to help you acquire genuine practical technology skills and accurately document and defend the work you actually understand and perform.',
    faqs: [
      {
        question: 'Do you fill out SIWES logbooks or write reports for students without training?',
        answer:
          'No. Our goal is to help you build genuine practical skills. We guide you through real weekly technical tasks and show you how to clearly document the work you actually carried out in your logbook and technical report.',
      },
      {
        question: 'What if I am a beginner in programming when starting my IT/SIWES?',
        answer:
          'We tailor your weekly learning plan to your current level—starting with foundational programming, web development, data analysis, or AI literacy before progressing to hands-on mini-projects.',
      },
      {
        question: 'Is this service the same as final-year Academic Project Support?',
        answer:
          'No. IT/SIWES Training Support focuses on industrial training skill development, weekly practical tasks, and SIWES logbook/report guidance. If you are working on an undergraduate or postgraduate thesis/dissertation project, please visit our dedicated Academic Project Support page.',
      },
    ],
    ctaLabel: 'Get IT/SIWES Support',
    enquiryHref: '/contact?type=siwes-support&subject=IT+%2F+SIWES+Training+Support+Enquiry',
  },
  {
    slug: 'project-support',
    title: 'Academic Project Support',
    badgeLabel: 'Technical Mentorship & Project Guidance',
    shortSummary:
      'Structured technical consultation, research planning, data analysis, model/software implementation mentorship, and defence preparation for computing, AI, data science, and mathematics students.',
    whatItIs:
      'Our Academic Project Support service provides students and researchers with structured technical mentorship throughout their academic project lifecycle. Whether you are refining a final-year project topic, sourcing and cleaning a dataset, building a machine learning model or software application, or preparing for your project defence, we mentor you so you understand the methodology, architecture, and code behind your work.',
    whoItIsFor: [
      'Final-year undergraduate students (B.Sc., B.Tech., HND) working on technical projects',
      'Postgraduate students (PGD, M.Sc.) conducting computational, AI, or data-driven research',
      'Students who want to understand their code, models, and methodology deeply enough to defend their work confidently',
    ],
    whatToExpect: [
      'One-on-one or small-group technical consultation on your research problem and scope',
      'Guidance on selecting appropriate algorithms, architectures, datasets, and evaluation metrics',
      'Hands-on walkthroughs of your Python, machine learning, data analysis, or web/software implementation',
      'Structured review of your technical documentation, system diagrams, and experimental results tables',
      'Mock defence preparation so you can explain every design decision and metric to your external examiner',
    ],
    disciplinesSupported: [
      'Computer Science',
      'Artificial Intelligence',
      'Machine Learning & Computer Vision',
      'Data Science & Statistical Analytics',
      'Software Engineering',
      'Web & Application Development',
      'Data Analysis & Visualization',
      'Computational Mathematics & Related Disciplines',
    ],
    areasCovered: [
      'Project idea exploration and topic refinement',
      'Technical consultation and feasibility review',
      'Project planning and system architecture guidance',
      'Dataset sourcing and preparation',
      'Data cleaning, preprocessing, and transformation',
      'Machine learning model development and evaluation guidance',
      'Software and web application implementation guidance',
      'Documentation and technical report structure guidance',
      'Project presentation and defence preparation',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discuss Your Academic Project',
        description:
          'Tell us your department, project topic or area of interest, current stage, and the specific technical guidance you need.',
      },
      {
        step: '02',
        title: 'Topic, Methodology & Architecture Review',
        description:
          'We review your proposal or research objectives and help you define a realistic, verifiable technical methodology and implementation plan.',
      },
      {
        step: '03',
        title: 'Guided Implementation & Analysis',
        description:
          'We work with you through dataset preparation, model training, or software implementation—explaining the code and metrics step by step.',
      },
      {
        step: '04',
        title: 'Report Review & Defence Readiness',
        description:
          'We review your technical chapters, architecture diagrams, and evaluation charts, and prepare you to answer panel questions with confidence.',
      },
    ],
    ethicalNotice:
      'Ethical Academic Mentorship Policy: We provide consultation, technical mentorship, learning support, and guided implementation assistance. We do not encourage academic dishonesty—our priority is ensuring you genuinely understand your research methodology, codebase, and experimental results so you can defend your project with integrity.',
    faqs: [
      {
        question: 'Will I be taught how the code or machine learning model works?',
        answer:
          'Yes. Every consultation includes a line-by-line or module-by-module walkthrough of the implementation, dataset pipeline, and evaluation metrics so you can explain and modify the project yourself.',
      },
      {
        question: 'Can I get help if I already started my project but got stuck on the implementation or data analysis?',
        answer:
          'Absolutely. You can join at any stage—topic exploration, methodology design, dataset cleaning, model debugging, or final defence preparation.',
      },
      {
        question: 'Can I see examples of student and research projects supported by 3A?',
        answer:
          'Yes. Visit our Portfolio section under Student & Research Projects to inspect verified academic implementations in computer vision, image compression, and environmental data analytics.',
      },
    ],
    ctaLabel: 'Discuss Your Academic Project',
    enquiryHref: '/contact?type=academic-project&subject=Academic+Project+Support+Consultation',
  },
  {
    slug: 'corporate-training',
    title: 'Customized Organizational & Institutional Training',
    badgeLabel: 'Corporate, Institutional & Community Programmes',
    shortSummary:
      'Tailored AI literacy, workplace productivity, workflow automation, and technical upskilling programmes for businesses, universities, schools, NYSC groups, and professional communities.',
    whatItIs:
      'Our Customized Training service designs and delivers practical technology and AI training programmes tailored to the exact workflows, skill levels, and goals of your organization, institution, or community. Whether you want to train administrative staff on safe daily AI usage, equip educators with modern digital tools, or run an intensive seminar for students or NYSC members, we build a curriculum around your real-world context.',
    whoItIsFor: [
      'Businesses and corporate teams adopting AI tools across operations, reporting, and customer support',
      'Universities, polytechnics, colleges, and secondary schools training staff or students',
      'NYSC Community Development Service (CDS) groups, student associations, and youth communities',
      'Government agencies, NGOs, and professional bodies seeking practical digital capacity building',
    ],
    whatToExpect: [
      'Pre-training consultation to understand your team’s daily workflows, tools, and skill levels',
      'A customized curriculum with relevant industry or institutional examples rather than generic slides',
      'Flexible delivery format—in-person at your facility, live online, or hybrid',
      'Hands-on exercises, prompt templates, and responsible AI usage guidelines tailored to your organization',
    ],
    areasCovered: [
      'Workplace AI adoption and productivity workflows',
      'Structured prompt engineering for communication, reporting, and documentation',
      'AI-assisted data analysis and spreadsheet productivity',
      'Business process mapping and AI automation readiness',
      'Responsible AI governance, verification, and data privacy for teams',
      'Vibe coding and rapid software prototyping for technical teams',
      'Student and NYSC career-readiness technology workshops',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Request Customized Training',
        description:
          'Share your organization or institution name, target audience size, preferred delivery format, and learning objectives.',
      },
      {
        step: '02',
        title: 'Needs Assessment & Curriculum Design',
        description:
          'We design a tailored training outline, schedule, and practical exercises aligned with your team’s real tasks.',
      },
      {
        step: '03',
        title: 'Interactive Training Delivery',
        description:
          'Our instructors deliver hands-on sessions (in-person, online, or hybrid) with live demonstrations and guided practice.',
      },
      {
        step: '04',
        title: 'Workflow Templates & Follow-Up Guidance',
        description:
          'Participants receive practical reference checklists and workflow templates to apply what they learned immediately.',
      },
    ],
    ethicalNotice:
      'Practical & Safe Adoption Standard: All organizational training programmes emphasize data confidentiality, human verification of AI outputs, and practical return on time invested.',
    faqs: [
      {
        question: 'Can the training be customized for non-technical staff?',
        answer:
          'Yes. Most of our organizational workshops are designed for non-technical staff in administration, operations, education, and management, focusing on clear, everyday productivity with AI tools.',
      },
      {
        question: 'How long does a customized training programme take?',
        answer:
          'Durations are flexible based on your needs—ranging from a 2-hour awareness seminar or a 2-day intensive workshop to a multi-week departmental upskilling programme.',
      },
    ],
    ctaLabel: 'Request Customized Training',
    enquiryHref: '/contact?type=customized-training&subject=Customized+Organizational+Training+Request',
  },
];

export interface FindYourPathOption {
  id: string;
  label: string;
  audienceTag: string;
  recommendationTitle: string;
  recommendationSummary: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export const findYourPathOptions: FindYourPathOption[] = [
  {
    id: 'beginner',
    label: 'I am new to AI and technology.',
    audienceTag: 'AI for Beginners Pathway',
    recommendationTitle: 'Start with AI Fundamentals, Fluency & Practical Prompt Engineering',
    recommendationSummary:
      'Learn how AI works from scratch, understand different categories of AI tools, and build confidence writing structured prompts for everyday tasks.',
    primaryCtaLabel: 'Explore AI for Beginners Pathway',
    primaryCtaHref: '/academy/pathways#ai-for-beginners',
    secondaryCtaLabel: 'View AI Fluency Course',
    secondaryCtaHref: '/academy/programmes/ai-fluency-prompt-engineering',
  },
  {
    id: 'student-researcher',
    label: 'I am a student or researcher.',
    audienceTag: 'AI for Students & Researchers Pathway',
    recommendationTitle: 'AI-Assisted Learning, Research Productivity & Data Analysis',
    recommendationSummary:
      'Discover how to use AI tools responsibly for literature synthesis, technical learning, and data analysis—or explore our dedicated Academic Project Support service.',
    primaryCtaLabel: 'Explore Student & Research Pathway',
    primaryCtaHref: '/academy/pathways#ai-for-students-researchers',
    secondaryCtaLabel: 'Academic Project Support',
    secondaryCtaHref: '/academy/project-support',
  },
  {
    id: 'graduate-nysc',
    label: 'I am a graduate or NYSC corps member.',
    audienceTag: 'AI for Graduates & NYSC Pathway',
    recommendationTitle: 'AI Fluency, Career Preparation & Workplace Employability',
    recommendationSummary:
      'Build practical AI fluency, prompt engineering skills, CV/interview readiness, and workplace productivity habits that set you apart to employers.',
    primaryCtaLabel: 'Explore Graduate & NYSC Pathway',
    primaryCtaHref: '/academy/pathways#ai-for-graduates-nysc',
    secondaryCtaLabel: 'View Upcoming NYSC & Graduate Seminars',
    secondaryCtaHref: '/academy/events',
  },
  {
    id: 'professional-business',
    label: 'I am a professional or business owner.',
    audienceTag: 'AI for Professionals & Businesses Pathway',
    recommendationTitle: 'Workplace AI Adoption, Productivity & Business Workflow Automation',
    recommendationSummary:
      'Learn how to integrate AI into daily reporting, communication, customer operations, and automated workflows to save time and improve output.',
    primaryCtaLabel: 'Explore Professional & Business Pathway',
    primaryCtaHref: '/academy/pathways#ai-for-professionals-businesses',
    secondaryCtaLabel: 'View AI Automation Course',
    secondaryCtaHref: '/academy/programmes/ai-automation-business-workflows',
  },
  {
    id: 'builder-vibe-coding',
    label: 'I want to build applications with AI.',
    audienceTag: 'AI Development & Vibe Coding Pathway',
    recommendationTitle: 'Vibe Coding & AI-Assisted Software Development',
    recommendationSummary:
      'Collaborate with AI coding assistants and agents to build, understand, debug, and deploy functional web applications and software prototypes.',
    primaryCtaLabel: 'Explore Vibe Coding & AI Dev',
    primaryCtaHref: '/academy/vibe-coding',
    secondaryCtaLabel: 'View 6-Week Vibe Coding Course',
    secondaryCtaHref: '/academy/programmes/vibe-coding-ai-software-development',
  },
  {
    id: 'siwes-support',
    label: 'I need IT/SIWES support.',
    audienceTag: 'Academic & Industrial Training Support',
    recommendationTitle: 'IT / SIWES Training Support for University & Polytechnic Students',
    recommendationSummary:
      'Gain genuine practical coding, data science, or AI skills through weekly guided tasks, plus mentorship on SIWES logbook documentation, technical report writing, and defence preparation.',
    primaryCtaLabel: 'Get IT/SIWES Support',
    primaryCtaHref: '/academy/siwes-support',
    secondaryCtaLabel: 'Enquire Now',
    secondaryCtaHref: '/contact?type=siwes-support&subject=IT+%2F+SIWES+Training+Support+Enquiry',
  },
  {
    id: 'academic-project',
    label: 'I need guidance with an academic project.',
    audienceTag: 'Academic & Industrial Training Support',
    recommendationTitle: 'Academic Project Support & Technical Mentorship',
    recommendationSummary:
      'Get structured consultation on topic refinement, methodology, dataset preparation, Python/ML or software implementation, technical documentation, and project defence readiness.',
    primaryCtaLabel: 'Discuss Your Academic Project',
    primaryCtaHref: '/academy/project-support',
    secondaryCtaLabel: 'Book Project Consultation',
    secondaryCtaHref: '/contact?type=academic-project&subject=Academic+Project+Support+Consultation',
  },
  {
    id: 'organization-training',
    label: 'I represent an organization seeking training.',
    audienceTag: 'Corporate, Institutional & Community Training',
    recommendationTitle: 'Customized Technology & AI Training for Teams and Institutions',
    recommendationSummary:
      'Request a tailored workshop or multi-day training programme designed for your company staff, school leadership, university department, or community group.',
    primaryCtaLabel: 'Request Customized Training',
    primaryCtaHref: '/academy/corporate-training',
    secondaryCtaLabel: 'Contact Training Team',
    secondaryCtaHref: '/contact?type=customized-training&subject=Customized+Organizational+Training+Request',
  },
];

export const academyFaqs = [
  {
    question: 'Who can join 3A Techvolution Academy?',
    answer:
      'Our programmes serve three main groups: (1) individuals, graduates, NYSC members, and professionals seeking practical AI and software skills; (2) university and polytechnic students requiring IT/SIWES training support or academic project mentorship; and (3) organizations, schools, and communities seeking customized technology training.',
  },
  {
    question: 'Do I need a programming background to take your AI courses?',
    answer:
      'No. Our AI for Beginners, AI for Students & Researchers, AI for Graduates & NYSC Members, and AI for Professionals pathways start from foundational AI literacy and structured prompt engineering. Even our Vibe Coding course welcomes motivated beginners who want to learn how software works alongside AI coding tools.',
  },
  {
    question: 'What is the difference between IT/SIWES Training Support and Academic Project Support?',
    answer:
      'IT/SIWES Training Support is for students on mandatory Industrial Training placements who need structured weekly practical tasks, coding/AI skill development, and guidance on documenting their logbook and SIWES report. Academic Project Support is a separate consultation and mentorship service for final-year and postgraduate students working on a specific thesis or technical research project.',
  },
  {
    question: 'Are the guides in the AI Learning Resource Hub available for download right now?',
    answer:
      'We believe in transparent communication: our AI Learning Resource Hub is a growing library and most guides, templates, and workbooks are currently in development or coming soon. Only resources marked "Available" provide direct access, while upcoming materials allow you to register interest through our contact form.',
  },
  {
    question: 'Can my company, school, or NYSC group request a customized workshop?',
    answer:
      'Yes. We design and deliver customized seminars and hands-on workshops—either in-person, online, or hybrid—tailored to your organization’s workflows and schedule.',
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
  'IT / SIWES Practical Skill Development',
  'Academic Computing & ML Project Mentorship',
] as const;
