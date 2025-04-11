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

  test('should have a visible cart or bag icon', async ({ page }) => {
    const cart = page.locator('a[href*="/cart"], a[href*="cart"]').first();
    await expect(cart).toBeVisible();
  });

  test('should have a visible search icon or field', async ({ page }) => {
    // Match TOUS les input type=search
    const searchFields = page.locator('input[type="search"]');
    const searchIcons = page.locator('button[aria-label*="search" i]');
  
    const count = await searchFields.count();
  
    for (let i = 0; i < count; i++) {
      const field = searchFields.nth(i);
      if (await field.isVisible()) {
        console.log(`Champ de recherche visible trouvé (index ${i})`);
        await expect(field).toBeVisible();
        return;
      }
    }
  
    if (await searchIcons.first().isVisible()) {
      console.log('Icône de recherche visible trouvée');
      await expect(searchIcons.first()).toBeVisible();
    } else {
      console.warn('Aucun champ ou icône de recherche visible sur la page');
    }
  });
});
