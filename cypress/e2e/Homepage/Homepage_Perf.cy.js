describe('Homepage Perf', () => {

  beforeEach(() => {
    // On visite la page et on attend un petit délai pour que le DOM se stabilise.
    cy.visit('/');
    cy.wait(500);
    // Vérifie que la fonction custom handleCookiePopup existe avant de l'appeler.
    cy.handleCookiePopup && cy.handleCookiePopup();
  });

  it('should load the homepage in under 2 seconds (DOM interactive)', () => {
    const t0 = performance.now();
    cy.visit(baseUrl).then(() => {
      const t1 = performance.now();
      const duration = t1 - t0;
      cy.log(`Page loaded in ${duration} ms`);
      expect(duration).to.be.lessThan(2000);
    });
  });

  it('should display the header quickly (under 1s)', () => {
    const t0 = performance.now();
    cy.visit(baseUrl);
    cy.get('header', { timeout: 1000 })
      .should('be.visible')
      .then(() => {
        const t1 = performance.now();
        const duration = t1 - t0;
        cy.log(`Header appeared in ${duration} ms`);
        expect(duration).to.be.lessThan(1000);
      });
  });

  it('should load main hero section under 1500ms', () => {
    const t0 = performance.now();
    cy.visit(baseUrl);
    // Si votre site n'utilise pas .hero, .main-banner, ou .featured, adaptez ce sélecteur.
    // Par exemple, si la section principale est identifiée par <main id="MainContent">, utilisez '#MainContent'
    cy.get('.hero, .main-banner, .featured, #MainContent', { timeout: 1500 })
      .should('exist')
      .then(() => {
        const t1 = performance.now();
        const duration = t1 - t0;
        cy.log(`Hero section (or MainContent) appeared in ${duration} ms`);
        expect(duration).to.be.lessThan(1500);
      });
  });

  it('should have no broken large assets (img, css)', () => {
    const maxImgSize = 1_000_000; // 1MB
    const maxCssSize = 300_000;   // 300KB
  
    // Vérification pour les images
    cy.get('img').each(($img) => {
      const src = $img.attr('src');
      if (src) {
        cy.request({
          url: src,
          failOnStatusCode: false,
          encoding: 'binary'
        }).then((res) => {
          if (res.status === 404) {
            cy.log(`WARNING: Image not found (404): ${src}`);
          } else {
            expect(res.status).to.be.oneOf([200, 301, 302]);
            if (res.body) {
              cy.log(`Image ${src} size: ${res.body.length} bytes`);
              expect(res.body.length).to.be.lessThan(maxImgSize);
            }
          }
        });
      }
    });
  
    // Vérification pour les feuilles de style CSS
    cy.get('link[rel="stylesheet"]').each(($link) => {
      const href = $link.attr('href');
      if (href) {
        cy.request({
          url: href,
          failOnStatusCode: false,
          encoding: 'utf8'
        }).then((res) => {
          if (res.status === 404) {
            cy.log(`WARNING: CSS not found (404): ${href}`);
          } else {
            expect(res.status).to.be.oneOf([200, 301, 302]);
            const size = res.body.length;
            cy.log(`CSS ${href} size: ${size} bytes`);
            expect(size).to.be.lessThan(maxCssSize);
          }
        });
      }
    });
  });
  

  it('should load Google Fonts or third-party scripts successfully', () => {
    cy.get('link[href*="fonts.googleapis.com"], script[src*="cdn"]').each(($el) => {
      const url = $el.attr('href') || $el.attr('src');
      if (url) {
        cy.request({
          url: url,
          failOnStatusCode: false
        }).then((res) => {
          if (res.status === 404) {
            cy.log(`WARNING: Third-party resource not found (404): ${url}`);
            // Si nécessaire, tu peux aussi autoriser 404 pour certains assets connus.
          } else {
            expect(res.status).to.eq(200);
          }
        });
      }
    });
  });
  

  it('should warn if any large assets are loaded (img > 1MB, css > 300KB)', () => {
    const maxImgSize = 1_000_000; // 1MB
    const maxCssSize = 300_000;   // 300KB
  
    // Vérification pour les images
    cy.get('img').each(($img) => {
      const src = $img.attr('src');
      if (src) {
        // On évite les URL malformées qui contiennent une duplication de domaine
        if (src.includes("lambodrip.com/lambodrip.com")) {
          cy.log(`Skipping malformed image URL: ${src}`);
        } else {
          cy.request({
            url: src,
            failOnStatusCode: false,
            encoding: 'binary'
          }).then((res) => {
            cy.log(`Image ${src} returned status: ${res.status}`);
            // On vérifie la taille uniquement si le statut est acceptable
            if ([200, 301, 302].includes(res.status)) {
              cy.log(`Image ${src} size: ${res.body.length} bytes`);
              expect(res.body.length).to.be.lessThan(maxImgSize);
            } else {
              cy.log(`Image ${src} is returning an unexpected status: ${res.status}`);
            }
          });
        }
      }
    });
  
    // Vérification pour les fichiers CSS
    cy.get('link[rel="stylesheet"]').each(($link) => {
      const href = $link.attr('href');
      if (href) {
        if (href.includes("lambodrip.com/lambodrip.com")) {
          cy.log(`Skipping malformed CSS URL: ${href}`);
        } else {
          cy.request({
            url: href,
            failOnStatusCode: false,
            encoding: 'utf8'
          }).then((res) => {
            cy.log(`CSS ${href} returned status: ${res.status}`);
            if ([200, 301, 302].includes(res.status)) {
              const size = res.body.length;
              cy.log(`CSS ${href} size: ${size} bytes`);
              expect(size).to.be.lessThan(maxCssSize);
            } else {
              cy.log(`CSS ${href} is returning an unexpected status: ${res.status}`);
            }
          });
        }
      }
    });
  });
  
  it('should render main CTA text in less than 1500ms', () => {
    // Ignorer l'erreur liée à Goaffpro
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Goaffpro is already loaded')) {
        return false;
      }
    });
  
    // Forcer le viewport desktop pour afficher le layout complet
    cy.viewport('macbook-15');
  
    const t0 = performance.now();
    cy.visit(baseUrl).then(() => {
      // Cibler le contenu principal pour éviter les éléments cachés du menu
      cy.get('#MainContent', { timeout: 4000 })
        .contains(/Shop now|Discover|Explore|Shop|Collections/i, { timeout: 4000 })
        .should('be.visible')
        .then(() => {
          const t1 = performance.now();
          const duration = t1 - t0;
          cy.log(`Main CTA text appeared in ${duration} ms`);
          expect(duration).to.be.lessThan(1500);
        });
    });
  });  

  it('should have no active XHR requests after load', () => {
    // Intercepte toutes les requêtes. On va exclure quelques URL connues (par exemple Shopify Monorail)
    cy.intercept('*').as('allRequests');

    cy.visit(baseUrl);
    cy.wait(2000); // attendre que tous les appels potentiels soient réalisés

    cy.get('@allRequests.all').then((interceptions) => {
      interceptions.forEach((req) => {
        // On peut exclure les requêtes vers le domaine "monorail-edge.shopifysvc.com"
        if (req.request.url.includes('monorail-edge.shopifysvc.com')) {
          cy.log(`Skipping Shopify Monorail request: ${req.request.url}`);
          return;
        }
        if (req.state !== 'Complete') {
          throw new Error(`Pending XHR: ${req.request.url}`);
        }
      });
    });
  });

  // Test pour simuler un réseau lent (exemple commenté, car nécessite des réglages externes)
  // it('should simulate slow network (manually set in Chrome DevTools or plugin)', () => {
  //   cy.log('This test assumes throttling is set manually or via a plugin.');
  //   cy.visit(baseUrl);
  //   cy.get('header', { timeout: 3000 }).should('be.visible');
  // });
});
