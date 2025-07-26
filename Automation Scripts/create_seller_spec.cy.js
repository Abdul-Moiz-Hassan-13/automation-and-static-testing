describe('Login, Navigate to Products Page, Create Seller, and Verify Seller in Manage Sellers', () => {
    it('should login, create a seller, click on "MANAGE SELLERS" and verify the recent seller is displayed', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
      cy.get(':nth-child(1) > .ant-btn').click();
      cy.get('.ant-modal-body').should('be.visible');
      cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');
      cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');
      cy.get('#contactNo').clear().type('9876543210');
      cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
      cy.contains('New seller created').should('be.visible');
      cy.get('.swal2-confirm').click();
      cy.contains('MANAGE SELLERS').click();
      cy.url().should('include', '/sellers');
      cy.contains('John Doe').should('be.visible');
    });
});
