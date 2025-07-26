describe('Login, Add Product with Invalid Data', () => {
  it('should login, go to create-product page, and not redirect when fields are empty', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-col-lg-18').clear();
    cy.get(':nth-child(2) > .ant-col-lg-18').clear();
    cy.get(':nth-child(3) > .ant-col-lg-18').clear();
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('');
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear();
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.contains('Product created').should('not.exist');
  });
});

describe('Add Product with Name Field Empty', () => {
  it('should not submit the form when the Name field is empty', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-col-lg-18').clear();
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.contains('Product created').should('not.exist');
  });
});

describe('Add Product with Price Field Empty', () => {
  it('should not submit the form when the Price field is empty', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');
    cy.get(':nth-child(2) > .ant-col-lg-18').clear();
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.contains('Product created').should('not.exist');
  });
});

describe('Add Product with Stock Field Empty', () => {
  it('should not submit the form when the Stock field is empty', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');
    cy.get(':nth-child(3) > .ant-col-lg-18').clear();
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.contains('Product created').should('not.exist');
  });
});

describe('Add Product with Seller Field Empty', () => {
  it('should not submit the form when the Seller field is empty', () => {
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
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('');
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.contains('Product created').should('not.exist');
  });
});

describe('Add Product with Category Field Empty', () => {
  it('should not submit the form when the Category field is empty', () => {
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
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.contains('Product created').should('not.exist');
  });
});

describe('Add Product with Negative Stock', () => {
  it('should not submit the form when the Stock field contains a negative value', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('Product Name');
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('-10');
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('Description of product');
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.contains('Product created').should('not.exist');
  });
});

describe('Add Product with Invalid Data (1 Letter Name and Description)', () => {
  it('should not submit the form when the Name and Description fields are filled with only 1 letter', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-col-lg-18').clear().type('A');
    cy.get(':nth-child(2) > .ant-col-lg-18').clear().type('100');
    cy.get(':nth-child(3) > .ant-col-lg-18').clear().type('50');
    cy.get(':nth-child(4) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(5) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(6) > .ant-col-lg-18 > select').select('a');
    cy.get(':nth-child(7) > .ant-col-lg-18').clear().type('A');
    cy.get(':nth-child(8) > .ant-col-lg-18 > select').select('Small');
    cy.get('form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('Product created successfully!').should('not.exist');
  });
});
