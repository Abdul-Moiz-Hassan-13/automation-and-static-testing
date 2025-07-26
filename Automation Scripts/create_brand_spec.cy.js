describe('Login, and Create a Valid Category', () => {
    it('should login, go to create-product page, and create a category', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
      cy.url().should('eq', 'http://localhost:5173/');
      cy.contains('ADD PRODUCT').click();
      cy.url().should('include', '/create-product');
      cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .input-field')        
      .clear().type('Some text');
      cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .ant-btn').click();      
      cy.wait(1000);
      cy.contains('Brand created successfully!').should('be.visible');
      cy.get('.swal2-confirm').click();
      cy.get(':nth-child(5) > .ant-col-lg-18 > .input-field').select('hello text');
    });
});
