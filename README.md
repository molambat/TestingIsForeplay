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

- ✅ **Cypress & Playwright e2e test suites**
- 🖼️ **Visual regression testing with Percy**
- 📝 **Manual test cases** & execution reports
- 🐞 **Bug reporting templates**
- ⚙️ **GitHub Actions** already wired for CI on push
- 🔐 **Clean structure**, no bloat — just effective QA

---

## 💡 Why “TestingIsForeplay”?

Because **good QA is anticipation**.  
You don’t go to production without a bit of build-up.  
And when foreplay is that good… you might skip the release notes entirely. 😉

---

## 🧪 Stack & Tools

| Category              | Tools                                                                       |
|-----------------------|-----------------------------------------------------------------------------|
| ✅ Automated tests     | Cypress (v14+), Playwright (v1.43+), Percy                                  |
| 🖼️ Visual Regression   | Percy (Playwright integration), supports desktop + mobile breakpoints       |
| 🧠 Manual QA           | Markdown-based test cases, Defect templates                                 |
| 🧼 API tests           | Postman, SoapUI                                                              |
| ⚙️ CI/CD               | GitHub Actions CI, Percy snapshots CI-integrated                            |
| 📦 Docs & Reporting    | Master Test Plan, Tracker, QA Tips, Allure (planned)                        |

---

## 📁 Cypress Tests

### 🏠 Homepage Tests
- Focus: performance, UI load, localization, accessibility
→ [Homepage README](cypress/e2e/Homepage/README.md)

### 🛒 Cart Tests (LamboDrip Store)
- Covers: quantity updates, price calculation, removal, checkout redirects
→ [Cart README](cypress/e2e/Cart/README.md)

---

## 🎭 Playwright Tests

### 🏠 Homepage Tests
- Mirrors Cypress: perf, security, accessibility, UX flows  
→ [Homepage Playwright](Playwright/tests/Homepage)

### 🛒 Cart Tests
- Similar coverage as Cypress, with fast execution + visual tools  
→ [Cart Playwright README](Playwright/tests/Cart/README.md)

### 🖼️ Percy (Visual Regression)
- Percy + Playwright setup for screenshot diff across viewports
- Snapshots run for:
  - Homepage (Desktop 1280px / Mobile 375px)
  - Future extensions: Cart, Footer, Menus
- GitHub Actions triggers Percy on push  
→ [Percy Tests](Percy/homepage.percy.spec.ts)

📸 Example Percy Snapshot:
![Percy Visual Snapshot](https://percy.io/static/images/percy-icon.svg)

---

## 📬 API Tests

### Postman
- Covers: cart actions, API validations
→ [Postman Collection](postman/LamboDrip%20API%20Tests.postman_collection.json)

### SoapUI
- SOAP/XML check for `/cart.js` endpoint, structure + timing
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

✅ Done:

- Cypress e2e 🟢  
- Playwright e2e 🟢  
- Postman & SoapUI 🟢  
- Percy visual testing 🟢

🧪 Still cooking:

- **JMeter / k6** → Load testing, because we love it fast under pressure  
- **OWASP ZAP** → For basic automated security scans  
- **BrowserStack / Sauce Labs** → Device/browser cloud testing  
- **Allure / Xray** → Reporting that slaps  
- **Dockerfile** → Spin the whole suite locally, one command

---

## 👩‍💻 About Me

QA Consultant with 6+ years of experience.  
I don’t just automate — I craft seductive test flows that bugs can’t resist.  
From CI/CD to UI/API, performance to pixel-perfection — I test it all. With style.

✨ Bonus: I make spicy QA content because testing ≠ boring.

・ [GitHub](https://github.com/molambat/QAbyDayNSFWbyNight)  
・ [LinkedIn](https://www.linkedin.com/in/mohammad-lambat/)  
・ [Malt](https://www.malt.fr/profile/mohammadlambat)

---

> I don’t flake under pressure.  
> I retry until I pass — and always leave logs for you to replay it.

![Cypress](https://img.shields.io/badge/Tested%20with-Cypress-6e40c9?logo=cypress&logoColor=white)
![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-45ba63?logo=playwright&logoColor=white)
![Percy](https://img.shields.io/badge/Pixel%20Perfect-With%20Percy-7b46f6?logo=percy&logoColor=white)
![NSFW-Safe](https://img.shields.io/badge/NSFW%20approved-Yes%2C%20but%20classy-ff69b4)
