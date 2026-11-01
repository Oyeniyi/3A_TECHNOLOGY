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

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: ContactConfig;
  academy: AcademyConfig;
  nav: {
    main: NavItem[];
    services: NavItem[];
    footer: {
      services: NavItem[];
      academy: NavItem[];
      company: NavItem[];
      legal: NavItem[];
    };
  };
}
