const { defineConfig } = require("cypress");

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

  env: {
    grepFilterSpecs: true,   // Active le filtrage par grep
    grepOmitFiltered: true,  // N'affiche pas les tests filtrés
  },

  e2e: {
    baseUrl: 'https://lambodrip.com',
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
  },
});
