// Playwright test: cart_security.spec.js
import { test, expect } from '@playwright/test';

test.describe('Cart Security - LamboDrip', () => {

  test('should not expose any sensitive endpoints in cart page', async ({ page }) => {
    await page.goto('/cart');

    const links = await page.$$eval('a[href]', (anchors) =>
      anchors.map((a) => a.getAttribute('href'))
    );

    const sensitivePatterns = ['admin', 'api', 'private', '.env', 'config', 'internal'];

    const found = links.filter((href) =>
      href && sensitivePatterns.some((pattern) => href.toLowerCase().includes(pattern))
    );

    expect(found).toEqual([]);
  });

  test('should not allow injection via cart note', async ({ page }) => {
    await page.goto('/cart');

    const noteField = page.locator('textarea[name="note"]');
    if (await noteField.count() === 0) {
      test.skip('Cart note field not present');
    }

    await noteField.fill('<script>alert("XSS")</script>');
    await noteField.press('Enter');
    await page.waitForTimeout(1000);

    const bodyHTML = await page.content();
    expect(bodyHTML).not.toContain('<script>alert("XSS")</script>');
  });

});