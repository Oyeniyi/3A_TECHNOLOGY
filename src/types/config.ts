export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface BrandPillar {
  title: string;
  description: string;
}

export interface OfficeLocation {
  id: 'head-office' | 'osogbo-branch' | 'akure-branch';
  type: 'Head Office' | 'Branch Office';
  label: string;
  city: string;
  state: string;
  country: string;
  address: string;
  isHeadquarters: boolean;
}

export interface ServiceCoverageInfo {
  headline: string;
  shortStatement: string;
  supportingCopy: string;
  regions: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  githubUrl: string;
  studentProjectsGithubUrl: string;
  legal: {
    registeredName: string;
    rcNumber: string;
    tin: string;
    registrationDate: string;
    natureOfBusiness: string;
    registeredAddress: string;
  };
  brand: {
    essence: string;
    principle: string;
    pillars: BrandPillar[];
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    whatsappNumber: string;
    address: string;
    offices: OfficeLocation[];
    serviceCoverage: ServiceCoverageInfo;
  };
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
