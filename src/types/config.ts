/**
 * Centralized Site Configuration Interfaces
 * In accordance with docs/architecture-essential.md (ARCH-06)
 */

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface ContactConfig {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface AcademyConfig {
  enrollmentFormUrl: string;
  advisoryWhatsAppUrl: string;
}

export interface LegalConfig {
  registeredName: string;
  rcNumber: string;
  tin: string;
  incorporationDate: string;
  natureOfBusiness: string;
  registeredAddress: string;
}

export interface BrandPillar {
  title: string;
  description: string;
}

export interface BrandConfig {
  essence: string;
  principle: string;
  pillars: BrandPillar[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  githubUrl: string;
  contact: ContactConfig;
  legal: LegalConfig;
  brand: BrandConfig;
  academy: AcademyConfig;
  nav: {
    main: NavItem[];
    services: NavItem[];
    academy: NavItem[];
    footer: {
      services: NavItem[];
      academy: NavItem[];
      company: NavItem[];
      legal: NavItem[];
    };
  };
}
