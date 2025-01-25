describe('Add Product with Valid Data', () => {
    it('should submit the form, display "Product created" message, click on Manage Products, and verify the product details', () => {
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
      
      // Step 4: Fill all necessary fields with valid data
      cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');  // Name field filled
      cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');  // Price field filled
      cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');  // Stock field filled
      cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');  // Seller field filled
      cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');  // Category field filled
      cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
      cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');  // Description field filled
      cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled
    
      // Step 5: Click the "Add Product" button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
    
      // Step 6: Ensure the "Product created" message is visible (successfully added product)
      cy.contains('Product created').should('be.visible');  // Ensure the success message is visible
      
      // Step 7: Click the confirmation button (SweetAlert confirmation)
      cy.get('.swal2-confirm').click();  // Click the confirmation button
      
      // Step 8: Click on the "MANAGE PRODUCTS" link by its text
      cy.contains('MANAGE PRODUCTS').click();  // Click "MANAGE PRODUCTS" directly using the text
      
      // Step 9: Ensure we are redirected to the manage products page
      cy.url().should('include', '/products');  // Ensure the URL contains "/manage-products"
      
      // Step 10: Verify the product details are visible on the manage products page
      cy.contains('Product Name').should('be.visible');  // Ensure the product name is visible
    });
  });
  