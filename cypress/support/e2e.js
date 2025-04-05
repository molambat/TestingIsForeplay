// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the known Goaffpro duplicate load error
    if (err.message.includes('Goaffpro is already loaded')) {
      return false;
    }
    if (err.message.includes('this.searchModal is null')) {
      return false; // Empêche Cypress de planter à cause de cette erreur
    }
    // Allow other errors to fail the test
    return true;
  });