import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllServices, getAllProjects, getAllProgrammes } from '@/lib/content';

/**
 * @file sitemap.ts
 * @description Dynamic XML sitemap generator indexing core pages, all 6 service categories,
 * portfolio projects, and 3A Techvolution Academy courses, events, resources, and vibe coding pages.
 */

const STABLE_LAST_MODIFIED = new Date('2026-11-06T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    '',
    '/services',
    '/projects',
    '/academy',
    '/academy/programmes',
    '/academy/events',
    '/academy/resources',
    '/academy/vibe-coding',
    '/about',
    '/contact',
    '/request-quote',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: STABLE_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: STABLE_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const programmeRoutes = getAllProgrammes().map((programme) => ({
    url: `${baseUrl}/academy/programmes/${programme.slug}`,
    lastModified: STABLE_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: STABLE_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...programmeRoutes, ...projectRoutes];
}
