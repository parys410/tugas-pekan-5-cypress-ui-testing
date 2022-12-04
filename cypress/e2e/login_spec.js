describe('/index.htm', () => {
  beforeEach(() => {
    cy.visit('/parabank/index.htm');
  });

  const validData = Cypress.env('validData');
  const invalidData = Cypress.env('invalidData');

  it('tc_001 - Successfull Login with Valid ID', () => {
    cy.url().should('include','index.htm');
    cy.get('[name=username]').type(validData.username);
    cy.get('[name=password]').type(validData.password);
    cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click();
    cy.url().should('include','overview.htm');
    cy.get('.smallText').contains(`${validData.firstName} ${validData.lastName}`);
  });

  it('tc_002 - Unsuccessfull Login with empty username and password', () => {
    cy.url().should('include','index.htm');
    cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click();
    cy.url().should('include','login.htm');
    cy.get('.title').contains('Error');
    cy.get('.error').contains('Please enter a username and password');
  });

  it('tc_003 - Unsuccessfull Login with invalid password', () => {
    cy.url().should('include','index.htm');
    cy.get('[name=username]').type(invalidData.username);
    cy.get('[name=password]').type(invalidData.password);
    cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click();
    cy.url().should('include','login.htm');
    cy.get('.title').contains('Error');
    cy.get('.error').contains('An internal error has occurred and has been logged');
  });
});
