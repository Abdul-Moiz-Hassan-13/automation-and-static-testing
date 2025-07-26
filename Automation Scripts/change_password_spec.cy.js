describe('Profile Page Navigation and Change Password', () => {
    it('should login, navigate to the profile page, and change the password', () => {
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
      cy.get(':nth-child(3) > .ant-input').clear().type('newpassword123');
      cy.get('.ant-flex > .ant-btn-primary').click();
      cy.contains('Password changed successfully').should('be.visible');
    });
});
