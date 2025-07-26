describe('Login, and Create a Valid Category', () => {
  it('should login, go to create-product page, create a category, confirm, and verify category in the dropdown list', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get('[style="width: 100%; height: 100%; padding: 1rem 2rem; border: 1px solid rgb(22, 72, 99); border-radius: 0.6rem; justify-content: space-around;"] > :nth-child(2) > .input-field')
      .clear().type('hello text');
    cy.get(':nth-child(2) > .ant-btn > span').click();
    cy.contains('Category created successfully!').should('be.visible');
    cy.get('.swal2-confirm').click();
    cy.get(':nth-child(5) > .ant-col-lg-18 > .input-field').select('hello text');
  });
});
