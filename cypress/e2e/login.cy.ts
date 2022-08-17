describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login', () => {
    cy.get('input[name=email]').type(Cypress.env('loginEmail'));
    cy.get('input[name=password]').type(Cypress.env('loginPassword'));
    cy.get('button[type=submit]').click();
  });

  it('Show invalid email or password error', () => {
    cy.get('input[name=email]').type('wrongemail');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('button[type=submit]').click();

    cy.on('window:alert', (t) => {
      //assertions
      expect(t).to.contains('Špatný email, nebo heslo.');
    });
  });
});
