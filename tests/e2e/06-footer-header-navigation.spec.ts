import { test, expect } from '@playwright/test';
import { sel } from './utils/selectors';

test.describe('Header/Footer navigation + broken links', () => {
  test('home has logo and at least one footer link', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    await expect(page.locator(sel.headerLogo)).toBeVisible({ timeout: 5000 });
    await expect(page.locator(sel.footerLink).first()).toBeVisible();
  });

  test.skip('all footer links resolve 2xx/3xx', async ({ page }) => {
    // TODO: iterate footer links and check response.ok()
    await expect(true).toBe(true);
  });
});
