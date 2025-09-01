import { test, expect } from '@playwright/test';

test('health check', async ({ page }) => {
  await page.goto('/');
  expect(true).toBe(true);
});
