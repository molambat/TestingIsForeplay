# TestingIsForeplay

![teasing gif here](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHFyZnBwZnk3YzV2NGQ5dDh4dTZocHRnYTU0dHRnY3hod3gyejZuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ybuKc5xTF2gC5na/giphy.gif)

**Nothing flaky allowed — unless it's intentional. 😉**

Welcome to my personal automation playground  
> Warning: This repo contains explicit attention to detail and intense QA sessions.

---

## 🔥 Let’s get intimate (with the code)

This repo is crafted to showcase:

- 🔬 Real-world QA flows, tested with **Cypress** and **Playwright**
- 🧠 **Manual QA approach** with clean test case writing & bug templates
- 🛠️ **CI/CD pipeline integration** via GitHub Actions
- 💅 Code that’s clean, readable, and unapologetically confident

---

## 💚 What’s inside?

- ✅ **Cypress and Playwright e2e test suites**
- 📝 **Manual test cases** & execution reports
- 🐞 **Bug reporting templates**
- ⚙️ **GitHub Actions** already running all tests on push
- 🔐 **Clean structure**, no bloat — just effective QA

---

## 💡 Why “TestingIsForeplay”?

Because **good QA is anticipation**.  
You don't go to production without some *build-up*.  
And if foreplay is good… well, sometimes you don’t even need a release note. 😉

---

## 🧪 Stack & Tools

| Category           | Tools                                                             |
|--------------------|-------------------------------------------------------------------|
| ✅ Automated tests  | Cypress (v14+),Playwright (v1.43+) GitHub Actions CI             |
| 🧠 Manual QA        | Markdown-based test cases, Defect templates                      |
| 📦 Project docs     | Master Test Plan, Execution Tracker, QA best practices           |
| 🔜 What’s next?     | SPostman (API tests), SoapUI (SOAP/XML), Load testing            |

---

## 📁 Cypress Tests

### 🏠 Homepage Tests
- Focus on: performance, UI load, accessibility, UX flows
→ [Homepage README](cypress/e2e/Homepage/README.md)

### 📦 Cart Tests (LamboDrip Store)
- Covers: quantity updates, removals, checkout flow, price calculations
→ [Cart README](cypress/e2e/Cart/README.md)

### ⚙️ CI/CD (GitHub Actions)
- All tests run automatically on push to `main`  
![Tests](https://github.com/molambat/TestingIsForeplay/actions/workflows/cypress.yml/badge.svg)

---

## 🎭 Playwright Tests

### 🏠 Homepage Tests
- Mirrors Cypress coverage: performance, security, UI checks, accessibility, UX flows  
→ [Homepage Playwright Tests](Playwright/tests/Homepage)
- Axe integration for a11y audits  
- Clean structure: `/tests/Homepage/` mirrors Cypress folder layout  
- HTML report: `npx playwright show-report`

### 🛒 Cart Tests (LamboDrip Store)
- Focus on: cart functionality, performance, accessibility, and basic security checks  
→ [Cart Playwright README](Playwright/tests/Cart/README.md)
- Includes: quantity updates, removal, checkout redirection, asset load checks  
- Runs axe checks on cart main section and footer  
- Monitors load speed for DOM & key CTA rendering

### ⚙️ CI/CD (GitHub Actions)
- All tests run automatically on push to `main`  
![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-45ba63?logo=playwright&logoColor=white)

---

### 📬 Postman API Tests
- Covers: add to cart, retrieve cart contents, simulate checkout flow
- Includes tests for status codes and cart item count
→ [Postman Collection](postman/LamboDrip%20API%20Tests.postman_collection.json)

---

### 🧼 SoapUI API Checks
- Covers: basic GET call to cart endpoint (`/cart.js`)
- Validates response structure, status `200`, and response time
- Organized as: Project > TestSuite > TestCase > TestStep
→ [SoapUI Project](SoapUI/LamboDrip_API_Checks-soapui-project.xml)

---
## 📎 QA Docs & Assets

- 🧠 [QA Tips & Best Practices](./Docs/QA_Tips_Best_Practices.md)  
- 🗂️ [Master Test Plan](./Docs/MasterTestPlan/Master_test_Plan.md)  
- ✅ [Test Execution Tracker](./Docs/Test%20Execution%20Tracker/Test_Execution_Tracker.md)  
- 🐛 [Defect Management Template](./Docs/Defect%20Management%20Template/Defect_Management_Template.md)  
- 🚨 [TNR Checklist](./Docs/TNR%20Checklist/TNR_Checklist.md)  
- 🎯 [Why QA Matters (PPT & PDF)](./Docs/Why_QA)  

---

## 🔮 Next Chapter?

> Cypress done. 
> Playwright done.

✅ Tests API :

 - Postman 
 - SoapUI 
 - Rest Assured 
 - Supertest 

🧪 Tests de performance / charge :

 - k6 
 - Locust 
 - Apache JMeter

🐛 Tests visuels (Visual Regression) :
 
 - Percy 
 - Loki 

🛡️ Sécurité :

 - OWASP ZAP
 - Nikto ou Burp Suite

🔄 Tests de compatibilité / devices / cloud testing :

 - BrowserStack / Sauce Labs

💡 Bonus tooling DevOps-friendly :
 
 - Allure Reports
 - TestRail / Xray
 - Docker

---

## 👩‍💻 About Me

I'm a QA Consultant with 6+ years of experience.  
I don’t just automate tests — I build flows that seduce bugs into showing themselves.  
From strategy to execution, CI to coverage, UI to API — I test it all. With style.

✨ Also: I create spicy QA content on the side. Because serious doesn’t mean boring.

・ [GitHub](https://github.com/molambat/https://github.com/molambat/QAbyDayNSFWbyNight) 
・ [LinkedIn](https://www.linkedin.com/in/mohammad-lambat/) 
・ [Malt](https://www.malt.fr/profile/mohammadlambat)

---

> I don’t flake under pressure.  
> I retry until I pass — and I always leave logs for you to replay it.

![Cypress](https://img.shields.io/badge/Tested%20with-Cypress-6e40c9?logo=cypress&logoColor=white)
![QA Love](https://img.shields.io/badge/Flaky%20tests-not%20welcome-red)
![NSFW-Safe](https://img.shields.io/badge/NSFW%20approved-Yes%2C%20but%20classy-ff69b4)
