describe('Login, Navigate to Products Page, Create Seller, and Verify Seller in Manage Sellers', () => {
    it('should login, create a seller, click on "MANAGE SELLERS" and verify the recent seller is displayed', () => {
      // Step 1: Login with valid credentials
      cy.visit('http://localhost:5173/login');
      
      // Clear any existing text in the email field and type the valid email
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      
      // Clear any existing text in the password field and type the password
      cy.get('[type="password"]').clear().type('123456');
      
      // Click the login button
      cy.get('.ant-btn').click();
      
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
      
      // Step 2: Navigate to the Products page (assuming it's accessible from the home page)
      cy.contains('ADD PRODUCT').click();  // Assuming "ADD PRODUCT" is a link or button text
      cy.url().should('include', '/create-product');  // Ensure we're on the products page
      
      // Step 3: Click the "Create Seller" button (in uppercase)
      cy.get(':nth-child(1) > .ant-btn').click();  // Button to create seller
      
      // Step 4: Ensure the modal is visible
      cy.get('.ant-modal-body').should('be.visible');  // Make sure the modal appears
      
      // Step 5: Fill in the form fields to create a seller
      // Fill Seller Name
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');  // Seller Name field
      
      // Fill Seller Email
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');  // Seller Email field
      
      // Fill Contact No.
      cy.get('#contactNo').clear().type('9876543210');  // Contact No. field
      
      // Step 6: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
  
      // Step 7: Ensure the "Seller created" message is visible (successfully created seller)
      cy.contains('New seller created').should('be.visible');  // Ensure the success message is visible
      
      // Step 8: Click the confirmation button (SweetAlert confirmation)
      cy.get('.swal2-confirm').click();  // Click the confirmation button

      // Step 8: Click on the "MANAGE SELLERS" link by its text (in caps)
      cy.contains('MANAGE SELLERS').click();  // Click "MANAGE SELLERS" directly using the text
      
      // Step 9: Ensure we are redirected to the manage sellers page
      cy.url().should('include', '/sellers');  // Ensure the URL contains "/manage-sellers"
      
      // Step 10: Verify the recent seller ("John Doe") is visible on the Manage Sellers page
      cy.contains('John Doe').should('be.visible');  // Check that the recently created seller is listed
    });
  });
  