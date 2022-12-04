describe('/index.htm', () => {
  beforeEach(() => {
    cy.visit('/parabank/index.htm');
  });

  const validData = Cypress.env('validData');
  const invalidData = Cypress.env('invalidData');

  it('tc_004 - Successfull Forgot Password with Valid Info', () => {
    cy.url().should('include','index.htm');
    cy.xpath('//*[@id="loginPanel"]/p[1]/a').click();
    cy.url().should('include','lookup.htm');
    cy.get('.title').contains('Customer Lookup');
    cy.get('#firstName').type(validData.firstName);
    cy.get('#lastName').type(validData.lastName);
    cy.xpath('//*[@id="address.street"]').type(validData.address);
    cy.xpath('//*[@id="address.city"]').type(validData.city);
    cy.xpath('//*[@id="address.state"]').type(validData.state);
    cy.xpath('//*[@id="address.zipCode"]').type(validData.zipCode);
    cy.get('#ssn').type(validData.ssn);
    cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click();

    cy.url().should('include','lookup.htm');
    cy.get('.smallText').contains(`${validData.firstName} ${validData.lastName}`);
    cy.xpath('//*[@id="rightPanel"]/p[2]').contains(validData.username);
    cy.xpath('//*[@id="rightPanel"]/p[2]').contains(validData.password);
    cy.xpath('//*[@id="rightPanel"]/p[1]').contains('Your login information was located successfully');
  });

  it('tc_005 - Unsuccessfull Forgot Password with Empty Info', () => {
    cy.url().should('include','index.htm');
    cy.xpath('//*[@id="loginPanel"]/p[1]/a').click();
    cy.url().should('include','lookup.htm');
    cy.get('.title').contains('Customer Lookup');
    cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click();

    cy.url().should('include','lookup.htm');
    cy.xpath('//*[@id="firstName.errors"]').contains('First name is required');
    cy.xpath('//*[@id="lastName.errors"]').contains('Last name is required');
    cy.xpath('//*[@id="address.street.errors"]').contains('Address is required');
    cy.xpath('//*[@id="address.city.errors"]').contains('City is required');
    cy.xpath('//*[@id="address.state.errors"]').contains('State is required');
    cy.xpath('//*[@id="address.zipCode.errors"]').contains('Zip Code is required');
    cy.xpath('//*[@id="ssn.errors"]').contains('Social Security Number is required');
  });

  it('tc_006 - Unsuccessfull Forgot Password with Invalid Info', () => {
    cy.url().should('include','index.htm');
    cy.xpath('//*[@id="loginPanel"]/p[1]/a').click();
    cy.url().should('include','lookup.htm');
    cy.get('.title').contains('Customer Lookup');
    cy.get('#firstName').type(invalidData.firstName);
    cy.get('#lastName').type(invalidData.lastName);
    cy.xpath('//*[@id="address.street"]').type(invalidData.address);
    cy.xpath('//*[@id="address.city"]').type(invalidData.city);
    cy.xpath('//*[@id="address.state"]').type(invalidData.state);
    cy.xpath('//*[@id="address.zipCode"]').type(invalidData.zipCode);
    cy.get('#ssn').type(invalidData.ssn);
    cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click();

    cy.url().should('include','lookup.htm');
    cy.get('.title').contains('Error');
    cy.get('.error').contains('The customer information provided could not be found');
  });
});
