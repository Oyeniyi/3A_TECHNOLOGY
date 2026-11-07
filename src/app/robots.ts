import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * @file robots.ts
 * @description Robots.txt generation routing search engine crawlers and AI answer engine crawlers
 * (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended) to public routes.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Search & Answer Engine Citability Crawlers (Google Search/AI Overviews, ChatGPT Search, Claude Search, Perplexity, Bing, Apple)
      {
        userAgent: [
          'Googlebot',
          'OAI-SearchBot',
          'Claude-SearchBot',
          'PerplexityBot',
          'Bingbot',
          'Applebot',
        ],
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // User-Triggered Agentic Browsing Fetchers
      {
        userAgent: [
          'ChatGPT-User',
          'Claude-User',
          'Perplexity-User',
          'Google-Agent',
          'Google-GeminiNotebook',
        ],
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Model Grounding & Training Crawlers
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
