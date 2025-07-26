describe('Profile Page Navigation and Change Password - Invalid Cases', () => {
  it('should not allow changing the password with empty fields', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');
    cy.get('[href="/change-password"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/change-password');
    cy.get(':nth-child(1) > .ant-input').clear();
    cy.get(':nth-child(2) > .ant-input').clear();
    cy.get(':nth-child(3) > .ant-input').clear();
    cy.get('.ant-flex > .ant-btn-primary').click();
    cy.contains('All fields are required').should('be.visible');
    cy.url().should('include', '/change-password');
  });
});

describe('Profile Page Navigation and Change Password - Missing Old Password', () => {
  it('should not allow changing the password without entering the old password', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');
    cy.get('[href="/change-password"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/change-password');
    cy.get(':nth-child(1) > .ant-input').clear();
    cy.get(':nth-child(2) > .ant-input').clear().type('newpassword123');
    cy.get(':nth-child(3) > .ant-input').clear().type('newpassword123');
    cy.get('.ant-flex > .ant-btn-primary').click();
    cy.contains('All fields are required').should('be.visible');
    cy.url().should('include', '/change-password');
  });
});

describe('Profile Page Navigation and Change Password - Short New Password', () => {
  it('should not allow changing the password when the new password is less than 6 characters', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');
    cy.get('[href="/change-password"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/change-password');
    cy.get(':nth-child(1) > .ant-input').clear().type('123456');
    cy.get(':nth-child(2) > .ant-input').clear().type('abc');
    cy.get(':nth-child(3) > .ant-input').clear().type('abc');
    cy.get('.ant-flex > .ant-btn-primary').click();
    cy.contains('New password must have 6 characters').should('be.visible');
    cy.url().should('include', '/change-password');
  });
});

describe('Profile Page Navigation and Change Password - New Password Matches Old Password', () => {
  it('should not allow changing the password if the new password matches the old password', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');
    cy.get('[href="/change-password"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/change-password');
    cy.get(':nth-child(1) > .ant-input').clear().type('123456');
    cy.get(':nth-child(2) > .ant-input').clear().type('123456');
    cy.get(':nth-child(3) > .ant-input').clear().type('123456');
    cy.get('.ant-flex > .ant-btn-primary').click();
    cy.contains('New password cannot be the same as the old password').should('be.visible');
    cy.url().should('include', '/change-password');
  });
});

describe('Profile Page Navigation and Change Password - New Password Does Not Match Confirm Password', () => {
  it('should not allow changing the password if the new password and confirm password do not match', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');
    cy.get('[href="/change-password"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/change-password');
    cy.get(':nth-child(1) > .ant-input').clear().type('123456');
    cy.get(':nth-child(2) > .ant-input').clear().type('newpassword123');
    cy.get(':nth-child(3) > .ant-input').clear().type('mismatchpassword123');
    cy.get('.ant-flex > .ant-btn-primary').click();
    cy.contains('Password and confirm password does not match').should('be.visible');
    cy.url().should('include', '/change-password');
  });
});
