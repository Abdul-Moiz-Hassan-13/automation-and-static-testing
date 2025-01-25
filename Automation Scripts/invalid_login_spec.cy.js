describe('Invalid Login', () => {
    it('should show an error message when login credentials are invalid', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Clear any existing text in the email field and type an invalid email
      cy.get('[type="text"]').clear().type('invalidemail@gmail.com');
  
      // Clear any existing text in the password field and type an invalid password
      cy.get('[type="password"]').clear().type('wrongpassword');
  
      // Click the login button
      cy.get('.ant-btn').click();
  
      // Ensure the page does not redirect to the home page
      cy.url().should('eq', 'http://localhost:5173/login');
  
      // Check if an error message is displayed
      cy.contains('Wrong').should('be.visible');
    });
  
    it('should fail to login with empty fields', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Clear the email and password fields to simulate empty input
      cy.get('[type="text"]').clear();
      cy.get('[type="password"]').clear();
  
      // Click the login button
      cy.get('.ant-btn').click();
  
      // Ensure the page does not redirect to the home page
      cy.url().should('eq', 'http://localhost:5173/login');
  
    });
  });
  