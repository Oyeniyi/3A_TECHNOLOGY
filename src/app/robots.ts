import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * @file robots.ts
 * @description Robots.txt generation routing search engine crawlers and pointing to sitemap.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
