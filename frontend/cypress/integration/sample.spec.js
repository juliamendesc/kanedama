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
