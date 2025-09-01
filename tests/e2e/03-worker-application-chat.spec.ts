import { test, expect } from '@playwright/test';
import { sel } from './utils/selectors';

test.describe('Worker: apply + chat', () => {
  test('placeholder', async () => expect(1).toBe(1));

  test.skip('apply to job and send message', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    // TODO: login as worker
    await page.click(`${sel.jobsList} >> text=Warehouse picker`);
    await page.click(sel.applyBtn);
    await expect(page).toHaveURL(/applications|chat/i);
    await page.fill(sel.chatInput, 'Available 7am tomorrow. PPE ready.');
    await page.click(sel.sendMsgBtn);
    await expect(page.locator('text=PPE ready')).toBeVisible();
  });
});
