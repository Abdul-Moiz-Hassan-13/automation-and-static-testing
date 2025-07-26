describe('Login, Create Empty Brand', () => {
  it('should login, go to create-product page, and not redirect when fields are empty, showing validation error', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .ant-btn').click();
    cy.contains('Validation Failed!').should('be.visible');
  });
});

describe('Login, and Attempt to Create a Duplicate Brand', () => {
  it('should login, go to create-product page, and attempt create a duplicate brand', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .input-field').clear().type('Some text');
    cy.get('[style="padding: 1rem 2rem; border: 1px solid rgb(182, 203, 215); border-radius: 0.6rem;"] > .ant-btn').click();
    cy.wait(1000);
    cy.contains('Brand created successfully!').should('not.exist');
  });
});
