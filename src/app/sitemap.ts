import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllServices, getAllProjects, getAllProgrammes } from '@/lib/content';

/**
 * @file sitemap.ts
 * @description Dynamic XML sitemap generator indexing core pages, service categories,
 * case studies, and Academy programmes.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    '',
    '/services',
    '/projects',
    '/academy',
    '/academy/programmes',
    '/about',
    '/contact',
    '/request-quote',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
