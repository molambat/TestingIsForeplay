# 🛒 LamboDrip Cart Test Suite

This README is a full breakdown of the test suite I built for the **Cart page** on [LamboDrip](https://lambodrip.com). After crafting a bulletproof Homepage QA strategy, I gave the same love to the Cart—because this is where real conversions happen. From adding products, checking quantities, verifying pricing logic, to making sure it’s all secure and accessible, I’ve got it covered.

---

## Table of Contents

1. [Cart Functionality Tests](#cart-functionality-tests)  
   *(see: `Cart.cy.js`)*
2. [Cart Performance Tests](#cart-performance-tests)  
   *(see: `Cart_Perf.cy.js`)*
3. [Cart Security Tests](#cart-security-tests)  
   *(see: `Cart_Security.cy.js`)*
4. [Cart Accessibility Tests](#cart-accessibility-tests)  
   *(see: `Cart_Accessibility.cy.js`)*

---

## Cart Functionality Tests

### Overview

These tests simulate real-world shopping cart actions to ensure that everything from product addition to checkout is smooth and intuitive. It’s the bread-and-butter of the e-commerce experience.

### What I Test

- ✅ **Empty Cart View**  
  Ensures that `/cart` clearly shows a “your cart is empty” message when no items are added.

- ✅ **Adding Products to Cart**  
  Simulates navigating to a product page and clicking “Add to Cart.” Then checks that totals and product info show up properly in the cart.

- ✅ **Quantity Updates**  
  Verifies that increasing quantity updates the input and triggers a new total.

- ✅ **Price Update on Quantity Change**  
  Captures the total price before and after changing quantity to confirm the math is correct.

- ✅ **Remove Item from Cart**  
  Ensures that removing an item visually empties the cart and resets totals.

- ✅ **Checkout Navigation**  
  Confirms that clicking the checkout button redirects users to `/checkout`.

- ✅ **Multiple Product Handling**  
  Adds two separate products and checks that both show up properly in the cart with correct structure.

---

## Cart Performance Tests

### Overview

Just like on the homepage, cart performance matters. If it lags or glitches, users drop off. These tests ensure the Cart loads fast, clean, and with no broken elements.

### What I Measure

- ⚡ **Page Load Time (DOM Interactive)**  
  Checks that the cart page is ready for user interaction in under 2 seconds.

- 🖼️ **Cart Asset Checks**  
  Verifies that all images and styles load correctly (with HTTP 200, 301, or 302 responses).

- 🧮 **JS and CSS Weight**  
  Logs a warning if any CSS file is too large (> 300 KB) or if large JS payloads impact performance.

- 🛍️ **Main Totals Visibility**  
  Makes sure cart totals (like “Estimated total”) appear within a reasonable timeframe.

---

## Cart Security Tests

### Overview

This section mirrors my homepage security strategy but scoped specifically to the cart context. A secure cart = user trust.

### What I Check

- 🔐 **HTTPS Enforcement**  
  Verifies the cart page is loaded over HTTPS.

- 🛡️ **Security Headers**  
  Asserts that critical headers like `Strict-Transport-Security`, `X-Frame-Options`, and `X-Content-Type-Options` are present.

- 💥 **XSS Injection via URL**  
  Injects a basic script payload to ensure inputs are properly sanitized.

- 👁️ **Inline Event Handler Detection**  
  Scans DOM elements for insecure inline JS attributes (e.g., `onclick`) and flags any unexpected ones.

---

## Cart Accessibility Tests

### Overview

Built using `cypress-axe`, this test ensures that even our cart experience meets accessibility standards. Everyone should be able to shop.

### What I Audit

- 🧠 **Automated a11y Check on Load**  
  Runs axe-core after the cart loads and logs all violations in the console (with `skipFailures: true`).

- 🔍 **Focus & Landmarks** *(planned)*  
  Eventually, I’ll add keyboard navigation tests and landmark validation here too.

---

## Final Thoughts

The cart is one of the most sensitive and conversion-critical parts of the site, and I wanted to make sure it was as solid as our homepage. These tests aren’t just for peace of mind—they catch bugs before users do, boost performance, and reinforce user trust. And yeah, they show off what a real QA process looks like in action 🚀

Next step: Visual testing? Payment flow? Discounts & coupons? I’m always ready.

---
