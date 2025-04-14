import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test.describe('LamboDrip Homepage - Visual snapshot (Desktop + Mobile)', () => {
  test('should visually match on desktop and mobile', async ({ page }) => {
    await page.goto('https://lambodrip.com');
    await page.waitForLoadState('networkidle'); // safe wait

    // ⬇️ Capture snapshot for Desktop 
    await percySnapshot(page, 'LamboDrip Homepage - Desktop');

    // ⬇️ Set viewport for mobile and reload
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    // ⬇️ Capture snapshot for Mobile
    await percySnapshot(page, 'LamboDrip Homepage - Mobile');
  });
});
