# LamboDrip Cart – Playwright Test Suite

This README provides a QA overview of everything we test on the **LamboDrip cart page** using **Playwright**. From performance to accessibility, security, and business logic — we ensure the checkout experience is fast, functional, and reliable.

---

## Table of Contents

1. [Performance Tests](#performance-tests)  
2. [Functionality Tests](#functionality-tests)  
3. [Security Tests](#security-tests)  
4. [Accessibility Tests](#accessibility-tests)  

---

## Performance Tests

**Goal:** Ensure the cart page loads quickly and performs smoothly during checkout.

- Cart page loads in under **2 seconds**
- No blocking or long-running XHR requests
- Images, CSS, and scripts load efficiently
- Warnings for large JS/CSS assets

🧠 Slower carts = dropped conversions. These tests help prevent that.

---

## Functionality Tests

**Goal:** Allow users to interact with the cart seamlessly.

- Products appear correctly in the cart
- Quantities can be increased or decreased
- Total price updates dynamically
- “Proceed to Checkout” button works
- Cart drawer and full-page views behave consistently
- Product removal clears the cart properly

✅ These are the core mechanics that should never break.

---

## Security Tests

**Goal:** Prevent exposure of sensitive files or server headers.

- `.env`, `package.json`, and other private files return **404**
- Response headers don’t leak `x-powered-by`, `server`, or tech stack
- Cart page responds with **200 OK**
- No unexpected tech disclosures

ℹ️ Shopify-specific behaviors are logged, not failed.

---

## Accessibility Tests

**Goal:** Ensure the cart page is usable by all users.

- `axe-playwright` checks on cart main section
- Violations are **logged**, not failed
- Critical errors (if any) printed with details
- Footer and main content area revalidated

🌍 Accessible carts = inclusive UX = more conversions.

---

## Notes

- All tests are located in `/tests/Cart/`
- Performance tests simulate real user wait times (DOMInteractive, assets)
- Functional tests follow realistic cart behaviors
- Security tests are tolerant of Shopify-specific exceptions
- Accessibility tests won’t break CI, but highlight issues

---

## Future Improvements

- Validate localStorage/cart cookie behavior
- Check analytics/tracking events (add-to-cart, remove, checkout)
- Add visual regression (e.g. Percy, trace viewer screenshots)

---

## Conclusion

This Playwright cart test suite ensures everything works when money’s on the table.  
Fast load times, secure interactions, and reliable cart logic — everything is covered.

---

## How to Run the Tests

From the root of the project:

```bash
npx playwright test
npx playwright test tests/Cart