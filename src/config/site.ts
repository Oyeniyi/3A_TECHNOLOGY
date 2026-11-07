import { SiteConfig } from '@/types/config';

export const siteConfig: SiteConfig = {
  name: '3A Technology Solutions',
  tagline: 'Ideas • Technology • Impact',
  description:
    'Headquartered in Ilorin (Kwara State) with branch offices in Osogbo (Osun State) and Akure (Ondo State), 3A Technology Solutions delivers web & digital product development, custom software engineering, AI automation, data science, technology consulting, and academic research support to clients across Nigeria and Africa, alongside practical AI education at 3A Techvolution Academy.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://3atechnology.com.ng',
  githubUrl: 'https://github.com/Oyeniyi/3A_TECHNOLOGY',
  studentProjectsGithubUrl: 'https://github.com/psalm001',
  legal: {
    registeredName: '3A TECHNOLOGY SOLUTION CONCEPTS',
    rcNumber: 'BN 9931488',
    tin: '2622397219188',
    registrationDate: '12th October 2026',
    natureOfBusiness: 'Information Service Activities',
    registeredAddress: 'Agbo Area, Olunlade, Ilorin, Kwara State, Nigeria.',
  },
  brand: {
    essence: 'Technology that works for people and business.',
    principle:
      'We do not sell technology for technology’s sake. We show how technology can improve business, productivity, communication, visibility, decision-making and growth.',
    pillars: [
      {
        title: 'Smart',
        description: 'We communicate with intelligence and substance, without unnecessary complexity.',
      },
      {
        title: 'Simple',
        description:
          'We reduce complexity and present technology in a way people can understand and use.',
      },
      {
        title: 'Professional',
        description: 'Every touchpoint should feel intentional, reliable, polished and credible.',
      },
      {
        title: 'Human',
        description: 'We speak to people, not machines. We are approachable, respectful and practical.',
      },
      {
        title: 'Future-Ready',
        description: 'We embrace modern technology while staying focused on real-world outcomes.',
      },
    ],
  },
  contact: {
    email: process.env.CONTACT_EMAIL_RECIPIENT || '3aafricanai@gmail.com',
    phone: '+234 800 000 3A00',
    whatsapp: '+2348000003A00',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348000003000',
    address:
      'Head Office: Agbo Area, Olunlade, Ilorin, Kwara State • Branches: Osogbo (Osun State) & Akure (Ondo State), Nigeria',
    offices: [
      {
        id: 'head-office',
        type: 'Head Office',
        label: 'Head Office — Ilorin, Kwara State',
        city: 'Ilorin',
        state: 'Kwara State',
        country: 'Nigeria',
        address: 'Agbo Area, Olunlade, Ilorin, Kwara State, Nigeria.',
        isHeadquarters: true,
      },
      {
        id: 'osogbo-branch',
        type: 'Branch Office',
        label: 'Branch Office — Osogbo, Osun State',
        city: 'Osogbo',
        state: 'Osun State',
        country: 'Nigeria',
        address: 'Kola Balogun Area, Osogbo, Osun State, Nigeria.',
        isHeadquarters: false,
      },
      {
        id: 'akure-branch',
        type: 'Branch Office',
        label: 'Branch Office — Akure, Ondo State',
        city: 'Akure',
        state: 'Ondo State',
        country: 'Nigeria',
        address: 'Dominion College, Behind Health Centre, Oba-Ile, Akure, Ondo State, Nigeria.',
        isHeadquarters: false,
      },
    ],
    serviceCoverage: {
      headline: 'Serving Businesses and Individuals Across Nigeria and Africa.',
      shortStatement: 'Based in three locations across Nigeria. Serving clients nationwide and across Africa.',
      supportingCopy:
        'From our offices in Ilorin, Osogbo, and Akure, 3A Technology Solutions delivers technology solutions, software development, AI services, digital experiences, and technology consulting to businesses, organizations, institutions, and individuals across Nigeria and Africa.',
      regions: [
        'All States in Nigeria',
        'The Federal Capital Territory (FCT)',
        'Other African Countries',
      ],
    },
  },
  nav: {
    main: [
      { title: 'Home', href: '/' },
      { title: 'Technology Solutions', href: '/services' },
      { title: 'Projects', href: '/projects' },
      { title: 'Techvolution Academy', href: '/academy' },
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' },
    ],
    services: [
      {
        title: 'Web & Digital Product Development',
        href: '/services/web-development',
        description:
          'Corporate websites, school websites, landing pages, customer portals, and web applications.',
      },
      {
        title: 'Custom Software Engineering',
        href: '/services/custom-software',
        description:
          'Custom business apps, school management portals, payment/result systems, and APIs.',
      },
      {
        title: 'Artificial Intelligence & Automation',
        href: '/services/ai-automation',
        description:
          'AI integration, AI assistants, document processing, and business workflow automation.',
      },
      {
        title: 'Data Science & Analytics',
        href: '/services/data-science-analytics',
        description:
          'Data cleaning, visualization, statistical analysis, predictive ML, and computer vision.',
      },
      {
        title: 'Technology Consulting',
        href: '/services/technology-consulting',
        description:
          'Technology advisory, digital transformation guidance, AI adoption strategy, and feasibility studies.',
      },
      {
        title: 'Academic Research & Project Support',
        href: '/services/academic-research-support',
        description:
          'Research consultation, technical mentorship, Python/ML implementation, and report support.',
      },
    ],
    academy: [
      {
        title: 'Academy Overview',
        href: '/academy',
        description:
          '3A TECHVOLUTION ACADEMY — Learn. Build. Advance. Practical technology education, AI skills, and academic/industrial training support.',
      },
      {
        title: 'Learning Pathways',
        href: '/academy/pathways',
        description:
          'Audience-based pathways for beginners, students, NYSC members, professionals, and builders.',
      },
      {
        title: 'AI & Technology Courses',
        href: '/academy/programmes',
        description:
          'Structured cohorts covering AI fluency, prompt engineering, vibe coding, and workflow automation.',
      },
      {
        title: 'IT / SIWES Training Support',
        href: '/academy/siwes-support',
        description:
          'Practical technology skill development, weekly guidance, and report mentorship for SIWES students.',
      },
      {
        title: 'Academic Project Support',
        href: '/academy/project-support',
        description:
          'Technical consultation, mentorship, and implementation guidance for computing and AI student projects.',
      },
      {
        title: 'Seminars & Workshops',
        href: '/academy/events',
        description:
          'AI awareness programmes, NYSC educational sessions, student tech seminars, and hands-on workshops.',
      },
      {
        title: 'AI Learning Resource Hub',
        href: '/academy/resources',
        description:
          'Growing library of learning materials, practical guides, templates, and educational resources.',
      },
      {
        title: 'Customized Training',
        href: '/academy/corporate-training',
        description:
          'Tailored technology and AI training programmes for organizations, schools, and communities.',
      },
    ],
    footer: {
      services: [
        { title: 'Web & Digital Product Development', href: '/services/web-development' },
        { title: 'Custom Software Engineering', href: '/services/custom-software' },
        { title: 'Artificial Intelligence & Automation', href: '/services/ai-automation' },
        { title: 'Data Science & Analytics', href: '/services/data-science-analytics' },
        { title: 'Technology Consulting', href: '/services/technology-consulting' },
        { title: 'Academic Research & Project Support', href: '/services/academic-research-support' },
      ],
      academy: [
        { title: 'Academy Overview', href: '/academy' },
        { title: 'Learning Pathways', href: '/academy/pathways' },
        { title: 'AI & Tech Courses', href: '/academy/programmes' },
        { title: 'IT / SIWES Training Support', href: '/academy/siwes-support' },
        { title: 'Academic Project Support', href: '/academy/project-support' },
        { title: 'Seminars & Workshops', href: '/academy/events' },
        { title: 'Vibe Coding & AI Dev', href: '/academy/vibe-coding' },
        { title: 'AI Learning Resource Hub', href: '/academy/resources' },
        { title: 'Customized Training', href: '/academy/corporate-training' },
      ],
      company: [
        { title: 'About 3A', href: '/about' },
        { title: 'Portfolio & Case Studies', href: '/projects' },
        { title: '3A Techvolution Academy', href: '/academy' },
        { title: 'AI Course Catalogue', href: '/academy/programmes' },
        { title: 'Academy Resource Library', href: '/academy/resources' },
        { title: 'Request a Project Quote', href: '/request-quote' },
        { title: 'Contact Us', href: '/contact' },
      ],
      legal: [
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Terms of Service', href: '/terms' },
      ],
    },
  },
};
