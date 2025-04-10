describe('Navigation - LamboDrip Homepage', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
    cy.handleCookiePopup();
  });

  it('should load the homepage correctly', { tags: ['@homepage', '@smoke'] }, () => {
    cy.title().should('include', 'Lambo DRIP');
    cy.get('header').should('exist');
  });

  it('should navigate to a product page from homepage', { tags: ['@homepage', '@navigation'] }, () => {
    cy.get('a[href*="/products/"]')
      .filter(':visible')
      .first()
      .scrollIntoView()
      .click({ force: true });
    cy.url().should('include', '/products/');
    cy.get('h1').should('exist'); 
  });

  it('should navigate back home via the logo', { tags: ['@homepage', '@navigation'] }, () => {
    cy.get('a[href="/"]').filter(':visible').first().click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('should navigate to the Shop page', { tags: ['@homepage', '@navigation'] }, () => {
    cy.contains('SHOP').click({ force: true });
    cy.url().should('include', 'collections/all');
  });

  it('should navigate to Terms or FAQ from footer', () => {
    cy.scrollTo('bottom');
    cy.contains(/faq|terms/i).first().click({ force: true });
    cy.url().should('match', /\/(pages|policies)\//);
  });

  it('should verify all visible header links are valid (internal only)', { tags: ['@homepage', '@links', '@validation'] }, () => {
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

  it('should update localization and currency when a different country is selected', { tags: ['@homepage', '@localization'] }, () => {
    cy.get('button.disclosure__button.localization-selector')
      .filter(':visible')
      .first()
      .click({ force: true });

    cy.get('div.disclosure__list-wrapper.country-selector', { timeout: 4000 })
      .should('be.visible');

    cy.contains('a.disclosure__link', 'Hong Kong SAR').click({ force: true });

    cy.get('button.disclosure__button.localization-selector')
      .should('contain', 'Hong Kong SAR')
      .and('contain', 'HKD');
  });

  it('should open the mobile menu if present', { tags: ['@homepage', '@responsive', '@mobile'] }, () => {
    cy.viewport('iphone-x');
    cy.get('summary[aria-controls="menu-drawer"]').should('be.visible').click();
    cy.get('#menu-drawer', { timeout: 5000 }).should('be.visible');
  });

});
