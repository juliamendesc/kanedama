/// <reference types="cypress" />

describe('Homepage basics', () => {
  it('should display the homepage', () => {
    cy.visit('/');
  });
  it('should find Mansa in the header', () => {
    cy.get('header').contains('Mansa').should('exist');
  });

  it('should find the link to the profile component', () => {
    cy.get('[data-testid="userProfilePage"]').should('exist');
  });
  it('should click on the link and enter the user profile page', () => {
    cy.get('[data-testid="userProfilePage"]').click();
    cy.url().should('include', '/user');
    cy.wait(1000);
    cy.go('back');
    cy.wait(400);
  });
});

// it('Shows correct company information', () => {
//   cy.customFetch('denomination').contains('MANSA GROUP');
//   cy.customFetch('siret').contains('85237989000019');
//   cy.customFetch('geo_adresse').contains('112 Avenue de Paris 94300 Vincennes');
// });

// it('Shows correct accounts information', () => {
//   cy.customFetch('account_id').contains('4f7eff50-c261-11e9-9c35-59cda6eb4cf9');
//   cy.customFetch('available').contains(851.97);
//   cy.customFetch('iban').contains('GB87NPMA07400310171236');
//   cy.customFetch('currency').contains('GBP');
// });

describe('Homepage Viewport tests', () => {
  it('should display the homepage in different viewports', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
    cy.viewport('iphone-se2');
    cy.wait(400);
    cy.viewport('iphone-xr');
    cy.wait(400);
    cy.viewport('iphone-8');
    cy.wait(400);
    cy.viewport('samsung-s10');
    cy.wait(400);
    cy.viewport('ipad-mini');
    cy.wait(400);
    cy.viewport('ipad-2');
    cy.wait(400);
    cy.viewport('samsung-note9');
    cy.wait(400);
    cy.viewport('macbook-16');
    cy.wait(1000);
  });
});

describe('API testing', () => {
  before(function () {
    cy.visit('http://localhost:3000/');
    cy.fixture('company').then(function (data) {
      this.data = data;
    });
  });
  it('Checks api request to company meets information fetched', function () {
    cy.get('[data-testid="denomination"]').should('contain', this.data.unite_legale.denomination);
  });
});
