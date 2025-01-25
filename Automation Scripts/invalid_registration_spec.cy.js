describe('Invalid Registration', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');
    cy.log('Visited /login');

    // Check if the Register link exists and click it
    cy.get('a').contains('Register').should('exist').click();
    cy.log('Clicked the Register link');

    // Ensure the page redirects to the registration form
    cy.url().should('include', '/register');
    cy.log('Navigated to /register');

    // Clear all fields to start with a clean state
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').clear();
    cy.get('[name="password"]').clear();
    cy.get('[name="confirmPassword"]').clear();
  });

  it('should fail to redirect to the home page when all fields are empty', () => {
    cy.log('Running test: All fields are empty');
    
    cy.get('.ant-btn').contains('Register').click();

    // Expect no redirection to home page
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the name field is empty', () => {
    cy.log('Running test: Name field is empty');
    cy.get('[name="email"]').type('xyz@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');

    cy.get('.ant-btn').contains('Register').click();

    // Expect no redirection to home page
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the email field is empty', () => {
    cy.log('Running test: Email field is empty');
    cy.get('[name="name"]').type('xyz');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');

    cy.get('.ant-btn').contains('Register').click();

    // Expect no redirection to home page
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the password field is empty', () => {
    cy.log('Running test: Password field is empty');
    cy.get('[name="name"]').type('xyz');
    cy.get('[name="email"]').type('xyz@gmail.com');
    cy.get('[name="confirmPassword"]').type('password123');

    cy.get('.ant-btn').contains('Register').click();

    // Expect no redirection to home page
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the confirm password field is empty', () => {
    cy.log('Running test: Confirm password field is empty');
    cy.get('[name="name"]').type('xyz');
    cy.get('[name="email"]').type('xyz@gmail.com');
    cy.get('[name="password"]').type('password123');

    cy.get('.ant-btn').contains('Register').click();

    // Expect no redirection to home page
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  // This test case should pass if run the first time

  it('should show error when password and confirm password do not match', () => {
    cy.log('Running test: Password and confirm password do not match');

    // Fill out the form with mismatched passwords
    cy.get('[name="name"]').type('userOne');
    cy.get('[name="email"]').type('userone@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('differentPassword123');

    cy.get('.ant-btn').contains('Register').click();

    // Check if the error message is displayed
    cy.contains('Password and confirm password must be same').should('be.visible');

  });

  // Identified bug (Account is already registered upon running the above test case even though the passwords were not same)

  it('should register now with same passwords and email', () => {
    cy.log('Running test: Passwords match');

    // Fill out the form with matching passwords
    cy.get('[name="name"]').type('userOne');
    cy.get('[name="email"]').type('userone@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');

    cy.get('.ant-btn').contains('Register').click();

    // Check for the error message indicating duplicate email
    cy.contains('Duplicate').should('be.visible');

    // Ensure that the user is not redirected to the home page
    cy.url().should('eq', 'http://localhost:5173/');
  });

  it('should show error when the password is less than 6 characters', () => {
    cy.log('Running test: Password less than 6 characters');
  
    // Fill out the form with a password that is less than 6 characters
    cy.get('[name="name"]').type('userTwo');
    cy.get('[name="email"]').type('usertwo@gmail.com');
    cy.get('[name="password"]').type('pwd12');  // Password less than 6 characters
    cy.get('[name="confirmPassword"]').type('pwd12');
  
    cy.get('.ant-btn').contains('Register').click();
  
    // Check for the error message indicating that the password must be at least 6 characters
    cy.contains('Validation Failed').should('be.visible');

  });  

  it('should show error when the email is missing the "@" symbol', () => {
    cy.log('Running test: Email missing "@" symbol');
  
    // Fill out the form with an invalid email (missing "@")
    cy.get('[name="name"]').type('usernine');
    cy.get('[name="email"]').type('userninegmail.com');  // Invalid email
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
  
    cy.get('.ant-btn').contains('Register').click();
  
    // Check for the error message indicating invalid email format
    cy.contains('Validation Failed').should('be.visible');
  
  });

  it('should not allow registration with a username with only number(s)', () => {
    cy.log('Running test: Number as Username');
  
    // Fill out the form with a username that is 1 character long
    cy.get('[name="name"]').type('1');  // Username length is 1
    cy.get('[name="email"]').type('userfive@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
  
    cy.get('.ant-btn').contains('Register').click();
  
    // Ensure that the page redirects to the home page after successful registration
    cy.contains('Validation Failed').should('be.visible');
  });
  
  it('should not allow registration with a username of length 2', () => {
    cy.log('Running test: Username with length 1');
  
    // Fill out the form with a username that is 1 character long
    cy.get('[name="name"]').type('ab');  // Username length is 1
    cy.get('[name="email"]').type('usersix@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
  
    cy.get('.ant-btn').contains('Register').click();
  
    // Ensure that the page does not redirect to the home page
    cy.contains('Validation Failed').should('be.visible');

  }); 

});
