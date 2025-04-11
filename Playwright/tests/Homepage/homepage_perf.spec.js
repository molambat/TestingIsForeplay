// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage Perf', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500); // Laisse le DOM se stabiliser

    // Gestion du cookie banner si présent
    const acceptBtn = await page.$('text=Accept');
    if (acceptBtn) {
      await acceptBtn.click();
    }
  });

  test('should load the homepage in under 2 seconds (DOM interactive)', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    const duration = Date.now() - start;
    console.log(`⏱️ Homepage load time: ${duration}ms`);
    expect(duration).toBeLessThan(2000);
  });

  test('should display the header quickly (under 1s)', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible({ timeout: 1000 });
    const duration = Date.now() - start;
    console.log(`⏱️ Header visible in: ${duration}ms`);
    expect(duration).toBeLessThan(1000);
  });

  test('should have no active XHR requests after load', async ({ page }) => {
    const requests = [];
    
    page.on('requestfinished', req => {
      const url = req.url();
      const ignored = [
        'monorail-edge.shopifysvc.com',
        'cdn.shopify.com',
        'fonts.shopifycdn.com',
        'shopifycloud.com',
        'fonts.googleapis.com',
        'checkout-web/assets'
      ].some(domain => url.includes(domain));

      if (!ignored) {
        requests.push(req);
      }
    });

    await page.goto('/');
    await page.waitForTimeout(2500);

    const pending = requests.filter(req => !req.response());
    expect(pending.length).toBe(0);
  });

});
