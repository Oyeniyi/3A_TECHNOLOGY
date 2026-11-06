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
    'We build practical software, websites, AI tools, and data systems for businesses in Nigeria, and train new developers through 3A Techvolution Academy.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://3atechnology.com.ng',
  contact: {
    email: 'contact@3atechnology.com.ng',
    phone: '+2348000003A00', // Provisional format per DEC-03
    whatsapp: '+2348000003A00',
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
    enrollmentFormUrl: 'https://forms.google.com/3a-techvolution-academy-intake',
    advisoryWhatsAppUrl: 'https://wa.me/2348000003A00?text=Hello%203A%20Techvolution%20Academy',
  },
  nav: {
    main: [
      { title: 'Home', href: '/' },
      { title: 'Services', href: '/services' },
      { title: 'Projects', href: '/projects' },
      { title: 'Academy', href: '/academy' },
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' },
    ],
    services: [
      {
        title: 'Web & Digital Products',
        href: '/services/web-development',
        description: 'Company websites, customer portals, and fast web applications.',
      },
      {
        title: 'Custom Software Engineering',
        href: '/services/custom-software',
        description: 'Internal business tools, backend APIs, and database systems.',
      },
      {
        title: 'AI & Automation',
        href: '/services/ai-automation',
        description: 'Practical AI integrations and automated business workflows.',
      },
      {
        title: 'Data Science & Analytics',
        href: '/services/data-science-analytics',
        description: 'Business dashboards, forecasting models, and computer vision.',
      },
      {
        title: 'Branding & Digital Media',
        href: '/services/brand-digital-media',
        description: 'Visual identity systems, logos, and presentation assets.',
      },
    ],
    footer: {
      services: [
        { title: 'Web & Digital Products', href: '/services/web-development' },
        { title: 'Custom Software', href: '/services/custom-software' },
        { title: 'AI & Automation', href: '/services/ai-automation' },
        { title: 'Data Science & Analytics', href: '/services/data-science-analytics' },
        { title: 'Branding & Digital Media', href: '/services/brand-digital-media' },
      ],
      academy: [
        { title: 'Academy Overview', href: '/academy' },
        { title: 'Course Programmes', href: '/academy/programmes' },
        { title: 'Student Advising', href: '/contact' },
      ],
      company: [
        { title: 'About 3A', href: '/about' },
        { title: 'Projects & Case Studies', href: '/projects' },
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
