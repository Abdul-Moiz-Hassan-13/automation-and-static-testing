describe('Register and Redirect', () => {
  it('should click the register button, fill the form, and redirect to the home page', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('a').contains('Register').click();
    cy.url().should('include', '/register');
    cy.get('[name="name"]').clear().type('xyz');
    cy.get('[name="email"]').clear().type('xyz@gmail.com');
    cy.get('[name="password"]').clear().type('password123');
    cy.get('[name="confirmPassword"]').clear().type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.url().should('eq', 'http://localhost:5173/');
  });

  it('should show a duplicate entity popup when trying to register with an existing email', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('a').contains('Register').click();
    cy.url().should('include', '/register');
    cy.get('[name="name"]').clear().type('xyz');
    cy.get('[name="email"]').clear().type('xyz@gmail.com');
    cy.get('[name="password"]').clear().type('password123');
    cy.get('[name="confirmPassword"]').clear().type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.contains('Duplicate').should('be.visible');
  });
});
