// If the test is run the first time, this test case will pass

describe('Register and Redirect', () => {
  it('should click the register button, fill the form, and redirect to the home page', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Click the register button
    cy.get('a').contains('Register').click();

    // Ensure the page redirects to the registration form
    cy.url().should('include', '/register');

    // Fill in the registration form
    cy.get('[name="name"]').clear().type('xyz');
    cy.get('[name="email"]').clear().type('xyz@gmail.com');
    cy.get('[name="password"]').clear().type('password123');
    cy.get('[name="confirmPassword"]').clear().type('password123');

    // Submit the registration form
    cy.get('.ant-btn').contains('Register').click();

    // Ensure the page redirects to the home page after registration
    cy.url().should('eq', 'http://localhost:5173/');
  });

// If the test is run again, this test case will pass

  it('should show a duplicate entity popup when trying to register with an existing email', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Click the register button
    cy.get('a').contains('Register').click();

    // Ensure the page redirects to the registration form
    cy.url().should('include', '/register');

    // Fill in the registration form with the same email (duplicate)
    cy.get('[name="name"]').clear().type('xyz');
    cy.get('[name="email"]').clear().type('xyz@gmail.com'); // Duplicate email
    cy.get('[name="password"]').clear().type('password123');
    cy.get('[name="confirmPassword"]').clear().type('password123');

    // Submit the registration form
    cy.get('.ant-btn').contains('Register').click();

    // Check if the duplicate entity popup appears
    cy.contains('Duplicate').should('be.visible');
  });
});
