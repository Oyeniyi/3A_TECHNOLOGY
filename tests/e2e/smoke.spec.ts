import { test, expect } from '@playwright/test';

test.describe('Platform Navigation & Accessibility Smoke Tests', () => {
  test('homepage renders hero and primary call to actions', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/3A Technology Solutions/i);

    // Verify skip to content accessibility link
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    // Verify dual pathway gate
    await expect(page.getByRole('link', { name: /Commercial IT Solutions/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /3A Academy/i })).toBeVisible();
  });

  test('services catalog renders all categories', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByRole('heading', { name: /Commercial Engineering Disciplines/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Request an Architecture Quote/i })).toBeVisible();
  });

  test('academy overview loads syllabus tracks', async ({ page }) => {
    await page.goto('/academy');
    await expect(page.getByRole('heading', { name: /3A Academy/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Active Training Tracks/i })).toBeVisible();
  });

  test('contact page loads form and company address', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByRole('heading', { name: /Get in Touch with Our Team/i })).toBeVisible();
    await expect(page.getByText(/Abuja, FCT, Nigeria/i)).toBeVisible();
  });
});
