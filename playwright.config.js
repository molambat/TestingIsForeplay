const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './Playwright/tests',
  timeout: 30 * 1000,
  retries: 0,
  use: {
    baseURL: 'https://lambodrip.com',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
  reporter: [['html'], ['list']],
  projects: [
    {
      name: 'visual-tests',
      testMatch: /.*\.percy\.spec\.ts/,
      testDir: './Playwright/tests',
    }
  ]
});
