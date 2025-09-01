import { test, expect } from '@playwright/test';
import { sel } from './utils/selectors';

test.describe('Attendance + payout', () => {
  test('placeholder', async () => expect(true).toBeTruthy());

  test.skip('clock in/out and verify payout row', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    // TODO: login as worker assigned to a job
    await page.click(sel.clockInBtn);
    await expect(page.locator(sel.clockOutBtn)).toBeVisible();
    await page.click(sel.clockOutBtn);
    await expect(page.locator(sel.payoutRow)).toContainText(/$|paid/i);
  });
});
