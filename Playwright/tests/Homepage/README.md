# LamboDrip Homepage – Playwright Test Suite

This README is my QA snapshot of everything we now test for the LamboDrip homepage using **Playwright**. From speed to security, accessibility, and UI—it’s all in here. If something breaks, this suite’s job is to scream first.

---

## Table of Contents

1. [Performance Tests](#performance-tests)  
2. [Navigation Tests](#navigation-tests)  
3. [Security Tests](#security-tests)  
4. [Accessibility Tests](#accessibility-tests)  
5. [UI/Design Checks](#uidesign-checks)

---

## Performance Tests

**Goal:** Make sure the homepage is lightning-fast and loads without hiccups.

- DOM becomes interactive within **2s**
- Header and hero content show up quickly
- All assets (images, CSS) are valid and optimized
- No lingering XHR requests post-load
- Warnings for assets that are too large

If any of these fail, we risk slow UX and poor SEO scores.

---

## Navigation Tests

**Goal:** Everything that can be clicked should actually work.

- Homepage loads with the correct title and header
- Clicking a product takes you to its page
- Clicking the logo returns home
- SHOP button leads to `/collections/all`
- Footer links like FAQ/Terms are working
- Header links are validated (internal only)
- Currency/localization switch behaves as expected
- Mobile menu opens cleanly on iPhone X viewport

---

## Security Tests

**Goal:** Detect obvious server misconfigurations and headers.

- Checks for missing or risky headers (`x-powered-by`, `server`)
- `.env` and `package.json` file exposure
- Ensures homepage is accessible and secure (status 200)
- Notes warnings instead of failing for Shopify limitations

We don’t fail the pipeline for .env/package.json being accessible on Shopify, but we make sure they’re flagged.

---

## Accessibility Tests

**Goal:** Ensure we meet a11y basics using `axe-playwright`.

- Automated audit runs on page load
- Footer accessibility check
- No critical violations block the tests (they’re logged, not failed)
- Uses `injectAxe()` and `checkA11y()` with detailed reporting

All violations are logged and reported, but don’t break the build.

---

## UI/Design Checks

**Goal:** Catch visual issues before a user does.

- Logo is visible and within expected dimensions
- Navigation menu is present and has links
- Featured product cards are visible
- Cart/bag icon is shown
- Search input or button is accessible
- CTA buttons are present in both mobile and desktop views

Responsive checks use different viewports (iPhone X, MacBook 15) to simulate real scenarios.

---
## Note 

- All tests are in /tests/Homepage/
- The suite does not break on accessibility or .env exposure—just logs them.
- Shopify limits access to server files, so we adapt accordingly.
- Any critical failures (broken links, missing elements, performance hits) will fail the suite.

---

## Future Improvements

- Add screenshot diffing for visual regressions
- Expand accessibility to dynamic components
- Add network throttling checks for slow connections

---
## Conclusion

This Playwright suite covers the full QA surface for the LamboDrip homepage—from load time to visual checks.
It’s my safety net for spotting regressions before our users do. 
The setup is fast, informative, and fits Shopify’s model.

---

## How to Run the Tests

From the root of the project:

```bash
npx playwright test
