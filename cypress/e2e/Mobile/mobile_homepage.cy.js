describe('📱 Mobile Viewport - LamboDrip Homepage', () => {
    beforeEach(() => {
      cy.viewport(375, 667); // iPhone 8 dimensions
      cy.visit('/');
      cy.handleCookiePopup(); // si t'as déjà cette commande
    });
  
    it('should display the logo and mobile nav', () => {
      cy.get('img.header__heading-logo').should('be.visible');
      cy.get('summary[aria-controls="menu-drawer"]').should('be.visible');
    });
  
    it('should open and close the mobile menu', () => {
      cy.get('summary[aria-controls="menu-drawer"]').click();
      cy.get('#menu-drawer').should('be.visible');
      cy.get('summary[aria-controls="menu-drawer"]').click();
      cy.get('#menu-drawer').should('not.be.visible');
    });
  
    it('should show main CTA properly on mobile', () => {
      cy.contains('a.button', 'SHOP').should('be.visible');
    });
  });
  