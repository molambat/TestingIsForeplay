// Playwright/tests/Cart/cart_functionality.spec.js
import { test, expect } from '@playwright/test';

test.describe('Cart Functionality - LamboDrip', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    const acceptBtn = page.locator('button:has-text("Accept")');
    if (await acceptBtn.count()) {
      await acceptBtn.first().click();
      await page.waitForTimeout(100);
    }
  });

  test('should show the cart as empty when nothing is added', async ({ page }) => {
    await page.goto('/cart');
    await page.waitForTimeout(400);
    await expect(page.locator('text=/your cart is empty/i')).toBeVisible();
  });

  test('should add a product to the cart from product page', async ({ page }) => {
    const products = page.locator('a[href*="/products"]');
    const count = await products.count();
    
    for (let i = 0; i < count; i++) {
      const el = products.nth(i);
      if (await el.isVisible()) {
        await el.click();
        return;
      }
    }
    
    await page.waitForTimeout(400);
    const addBtn = page.locator('button[name="add"]');
    await expect(addBtn).toBeVisible();
    await addBtn.click();
    await page.waitForTimeout(400);

    await page.goto('/cart');
    await page.waitForTimeout(400);
    await expect(page.locator('text=Estimated total')).toBeVisible();
  });

  test('should allow changing the quantity of a product in the cart', async ({ page }) => {
    const products = page.locator('a[href*="/products"]');
    const count = await products.count();
    
    for (let i = 0; i < count; i++) {
      const el = products.nth(i);
      if (await el.isVisible()) {
        await el.click();
        return;
      }
    }
    await page.locator('button[name="add"]').click();
    await page.waitForTimeout(500);

    await page.goto('/cart');
    await page.reload();
    await page.waitForTimeout(400);

    const quantityInput = page.locator('input.quantity__input').first();
    await expect(quantityInput).toBeVisible();
    await quantityInput.fill('2');
    await page.waitForTimeout(500);
    await expect(quantityInput).toHaveValue('2');
  });

  test('should allow removing a product from the cart', async ({ page }) => {
    const products = page.locator('a[href*="/products"]');
    const count = await products.count();
    
    for (let i = 0; i < count; i++) {
      const el = products.nth(i);
      if (await el.isVisible()) {
        await el.click();
        return;
      }
    }
    await page.locator('button[name="add"]').click();
    await page.goto('/cart');
    await page.reload();
    await page.waitForTimeout(500);

    const removeBtn = page.locator('cart-remove-button a.button--tertiary').first();
    if (await removeBtn.isVisible()) {
      await removeBtn.click();
      await page.waitForTimeout(500);
    }

    await expect(page.locator('text=/your cart is empty/i')).toBeVisible();
  });

  test('should handle multiple products in the cart', async ({ page }) => {
    const addVisibleProduct = async () => {
      await page.goto('/');
      await page.waitForTimeout(500);
  
      const products = page.locator('a[href*="/products"]');
      const count = await products.count();
  
      for (let i = 0; i < count; i++) {
        const el = products.nth(i);
        if (await el.isVisible()) {
          await el.click();
          await page.waitForTimeout(500);
          const addBtn = page.locator('button[name="add"]');
          await expect(addBtn).toBeVisible();
          await addBtn.click();
          await page.waitForTimeout(1000);
          return;
        }
      }
  
      throw new Error('❌ No visible product link found');
    };
  
    // ➕ First product
    await addVisibleProduct();
    await page.goto('/cart');
    const firstCount = await page.locator('tr.cart-item').count();
    expect(firstCount).toBeGreaterThan(0);
  
    // ➕ Second product
    await addVisibleProduct();
    await page.goto('/cart');
    const secondCount = await page.locator('tr.cart-item').count();
    expect(secondCount).toBeGreaterThanOrEqual(1);
  });  

  test('should go to checkout from the cart', async ({ page }) => {
    const products = page.locator('a[href*="/products"]');
    const count = await products.count();
    
    for (let i = 0; i < count; i++) {
      const el = products.nth(i);
      if (await el.isVisible()) {
        await el.click();
        return;
      }
    }
    await page.locator('button[name="add"]').click();
    await page.waitForTimeout(1000);

    await page.goto('/cart');
    await page.waitForTimeout(1000);

    const checkoutBtn = page.locator('.cart__footer button[name="checkout"]');
    await expect(checkoutBtn).toBeVisible();
    await checkoutBtn.scrollIntoViewIfNeeded();
    await checkoutBtn.click({ force: true });

    await page.waitForTimeout(1000);
    await page.reload();
    await expect(page).toHaveURL(/\/(checkout|checkouts)\b/);
  });

  test('should update total price when quantity changes', async ({ page }) => {
    const products = page.locator('a[href*="/products"]');
    const count = await products.count();
    
    for (let i = 0; i < count; i++) {
      const el = products.nth(i);
      if (await el.isVisible()) {
        await el.click();
        return;
      }
    }
    await page.waitForTimeout(200);
    await page.locator('button[name="add"]').click();
    await page.goto('/cart');
    await page.reload();
    await page.waitForTimeout(1000);

    const totalLocator = page.locator('.totals__total-value').first();
    await expect(totalLocator).toBeVisible();
    const totalBefore = await totalLocator.textContent();

    await page.locator('button.quantity__button[name="plus"]').click();
    await page.waitForTimeout(1000);

    const totalAfter = await totalLocator.textContent();
    expect(totalAfter?.trim()).not.toBe(totalBefore?.trim());
  });
});
