import { test, expect } from '@playwright/test';

test.describe('Platform Navigation & Core Route Smoke Tests', () => {
  test('homepage renders hero, dual divisions, and primary call to actions', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/3A Technology Solutions/i);

    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    await expect(page.getByRole('link', { name: /Explore Technology Solutions/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Explore AI Courses/i }).first()).toBeVisible();
  });

  test('services catalog renders all 6 services and excludes Branding & Digital Media', async ({ page }) => {
    await page.goto('/services');
    await expect(
      page.getByRole('heading', { name: /Practical Technology Services & Implementation/i })
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Technology Consulting' })).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Academic Research & Project Support' })
    ).toBeVisible();
    await expect(page.getByText(/Branding & Digital Media/i)).toHaveCount(0);
  });

  test('projects page displays 3A Prototype and Student Project classifications plus GitHub link', async ({
    page,
  }) => {
    await page.goto('/projects');
    await expect(page.getByRole('heading', { name: /Projects & Prototypes/i })).toBeVisible();
    await expect(
      page.getByRole('link', { name: /View Repositories on GitHub/i })
    ).toHaveAttribute('href', 'https://github.com/Oyeniyi/3A_TECHNOLOGY');
  });

  test('academy overview, course catalogue, events, resources, and vibe coding pages render', async ({
    page,
  }) => {
    await page.goto('/academy');
    await expect(
      page.getByRole('heading', {
        name: /Practical AI Education for People Who Want to Build and Lead/i,
      })
    ).toBeVisible();

    await page.goto('/academy/programmes');
    await expect(
      page.getByRole('heading', { name: /AI Training Courses & Cohorts/i })
    ).toBeVisible();

    await page.goto('/academy/events');
    await expect(
      page.getByRole('heading', { name: /AI Seminars, Webinars & Practical Workshops/i })
    ).toBeVisible();

    await page.goto('/academy/resources');
    await expect(
      page.getByRole('heading', { name: /AI Learning Guides, Workbooks & Toolkits/i })
    ).toBeVisible();

    await page.goto('/academy/vibe-coding');
    await expect(
      page.getByRole('heading', {
        name: /Build Real Software with AI—Responsibly and Confidently/i,
      })
    ).toBeVisible();
  });

  test('contact page loads form and company address', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByRole('heading', { name: /Get in Touch with Our Team/i })).toBeVisible();
    await expect(page.getByText(/Abuja & Lagos, Nigeria/i).first()).toBeVisible();
  });
});
