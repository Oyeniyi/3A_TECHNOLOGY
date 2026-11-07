/**
 * Centralized Site Configuration & Communication Constants
 * Single source of truth for telephone, email, WhatsApp, and navigation links.
 * Invariant: ARCH-06 (Centralized Communication Constants)
 */

import { SiteConfig } from '@/types/config';

export const siteConfig: SiteConfig = {
  name: '3A Technology Solutions',
  tagline: 'Ideas • Technology • Impact',
  description:
    'We help businesses, institutions, and individuals solve practical problems through web development, custom software, AI integration, data analytics, technology consulting, and academic research support, alongside AI education at 3A Techvolution Academy.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://3atechnology.com.ng',
  githubUrl: 'https://github.com/Oyeniyi/3A_TECHNOLOGY',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@3atechnology.com.ng',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+2349166491048',
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '+2349166491048',
    address: '0, Ita Aisa, Kwara State (HQ) • Abuja & Lagos, Nigeria',
  },
  legal: {
    registeredName: '3A TECHNOLOGY SOLUTION CONCEPTS',
    rcNumber: 'BN 9931488',
    tin: '2622397219188',
    incorporationDate: '12th October 2026',
    natureOfBusiness: 'Information Service Activities',
    registeredAddress: '0, Ita Aisa, Kwara, Kwara State, Nigeria',
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
        description: 'We reduce complexity and present technology in a way people can understand and use.',
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
  academy: {
    enrollmentFormUrl:
      process.env.NEXT_PUBLIC_ACADEMY_ENROLLMENT_URL ||
      'https://forms.google.com/3a-techvolution-academy-intake',
    advisoryWhatsAppUrl: 'https://wa.me/2349166491048?text=Hello%203A%20Techvolution%20Academy',
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
        description: 'Corporate websites, school portals, landing pages, and web applications.',
      },
      {
        title: 'Custom Software Engineering',
        href: '/services/custom-software',
        description: 'Business software, school & payment portals, digital records, and APIs.',
      },
      {
        title: 'AI & Automation',
        href: '/services/ai-automation',
        description: 'AI workflow integration, assistants, document extraction, and AI advisory.',
      },
      {
        title: 'Data Science & Analytics',
        href: '/services/data-science-analytics',
        description: 'Data cleaning, visualization, statistical analysis, ML, and computer vision.',
      },
      {
        title: 'Technology Consulting',
        href: '/services/technology-consulting',
        description: 'Technology advisory, digital transformation, feasibility studies, and tool selection.',
      },
      {
        title: 'Academic Research & Project Support',
        href: '/services/academic-research-support',
        description: 'Computing & mathematics research consultation, implementation mentorship, and documentation.',
      },
    ],
    academy: [
      {
        title: 'Academy Overview',
        href: '/academy',
        description: 'AI literacy, practical AI fluency, and building real solutions with AI.',
      },
      {
        title: 'AI Courses',
        href: '/academy/programmes',
        description: 'Structured courses in AI literacy, prompt engineering, AI workflows, and vibe coding.',
      },
      {
        title: 'Seminars & Workshops',
        href: '/academy/events',
        description: 'AI awareness seminars, fluency webinars, and organizational AI workshops.',
      },
      {
        title: 'Resource Library',
        href: '/academy/resources',
        description: 'Free and paid AI guides, prompt handbooks, workbooks, and templates.',
      },
      {
        title: 'Vibe Coding',
        href: '/academy/vibe-coding',
        description: 'Build, understand, and debug functional software prototypes using AI coding tools.',
      },
    ],
    footer: {
      services: [
        { title: 'Web & Digital Product Development', href: '/services/web-development' },
        { title: 'Custom Software Engineering', href: '/services/custom-software' },
        { title: 'AI & Automation', href: '/services/ai-automation' },
        { title: 'Data Science & Analytics', href: '/services/data-science-analytics' },
        { title: 'Technology Consulting', href: '/services/technology-consulting' },
        { title: 'Academic Research & Project Support', href: '/services/academic-research-support' },
      ],
      academy: [
        { title: 'Academy Overview', href: '/academy' },
        { title: 'AI Courses', href: '/academy/programmes' },
        { title: 'Seminars & Workshops', href: '/academy/events' },
        { title: 'Resource Library', href: '/academy/resources' },
        { title: 'Vibe Coding', href: '/academy/vibe-coding' },
      ],
      company: [
        { title: 'About 3A', href: '/about' },
        { title: 'Projects & Prototypes', href: '/projects' },
        { title: 'Direct Contact', href: '/contact' },
        { title: 'Request a Quote', href: '/request-quote' },
      ],
      legal: [
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Terms of Service', href: '/terms' },
      ],
    },
  },
};
