import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('LamboDrip Homepage - Visual snapshot (Desktop + Mobile)', async ({ page }) => {
  await page.goto('https://lambodrip.com');
  await page.waitForLoadState('networkidle');

  // Desktop snapshot
  await percySnapshot(page, 'LamboDrip Homepage - Desktop');

  // Mobile snapshot
  await page.setViewportSize({ width: 375, height: 667 });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await percySnapshot(page, 'LamboDrip Homepage - Mobile');
});