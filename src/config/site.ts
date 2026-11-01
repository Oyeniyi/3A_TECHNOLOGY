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
    'High-performance technology solutions, custom software engineering, practical AI integrations, and technical education for businesses and learners in Nigeria and beyond.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://3atechnology.com.ng',
  contact: {
    email: 'contact@3atechnology.com.ng',
    phone: '+2348000003A00', // Provisional format per DEC-03
    whatsapp: '+2348000003A00',
    address: 'Abuja & Lagos, Nigeria (Distributed Hubs)',
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
        description: 'Corporate websites, web portals, and performant web applications.',
      },
      {
        title: 'Custom Software Engineering',
        href: '/services/custom-software',
        description: 'Bespoke business software, internal tools, and database architectures.',
      },
      {
        title: 'AI & Automation',
        href: '/services/ai-automation',
        description: 'Applied generative AI integrations and workflow automation pipelines.',
      },
      {
        title: 'Data Science & Analytics',
        href: '/services/data-science-analytics',
        description: 'Predictive modeling, business intelligence, and computer vision.',
      },
      {
        title: 'Branding & Digital Media',
        href: '/services/brand-digital-media',
        description: 'Corporate visual identity, brand collateral, and technical assets.',
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
