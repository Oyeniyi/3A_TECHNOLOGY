import {
  Service,
  ServiceSlug,
  Project,
  PortfolioCollection,
  AcademyProgramme,
  LearningPathway,
  LearningPathwaySlug,
  AcademySupportService,
  AcademyServiceSlug,
  AcademyEvent,
  AcademyResource,
} from '@/types/content';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import {
  programmes,
  learningPathways,
  academySupportServices,
} from '@/data/programmes';
import { academyEvents } from '@/data/events';
import { academyResources } from '@/data/resources';

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ServiceSlug): Project[] {
  return projects.filter(
    (project) => project.category === category || project.relatedServices.includes(category)
  );
}

export function getProjectsByCollection(collection: PortfolioCollection): Project[] {
  return projects.filter((project) => project.collections.includes(collection));
}

export function getProjectsBySlugs(slugs: string[]): Project[] {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((p): p is Project => Boolean(p));
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}

export function getAllLearningPathways(): LearningPathway[] {
  return learningPathways;
}

export function getLearningPathwayBySlug(slug: LearningPathwaySlug): LearningPathway | undefined {
  return learningPathways.find((pathway) => pathway.slug === slug);
}

export function getAllProgrammes(): AcademyProgramme[] {
  return programmes.filter((prog) => prog.published !== false);
}

export function getProgrammesByPathway(pathwaySlug: LearningPathwaySlug): AcademyProgramme[] {
  return getAllProgrammes().filter((prog) => prog.learningPathways.includes(pathwaySlug));
}

export function getFeaturedProgrammes(limit = 3): AcademyProgramme[] {
  return getAllProgrammes()
    .filter((prog) => prog.featured)
    .slice(0, limit);
}

export function getProgrammeBySlug(slug: string): AcademyProgramme | undefined {
  return getAllProgrammes().find((programme) => programme.slug === slug);
}

export function getAllAcademySupportServices(): AcademySupportService[] {
  return academySupportServices;
}

export function getAcademySupportServiceBySlug(
  slug: AcademyServiceSlug
): AcademySupportService | undefined {
  return academySupportServices.find((svc) => svc.slug === slug);
}

export function getAllAcademyEvents(): AcademyEvent[] {
  return academyEvents;
}

export function getAllAcademyResources(): AcademyResource[] {
  return academyResources;
}
