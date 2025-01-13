describe('Login Component', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://localhost:3000');
  });

  it('should display the login form', () => {
    // Check if the form exists
    cy.get('form').should('exist');

    // Check if the email input exists
    cy.get('input[name="email"]').should('exist');

    // Check if the password input exists
    cy.get('input[name="password"]').should('exist');

    // Check if the submit button exists
    cy.get('button[type="submit"]').should('exist');
  });

  it('should show error message for invalid input', () => {
    // Type invalid email and password
    cy.get('input[name="email"]').type('invalid-email@gmail.com');
    cy.get('input[name="password"]').type('short');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Wait for the error message to appear
    cy.get('.fail-message').should('exist');
    cy.get('.fail-message').should(
      'contain',
      'Login failed. Please check your credentials.'
    );
  });

  it('should login successfully with valid credentials', () => {
    // Type valid email and password
    cy.get('input[name="email"]').type('Sally@gmail.com');
    cy.get('input[name="password"]').type('Abc@12');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // // Wait for the success message to appear
    // cy.get('.success-message').should('exist');
    // cy.get('.success-message').should('contain', 'Login success!!!');

    // Wait for the URL to change to /profile
    cy.url().should('include', '/profile');
  });
});