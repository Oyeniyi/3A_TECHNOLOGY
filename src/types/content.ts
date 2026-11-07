/**
 * Content Domain Type Definitions
 * In accordance with PRD.md Section 5, Strategic Upgrade Specification,
 * Portfolio Restructuring Specification, & docs/data-architecture.md
 */

export type ServiceSlug =
  | 'web-development'
  | 'custom-software'
  | 'ai-automation'
  | 'data-science-analytics'
  | 'technology-consulting'
  | 'academic-research-support';

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortSummary: string;
  iconName: string;
  problemContext: string;
  targetAudience: string[];
  technicalApproach: string;
  deliverables: string[];
  ethicalNote?: string;
  featuredCaseStudySlug?: string;
  relatedProjectSlugs: string[];
}

export type PortfolioCollection =
  | 'business-client-solutions'
  | 'websites-digital-experiences'
  | 'student-research-projects';

export type ProjectClassification =
  | 'AI-Powered Business Operations Tool'
  | 'Business Solution'
  | 'Client Project'
  | 'Institutional Platform'
  | 'Website & Landing Page'
  | 'Custom Digital Experience'
  | 'Student Project'
  | 'Research Project';

export type ProjectVisibility = 'public' | 'confidential';

export interface Project {
  slug: string;
  title: string;
  primaryCollection: PortfolioCollection;
  collections: PortfolioCollection[];
  category: ServiceSlug;
  relatedServices: ServiceSlug[];
  classification: ProjectClassification;
  clientOrOrganization?: string;
  status: string;
  visibility: ProjectVisibility;
  confidentialityNotice?: string;
  shortSummary: string;
  theChallenge: string;
  theSolution: string;
  verifiedFeatures: string[];
  technologiesUsed: string[];
  imagePlaceholder: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
export type DeliveryFormat =
  | 'Weekend Cohort'
  | 'In-Person'
  | 'Hybrid'
  | 'Online Live'
  | 'Customized Schedule';

export type LearningPathwaySlug =
  | 'ai-for-beginners'
  | 'ai-for-students-researchers'
  | 'ai-for-graduates-nysc'
  | 'ai-for-professionals-businesses'
  | 'ai-development-vibe-coding';

export interface LearningPathway {
  slug: LearningPathwaySlug;
  title: string;
  shortTitle: string;
  audienceSummary: string;
  description: string;
  focusAreas: string[];
  recommendedFor: string[];
  courseSlugs: string[];
  ctaLabel: string;
  ctaHref: string;
}

export type CourseStatus =
  | 'Upcoming'
  | 'Open for Enrolment'
  | 'Ongoing'
  | 'Completed'
  | 'Registration Closed';

export interface CourseCohortInfo {
  cohortLabel: string;
  intakeWindow?: string;
  scheduleNotes?: string;
  registrationUrl?: string;
}

export interface AcademyProgramme {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  learningPathways: LearningPathwaySlug[];
  learningOutcomes: string[];
  curriculumModules: string[];
  level: SkillLevel;
  format: DeliveryFormat;
  duration?: string;
  targetAudience: string[];
  prerequisites: string[];
  instructor?: {
    name: string;
    role: string;
  };
  imagePlaceholder: string;
  feeDisplay: string;
  cohortInfo?: CourseCohortInfo;
  enrollmentUrl?: string;
  enquiryRoute: string;
  isCustomizedTraining?: boolean;
  status: CourseStatus;
  startDate?: string;
  published: boolean;
  featured: boolean;
}

export type AcademyServiceSlug = 'siwes-support' | 'project-support' | 'corporate-training';

export interface AcademySupportService {
  slug: AcademyServiceSlug;
  title: string;
  badgeLabel: string;
  shortSummary: string;
  whatItIs: string;
  whoItIsFor: string[];
  whatToExpect: string[];
  areasCovered: string[];
  disciplinesSupported?: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  ethicalNotice: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaLabel: string;
  enquiryHref: string;
}

export type EventStatus = 'Upcoming' | 'Registration Open' | 'Registration Closed' | 'Completed';
export type EventFormat = 'Online' | 'Physical' | 'Hybrid';

export interface AcademyEvent {
  slug: string;
  title: string;
  categoryLabel: string;
  description: string;
  dateDisplay: string;
  timeDisplay: string;
  format: EventFormat;
  venueOrPlatform: string;
  targetAudience: string[];
  registrationUrl?: string;
  enquiryHref: string;
  status: EventStatus;
}

export type ResourceCategory =
  | 'AI Learning Guides'
  | 'Prompt Engineering'
  | 'Vibe Coding & AI Dev'
  | 'Workbooks & Templates'
  | 'Course Notes & Toolkits';

export type ResourceFormat = 'PDF Guide' | 'E-Book' | 'Workbook' | 'Template Pack' | 'Toolkit';
export type ResourceAvailability = 'Available' | 'Coming Soon' | 'In Development';

export interface AcademyResource {
  slug: string;
  title: string;
  description: string;
  intendedUse: string;
  thumbnail: string;
  category: ResourceCategory;
  format: ResourceFormat;
  accessType: 'Free' | 'Paid';
  priceDisplay?: string;
  downloadUrl?: string;
  purchaseUrl?: string;
  availability: ResourceAvailability;
  statusNote?: string;
}
