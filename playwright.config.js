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
      name: 'default', // ✅ Tous les tests sauf Percy
      testMatch: /.*(?<!\.percy)\.spec\.ts/, // Exclut les .percy.spec.ts
    },
    {
      name: 'visual-tests', // ✅ Uniquement les tests Percy
      testMatch: /.*\.percy\.spec\.ts/,
    }
  ]
});
