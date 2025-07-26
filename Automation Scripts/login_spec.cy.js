describe('Login and Redirect', () => {
  it('should login with valid credentials and redirect to the home page', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
