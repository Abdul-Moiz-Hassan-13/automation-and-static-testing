describe('Login, Navigate to Products Page, Attempt to Create Duplicate Seller', () => {
  it('should login, attempt to create a duplicate seller, and ensure the success message does not appear', () => {
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
    cy.wait(1000);
    cy.contains('New seller created').should('not.exist');
  });
});

describe('Login, Navigate to Products Page, Attempt to Create Seller with Empty Fields', () => {
  it('should login, attempt to create a seller with empty fields, and ensure the success message does not appear', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-btn').click();
    cy.get('.ant-modal-body').should('be.visible');
    cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear();
    cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear();
    cy.get('#contactNo').clear();
    cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('New seller created').should('not.exist');
  });
});

describe('Login, Navigate to Products Page, Attempt to Create Seller with Missing Contact No.', () => {
  it('should login, fill Seller Name and Seller Email, leave Contact No. empty, and ensure the form cannot be submitted', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-btn').click();
    cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');
    cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');
    cy.get('#contactNo').clear();
    cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('New seller created').should('not.exist');
  });
});

describe('Login, Navigate to Products Page, Attempt to Create Seller with Missing Seller Email', () => {
  it('should login, fill Seller Name and Contact No., leave Seller Email empty, and ensure the form cannot be submitted', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-btn').click();
    cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');
    cy.get('#contactNo').clear().type('9876543210');
    cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear();
    cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('New seller created').should('not.exist');
  });
});

describe('Login, Navigate to Products Page, Attempt to Create Seller with Missing Seller Name', () => {
  it('should login, fill Seller Email and Contact No., leave Seller Name empty, and ensure the form cannot be submitted', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-btn').click();
    cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear();
    cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');
    cy.get('#contactNo').clear().type('9876543210');
    cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('New seller created').should('not.exist');
  });
});

describe('Login, Navigate to Products Page, Attempt to Create Seller with Invalid Email (Missing @)', () => {
  it('should login, attempt to create a seller with an invalid email (missing @), and ensure the form cannot be submitted', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-btn').click();
    cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');
    cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doeexample.com');
    cy.get('#contactNo').clear().type('9876543210');
    cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('New seller created successfully!').should('not.exist');
  });
});

describe('Login, Navigate to Products Page, Attempt to Create Seller with Invalid Contact Number (Contains Characters)', () => {
  it('should login, attempt to create a seller with a valid email and invalid contact number, and ensure the form cannot be submitted', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-btn').click();
    cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('John Doe');
    cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');
    cy.get('#contactNo').clear().type('A');
    cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('New seller created successfully!').should('not.exist');
  });
});

describe('Login, Navigate to Products Page, Attempt to Create Seller with Username of 2 Characters', () => {
  it('should login, attempt to create a seller with a username of 2 characters, and ensure the form cannot be submitted', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('ADD PRODUCT').click();
    cy.url().should('include', '/create-product');
    cy.get(':nth-child(1) > .ant-btn').click();
    cy.get('.ant-modal-body > form > :nth-child(1) > .ant-col-lg-18 > #name').clear().type('Jo');
    cy.get('.ant-modal-body > form > :nth-child(2) > .ant-col-lg-18 > #email').clear().type('john.doe@example.com');
    cy.get('#contactNo').clear().type('9876543210');
    cy.get('.ant-modal-body > form > .ant-flex > .ant-btn > span').click();
    cy.wait(1000);
    cy.contains('New seller created successfully!').should('not.exist');
    cy.contains('Username must be at least 3 characters long').should('be.visible');
  });
});
