describe('Login, and Create a Valid Category', () => {
  it('should login, go to create-product page, create a category, confirm, and verify category in the dropdown list', () => {
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
    
    // Step 2: Click the "ADD PRODUCT" button (in uppercase)
    cy.contains('ADD PRODUCT').click();  // Button or link containing "ADD PRODUCT" in caps
    
    // Step 3: Ensure we are redirected to the create-product page
    cy.url().should('include', '/create-product');  // Ensure the URL contains "/create-product"
    
    // Step 4: Fill the form, but leave some fields empty.
    // Fill in one field using the provided selector
    cy.get('[style="width: 100%; height: 100%; padding: 1rem 2rem; border: 1px solid rgb(22, 72, 99); border-radius: 0.6rem; justify-content: space-around;"] > :nth-child(2) > .input-field')
      .clear().type('hello text');  // Enter something in the field
  
    // Step 5: Click the "Create Product" button without filling the remaining fields
    cy.get(':nth-child(2) > .ant-btn > span').click();  // Button that submits the form
    
    // Step 6: Ensure that the "Category created successfully!" message appears
    cy.contains('Category created successfully!').should('be.visible');  // Ensure the success message is visible
    
    // Step 7: Click the "Confirm" button on the SweetAlert popup (if applicable)
    cy.get('.swal2-confirm').click();  // Click the confirm button to close the success alert
    
    // Step 8: Open the category dropdown to see the list of created categories
    cy.get(':nth-child(5) > .ant-col-lg-18 > .input-field').select('hello text');  // Click the select button to show the categories dropdown
    
  });
});
