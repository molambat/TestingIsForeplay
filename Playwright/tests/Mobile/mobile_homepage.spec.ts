import { test, expect } from '@playwright/test';

test.describe('📱 Mobile Viewport - LamboDrip Homepage', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('text=Accept').first().click().catch(() => {}); // popup cookie
  });

  test('should show logo and mobile menu icon', async ({ page }) => {
    await expect(page.locator('img.header__heading-logo')).toBeVisible();
    await expect(page.locator('summary[aria-controls="menu-drawer"]')).toBeVisible();
  });

  test('should open and close the mobile menu', async ({ page }) => {
    const menu = page.locator('#menu-drawer');
    const toggle = page.locator('summary[aria-controls="menu-drawer"]');

    await toggle.click();
    await expect(menu).toBeVisible();

    await toggle.click();
    await expect(menu).not.toBeVisible();
  });

  test('should show the SHOP CTA', async ({ page }) => {
    await expect(page.locator('#MainContent')).toContainText(/Shop now|Discover|Explore|Shop|Collections/i);
  });
});
