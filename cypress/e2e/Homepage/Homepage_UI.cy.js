describe('Homepage UI Tests', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
    // Call the custom cookie handler if defined
    cy.handleCookiePopup && cy.handleCookiePopup();
  });

  context('Visual Appearance', () => {
    it('should display the logo with correct dimensions', () => {
      cy.get('img.header__heading-logo.motion-reduce')
        .should('be.visible')
        .and(($img) => {
          expect($img.width()).to.be.closeTo(150, 5);
        });
    });

    it('should apply correct typography for headings', () => {
      cy.get('h1')
        .should('be.visible')
        .and('have.css', 'font-family')
        .and('include', 'Montserrat, sans-serif');
      // Optionally, add additional checks for font-size or font-weight.
    });

    it('should have the correct background color in the hero section', () => {
      cy.get('.hero, #MainContent')
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    });
  });

  context('Responsive Design', () => {
    it('should display the CTA correctly on a mobile viewport', () => {
      // Switch to a mobile viewport (e.g., iPhone dimensions)
      cy.viewport(375, 667);
      // Adjust the selector for the primary call-to-action button.
      cy.get('a.button.button--secondary')
        .should('be.visible');
    });    

    it('should maintain layout integrity on a desktop viewport', () => {
      // Force a desktop viewport (using MacBook dimensions)
      cy.viewport('macbook-15');
      cy.get('header, .hero')
        .should('be.visible')
        .then(($el) => {
          const margin = $el.css('margin');
          // Split the margin string to get the first value (usually margin-top)
          const firstValue = margin.split(' ')[0];
          Cypress.log({ message: `Computed margin value: ${margin} | First value: ${firstValue}` });
          expect(firstValue).to.match(/^\d+px$/);
        });
    });
    
    
  });

  context('Visual Regression (Optional)', () => {
    // Uncomment and adjust to integrate visual regression testing.
    // it('should match the baseline snapshot for the homepage', () => {
    //   cy.viewport('macbook-15');
    //   cy.visit(baseUrl);
    //   cy.matchImageSnapshot('homepage-desktop');
    // });
  });
});
