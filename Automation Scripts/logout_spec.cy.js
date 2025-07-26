describe('Login, Logout, and Redirect', () => {
  it('should login with valid credentials, then logout and redirect to the login page', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('12345678');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.get('.demo-logo-vertical > h1').should('be.visible');
    cy.get('.ant-btn').contains('Logout').click();
    cy.url().should('eq', 'http://localhost:5173/login');
  });
});
