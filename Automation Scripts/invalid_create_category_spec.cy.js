describe('Login, Create Empty Category', () => {
  it('should login, go to create-product page, and not redirect when fields are empty, showing validation error', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(2) > .ant-btn > span').click();
    cy.contains('Validation Failed!').should('be.visible');
  });
});

describe('Login, and Attempt to Create a Duplicate Category', () => {
  it('should login, go to create-product page, and create a category', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get('[style="width: 100%; height: 100%; padding: 1rem 2rem; border: 1px solid rgb(22, 72, 99); border-radius: 0.6rem; justify-content: space-around;"] > :nth-child(2) > .input-field')
      .clear().type('Some text');
    cy.get(':nth-child(2) > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('Category created successfully!').should('not.exist');
  });
});
