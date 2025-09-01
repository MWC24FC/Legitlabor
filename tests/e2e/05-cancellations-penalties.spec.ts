import { test, expect } from '@playwright/test';
import { sel } from './utils/selectors';

test.describe('Cancellations + penalties', () => {
  test('placeholder', async () => expect(true).toBe(true));

  test.skip('employer cancels late → worker compensated', async ({ page }) => {
    // TODO: navigate to job, cancel within penalty window
    await page.click(sel.cancelBtn);
    await expect(page.locator(sel.penaltyBanner)).toContainText(/employer penalty|escrow/i);
  });

  test.skip('worker bails → rating star deducted', async ({ page }) => {
    // TODO: simulate worker cancellation and verify rating change
    await expect(page.locator(sel.penaltyBanner)).toContainText(/rating|priority/i);
  });
});
