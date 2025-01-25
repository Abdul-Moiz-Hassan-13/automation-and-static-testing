describe('Login, Create Empty Brand', () => {
    it('should login, go to create-product page, and not redirect when fields are empty, showing validation error', () => {
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
      
      // Step 4: Click the "Create Brand" button without filling the fields
      cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .ant-btn')
      .click();  // Button that submits the form
      
      // Step 5: Ensure that the "Validation Failed!" error message appears
      cy.contains('Validation Failed!').should('be.visible');  // Ensure the validation error is visible
    });
  });

  // If the brand already exists

  describe('Login, and Attempt to Create a Duplicate Brand', () => {
    it('should login, go to create-product page, and attempt create a duplicate brand', () => {
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
      
      // Fill in one field using the provided selector
      cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .input-field')
      .clear().type('Some text');  // Enter something in the field
  
      // Step 4: Click the "Create Brand" button without filling the fields
      cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .ant-btn')
      .click();  // Button that submits the form

      cy.wait(1000);

      // Step 6: Ensure that the "Validation Failed!" error message appears
      cy.contains('Brand created successfully!').should('not.exist');  // Ensure the validation error is visible
    });
  });
  
  