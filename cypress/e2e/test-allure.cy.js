describe('Allure Cypress Demo', () => {
  it('visits homepage with allure tags', () => {
    cy.visit('/');
    cy.allure().step('Step: visited homepage'); // ✅ Fonctionne ici
  });
});