// !important

describe('Edit Profile with Invalid Email (Without @)', () => {
    it('should login, go to profile, fill email with invalid email and not redirect to /profile', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
    
      // Clear any existing text in the email field and type the valid email
      cy.get('[type="text"]').clear().type('abc@gmail.com');
    
      // Clear any existing text in the password field and type the password
      cy.get('[type="password"]').clear().type('123456');
    
      // Click the login button
      cy.get('.ant-btn').click();
    
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
    
      // Click the "PROFILE" button or link
      cy.contains('PROFILE').click();
    
      // Ensure the page redirects to the profile page
      cy.url().should('include', '/profile');
    
      // Click the edit profile button to navigate to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    
      // Ensure the page redirects to the edit profile page
      cy.url().should('include', '/edit-profile');
    
      // Fill in the email field with an invalid email (without '@')
      cy.get('[name="email"]').clear().type('invalidemail.com'); // Invalid email without '@'
    
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
    
      // Optionally, wait for the page to stabilize (in case of form validation or other behavior)
      cy.wait(1000); // Wait for 1 second or adjust depending on your app's behavior
  
      // Ensure the page does NOT redirect to http://localhost:5173/profile due to invalid email
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });

  describe('Edit Profile with Empty Name Field', () => {
    it('should login, go to profile, update name to empty, and not redirect to /profile', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
    
      // Clear any existing text in the email field and type the valid email
      cy.get('[type="text"]').clear().type('abc@gmail.com');
    
      // Clear any existing text in the password field and type the password
      cy.get('[type="password"]').clear().type('123456');
    
      // Click the login button
      cy.get('.ant-btn').click();
    
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
    
      // Click the "PROFILE" button or link
      cy.contains('PROFILE').click();
    
      // Ensure the page redirects to the profile page
      cy.url().should('include', '/profile');
    
      // Click the edit profile button to navigate to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    
      // Ensure the page redirects to the edit profile page
      cy.url().should('include', '/edit-profile');
    
      // Update the name field to empty
      cy.get('[name="name"]').clear();  // Clear the name field
    
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
    
      // Optionally, wait for the page to stabilize (in case of form validation or other behavior)
      cy.wait(1000); // Wait for 1 second or adjust depending on your app's behavior
  
      // Ensure the page does NOT redirect to http://localhost:5173/profile due to empty name field
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });

  describe('Edit Profile with Name Field set to 1', () => {
    it('should not allow redirect when name is set to 1', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Log in with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Click the "PROFILE" button to go to the profile page
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
  
      // Click the edit profile button to go to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
  
      // Set the name field to "1"
      cy.get('[name="name"]').clear().type('1');
  
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();

      // Optionally, wait for the page to stabilize (in case of form validation or other behavior)
      cy.wait(1000); // Wait for 1 second or adjust depending on your app's behavior

      // Ensure the page does NOT redirect to http://localhost:5173/profile due to invalid email
      cy.url().should('not.eq', 'http://localhost:5173/profile');
  
    });
  });

  // !important
  describe('Edit Profile with Email Field set to 1', () => {
    it('should not allow redirect when email is set to 1', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Log in with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Click the "PROFILE" button to go to the profile page
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
  
      // Click the edit profile button to go to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
  
      // Set the name field to "1"
      cy.get('[name="email"]').clear().type('1');
  
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();

      // Optionally, wait for the page to stabilize (in case of form validation or other behavior)
      cy.wait(1000); // Wait for 1 second or adjust depending on your app's behavior

      // Ensure the page does NOT redirect to http://localhost:5173/profile due to invalid email
      cy.url().should('not.eq', 'http://localhost:5173/profile');
  
    });
  });

  describe('Edit Profile with Title Field set to 1', () => {
    it('should not allow redirect when title is set to 1', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Log in with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Click the "PROFILE" button to go to the profile page
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
  
      // Click the edit profile button to go to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
  
      // Set the title field to "1"
      cy.get('[name="title"]').clear().type('1');
  
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();
  
      // Optionally, wait for the page to stabilize (in case of form validation or other behavior)
      cy.wait(1000); // Wait for 1 second or adjust depending on your app's behavior

      // Ensure the page does NOT redirect to /profile
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });
  
  describe('Edit Profile with Description Field set to 1', () => {
    it('should not allow redirect when description is set to 1', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Log in with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Click the "PROFILE" button to go to the profile page
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
  
      // Click the edit profile button to go to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
  
      // Set the description field to "1"
      cy.get('[name="description"]').clear().type('1');
  
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();

      cy.wait(1000);
  
      // Ensure the page does NOT redirect to /profile
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });

  describe('Edit Profile with Address Field set to 1', () => {
    it('should not allow redirect when address is set to 1', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Log in with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Click the "PROFILE" button to go to the profile page
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
  
      // Click the edit profile button to go to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
  
      // Set the address field to "1"
      cy.get('[name="address"]').clear().type('1');
  
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();

      cy.wait(1000);
  
      // Ensure the page does NOT redirect to /profile
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });

  describe('Edit Profile with Phone Field set to 1', () => {
    it('should not allow redirect when phone is set to 1', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Log in with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Click the "PROFILE" button to go to the profile page
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
  
      // Click the edit profile button to go to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
  
      // Set the phone field to "1"
      cy.get('[name="phone"]').clear().type('A');
  
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();

      cy.wait(1000);
  
      // Ensure the page does NOT redirect to /profile
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });

  describe('Edit Profile with City Field set to 1', () => {
  it('should not allow redirect when city is set to 1', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Log in with valid credentials
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();

    // Ensure the page redirects to the home page
    cy.url().should('eq', 'http://localhost:5173/');

    // Click the "PROFILE" button to go to the profile page
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');

    // Click the edit profile button to go to the edit profile page
    cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/edit-profile');

    // Set the city field to "1"
    cy.get('[name="city"]').clear().type('1');

    // Click the update button to submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();

    cy.wait(1000);

    // Ensure the page does NOT redirect to /profile
    cy.url().should('not.eq', 'http://localhost:5173/profile');
  });
});

describe('Edit Profile with Facebook Field set to 1', () => {
  it('should not allow redirect when facebook is set to 1', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Log in with valid credentials
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();

    // Ensure the page redirects to the home page
    cy.url().should('eq', 'http://localhost:5173/');

    // Click the "PROFILE" button to go to the profile page
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');

    // Click the edit profile button to go to the edit profile page
    cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/edit-profile');

    // Set the facebook field to "1"
    cy.get('[name="facebook"]').clear().type('1');

    // Click the update button to submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();

    cy.wait(1000);

    // Ensure the page does NOT redirect to /profile
    cy.url().should('not.eq', 'http://localhost:5173/profile');
  });
});

describe('Edit Profile with Twitter Field set to 1', () => {
  it('should not allow redirect when twitter is set to 1', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Log in with valid credentials
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();

    // Ensure the page redirects to the home page
    cy.url().should('eq', 'http://localhost:5173/');

    // Click the "PROFILE" button to go to the profile page
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');

    // Click the edit profile button to go to the edit profile page
    cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/edit-profile');

    // Set the twitter field to "1"
    cy.get('[name="twitter"]').clear().type('1');

    // Click the update button to submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();

    cy.wait(1000);

    // Ensure the page does NOT redirect to /profile
    cy.url().should('not.eq', 'http://localhost:5173/profile');
  });
});

describe('Edit Profile with LinkedIn Field set to 1', () => {
  it('should not allow redirect when linkedin is set to 1', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Log in with valid credentials
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();

    // Ensure the page redirects to the home page
    cy.url().should('eq', 'http://localhost:5173/');

    // Click the "PROFILE" button to go to the profile page
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');

    // Click the edit profile button to go to the edit profile page
    cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/edit-profile');

    // Set the linkedin field to "1"
    cy.get('[name="linkedin"]').clear().type('1');

    // Click the update button to submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();

    cy.wait(1000);

    // Ensure the page does NOT redirect to /profile
    cy.url().should('not.eq', 'http://localhost:5173/profile');
  });
});

describe('Edit Profile with Instagram Field set to 1', () => {
  it('should not allow redirect when instagram is set to 1', () => {
    // Visit the login page
    cy.visit('http://localhost:5173/login');

    // Log in with valid credentials
    cy.get('[type="text"]').clear().type('abc@gmail.com');
    cy.get('[type="password"]').clear().type('123456');
    cy.get('.ant-btn').click();

    // Ensure the page redirects to the home page
    cy.url().should('eq', 'http://localhost:5173/');

    // Click the "PROFILE" button to go to the profile page
    cy.contains('PROFILE').click();
    cy.url().should('include', '/profile');

    // Click the edit profile button to go to the edit profile page
    cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    cy.url().should('include', '/edit-profile');

    // Set the instagram field to "1"
    cy.get('[name="instagram"]').clear().type('1');

    // Click the update button to submit the form
    cy.get('form > .ant-flex > .ant-btn > span').click();

    cy.wait(1000);

    // Ensure the page does NOT redirect to /profile
    cy.url().should('not.eq', 'http://localhost:5173/profile');
  });
});

describe('Edit Profile with Empty Email Field', () => {
    it('should login, go to profile, update name to empty, and not redirect to /profile', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
    
      // Clear any existing text in the email field and type the valid email
      cy.get('[type="text"]').clear().type('abc@gmail.com');
    
      // Clear any existing text in the password field and type the password
      cy.get('[type="password"]').clear().type('123456');
    
      // Click the login button
      cy.get('.ant-btn').click();
    
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
    
      // Click the "PROFILE" button or link
      cy.contains('PROFILE').click();
    
      // Ensure the page redirects to the profile page
      cy.url().should('include', '/profile');
    
      // Click the edit profile button to navigate to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
    
      // Ensure the page redirects to the edit profile page
      cy.url().should('include', '/edit-profile');
    
      // Update the name field to empty
      cy.get('[name="email"]').clear();  // Clear the name field
    
      // Click the update button to submit the form
      cy.get('form > .ant-flex > .ant-btn > span').click();  // Adjust the selector if needed
    
      // Optionally, wait for the page to stabilize (in case of form validation or other behavior)
      cy.wait(1000); // Wait for 1 second or adjust depending on your app's behavior
  
      // Ensure the page does NOT redirect to http://localhost:5173/profile due to empty name field
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });
  
  describe('Edit Profile and Upload Profile Picture', () => {
    it('should upload a profile picture and not redirect to /profile with invalid fields', () => {
      // Visit the login page
      cy.visit('http://localhost:5173/login');
  
      // Log in with valid credentials
      cy.get('[type="text"]').clear().type('abc@gmail.com');
      cy.get('[type="password"]').clear().type('123456');
      cy.get('.ant-btn').click();
  
      // Ensure the page redirects to the home page
      cy.url().should('eq', 'http://localhost:5173/');
  
      // Click the "PROFILE" button to go to the profile page
      cy.contains('PROFILE').click();
      cy.url().should('include', '/profile');
  
      // Click the edit profile button to go to the edit profile page
      cy.get('[href="/edit-profile"] > .ant-btn > :nth-child(2)').click();
      cy.url().should('include', '/edit-profile');
  
      // Check if the "Change Profile Picture" text exists and click it to open the file input
      cy.contains('Change Profile Picture').click(); // This clicks the button or element that triggers the file input
  
      // Attach the file to the file input (use the correct file path)
      cy.get('input[type="file"][name="avatar"]')  // Target the file input by name="avatar"
        .attachFile('images/profile-pic.jpeg');  // The file should be in the `cypress/fixtures` folder
  
      // Submit the form without filling the name field (as per your request)
      cy.get('form > .ant-flex > .ant-btn > span').click();
  
      // Ensure the page does NOT redirect to /profile (since we used invalid data for some fields)
      cy.url().should('not.eq', 'http://localhost:5173/profile');
    });
  });
  