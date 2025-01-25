// if the seller already exists

describe('Login, Navigate to Products Page, Attempt to Create Duplicate Seller', () => {
    it('should login, attempt to create a duplicate seller, and ensure the success message does not appear', () => {
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
      
      // Step 5: Fill in the form fields to create a seller (first seller)
      // Fill Seller Name
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');  // Seller Name field
      
      // Fill Seller Email
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');  // Seller Email field
      
      // Fill Contact No.
      cy.get('#contactNo').clear().type('9876543210');  // Contact No. field
      
      // Step 6: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
      
      cy.wait(1000);
      // Step 7: Ensure the "New seller created successfully!" message does NOT appear
      // Use 'not.exist' to ensure the message is not present in the DOM at all
      cy.contains('New seller created').should('not.exist');  // Ensure the success message does NOT appear
      
    });
  });

describe('Login, Navigate to Products Page, Attempt to Create Seller with Empty Fields', () => {
    it('should login, attempt to create a seller with empty fields, and ensure the success message does not appear', () => {
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
      
      // Step 5: Leave all fields empty (simulate an attempt to create a seller with empty fields)
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear();  // Seller Name field (empty)
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear();  // Seller Email field (empty)
      cy.get('#contactNo').clear();  // Contact No. field (empty)
      
      // Step 6: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
      
      cy.wait(1000);

      // Step 7: Ensure the "New seller created successfully!" message does NOT appear
      cy.contains('New seller created').should('not.exist');  // Ensure the success message does NOT appear
      
    });
  });

  describe('Login, Navigate to Products Page, Attempt to Create Seller with Missing Contact No.', () => {
    it('should login, fill Seller Name and Seller Email, leave Contact No. empty, and ensure the form cannot be submitted', () => {
      // Step 1: Login with valid credentials
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Step 2: Navigate to the Products page
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
  
      // Step 3: Click the "Create Seller" button (in uppercase)
      cy.get(':nth-child(1) > .ant-btn').click();
  
      // Step 4: Fill in Seller Name and Seller Email, leave Contact No. empty
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');  // Seller Name
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');  // Seller Email
      cy.get('#contactNo').clear();  // Leave Contact No. empty
  
      // Step 5: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
  
      cy.wait(1000);

      // Step 7: Ensure the "New seller created successfully!" message does NOT appear
      cy.contains('New seller created').should('not.exist');  // Ensure the success message does NOT appear

      });
  });

  describe('Login, Navigate to Products Page, Attempt to Create Seller with Missing Seller Email', () => {
    it('should login, fill Seller Name and Contact No., leave Seller Email empty, and ensure the form cannot be submitted', () => {
      // Step 1: Login with valid credentials
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Step 2: Navigate to the Products page
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
  
      // Step 3: Click the "Create Seller" button (in uppercase)
      cy.get(':nth-child(1) > .ant-btn').click();
  
      // Step 4: Fill in Seller Name and Contact No., leave Seller Email empty
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');  // Seller Name
      cy.get('#contactNo').clear().type('9876543210');  // Contact No.
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear();  // Leave Seller Email empty
  
      // Step 5: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
  
      cy.wait(1000);

      // Step 7: Ensure the "New seller created successfully!" message does NOT appear
      cy.contains('New seller created').should('not.exist');  // Ensure the success message does NOT appear

    });
  });

  describe('Login, Navigate to Products Page, Attempt to Create Seller with Missing Seller Name', () => {
    it('should login, fill Seller Email and Contact No., leave Seller Name empty, and ensure the form cannot be submitted', () => {
      // Step 1: Login with valid credentials
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Step 2: Navigate to the Products page
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
  
      // Step 3: Click the "Create Seller" button (in uppercase)
      cy.get(':nth-child(1) > .ant-btn').click();
  
      // Step 4: Fill in Seller Email and Contact No., leave Seller Name empty
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear();  // Leave Seller Name empty
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');  // Seller Email
      cy.get('#contactNo').clear().type('9876543210');  // Contact No.
  
      // Step 5: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
  
      cy.wait(1000);

      // Step 7: Ensure the "New seller created successfully!" message does NOT appear
      cy.contains('New seller created').should('not.exist');  // Ensure the success message does NOT appear

      });
  });

  describe('Login, Navigate to Products Page, Attempt to Create Seller with Invalid Email (Missing @)', () => {
    it('should login, attempt to create a seller with an invalid email (missing @), and ensure the form cannot be submitted', () => {
      // Step 1: Login with valid credentials
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Step 2: Navigate to the Products page
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
  
      // Step 3: Click the "Create Seller" button (in uppercase)
      cy.get(':nth-child(1) > .ant-btn').click();
  
      // Step 4: Fill in the Seller Name and Contact No., leave the Seller Email invalid (missing @)
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');  // Seller Name
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doeexample.com');  // Invalid email (missing @)
      cy.get('#contactNo').clear().type('9876543210');  // Contact No.
  
      // Step 5: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
  
      cy.wait(1000);
  
      // Step 6: Ensure the "New seller created successfully!" message does NOT appear
      cy.contains('New seller created successfully!').should('not.exist');  // Ensure the success message does NOT appear
  
    });
  });

  describe('Login, Navigate to Products Page, Attempt to Create Seller with Invalid Contact Number (Contains Characters)', () => {
    it('should login, attempt to create a seller with a valid email and invalid contact number, and ensure the form cannot be submitted', () => {
      // Step 1: Login with valid credentials
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Step 2: Navigate to the Products page
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
  
      // Step 3: Click the "Create Seller" button (in uppercase)
      cy.get(':nth-child(1) > .ant-btn').click();
  
      // Step 4: Fill in valid Seller Email and invalid Contact No. (containing characters)
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');  // Seller Name
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');  // Valid Seller Email
      cy.get('#contactNo').clear().type('A');  // Invalid Contact No. (contains characters)
  
      // Step 5: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
  
      cy.wait(1000);
  
      // Step 6: Ensure the "New seller created successfully!" message does NOT appear
      cy.contains('New seller created successfully!').should('not.exist');  // Ensure the success message does NOT appear
  
    });
  });

  describe('Login, Navigate to Products Page, Attempt to Create Seller with Username of 2 Characters', () => {
    it('should login, attempt to create a seller with a username of 2 characters, and ensure the form cannot be submitted', () => {
      // Step 1: Login with valid credentials
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Step 2: Navigate to the Products page
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
  
      // Step 3: Click the "Create Seller" button (in uppercase)
      cy.get(':nth-child(1) > .ant-btn').click();
  
      // Step 4: Fill in the form with username of 2 characters and valid email/contact
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('Jo');  // Username with 2 characters
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');  // Valid Email
      cy.get('#contactNo').clear().type('9876543210');  // Valid Contact No.
  
      // Step 5: Click the "Create Seller" button to submit the form
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
  
      cy.wait(1000);
  
      // Step 6: Ensure the "New seller created successfully!" message does NOT appear
      cy.contains('New seller created successfully!').should('not.exist');  // Ensure the success message does NOT appear
  
      // Step 7: Ensure that a validation error message for the short username appears
      cy.contains('Username must be at least 3 characters long').should('be.visible');  // Adjust based on the actual validation message for username length
    });
  });
  
  
  
  
  
  
  
  