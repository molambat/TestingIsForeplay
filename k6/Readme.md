# k6 Stress Test - Homepage

## Scenario
- 20 Virtual Users
- 30s duration
- Checks:
  - Status code 200
  - Page loads under 1s

## How to run

```bash
k6 run k6/homepage_stress_test.js