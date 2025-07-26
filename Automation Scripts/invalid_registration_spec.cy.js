describe('Invalid Registration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
    cy.get('a').contains('Register').should('exist').click();
    cy.url().should('include', '/register');
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').clear();
    cy.get('[name="password"]').clear();
    cy.get('[name="confirmPassword"]').clear();
  });

  it('should fail to redirect to the home page when all fields are empty', () => {
    cy.get('.ant-btn').contains('Register').click();
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the name field is empty', () => {
    cy.get('[name="email"]').type('xyz@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the email field is empty', () => {
    cy.get('[name="name"]').type('xyz');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the password field is empty', () => {
    cy.get('[name="name"]').type('xyz');
    cy.get('[name="email"]').type('xyz@gmail.com');
    cy.get('[name="confirmPassword"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should fail to register when the confirm password field is empty', () => {
    cy.get('[name="name"]').type('xyz');
    cy.get('[name="email"]').type('xyz@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.url().should('not.eq', 'http://localhost:5173/');
  });

  it('should show error when password and confirm password do not match', () => {
    cy.get('[name="name"]').type('userOne');
    cy.get('[name="email"]').type('userone@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('differentPassword123');
    cy.get('.ant-btn').contains('Register').click();
    cy.contains('Password and confirm password must be same').should('be.visible');
  });

  it('should register now with same passwords and email', () => {
    cy.get('[name="name"]').type('userOne');
    cy.get('[name="email"]').type('userone@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.contains('Duplicate').should('be.visible');
    cy.url().should('eq', 'http://localhost:5173/');
  });

  it('should show error when the password is less than 6 characters', () => {
    cy.get('[name="name"]').type('userTwo');
    cy.get('[name="email"]').type('usertwo@gmail.com');
    cy.get('[name="password"]').type('pwd12');
    cy.get('[name="confirmPassword"]').type('pwd12');
    cy.get('.ant-btn').contains('Register').click();
    cy.contains('Validation Failed').should('be.visible');
  });

  it('should show error when the email is missing the "@" symbol', () => {
    cy.get('[name="name"]').type('usernine');
    cy.get('[name="email"]').type('userninegmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.contains('Validation Failed').should('be.visible');
  });

  it('should not allow registration with a username with only number(s)', () => {
    cy.get('[name="name"]').type('1');
    cy.get('[name="email"]').type('userfive@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.contains('Validation Failed').should('be.visible');
  });

  it('should not allow registration with a username of length 2', () => {
    cy.get('[name="name"]').type('ab');
    cy.get('[name="email"]').type('usersix@gmail.com');
    cy.get('[name="password"]').type('password123');
    cy.get('[name="confirmPassword"]').type('password123');
    cy.get('.ant-btn').contains('Register').click();
    cy.contains('Validation Failed').should('be.visible');
  });
});
