import { test, expect } from '@playwright/test';

test.describe('Commercial Client Quote Funnel (FR-02 / FR-06 / AC-06.2)', () => {
  test('navigates from service detail page to pre-selected quote form and submits successfully', async ({ page }) => {
    await page.goto('/services/ai-automation');

    await expect(
      page.getByRole('heading', { name: /Artificial Intelligence & Automation/i })
    ).toBeVisible();

    // Click primary quote CTA with query param ?service=ai-automation
    await page.getByRole('link', { name: /Request a Quote for this Service/i }).click();
    await expect(page).toHaveURL(/\/request-quote\?service=ai-automation/);

    // Verify service dropdown pre-selected 'ai-automation'
    const serviceSelect = page.getByLabel(/Primary Service Needed/i);
    await expect(serviceSelect).toHaveValue('ai-automation');

    // Fill out required fields
    await page.getByLabel(/Your Full Name/i).fill('Ngozi Okafor');
    await page.getByLabel(/Company \/ Organization/i).fill('Okafor Logistics Ltd');
    await page.getByLabel(/Commercial Email/i).fill('ngozi@okaforlogistics.com');
    await page.getByLabel(/Phone \/ WhatsApp Number/i).fill('+2348098765432');
    await page.getByLabel(/Estimated Budget Range/i).selectOption('3m-7.5m');
    await page.getByLabel(/Desired Timeline/i).selectOption('1-3-months');
    await page
      .getByLabel(/Project Scope & Objectives/i)
      .fill('We need an automated document parsing and triage pipeline for our logistics operations.');

    // Submit form
    await page.getByRole('button', { name: /Request Formal Project Quote/i }).click();

    // Assert confirmation alert banner
    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toContainText(/Thank you! Your project scoping brief has been received/i);
  });
});

