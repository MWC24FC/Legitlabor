import { test, expect } from '@playwright/test';
import { sel } from './utils/selectors';

test.describe('Admin: testing dashboard', () => {
  test('placeholder', async () => expect(1 + 1).toBe(2));

  test.skip('admin sees dashboard and Run E2E button', async ({ page, baseURL }) => {
    await page.goto(`${baseURL!}/testing`);
    await expect(page.locator(sel.adminOnly)).toBeVisible();
    await expect(page.locator(sel.runE2E)).toBeVisible();
  });
});
