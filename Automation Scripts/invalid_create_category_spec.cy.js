describe('Login, Create Empty Category', () => {
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
      
      // Step 4: Click the "Create Category" button without filling the fields
      cy.get(':nth-child(2) > .ant-btn > span').click();  // Button that submits the form
      
      // Step 5: Ensure that the "Validation Failed!" error message appears
      cy.contains('Validation Failed!').should('be.visible');  // Ensure the validation error is visible
    });
  });

  // if the category already exists
  
  describe('Login, and Attempt to Create a Duplicate Category', () => {
    it('should login, go to create-product page, and create a category', () => {
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
      cy.get('[style="width: 100%; height: 100%; padding: 1rem 2rem; border: 1px solid rgb(22, 72, 99); border-radius: 0.6rem; justify-content: space-around;"] > :nth-child(2) > .input-field')
        .clear().type('Some text');  // Enter something in the field
  
      // Step 5: Click the "Create Category" button without filling the remaining fields
      cy.get(':nth-child(2) > .ant-btn > span').click();  // Button that submits the form
      
      cy.wait(1000);

      // Step 6: Ensure that the "Validation Failed!" error message appears
      cy.contains('Category created successfully!').should('not.exist');  // Ensure the validation error is visible
    });
  });
  
  