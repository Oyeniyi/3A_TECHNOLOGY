/**
 * Content Domain Type Definitions
 * In accordance with PRD.md Section 5 & docs/data-architecture.md
 */

export type ServiceSlug =
  | 'web-development'
  | 'custom-software'
  | 'ai-automation'
  | 'data-science-analytics'
  | 'brand-digital-media';

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortSummary: string;
  iconName: string;
  problemContext: string;
  targetAudience: string[];
  technicalApproach: string;
  deliverables: string[];
  featuredCaseStudySlug?: string;
}

export type ProjectStatus =
  | 'Client Project'
  | 'Live Production'
  | 'Deployed Prototype'
  | 'Research & Development';

export interface Project {
  slug: string;
  title: string;
  category: ServiceSlug;
  status: ProjectStatus;
  shortSummary: string;
  theChallenge: string;
  theSolution: string;
  technologiesUsed: string[];
  imagePlaceholder: string;
  liveUrl?: string;
  githubUrl?: string;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type DeliveryFormat = 'Weekend Cohort' | 'In-Person' | 'Hybrid';

export interface AcademyProgramme {
  slug: string;
  title: string;
  level: SkillLevel;
  format: DeliveryFormat;
  duration: string;
  overview: string;
  curriculumModules: string[];
  targetAudience: string[];
  prerequisites: string[];
  feeDisplay: string;
}
