/**
 * In-Memory Content Access Layer
 * Shields UI components from raw data arrays (ARCH-07)
 */

import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { programmes } from '@/data/programmes';
import { academyEvents } from '@/data/events';
import { academyResources } from '@/data/resources';
import {
  Service,
  Project,
  AcademyProgramme,
  AcademyEvent,
  AcademyResource,
  ServiceSlug,
} from '@/types/content';

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
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.slice(0, limit);
}

export function getAllProgrammes(): AcademyProgramme[] {
  return programmes;
}

export function getFeaturedProgrammes(limit = 3): AcademyProgramme[] {
  return programmes.filter((p) => p.featured).slice(0, limit);
}

export function getProgrammeBySlug(slug: string): AcademyProgramme | undefined {
  return programmes.find((programme) => programme.slug === slug);
}

export function getAllAcademyEvents(): AcademyEvent[] {
  return academyEvents;
}

export function getAllAcademyResources(): AcademyResource[] {
  return academyResources;
}
