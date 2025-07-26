describe('Add Product with Valid Data', () => {
    it('should submit the form, display "Product created" message, click on Manage Products, and verify the product details', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
      cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');
      cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');
      cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');
      cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');
      cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');
      cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
      cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');
      cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
      cy.get('form > .ant-flex > .ant-btn > span').click();
      cy.contains('Product created').should('be.visible');
      cy.get('.swal2-confirm').click();
      cy.contains('MANAGE PRODUCTS').click();
      cy.url().should('include', '/products');
      cy.contains('Product Name').should('be.visible');
    });
});
