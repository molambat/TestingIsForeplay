// @ts-check
const { test, expect } = require('@playwright/test');
const { injectAxe, checkA11y } = require('axe-playwright');

test.describe('Accessibility - LamboDrip Cart Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/cart');
    await page.waitForTimeout(800);

    const acceptBtn = page.locator('button:has-text("Accept")');
    if (await acceptBtn.first().isVisible()) {
      await acceptBtn.first().click();
    }

    await injectAxe(page);
  });

  test('should have no detectable a11y violations on cart page load', async ({ page }) => {
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
      axeOptions: {
        runOnly: ['wcag2a', 'wcag2aa']
      }
    });
  });

  test('cart main content should be accessible', async ({ page }) => {
    const mainCartContent = page.locator('main#MainContent');
    await expect(mainCartContent).toBeVisible();
    await checkA11y(page, 'main#MainContent');
  });
});
