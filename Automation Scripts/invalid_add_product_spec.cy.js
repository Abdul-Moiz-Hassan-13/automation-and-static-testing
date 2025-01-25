describe('Login, Add Product with Invalid Data', () => {
  it('should login, go to create-product page, and not redirect when fields are empty', () => {
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
    
    // Step 4: Leave all fields empty and try to submit the form
    cy.get(':nth-child(1) > .ant-col-lg-18').clear();  // Clear the Name field
    cy.get(':nth-child(2) > .ant-col-lg-18').clear();  // Clear the Price field
    cy.get(':nth-child(3) > .ant-col-lg-18').clear();  // Clear the Stock field
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('');  // Clear the Seller dropdown
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('');  // Clear the Category dropdown
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('');  // Clear the Brand dropdown
    cy.get(':nth-child(7) > .ant-col-lg-18').clear();  // Clear the Description field
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('');  // Clear the Size dropdown
    
    // Step 5: Click the "Add Product" button to submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
    
    // Step 6: Ensure the "Product created" message is NOT visible (since form submission should fail)
    cy.contains('Product created').should('not.exist');  // Ensure the success message is NOT visible
  });
});

describe('Add Product with Name Field Empty', () => {
  it('should not submit the form when the Name field is empty', () => {
    // Login and go to the add-product page
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    
    // Leave Name field empty and fill other fields
    cy.get(':nth-child(1) > .ant-col-lg-18').clear();  // Name field empty
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');  // Price field filled
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');  // Stock field filled
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');  // Seller field filled
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');  // Category field filled
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');  // Description field filled
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled

    // Submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed

    // Ensure the "Product created" message is NOT visible (since form submission should fail)
    cy.contains('Product created').should('not.exist');  // Ensure the success message is NOT visible
  });
});

describe('Add Product with Price Field Empty', () => {
  it('should not submit the form when the Price field is empty', () => {
    // Login and go to the add-product page
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    
    // Leave Price field empty and fill other fields
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');  // Name field filled
    cy.get(':nth-child(2) > .ant-col-lg-18').clear();  // Price field empty
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');  // Stock field filled
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');  // Seller field filled
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');  // Category field filled
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');  // Description field filled
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled

    // Submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed

    // Ensure the "Product created" message is NOT visible (since form submission should fail)
    cy.contains('Product created').should('not.exist');  // Ensure the success message is NOT visible
  });
});

describe('Add Product with Stock Field Empty', () => {
  it('should not submit the form when the Stock field is empty', () => {
    // Login and go to the add-product page
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    
    // Leave Stock field empty and fill other fields
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');  // Name field filled
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');  // Price field filled
    cy.get(':nth-child(3) > .ant-col-lg-18').clear();  // Stock field empty
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');  // Seller field filled
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');  // Category field filled
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');  // Description field filled
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled

    // Submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed

    // Ensure the "Product created" message is NOT visible (since form submission should fail)
    cy.contains('Product created').should('not.exist');  // Ensure the success message is NOT visible
  });
});

describe('Add Product with Seller Field Empty', () => {
  it('should not submit the form when the Seller field is empty', () => {
    // Login and go to the add-product page
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    
    // Leave Seller field empty and fill other fields
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');  // Name field filled
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');  // Price field filled
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');  // Stock field filled
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('');  // Seller field empty
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');  // Category field filled
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');  // Description field filled
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled

    // Submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed

    // Ensure the "Product created" message is NOT visible (since form submission should fail)
    cy.contains('Product created').should('not.exist');  // Ensure the success message is NOT visible
  });
});

describe('Add Product with Category Field Empty', () => {
  it('should not submit the form when the Category field is empty', () => {
    // Login and go to the add-product page
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    
    // Leave Category field empty and fill other fields
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');  // Name field filled
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');  // Price field filled
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');  // Stock field filled
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');  // Seller field filled
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('');  // Category field empty
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');  // Description field filled
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled

    // Submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed

    // Ensure the "Product created" message is NOT visible (since form submission should fail)
    cy.contains('Product created').should('not.exist');  // Ensure the success message is NOT visible
  });
});

describe('Add Product with Negative Stock', () => {
  it('should not submit the form when the Stock field contains a negative value', () => {
    // Login and go to the add-product page
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    
    // Fill all necessary fields and set Stock to a negative value
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');  // Name field filled
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');  // Price field filled
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('-10');  // Stock field set to a negative value
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');  // Seller field filled
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');  // Category field filled
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');  // Description field filled
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled

    // Submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed

    // Ensure the "Product added successfully" message is NOT visible (since form submission should fail)
    cy.contains('Product created').should('not.exist');  // Ensure this success message is NOT displayed
  });
});

describe('Add Product with Invalid Data (1 Letter Name and Description)', () => {
  it('should not submit the form when the Name and Description fields are filled with only 1 letter', () => {
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
    
    // Step 4: Fill the Name and Description fields with only 1 letter and other fields with valid data
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('A');  // Name field with 1 letter
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');  // Price field filled
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');  // Stock field filled
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');  // Seller field filled
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');  // Category field filled
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');  // Brand field filled
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('A');  // Description field with 1 letter
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');  // Size field filled
    
    // Step 5: Click the "Add Product" button to submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed

    cy.wait(1000);

    cy.contains('Product created successfully!').should('not.exist');  // Ensure this success message is NOT displayed
    
  });
});


  
  
  