describe('Invalid Login', () => {
  it('should show an error message when login credentials are invalid', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('invalidemail@gmail.com');
    cy.get('[type="password"]').clear().type('wrongpassword');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/login');
    cy.contains('Wrong').should('be.visible');
  });

  it('should fail to login with empty fields', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear();
    cy.get('[type="password"]').clear();
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/login');
  });
});
