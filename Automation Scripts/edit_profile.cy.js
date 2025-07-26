describe('Edit Profile with valid input', () => {
    it('should login, go to profile, update name to "abcde", and redirect to /profile', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
      cy.get('[name="name"]').clear().type('abcde');
      cy.get('form > .ant-flex > .ant-btn > span').click();
      cy.wait(1000);
      cy.url().should('eq', 'http://localhost:5173/profile');
      cy.contains('abcde').should('be.visible');
    });
});
