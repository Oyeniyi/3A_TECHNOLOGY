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

  test('portfolio page displays 3 collections, business work, Raph2 live link, confidential notices, and psalm001 GitHub CTA', async ({
    page,
  }) => {
    await page.goto('/projects');
    await expect(
      page.getByRole('heading', { name: /Business Solutions, Websites & Technical Case Studies/i })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Business & Client Solutions' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Websites & Digital Experiences' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Student & Research Projects' })
    ).toBeVisible();

    await expect(page.getByText(/Akinmart Store/i).first()).toBeVisible();
    await expect(page.getByText(/Dominion College/i).first()).toBeVisible();
    await expect(page.getByText(/Raph2 Interiors/i).first()).toBeVisible();

    const studentGithubLink = page.getByRole('link', {
      name: /Explore More Student Projects on GitHub/i,
    });
    await expect(studentGithubLink).toHaveAttribute('href', 'https://github.com/psalm001');

    // Ensure private wedding repo URL is never exposed in page HTML
    const content = await page.content();
    expect(content).not.toContain('OLAGUNJU-SAMUEL');
  });

  test('academy overview, pathways, IT/SIWES, project support, courses, events, resources, and vibe coding pages render', async ({
    page,
  }) => {
    await page.goto('/academy');
    await expect(
      page.getByRole('heading', {
        name: /Practical AI Education for People Who Want to Build and Lead/i,
      })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /Find Your Learning Path/i })
    ).toBeVisible();

    await page.goto('/academy/pathways');
    await expect(
      page.getByRole('heading', { name: /Explore Our Learning Pathways/i })
    ).toBeVisible();

    await page.goto('/academy/siwes-support');
    await expect(
      page.getByRole('heading', { name: /IT \/ SIWES Training Support/i }).first()
    ).toBeVisible();

    await page.goto('/academy/project-support');
    await expect(
      page.getByRole('heading', { name: /Academic Project Support/i }).first()
    ).toBeVisible();

    await page.goto('/academy/corporate-training');
    await expect(
      page.getByRole('heading', {
        name: /Customized Organizational & Institutional Training/i,
        level: 1,
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
      page.getByRole('heading', { name: /Academy Resource Library/i })
    ).toBeVisible();

    await page.goto('/academy/vibe-coding');
    await expect(
      page.getByRole('heading', {
        name: /Vibe Coding & AI-Assisted Development/i,
      })
    ).toBeVisible();
  });

  test('contact page loads form, official email, three office locations, and service coverage', async ({
    page,
  }) => {
    await page.goto('/contact');
    await expect(
      page.getByRole('heading', { name: /Contact 3A Technology Solutions/i, level: 1 })
    ).toBeVisible();
    await expect(page.getByText('3aafricanai@gmail.com').first()).toBeVisible();
    await expect(
      page.getByText(/Agbo Area, Olunlade, Ilorin, Kwara State, Nigeria/i).first()
    ).toBeVisible();
    await expect(
      page.getByText(/Kola Balogun Area, Osogbo, Osun State, Nigeria/i).first()
    ).toBeVisible();
    await expect(
      page
        .getByText(/Dominion College, Behind Health Centre, Oba-Ile, Akure, Ondo State, Nigeria/i)
        .first()
    ).toBeVisible();
    await expect(
      page
        .getByText(/Based in three locations across Nigeria\. Serving clients nationwide and across Africa\./i)
        .first()
    ).toBeVisible();
  });
});
