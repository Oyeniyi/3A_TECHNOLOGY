import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const coreRoutes = [
  '/',
  '/services',
  '/services/web-development',
  '/services/ai-automation',
  '/services/technology-consulting',
  '/services/academic-research-support',
  '/projects',
  '/projects/marketmind-ai',
  '/projects/dominion-college-portal',
  '/projects/raph2-interiors',
  '/projects/custom-wedding-invitation-platform',
  '/academy',
  '/academy/pathways',
  '/academy/programmes',
  '/academy/siwes-support',
  '/academy/project-support',
  '/academy/corporate-training',
  '/academy/events',
  '/academy/resources',
  '/academy/vibe-coding',
  '/about',
  '/contact',
  '/request-quote',
  '/privacy',
  '/terms',
];

test.describe('Automated WCAG 2.1 AA Accessibility Audit (TASK-031 / ARCH-05)', () => {
  for (const route of coreRoutes) {
    test(`route ${route} has zero critical or serious axe-core violations`, async ({ page }) => {
      await page.goto(route);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      const criticalOrSerious = accessibilityScanResults.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalOrSerious).toEqual([]);
    });
  }
});
