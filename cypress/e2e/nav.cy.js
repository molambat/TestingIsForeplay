// We're not just checking selectors — we're seducing them.
describe('Navigation - LamboDrip Homepage', () => {
  const baseUrl = 'https://lambodrip.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.wait(500);
    cy.handleCookiePopup();
  });

  it('should load the homepage correctly', () => {
    cy.title().should('include', 'Lambo DRIP');
    cy.get('header').should('exist');
  })

  it('should navigate to a product page from homepage', () => {
    cy.get('a[href*="/products/"]')
      .filter(':visible')
      .first()
      .scrollIntoView()
      .click({ force: true });
    cy.url().should('include', '/products/');
    cy.get('h1').should('exist'); 
  });

  it('should navigate back home via the logo', () => {
    cy.get('a[href="/"]').filter(':visible').first().click();
    cy.url().should('eq', `${baseUrl}/`);
  });

  it('should navigate to the Shop page', () => {
    cy.contains('SHOP').click({ force: true });
    cy.url().should('include', 'collections/all');
  });

  it('should navigate to Terms or FAQ from footer', () => {
    cy.scrollTo('bottom');
    cy.contains(/faq|terms/i).first().click({ force: true });
    cy.url().should('include', '/pages'); 
  });

  it('should verify all visible header links are valid (internal only)', () => {
    cy.get('header a:visible').each(link => {
      const href = link.prop('href');
      
      if (href && href.includes('lambodrip.com')) {
        cy.request({
          url: href,
          failOnStatusCode: false
        }).its('status').should('be.oneOf', [200, 301, 302]);
      } else {
        cy.log(`Skipping external link: ${href}`);
      }
    });
  });

  it('should open the mobile menu if present', () => {
    cy.viewport('iphone-x');
    cy.get('summary[aria-controls="menu-drawer"]').should('be.visible').click();
    cy.get('#menu-drawer', { timeout: 5000 }).should('be.visible');
  });
});
