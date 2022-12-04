describe('/index.htm', () => {
  beforeEach(() => {
    cy.visit('/parabank/index.htm');
  });

  it('success accessing homepage', () => {
    cy.url().should('include','index.htm');
    cy.get('#rightPanel').contains('ATM Services');
    cy.get('#rightPanel').contains('Online Services');
    cy.get('.button').contains('home').parent().should('have.class','home');
    cy.get('.button').contains('about').parent().should('have.class','aboutus');
    cy.get('.button').contains('contact').parent().should('have.class','contact');
  });
});