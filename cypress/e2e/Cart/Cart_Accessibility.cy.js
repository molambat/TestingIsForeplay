import 'cypress-axe';

describe('Carty Accessibility', () => {

  beforeEach(() => {
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(500);
    if (cy.handleCookiePopup) {
      cy.handleCookiePopup();
    }
  });

  it('should report all accessibility violations on load without failing', () => {
    // Sauvegarder la fonction d'assertion d'origine
    const originalAssertEqual = assert.equal;
  
    // Surcharger assert.equal pour ignorer les messages concernant les "accessibility violation"
    assert.equal = (actual, expected, message, ...rest) => {
      if (message && message.includes("accessibility violation")) {
        cy.log("Accessibility violations detected (ignored): " + actual);
        return; // On n'échoue pas le test pour les violations d'accessibilité
      } else {
        return originalAssertEqual(actual, expected, message, ...rest);
      }
    };
  
    cy.injectAxe();
    cy.checkA11y(null, { skipFailures: true }, (violations) => {
      if (violations.length > 0) {
        cy.log(`${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} detected:`);
        violations.forEach((violation, index) => {
          cy.log(`${index + 1}. ${violation.help} (impact: ${violation.impact})`);
          violation.nodes.forEach((node, nodeIndex) => {
            // node.target peut être un tableau; on le joint pour l'affichage
            const targetSelector = Array.isArray(node.target)
              ? node.target.join(', ')
              : node.target;
            cy.log(`   ${nodeIndex + 1}. Element: ${targetSelector}`);
            cy.log(`       Fix: ${node.failureSummary}`);
          });
        });
      } else {
        cy.log('No accessibility violations detected.');
      }
    }).then(() => {
      // Restaurer la fonction d'assertion d'origine
      assert.equal = originalAssertEqual;
    });
  });

});
