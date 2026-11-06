import { test, expect } from '@playwright/test';

test.describe('Responsive Mobile Navigation Drawer (FR-01 / AC-01.2 / AC-01.3)', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
  });

  test('opens mobile drawer via hamburger toggle, exposes ARIA attributes, and closes on Escape', async ({ page }) => {
    const toggleBtn = page.getByRole('button', { name: /Toggle Navigation Menu/i });
    await expect(toggleBtn).toBeVisible();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    // Open mobile drawer
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    const mobileNav = page.getByRole('navigation', { name: /Mobile Navigation/i });
    await expect(mobileNav).toBeVisible();

    // Verify primary links exist inside the drawer
    await expect(mobileNav.getByRole('link', { name: 'Services', exact: true })).toBeVisible();
    await expect(mobileNav.getByRole('link', { name: 'Projects', exact: true })).toBeVisible();
    await expect(mobileNav.getByRole('link', { name: 'Academy', exact: true })).toBeVisible();

    // Close drawer via Escape key
    await page.keyboard.press('Escape');
    await expect(mobileNav).toBeHidden();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
  });

  test('closes mobile drawer automatically when navigating to a route', async ({ page }) => {
    const toggleBtn = page.getByRole('button', { name: /Toggle Navigation Menu/i });
    await toggleBtn.click();

    const mobileNav = page.getByRole('navigation', { name: /Mobile Navigation/i });
    await mobileNav.getByRole('link', { name: 'Projects', exact: true }).click();

    await expect(page).toHaveURL(/\/projects$/);
    await expect(mobileNav).toBeHidden();
  });
});

