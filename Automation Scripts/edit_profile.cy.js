describe('Edit Profile with valid input', () => {
    it('should login, go to profile, update name to "abcde", and redirect to /profile', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
      
      // Clear any existing text in the email field and type the valid email
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      
      // Clear any existing text in the password field and type the password
      cy.get('[type="password"]').clear().type('123456');
      
      // Click the login button
      cy.get('.ant-btn').click();
      
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
      
      // Click the "PROFILE" button or link
      cy.contains('PROFILE').click();
      
      // Ensure the page redirects to the profile page
      cy.url().should('include', '/profile');
      
      // Click the edit profile button to navigate to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      
      // Ensure the page redirects to the edit profile page
      cy.url().should('include', '/edit-profile');
      
      // Update the name field to "abcde"
      cy.get('[name="name"]').clear().type('abcde');
      
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
      
      // Optionally, wait for the page to stabilize (in case of form validation or other behavior)
      cy.wait(1000); // Wait for 1 second or adjust depending on your app's behavior
    
      // Ensure the page does NOT redirect to http://localhost:5173/profile due to empty name field
      cy.url().should('eq', 'http://localhost:5173/profile');
      
      // Ensure the updated name "abcde" is visible on the profile page
      cy.contains('abcde').should('be.visible');  // Check that the name is displayed on the profile page
    });
  });
  