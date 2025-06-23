# TestingIsForeplay

![teasing gif here](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHFyZnBwZnk3YzV2NGQ5dDh4dTZocHRnYTU0dHRnY3hod3gyejZuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ybuKc5xTF2gC5na/giphy.gif)

**Nothing flaky allowed — unless it's intentional. 😉**

Welcome to my personal automation playground  
> ⚠️ This repo contains explicit attention to detail and intense QA sessions.

---

## 🔥 Let’s get intimate (with the code)

This repo is crafted to showcase:

- 🔬 Real-world QA flows, tested with **Cypress**, **Playwright** & **Percy**
- 🧠 **Manual QA approach** with clean test case writing & bug templates
- 🛠️ **CI/CD pipeline integration** via GitHub Actions
- 💅 Code that’s clean, readable, and unapologetically confident

---

## 💚 What’s inside?

- 📝 **Manual test cases** & execution reports
- 🐞 **Bug reporting templates**
- ✅ **Cypress & Playwright e2e test suites**
- 🖼️ **Visual regression testing with Percy**
- ⚙️ **GitHub Actions** already wired for CI on push
- 🔐 **Clean structure**, no bloat — just effective QA
- 🚀 **Load testing scripts** using k6 for stress simulation
- 🛡️ **OWASP ZAP baseline security scans** with reports
- 🐳 **Docker support** for instant local runs — no setup needed

---

## 💡 Why “TestingIsForeplay”?

Because **good QA is anticipation**.  
You don’t go to production without a bit of build-up.  
And when foreplay is that good… you might skip the release notes entirely. 😉

---

## 🧪 Stack & Tools

| Category               | Tools                                                                       |
|------------------------|-----------------------------------------------------------------------------|
| ✅ Automated tests     | Cypress (v14+), Playwright (v1.43+), Percy                                  |
| 🖼️ Visual Regression   | Percy (Playwright integration), supports desktop + mobile breakpoints       |
| 🧠 Manual QA           | Markdown-based test cases, Defect templates                                 |
| 🧼 API tests           | Postman, SoapUI                                                             |
| ⚙️ CI/CD               | GitHub Actions CI, Percy snapshots CI-integrated                            |
| 📦 Docs & Reporting    | Master Test Plan, Tracker, QA Tips, Allure  (Cypress HTML reports)          |
| 📱 Responsive Testing  | Cypress Viewport, Percy Multi-Viewport snapshots                            |
| 🛡️ Security Testing    | OWASP ZAP (baseline scan via GitHub Actions)                                |
| 🐳 Containerization    | Docker (Node + Cypress + Playwright + CI-ready image)                       |

---

## 📁 Cypress Tests 

![Cypress Tests](https://github.com/molambat/TestingIsForeplay/actions/workflows/cypress.yml/badge.svg)

### 🏠 Homepage Tests
- Focus: performance, UI load, localization, accessibility
- Includes mobile/responsive view testing via Cypress viewport emulation
→ [Homepage README](cypress/e2e/Homepage/README.md)

### 🛒 Cart Tests (LamboDrip Store)
- Covers: quantity updates, price calculation, removal, checkout redirects
→ [Cart README](cypress/e2e/Cart/README.md)

---

## ✨ Allure Reporting (Cypress)

**Allure reporting is integrated for Cypress tests** to generate rich, interactive test result dashboards.

### 📦 Setup

- Plugin: [`allure-cypress`](https://www.npmjs.com/package/allure-cypress)
- Reports are generated after test runs via `allure-results` directory
- View with:

```bash
npm run allure:generate
npm run allure:open
```

---

## 🎭 Playwright Tests

![Playwright Tests](https://github.com/molambat/TestingIsForeplay/actions/workflows/playwright.yml/badge.svg)

### 🏠 Homepage Tests
- Mirrors Cypress: perf, security, accessibility, UX flows 
- Includes mobile/responsive view testing via Playwright viewport emulation 
→ [Homepage Playwright](Playwright/tests/Homepage)

### 🛒 Cart Tests
- Similar coverage as Cypress, with fast execution + visual tools  
→ [Cart Playwright README](Playwright/tests/Cart/README.md)

### 📸 Percy (Visual Regression)

![Percy Visual Tests](https://github.com/molambat/TestingIsForeplay/actions/workflows/percy.yml/badge.svg)

- Percy + Playwright setup for screenshot diff across viewports
- Snapshots run for:
  - Homepage (Desktop 1280px / Mobile 375px)
- GitHub Actions triggers Percy on push  
→ Visual regression diff example (Mobile viewport - 375px):
![Percy diff mobile](./docs/screenshots/percy_mobile_diff.png)

📸 Example Percy Snapshot:
![Percy Visual Snapshot](https://percy.io/static/images/percy-icon.svg)

---

## 🚀 Load & Stress Testing

![Load Tested](https://img.shields.io/badge/Load%20Tested-k6-41c0f0?logo=k6&logoColor=white)

- Tool: k6.io — modern load testing for developers
- Goal: simulate real-world load against the homepage
- Script: [homepage_stress](./k6/homepage_stress_test.js)
- Result sample: 
````
✔ status is 200
✔ page loaded under 1s
````
---

## 🛡️ Security Scanning – OWASP ZAP

![CI/CD Passed](https://github.com/molambat/TestingIsForeplay/actions/workflows/zap_scan.yml/badge.svg)

- Tool: [OWASP ZAP](https://www.zaproxy.org/) – automated baseline security scan via GitHub Actions  
- Goal: detect common vulnerabilities & misconfigurations (headers, cookies, CSP, etc.)
- Scan type: **passive-only**, safe to run in CI pipelines
- Trigger: manual GitHub workflow (`workflow_dispatch`)
- 🔎 Reports available in [`Docs/21_zap-report`](./Docs/21_zap-report)

---

## 📬 API Tests

### Postman
- Covers: cart actions, API validations
→ [Postman Collection](postman/LamboDrip%20API%20Tests.postman_collection.json)

### SoapUI
- SOAP/XML check for `/cart.js` endpoint, structure + timing
→ [SoapUI Project](SoapUI/LamboDrip_API_Checks-soapui-project.xml)

---

## 🐳 Run Locally with Docker

![Dockerized](https://img.shields.io/badge/Dockerized-Yes-blue?logo=docker)

Want to test everything without setting up Node, Cypress or Playwright locally?  
Just use Docker:

```bash
docker build -t testingisforeplay .
docker run --rm testingisforeplay
````

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

✅ Done:

- Cypress e2e 🟢  
- Playwright e2e 🟢  
- Responsive & mobile testing 🟢  
- Postman & SoapUI 🟢  
- Percy visual testing 🟢
- k6 load test script 🟢
- OWASP ZAP 🟢
- Dockerfile 🟢
- Allure reporting integration (Cypress) 🟢

---

## 👩‍💻 About Me

QA Consultant with 6+ years of experience.  
I don’t just automate — I craft seductive test flows that bugs can’t resist.  
From CI/CD to UI/API, performance to pixel-perfection — I test it all. With style.

👉 Curious about the dual-stack version? → [QA by Day, NSFW by Night](https://github.com/molambat/QAbyDayNSFWbyNight)

✨ Bonus: I make spicy QA content because testing ≠ boring.

💌 Let’s talk. I’ll bring the edge. You bring the bugs

・ [LinkedIn](https://www.linkedin.com/in/mohammad-lambat/)  
・ [Malt](https://www.malt.fr/profile/mohammadlambat)

## 🧩 Optional Curiosity Trail

Somewhere in this repo a single test refuses to behave.  
If you follow the breadcrumbs, they lead deeper… and dirtier.

Start at `/tests_obsolete/`, if you dare. 🔍

---

> I don’t flake under pressure.  
> I retry until I pass — and always leave logs for you to replay it.

![Cypress](https://img.shields.io/badge/Tested%20with-Cypress-6e40c9?logo=cypress&logoColor=white)
![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-45ba63?logo=playwright&logoColor=white)
![Percy](https://img.shields.io/badge/Pixel%20Perfect-With%20Percy-7b46f6?logo=percy&logoColor=white)
![NSFW-Safe](https://img.shields.io/badge/NSFW%20approved-Yes%2C%20but%20classy-ff69b4)
