describe('Login, Logout, and Redirect', () => {
    it('should login with valid credentials, then logout and redirect to the login page', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Clear any existing text in the email field and type the email
      cy.get('[type="text"]').clear().type('abc@gmail.com');
  
      // Clear any existing text in the password field and type the password
      cy.get('[type="password"]').clear().type('12345678');
  
      // Click the login button
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Ensure the user is logged in by checking for an element that appears when logged in
      cy.get('.demo-logo-vertical > h1').should('be.visible'); // Replace with an element visible only when logged in
  
      // Click the logout button
      cy.get('.ant-btn').contains('Logout').click(); // Assuming the button contains 'Logout'
  
      // Ensure the page redirects to the login page after logging out
      cy.url().should('eq', 'http://localhost:5173/login');
    });
  });
  