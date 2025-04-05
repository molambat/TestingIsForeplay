# **TNR Checklist - User Guide**

## 📚 Table of Contents

- [1. Why is a TNR Checklist Important?](#1-why-is-a-tnr-checklist-important)
- [2. File Structure](#2-file-structure)
  - [2.1 TNR Checklist (Main Sheet)](#21-tnr-checklist-main-sheet)
  - [2.2 Parameters (Status, Priority, Severity, Assigned Testers)](#22-parameters-status-priority-severity-assigned-testers)
  - [2.3 Dashboard](#23-dashboard)
- [3. Explanation of Key Columns](#3-explanation-of-key-columns)
- [4. Dashboards & Metrics](#4-dashboards--metrics)
- [5. Integration with Other Tools](#5-integration-with-other-tools)
- [6. Available File Formats](#6-available-file-formats)
- [7. Conditional Formatting](#7-conditional-formatting)
- [8. How to Generate Reports](#8-how-to-generate-reports)
- [9. Customization Options](#9-customization-options)
- [10. Best Practices](#10-best-practices)

### 1\. Why is a TNR Checklist Important?

A Test Non-Regression (TNR) Checklist is essential for ensuring that critical functionalities remain intact after software updates or modifications. It allows QA teams to track the execution of key test cases, monitor failures, and evaluate test coverage. A structured TNR checklist minimizes production issues and improves overall software reliability.

### 2\. File Structure

The template consists of the following sheets:

#### 2.1 TNR Checklist (Main Sheet)

Tracks all test cases executed during non-regression testing, including execution dates, testers, status, and defects found.

#### 2.2 Parameters (Status, Priority, Severity, Assigned Testers)

Contains predefined lists of test statuses, priority levels, severity classifications, and assigned testers.

#### 2.3 Dashboard

Provides key metrics and visual representations of test execution progress, defect rates, and tester performance.

### 3\. Explanation of Key Columns

| Test Case ID | Unique identifier for each test case. |
| --- | --- |
| Priority | Importance level of the test case (e.g., High, Medium, Low). |
| Test Case Description | Brief description of what the test case validates. |
| Preconditions | Required conditions before executing the test. |
| Expected Result | The correct behavior expected after execution. |
| Actual Result | The observed behavior after executing the test. |
| Status | Current execution state (e.g., Planned, In Progress, Passed, Failed). |
| Tester | Person responsible for executing the test. |
| Execution Date | Date when the test was executed. |
| Defect ID (if applicable) | Unique identifier for defects found during execution. |

### 4\. Dashboards & Metrics

The dashboard provides key insights into test execution, including:

- **Test Execution Status Overview:** Displays the number of tests in different statuses (Planned, In Progress, Passed, Failed, Blocked).
- **Test Execution Over Time:** Tracks test case execution trends across different dates.
- **Defects Found During TNR:** Summarizes the number of defects identified during test execution.
- **Pass vs. Fail Rate per Tester:** Compares tester performance by analyzing passed vs. failed tests.

### 5\. Integration with Other Tools

The TNR checklist can be integrated with various testing and project management tools:

🔹 **Cypress** – Uses JSON/CSV test data for automation.

🔹 **Selenium** – Can use structured CSV test data for automated execution.

🔹 **Postman** – JSON-based test cases can be imported for API testing.

🔹 **Squash** – Can import test cases in CSV format for structured manual testing.

🔹 **Jira/Xray** – Accepts CSV test case imports for tracking test execution and results.

### 6\. Available File Formats

The TNR Checklist is available in multiple formats to accommodate different workflows:

📂 **Markdown (.md)**  
Best for: Documentation on GitHub, GitLab, Confluence, or Notion.  
Compatible with: Git repositories, static site generators (Hugo, Jekyll), Notion.  
Use Case: Version control and lightweight documentation.

📂 **CSV (.csv)**  
Best for: Importing data into structured databases or spreadsheets.  
Compatible with: Excel, Google Sheets, Notion (as a table), Jira for bulk test case imports.  
Use Case: Organizing test cases, tracking execution results, filtering test categories.

📂 **HTML (.html)**  
Best for: Web-based reports and interactive test documentation.  
Compatible with: Web browsers, internal QA dashboards, automated report generation tools.  
Use Case: Creating readable reports for non-technical stakeholders.

📂 **JSON (.json)**  
Best for: Machine-readable formats for automated test execution.  
Compatible with: Cypress, Selenium, Postman, Robot Framework.  
Use Case: Storing test configurations, API test scenarios, and integrating automated testing tools.

### 7\. Conditional Formatting

The template includes color-coded fields to improve test execution visualization:

- **Failed tests** are highlighted in red.
- **In Progress tests** are color-coded for quick identification.
- **High-Priority test cases** have a distinct color to ensure focus.

### 8\. How to Generate Reports

To generate insightful reports, follow these steps:

1. **Use Pivot Tables** to summarize test execution progress and defect counts.
2. **Apply Charts** to visualize execution trends and test results over time.
3. **Use Filters** to focus on failed tests, assigned testers, and execution dates.

### 9\. Customization Options

The template can be adjusted to fit different project requirements:

- Modify test statuses, priority, and severity levels in the Parameters sheet.
- Adjust conditional formatting for improved readability.
- Integrate with external reporting or test management tools (e.g., JIRA, TestRail).

### 10\. Best Practices

✔ Keep test descriptions clear and precise.  
✔ Regularly update test statuses to ensure accurate tracking.  
✔ Ensure all defects are logged with relevant details.  
✔ Use the dashboard to monitor trends and improve test coverage.