import 'cypress-wait-until';

describe('Cart Functionality - LamboDrip', () => {

  Cypress.on('uncaught:exception', () => false);

  const waitForCartItems = () => {
    cy.waitUntil(() =>
      cy.get('body').then($body => {
        if ($body.find('tr.cart-item').length > 0) return true;
        if ($body.text().toLowerCase().includes('your cart is empty')) return true;
        return false;
      }),
      {
        timeout: 15000,
        interval: 500,
        errorMsg: '❌ Cart neither has items nor is empty (still loading)'
      }
    );
  };

  const waitUntilProductReallyInCart = () => {
    cy.get('tr.cart-item', { timeout: 15000 }).should('exist').and('be.visible');
    cy.get('input.quantity__input', { timeout: 10000 }).should('exist').and('be.visible');
    cy.get('cart-remove-button a.button--tertiary', { timeout: 10000 }).should('exist').and('be.visible');
  };

  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
    cy.handleCookiePopup();
    cy.wait(100);
  });

  it('should show the cart as empty when nothing is added', { tags: ['@cart', '@smoke', '@empty'] }, () => {
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(400);
    cy.contains(/your cart is empty/i).should('exist');
  });

  it('should add a product to the cart from product page', { tags: ['@cart', '@functional', '@add'] }, () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(400);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(400);
    waitForCartItems();
    cy.contains('Estimated total').should('exist');
  });

  it('should allow changing the quantity of a product in the cart', { tags: ['@cart', '@functional', '@quantity'] }, () => {
    cy.get('a[href*="/products/"]').filter(':visible').first().click({ force: true });
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(500);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    waitForCartItems();
    cy.get('tr.cart-item', { timeout: 10000 }).should('be.visible').within(() => {
      cy.get('input.quantity__input').clear().type('2');
    });
    cy.wait(500);
    cy.get('input.quantity__input').first().should('have.value', '2');
  });

  it('should allow removing a product from the cart', { tags: ['@cart', '@functional', '@remove'] }, () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(400);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(500);
    cy.reload();
    waitUntilProductReallyInCart();
    cy.get('cart-remove-button a.button--tertiary', { timeout: 10000 }).first().click({ force: true });
    cy.wait(500);
    cy.contains(/your cart is empty/i, { timeout: 10000 }).should('exist');
  });

  it('should handle multiple products in the cart', { tags: ['@cart', '@regression', '@multi'] }, () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(200);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}`);
    cy.get('a[href*="/products"]').filter(':visible').last().click({ force: true });
    cy.get('button[name="add"]').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    waitForCartItems();
    cy.get('.cart-items', { timeout: 10000 }).should('exist');
    cy.get('tr.cart-item').should('have.length.at.least', 2);
  });

  it('should go to checkout from the cart', { tags: ['@cart', '@checkout', '@critical'] }, () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(200);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.get('button[name="checkout"]').first().click({ force: true });
    cy.wait(400);
    cy.url().should('include', '/checkout');
  });

  it('should update total price when quantity changes', { tags: ['@cart', '@price', '@regression'] }, () => {
    cy.get('a[href*="/products"]').filter(':visible').first().click({ force: true });
    cy.wait(200);
    cy.get('button[name="add"]').should('exist').click({ force: true });
    cy.wait(400);
    cy.visit(`${Cypress.config().baseUrl}/cart`);
    cy.wait(500);
    cy.reload();
    waitUntilProductReallyInCart();
    cy.get('.totals__total-value').invoke('text').then((totalBefore) => {
      cy.get('button.quantity__button[name="plus"]').click({ force: true });
      cy.wait(800);
      cy.get('.totals__total-value').invoke('text').should((totalAfter) => {
        expect(totalAfter.trim()).not.to.eq(totalBefore.trim());
      });
    });
  });

});