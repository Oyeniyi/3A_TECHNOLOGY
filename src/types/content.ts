/**
 * Content Domain Type Definitions
 * In accordance with PRD.md Section 5, Strategic Upgrade Specification, & docs/data-architecture.md
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
}

export type ProjectClassification =
  | '3A Prototype'
  | 'Student Project'
  | 'Research Project'
  | 'Demonstration Project';

export type ProjectStatus =
  | '3A Prototype'
  | 'Student Project'
  | 'Research Prototype'
  | 'Demonstration Build';

export interface Project {
  slug: string;
  title: string;
  category: ServiceSlug;
  classification: ProjectClassification;
  status: ProjectStatus;
  shortSummary: string;
  theChallenge: string;
  theSolution: string;
  technologiesUsed: string[];
  imagePlaceholder: string;
  liveUrl?: string;
  githubUrl?: string;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
export type DeliveryFormat = 'Weekend Cohort' | 'In-Person' | 'Hybrid' | 'Online Live';

export type CourseStatus =
  | 'Upcoming'
  | 'Open for Enrolment'
  | 'Ongoing'
  | 'Completed'
  | 'Registration Closed';

export interface AcademyProgramme {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  learningOutcomes: string[];
  curriculumModules: string[];
  level: SkillLevel;
  format: DeliveryFormat;
  duration: string;
  targetAudience: string[];
  prerequisites: string[];
  instructor?: {
    name: string;
    role: string;
  };
  imagePlaceholder: string;
  feeDisplay: string;
  enrollmentUrl?: string;
  status: CourseStatus;
  startDate?: string;
  featured: boolean;
}

export type EventStatus = 'Upcoming' | 'Registration Open' | 'Registration Closed' | 'Completed';
export type EventFormat = 'Online' | 'Physical' | 'Hybrid';

export interface AcademyEvent {
  slug: string;
  title: string;
  description: string;
  dateDisplay: string;
  timeDisplay: string;
  format: EventFormat;
  targetAudience: string[];
  registrationUrl?: string;
  status: EventStatus;
}

export type ResourceCategory =
  | 'AI Learning Guides'
  | 'Prompt Engineering'
  | 'Vibe Coding & AI Dev'
  | 'Workbooks & Templates'
  | 'Course Notes & Toolkits';

export type ResourceFormat = 'PDF Guide' | 'E-Book' | 'Workbook' | 'Template Pack' | 'Toolkit';
export type ResourceAvailability = 'Available' | 'Coming Soon';

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
}
