import { test, expect } from '@playwright/test';
import { sel } from './utils/selectors';
import { users } from './fixtures/testUsers';

test.describe('Auth: signup + login', () => {
  test('smoke: home renders', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    await expect(page).toHaveTitle(/Legit/i);
  });

  test.skip('signup new worker (wire selectors)', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    await page.click(sel.signUpLink);
    await page.fill(sel.emailInput, users.worker.email);
    await page.fill(sel.passInput, users.worker.password);
    await page.click(sel.submitBtn);
    await expect(page).toHaveURL(/dashboard|jobs/i);
  });

  test.skip('login existing employer', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    await page.click(sel.signInLink);
    await page.fill(sel.emailInput, users.employer.email);
    await page.fill(sel.passInput, users.employer.password);
    await page.click(sel.submitBtn);
    await expect(page.locator(sel.newJobBtn)).toBeVisible();
  });
});
