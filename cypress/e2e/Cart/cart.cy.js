describe('Cart Functionality - LamboDrip', () => {

  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
    cy.handleCookiePopup();
    cy.wait(100);
  });

  it('should show the cart as empty when nothing is added', () => {
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(400);
    cy.contains(/your cart is empty/i).should('exist');
  });

  it('should add a product to the cart from product page', () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(400);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(400);
    cy.contains('Estimated total').should('exist');
  });

  it('should allow changing the quantity of a product in the cart', () => {
    cy.get('a[href*="/products/"]').filter(':visible').first().click({ force: true });
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(500);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
  
    cy.get('input.quantity__input', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled')
      .then(($input) => {
        cy.log('✅ Quantity input found: ', $input.attr('id'));
        cy.wrap($input).clear().type('2');
      });
  
    cy.wait(500);
    cy.get('input.quantity__input').first().should('have.value', '2');
  });
  
  it('should allow removing a product from the cart', () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(400);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(400)
    cy.get('.cart-items', { timeout: 10000 }).should('exist');
    cy.get('cart-remove-button').first().find('a.button--tertiary').click({ force: true });
    cy.wait(400);
    cy.contains(/your cart is empty/i).should('exist');
  });

  it('should handle multiple products in the cart', () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(200);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}`);
  
    cy.get('a[href*="/products"]').filter(':visible').last().click({ force: true });
    cy.get('button[name="add"]').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(400);
    cy.get('.cart-items', { timeout: 10000 }).should('exist');
    cy.get('tr.cart-item').then(($rows) => {
      expect($rows.length).to.be.at.least(2);
    });
  });

  it('should go to checkout from the cart', () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(200);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.get('button[name="checkout"]').first().click({force: true});
    cy.wait(400);
    cy.url().should('include', '/checkout');
  });

  it('should update total price when quantity changes', () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(200);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(400);
    cy.get('.totals__total-value').then(($totalBefore) => {
      const totalBefore = $totalBefore.text();
  
      cy.get('button.quantity__button[name="plus"]', { timeout: 10000 })
        .should('be.visible')
        .should('not.be.disabled')
        .first()
        .click({ force: true });
      cy.wait(400);
      cy.get('.totals__total-value').should(($totalAfter) => {
        expect($totalAfter.text()).not.to.eq(totalBefore);
      });
    });
  });

});