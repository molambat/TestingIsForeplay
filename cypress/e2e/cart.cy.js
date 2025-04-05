describe('Cart Functionality - LamboDrip', () => {
  const baseUrl = 'https://lambodrip.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.wait(500);
    cy.handleCookiePopup();
    cy.wait(100);
  });

  it('should show the cart as empty when nothing is added', () => {
    cy.visit(`${baseUrl}/cart`);
    cy.contains(/your cart is empty/i).should('exist');
  });

  it('should add a product to the cart from product page', () => {
    cy.get('a[href*="/products/"]').filter(':visible').first().click({ force: true });
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${baseUrl}/cart`);
    cy.contains('Estimated total').should('exist');
  });

  it('should allow changing the quantity of a product in the cart', () => {
    cy.get('a[href*="/products/"]').filter(':visible').first().click({ force: true });
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${baseUrl}/cart`);
    cy.get('input[id="Quantity-1"]').clear().type('2');
    cy.focused().trigger('keydown', { keyCode: 9, which: 9 }); // simulate Tab
    cy.wait(400);
    cy.get('input[id="Quantity-1"]').should('have.value', '2');
  });

  it('should allow removing a product from the cart', () => {
    cy.get('a[href*="/products/"]').filter(':visible').first().click({ force: true });
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${baseUrl}/cart`); 
    // Supprime
    cy.get('cart-remove-button[id="Remove-1"]').click({ force: true });
    cy.wait(400);
    cy.contains(/your cart is empty/i).should('exist');
  });

  it('should go to checkout from the cart', () => {
    cy.get('a[href*="/products/"]').filter(':visible').first().click({ force: true });
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${baseUrl}/cart`);
    cy.get('button[name="checkout"]').first().click({force: true});
    cy.wait(400);
    cy.url().should('include', '/checkout');
  });
});