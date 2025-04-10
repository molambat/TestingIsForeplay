describe('Homepage Security Tests', () => {
  const baseUrl = 'https://lambodrip.com';

  // Test 1 : Vérifier que le site est servi en HTTPS
  it('should be served over HTTPS', () => {
    cy.visit(baseUrl);
    cy.location('protocol').should('eq', 'https:');
  });

  // Test 2 : Vérifier la présence de headers de sécurité courants
  it('should have common security headers', () => {
    cy.request(baseUrl).then((response) => {
      // On vérifie que Strict-Transport-Security est présent
      expect(response.headers).to.have.property('strict-transport-security');
      // Vérifie X-Frame-Options : typiquement "DENY" ou "SAMEORIGIN"
      expect(response.headers).to.have.property('x-frame-options');
      expect(response.headers['x-frame-options']).to.match(/(DENY|SAMEORIGIN)/i);
      // Vérifie X-Content-Type-Options
      expect(response.headers).to.have.property('x-content-type-options', 'nosniff');
      
      // Vérifie le Content-Security-Policy s'il est défini (optionnel)
      if (response.headers['content-security-policy']) {
        cy.log('CSP found: ' + response.headers['content-security-policy']);
      } else {
        cy.log('No Content-Security-Policy header present.');
      }
    });
  });

  // Test 3 : Tester une vulnérabilité XSS en passant un payload dans l'URL
  it('should not trigger an alert when submitting an XSS payload in URL', () => {
    // Installer un stub pour capter les alertes
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    const xssPayload = '"><script>alert("XSS")</script>';
    cy.visit(`${baseUrl}?test=${encodeURIComponent(xssPayload)}`);
    // Attendre un court délai pour laisser le temps au payload de potentiellement s'exécuter
    cy.wait(500).then(() => {
      expect(alertStub, 'No alert should be triggered by XSS payload').not.to.be.called;
    });
  });

  // Test 4 (optionnel) : Vérifier l'absence d'attributs d'événements inline
  it('should not contain inline event handler attributes on visible elements', () => {
    // Ignore the "Goaffpro is already loaded" exception
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Goaffpro is already loaded')) {
        return false;
      }
    });
  
    cy.visit(baseUrl);
    cy.document().then((doc) => {
      const allElements = doc.getElementsByTagName('*');
      let foundInline = 0;
      for (let i = 0; i < allElements.length; i++) {
        const el = allElements[i];
        // Ignore elements that are not visible
        if (!Cypress.$(el).is(':visible')) continue;
        for (let j = 0; j < el.attributes.length; j++) {
          const attr = el.attributes[j];
          if (attr.name.startsWith('on')) {
            // If the attribute value contains "Goaffpro", ignore it
            if (attr.value && attr.value.includes('Goaffpro')) {
              continue;
            }
            foundInline++;
            cy.log(`Found inline event handler: ${attr.name} on <${el.tagName}>`);
          }
        }
      }
      expect(foundInline, 'No visible inline event handlers should be present').to.equal(0);
    });
  });  

});
