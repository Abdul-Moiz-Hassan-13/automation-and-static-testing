describe('Profile Page Navigation and Change Password', () => {
    it('should login, navigate to the profile page, and change the password', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Login with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Navigate to the PROFILE page using text "PROFILE"
      cy.contains('PROFILE').click();
  
      // Ensure the page redirects to the profile page
      cy.url().should('include', '/profile');
  
      // Click the "Change Password" button
      cy.get('[href="/change-password"] > .ant-btn > :nth-child(2)').click();
  
      // Ensure the page redirects to the change password page
      cy.url().should('include', '/change-password');
  
      // Enter the old password
      cy.get(':nth-child(1) > .ant-input').clear().type('123456');
  
      // Enter the new password
      cy.get(':nth-child(2) > .ant-input').clear().type('newpassword123');
  
      // Confirm the new password
      cy.get(':nth-child(3) > .ant-input').clear().type('newpassword123');
  
      // Submit the form
      cy.get('.ant-flex > .ant-btn-primary').click();
  
      // Verify success message or page behavior
      cy.contains('Password changed successfully').should('be.visible');
    });
  });
  