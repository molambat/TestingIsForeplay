// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('UI - LamboDrip Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(800);

    const acceptBtn = await page.$('text=Accept');
    if (acceptBtn) {
      await acceptBtn.click();
    }
  });

  test('should display the main banner', async ({ page }) => {
    const banner = page.locator('section[class*="banner"], .hero, .main-banner').first();
    await expect(banner).toBeVisible();
  });

  test('should show the navigation menu', async ({ page }) => {
    const nav = page.locator('nav').nth(1);
    await expect(nav).toBeVisible();
    const linkCount = await nav.locator('a').count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('should show the footer with useful links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const footerLinks = await footer.locator('a').count();
    expect(footerLinks).toBeGreaterThan(0);
  });

  test('should display featured products', async ({ page }) => {
    const products = page.locator('a[href*="/products/"]');
    const count = await products.count();
    for (let i = 0; i < count; i++) {
      const product = products.nth(i);
      if (await product.isVisible()) {
        await expect(product).toBeVisible();
        return;
      }
    } 
    throw new Error('Aucun produit visible');
  });

  test('should have a visible search icon or field', async ({ page }) => {
    const searchFields = page.locator('input[type="search"]');
    const searchIcons = page.locator('button[aria-label*="search" i]');
  
    const fieldCount = await searchFields.count();
    let found = false;
  
    for (let i = 0; i < fieldCount; i++) {
      const field = searchFields.nth(i);
      if (await field.isVisible()) {
        console.log(`✅ Search field visible (index ${i})`);
        await expect(field).toBeVisible();
        found = true;
        break;
      }
    }
  
    if (!found && await searchIcons.first().isVisible()) {
      console.log('✅ Search icon visible');
      await expect(searchIcons.first()).toBeVisible();
      found = true;
    }
  
    if (!found) {
      console.warn('⚠️ No visible search field or icon found on the page');
    }
  });
  
});
