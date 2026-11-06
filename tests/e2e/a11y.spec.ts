import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const coreRoutes = [
  '/',
  '/services',
  '/services/ai-automation',
  '/projects',
  '/projects/marketmind-ai',
  '/academy',
  '/academy/programmes',
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

