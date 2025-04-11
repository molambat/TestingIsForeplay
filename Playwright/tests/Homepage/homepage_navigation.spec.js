// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation - LamboDrip Homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(800);

    // Cookie banner
    const acceptBtn = await page.$('text=Accept');
    if (acceptBtn) {
      await acceptBtn.click();
    }
  });

  test('should load the homepage correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/Lambo DRIP/i);
    await expect(page.locator('header')).toBeVisible();
  });


  test('should navigate to a product page from homepage', async ({ page }) => {
    const products = page.locator('a[href*="/products/"]');
    const count = await products.count();

    for (let i = 0; i < count; i++) {
      const el = products.nth(i);
      if (await el.isVisible()) {
        await el.click();
        await expect(page).toHaveURL(/\/products\//);
        return;
      }
    }

    throw new Error('❌ No visible product link found');
  });

  test('should navigate back home via the logo', async ({ page }) => {
    const logo = page.locator('a[href="/"]').first();
    if (await logo.isVisible()) {
      await logo.click();
    } else {
      const drawerToggle = page.locator('button[aria-controls*="HeaderDrawer"]');
      if (await drawerToggle.isVisible()) {
        await drawerToggle.click();
        await page.waitForTimeout(500);
        await page.locator('a[href="/"]').first().click();
      }
    }
    await expect(page).toHaveURL('/');
  });

  test('should navigate to the Shop page', async ({ page }) => {
    const shopLink = page.locator('a.button:has-text("SHOP")').first();
    await expect(shopLink).toBeVisible({ timeout: 8000 });
    await shopLink.click();
    await expect(page).toHaveURL(/\/collections\/all/);
  });
  
  

  test('should verify all visible header links are valid (internal only)', async ({ page, request }) => {
    const links = await page.$$eval('header a[href^="/"]', els =>
      els.map(el => el.getAttribute('href')).filter((href) => typeof href === 'string')
    );

    for (const href of links) {
      const res = await request.get(href);
      expect(res.status()).toBeLessThan(400);
    }
  });
});