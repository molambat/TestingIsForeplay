# LamboDrip Homepage Performance Test Suite

This document is my personal rundown of the tests I built for the LamboDrip homepage (https://lambodrip.com). It’s more than just a checklist—it’s a snapshot of how I make sure our site is fast, secure, accessible, and visually on point. Plus, it’s my way of showing off some QA magic!

*Note: I plan to expand this document soon to include Navigation, Security, Accessibility, Homepage UI, and other tests. For now, enjoy the sections below and follow the Table of Contents to see what’s coming.*

---

## Table of Contents

1. [Homepage Performance Tests](#homepage-performance-tests)  
   *(see: Homepage_Perf.cy.js)*
2. [Navigation Tests](#navigation-tests)  
   *(see: Homepage.cy.js)*
3. [Security Tests](#security-tests)  
   *(see: Homepage_Security.cy.js)*
4. [Accessibility Tests](#accessibility-tests)  
   *(see: Homepage_Accessibility.cy.js)*
5. [Homepage UI Tests](#homepage-ui-tests)  
   *(see: Homepage_UI.cy.js)*

---

## Homepage Performance Tests

### Overview
I built these tests to verify that the homepage performs at its best. My focus is on:
- **Fast load times:** The homepage must be ready in under 2 seconds.
- **Rapid visibility:** Key elements like the header and hero section should appear quickly to leave a strong first impression.
- **Asset integrity:** All images and CSS files must load correctly and be optimized, because every byte counts!
- **Proper third-party loading:** I ensure that external resources (like fonts and scripts) load without issues.
- **Smooth UX:** There should be no pending network requests, and the main call-to-action (CTA) must appear promptly.

If any of these tests fail, I know there’s a risk of frustrating visitors or impacting conversions and SEO.

### Detailed Test Descriptions
1. **Homepage Load Time (DOM Interactive):**  
   - *What it does:* Measures the time required to reach DOM interactive status.
   - *Why it’s important:* Fast load times (under 2 seconds) lower bounce rates and improve user experience.
   - *Risk if failing:* Slow load times can deter visitors before they even see any content.

2. **Header Visibility:**  
   - *What it does:* Confirms the `<header>` is visible within 1 second.
   - *Why it’s important:* The header is often the first navigational cue for users and builds brand trust.
   - *Risk if failing:* A missing or delayed header can make the site seem unresponsive.

3. **Main Hero Section (or MainContent) Rendering:**  
   - *What it does:* Checks that the main hero (or `#MainContent`) displays within 1500 ms.
   - *Why it’s important:* This critical section engages visitors immediately.
   - *Risk if failing:* A slow-to-render hero section may reduce engagement and hurt conversions.

4. **Broken Assets Check (Images & CSS):**  
   - *What it does:* Iterates through images and CSS links, ensuring they return status 200, 301, or 302 and are within size limits (images < 1MB; CSS < 300KB).
   - *Why it’s important:* Ensures no visual or styling elements are missing or oversized.
   - *Risk if failing:* Broken assets can lead to visual glitches and slow load times.

5. **Third-Party Resource Loading:**  
   - *What it does:* Verifies that resources such as Google Fonts and CDN scripts load successfully (status 200).
   - *Why it’s important:* These resources ensure consistent design and user experience.
   - *Risk if failing:* Their failure could compromise the site’s visual consistency.

6. **Large Asset Size Warning:**  
   - *What it does:* Logs warnings when any image exceeds 1MB or CSS exceeds 300KB, indicating potential optimization needs.
   - *Why it’s important:* Oversized files can slow down the page significantly.
   - *Risk if failing:* Increased load times might negatively affect SEO and conversions.

7. **Main CTA Text Rendering:**  
   - *What it does:* Verifies that key CTA text (e.g., “Shop now”, “Discover”) appears within 1500 ms.
   - *Why it’s important:* A timely CTA is crucial to drive user action.
   - *Risk if failing:* A delayed CTA can result in visitors leaving before engaging.

8. **No Active XHR Requests After Load:**  
   - *What it does:* Checks that, after waiting a few seconds, no network requests (except known ones like Shopify’s Monorail) remain pending.
   - *Why it’s important:* Ensures no lingering asynchronous calls that might affect performance.
   - *Risk if failing:* Unfinished requests can cause instability or further slow down the experience.

---

## Navigation Tests

### Overview
In this section, I ensure that every navigational element works smoothly. Whether it’s moving to a product page, returning home via the logo, accessing the shop, switching localization, or opening the mobile menu, these tests simulate real user interactions. Any failure here can lead to user frustration or lost opportunities.

### Detailed Test Descriptions
1. **Homepage Load & Header Check:**  
   - *What it does:* Verifies the homepage loads with “Lambo DRIP” in the title and that the header is present.
   - *Risk if failing:* A missing header can disrupt navigation and confuse users.

2. **Product Page Navigation:**  
   - *What it does:* Simulates clicking a product link (with “/products/”) and checks for the proper display of the product page.
   - *Risk if failing:* Misdirected or broken links can prevent users from exploring products.

3. **Back Home via Logo:**  
   - *What it does:* Ensures clicking the logo (link with `href="/"`) returns visitors to the homepage.
   - *Risk if failing:* A non-functional logo can leave users stranded.

4. **Shop Page Navigation:**  
   - *What it does:* Checks that clicking “SHOP” navigates to the collections page.
   - *Risk if failing:* Inaccessible shop pages can lead to lost sales.

5. **Footer Navigation (Terms/FAQ):**  
   - *What it does:* Scrolls to the bottom and clicks a link containing “faq” or “terms”, verifying proper navigation.
   - *Risk if failing:* Broken footer links affect trust and compliance.

6. **Header Links Validity:**  
   - *What it does:* Iterates through all visible header links (internal only) to ensure they return a valid HTTP status.
   - *Risk if failing:* Broken links can impact SEO and user navigation.

7. **Localization & Currency Switch:**  
   - *What it does:* Simulates switching localization by clicking the visible localization button, selecting “Hong Kong SAR”, and confirming that the button updates to “Hong Kong SAR” with “HKD.”
   - *Risk if failing:* Misconfigured localization can confuse international users.

8. **Mobile Menu Functionality:**  
   - *What it does:* Switches to an iPhone-X viewport and confirms that the mobile menu opens correctly.
   - *Risk if failing:* A non-responsive mobile menu can hamper navigation on smartphones.

---

## Security Tests

### Overview
I built these tests to confirm our site is secure from common vulnerabilities. They ensure that the site uses HTTPS, includes essential security headers, correctly escapes user inputs, and avoids risky inline event handlers.

### Detailed Test Descriptions
1. **HTTPS Enforcement:**  
   - *What it does:* Checks that the site uses HTTPS, ensuring secure data transfer.
   - *Risk if failing:* Exposing users to data breaches and man-in-the-middle attacks.

2. **Security Headers:**  
   - *What it does:* Confirms the presence of critical headers (e.g., Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options).
   - *Risk if failing:* Missing headers can leave the site open to various attacks.

3. **XSS Vulnerability Test:**  
   - *What it does:* Attempts to trigger an alert by injecting an XSS payload via the URL.
   - *Risk if failing:* Successful XSS attacks can lead to stolen data or session hijacking.

4. **Inline Event Handler Check:**  
   - *What it does:* Scans visible elements for inline event handlers (attributes starting with “on”), excluding known exceptions.
   - *Risk if failing:* Unintended inline event handlers might expose security vulnerabilities.

*Future Additions:*  
- **Cookie Security Checks:** Verifying Secure, HttpOnly, and SameSite attributes.  
- **CORS and Referrer Policy Verification:** Ensuring proper resource-sharing configurations.  
- **Enhanced CSP Checks:** More detailed assertions on CSP directives.

---

## Accessibility Tests

### Overview
Using [cypress-axe](https://github.com/component-driven/cypress-axe), I run automated accessibility audits to ensure that our homepage meets key standards. This process detects issues like low color contrast or missing alternative texts, providing a comprehensive report for future improvements—while not blocking the build.

### Detailed Test Description
1. **Automated Accessibility Audit on Load:**
   - *What it does:* Injects axe-core and performs a full accessibility scan of the homepage.
   - *Why it's important:* Ensures the site is usable for people with disabilities and meets important guidelines.
   - *Risk if failing:* Problems like poor contrast or missing alt texts can significantly impair usability.
   - *Test Behavior:* It uses `skipFailures: true` to log all violations without failing the build.

*Future Additions:*  
- Additional checks for keyboard navigation and focus management.  
- Testing after dynamic interactions (e.g., mobile menu openings).  
- Custom configurations for more granular axe-core rule checks.

---

## Homepage UI Tests

### Overview
I focus on verifying that the homepage presents correctly according to design specifications. This includes visual appearance, typography, background colors, and responsive layouts across devices.

### Detailed Test Descriptions
- **Logo Appearance:**  
  - *What it does:* Ensures the logo (targeted by `img.header__heading-logo.motion-reduce`) is visible and roughly 150px wide.
  - *Risk if failing:* An improperly displayed logo affects branding and user trust.

- **Typography for Headings:**  
  - *What it does:* Checks that headings (e.g., `<h1>`) are visible and use the correct font family (for example, "Montserrat, sans-serif").
  - *Risk if failing:* Poor typography can disrupt visual consistency.

- **Hero Section Background:**  
  - *What it does:* Verifies that the hero section (using selectors like `.hero` or `#MainContent`) displays the expected background color.
  - *Risk if failing:* An incorrect background can break the visual hierarchy and aesthetics.

- **Responsive Design Checks:**  
  - **Mobile CTA Visibility:** Ensures that on a mobile viewport (375x667), the primary call-to-action (using `a.button.button--secondary`) is visible.
  - **Desktop Layout Integrity:** Confirms on a desktop viewport (e.g., 'macbook-15') that key elements (header and hero) are visible and maintain correct spacing.
  
- **Optional - Visual Regression:**  
  *Optionally, I may integrate visual regression tests (e.g., via cypress-image-snapshot) to compare snapshots over time and catch unintended visual changes.*

---

## Additional Considerations

- **Intermittent Network Issues:** Some tests might sporadically fail due to network variability. I document acceptable thresholds.
- **Maintenance:** As the site evolves, selectors and benchmarks may require updates.
- **Overall Impact:** Failing tests can indicate risks such as degraded UX, lower conversion rates, or SEO issues.

---

## Conclusion

This comprehensive test suite—covering Performance, Navigation, Security, Accessibility, and UI Tests—provides a full picture of the LamboDrip homepage’s quality. By continuously monitoring these aspects, I can catch and address issues before they affect our visitors. This living document guides my QA efforts and helps me pinpoint improvements early on.
