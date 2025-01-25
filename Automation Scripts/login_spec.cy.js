describe('Login and Redirect', () => {
  it('should login with valid credentials and redirect to the home page', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Clear any existing text in the email field and type the email
    cy.get('[type="text"]').clear().type('abc@gmail.com');

    // Clear any existing text in the password field and type the password
    cy.get('[type="password"]').clear().type('123456');

    // Click the login button
    cy.get('.ant-btn').click();

    // Ensure the page redirects to the home page
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
