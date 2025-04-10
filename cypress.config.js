const { defineConfig } = require("cypress");
const registerCypressGrep = require('cypress-grep');

module.exports = defineConfig({
  video: true, // Enregistrement vidéo activé
  videoCompression: 32,
  videoUploadOnPasses: true,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: 'https://lambodrip.com',
    setupNodeEvents(on, config) {
      // Enregistre le plugin cypress-grep
      registerCypressGrep(config);
      return config;
    }
  },
});
