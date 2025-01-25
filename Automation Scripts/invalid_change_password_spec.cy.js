describe('Profile Page Navigation and Change Password - Invalid Cases', () => {
    it('should not allow changing the password with empty fields', () => {
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
  
      // Leave all fields empty
      cy.get(':nth-child(1) > .ant-input').clear();
      cy.get(':nth-child(2) > .ant-input').clear();
      cy.get(':nth-child(3) > .ant-input').clear();
  
      // Attempt to submit the form
      cy.get('.ant-flex > .ant-btn-primary').click();
  
      // Verify that an error message is displayed for empty fields
      cy.contains('All fields are required').should('be.visible');
  
      // Ensure the page does not redirect
      cy.url().should('include', '/change-password');
    });    

  });

  describe('Profile Page Navigation and Change Password - Missing Old Password', () => {
    it('should not allow changing the password without entering the old password', () => {
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
  
      // Leave the old password field empty
      cy.get(':nth-child(1) > .ant-input').clear();
  
      // Enter the new password
      cy.get(':nth-child(2) > .ant-input').clear().type('newpassword123');
  
      // Confirm the new password
      cy.get(':nth-child(3) > .ant-input').clear().type('newpassword123');
  
      // Attempt to submit the form
      cy.get('.ant-flex > .ant-btn-primary').click();
  
      // Verify that an error message is displayed for the missing old password
      cy.contains('All fields are required').should('be.visible');
  
      // Ensure the page does not redirect
      cy.url().should('include', '/change-password');
    });
    
  });  

  describe('Profile Page Navigation and Change Password - Short New Password', () => {
    it('should not allow changing the password when the new password is less than 6 characters', () => {
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
  
      // Enter a new password that is less than 6 characters
      cy.get(':nth-child(2) > .ant-input').clear().type('abc');
  
      // Confirm the same short password
      cy.get(':nth-child(3) > .ant-input').clear().type('abc');
  
      // Attempt to submit the form
      cy.get('.ant-flex > .ant-btn-primary').click();
  
      // Verify that an error message is displayed for the short new password
      cy.contains('New password must have 6 characters').should('be.visible');
  
      // Ensure the page does not redirect
      cy.url().should('include', '/change-password');
    });
  });

  describe('Profile Page Navigation and Change Password - New Password Matches Old Password', () => {
    it('should not allow changing the password if the new password matches the old password', () => {
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
  
      // Enter the same password as the new password
      cy.get(':nth-child(2) > .ant-input').clear().type('123456');
  
      // Confirm the same password
      cy.get(':nth-child(3) > .ant-input').clear().type('123456');
  
      // Attempt to submit the form
      cy.get('.ant-flex > .ant-btn-primary').click();
  
      // Verify that an error message is displayed
      cy.contains('New password cannot be the same as the old password').should('be.visible');
  
      // Ensure the page does not redirect
      cy.url().should('include', '/change-password');
    });
  });
  
  describe('Profile Page Navigation and Change Password - New Password Does Not Match Confirm Password', () => {
    it('should not allow changing the password if the new password and confirm password do not match', () => {
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
  
      // Enter a new password
      cy.get(':nth-child(2) > .ant-input').clear().type('newpassword123');
  
      // Enter a different confirm password
      cy.get(':nth-child(3) > .ant-input').clear().type('mismatchpassword123');
  
      // Attempt to submit the form
      cy.get('.ant-flex > .ant-btn-primary').click();
  
      // Verify that an error message is displayed
      cy.contains('Password and confirm password does not match').should('be.visible');
  
      // Ensure the page does not redirect
      cy.url().should('include', '/change-password');
    });
  });
  
  
  