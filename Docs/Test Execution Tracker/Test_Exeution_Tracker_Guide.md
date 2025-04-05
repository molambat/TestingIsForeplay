# Test Execution Tracker - Complete User Guide

## 📚 Table of Contents

- [What is a Master Test Plan?](#what-is-a-master-test-plan)
- [Why is a Master Test Plan Important?](#why-is-a-master-test-plan-important)
- [How to Use the Master Test Plan?](#how-to-use-the-master-test-plan)
- [Understanding Different Formats](#understanding-different-formats)
  - [Markdown (.md)](#markdown-md)
  - [CSV (.csv)](#csv-csv)
  - [HTML (.html)](#html-html)
  - [JSON (.json)](#json-json)
- [Tools That Can Be Connected](#tools-that-can-be-connected)
- [Common Questions](#common-questions)
- [Final Notes](#final-notes)


## 1\. Introduction

The Test Execution Tracker is a structured document used to record the progress and results of test case execution. It ensures that all test cases are properly tracked, assigned, and documented, making it easier to identify defects and measure test coverage.

### Why is a Test Execution Tracker Important?

✅ Ensures proper execution of all test cases.  
✅ Helps monitor testing progress.  
✅ Provides a record of actual vs expected results.  
✅ Aids in defect tracking and reporting.  
✅ Improves overall software quality assurance.

## 2\. File Structure

The Excel file consists of three main sheets:

### 2.1 Test Execution Tracker

This sheet is where test cases are recorded and their execution is tracked. It includes:  
\- Test Case ID: Unique identifier for each test case.  
\- Test Case Description: Brief explanation of the test.  
\- Preconditions: Necessary conditions before executing the test.  
\- Expected Result: The expected system response.  
\- Actual Result: The observed system response.  
\- Status: Current execution status (Planned, In Progress, Passed, Failed, Blocked).  
\- Tester: Name of the assigned QA tester.  
\- Execution Date: Date when the test was executed.  
\- Defect ID: Reference to the bug tracking system (if applicable).

### 2.2 Parameters (Statuses & Testers)

This sheet contains predefined lists for statuses and testers. It allows dynamic updates to the dropdown lists in the main tracker.

### 2.3 Summary

This sheet provides key insights into test execution through calculated metrics and visual dashboards.  
\- Test Case Status Distribution: A donut chart showing the percentage of test statuses.  
\- Test Cases Executed Per Tester: A stacked bar chart showing the contribution of each tester.

## 3\. Available File Formats

The Test Execution Tracker is available in multiple formats to accommodate different workflows:

### 📂 Markdown (.md)

Best for: Documentation on GitHub, GitLab, Confluence, or Notion.  
Compatible with: Git repositories, static site generators (Hugo, Jekyll), Notion.  
Use Case: Version control and lightweight documentation.

### 📂 CSV (.csv)

Best for: Importing data into structured databases or spreadsheets.  
Compatible with: Excel, Google Sheets, Notion (as a table), Jira for bulk test case imports.  
Use Case: Organizing test cases, tracking execution results, filtering test categories.

### 📂 HTML (.html)

Best for: Web-based reports and interactive test documentation.  
Compatible with: Web browsers, internal QA dashboards, automated report generation tools.  
Use Case: Creating readable reports for non-technical stakeholders.

### 📂 JSON (.json)

Best for: Machine-readable formats for automated test execution.  
Compatible with: Cypress, Selenium, Postman, Robot Framework.  
Use Case: Storing test configurations, API test scenarios, and integrating automated testing tools.

## 4\. How to Use the Test Execution Tracker

### 4.1 Adding New Test Cases

1\. Open the 'Test Execution Tracker' sheet.  
2\. Enter a new row with a unique Test Case ID and relevant details.  
3\. Select the appropriate Status from the dropdown list.  
4\. Assign the test to a tester from the dropdown list.  
5\. If the test fails, link the Defect ID from the bug tracking system.

### 4.2 Updating Test Execution Status

1\. Change the 'Status' field as tests progress.  
2\. If the test passes, select 'Passed'.  
3\. If it fails, select 'Failed' and document the defect.  
4\. If blocked, select 'Blocked' and investigate dependencies.

### 4.3 Understanding the Dashboard

\- The 'Test Execution Status Distribution' chart provides an overview of test case statuses.  
\- The 'Test Cases Executed Per Tester' chart highlights workload distribution among testers.

## 5\. Integration with Other Tools

The tracker can be connected with several testing and project management tools:

🔹 Cypress – Uses JSON for test configurations and automation.  
🔹 Selenium – Can integrate CSV/JSON test data for automated execution.  
🔹 Postman – Imports JSON test cases for API automation.  
🔹 Squash – Can import CSV test plans for structured manual testing.  
🔹 Jira/Xray – Accepts CSV test case imports to track execution.

## 6\. Best Practices

\- Always use unique Test Case IDs to maintain consistency.  
\- Regularly update execution statuses to reflect real-time progress.  
\- Review the 'Summary' dashboard frequently to identify bottlenecks.  
\- Ensure the 'Defect ID' field is populated for failed tests to maintain proper tracking.  
\- Use color-coded statuses in the tracker for quick visual reference.

## 7\. FAQ & Final Notes

❓ Does this replace the Master Test Plan?

No, the Master Test Plan defines the strategy, while the Test Execution Tracker records actual test execution.

❓ Can this be used for automated and manual testing?

Yes! Both approaches can be tracked in the same document.

❓ How often should the Test Execution Tracker be updated?

It should be updated daily or after every test cycle to maintain accurate records.

🚀 The Test Execution Tracker is an essential tool for managing test execution efficiently. Keep it updated and use it to track progress accurately!