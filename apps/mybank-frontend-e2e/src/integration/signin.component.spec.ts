describe("SignIn Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("SignIn Component card title text should contain Connectez-vous à un compte", () => {
    cy.get('[data-cy="sg-title"]').should('have.text', 'Connectez-vous à un compte');
  });

  it("SignIn Component login button should contain Connexion", () => {
    cy.get('[data-cy="sg-btn-connexion"]').should('have.text', 'Connexion');
  });

  it("SignIn Component create account link should contain Creer un compte", () => {
    cy.get('[data-cy="sg-link-create-account"]').should('have.text', 'Creer un compte');
  });

  it("SignIn Component input placeholder should contain Nom utilisateur", () => {
    cy.get('[data-cy="sg-input-username"]').should('have.attr', 'placeholder', 'Nom utilisateur')
  });

  it("SignIn Component input placeholder should contain Mot de passe", () => {
    cy.get('[data-cy="sg-input-password"]').should('have.attr', 'placeholder', 'Mot de passe')
  });

  it("SignIn Component Question text should contain Pas de compte ?", () => {
    cy.get('[data-cy="sg-question"]').should('have.text', 'Pas de compte ?')
  });

  it("SignIn Component Button Connexion text should contain Creer un compte", () => {
    cy.get('[data-cy="sg-link-create-account"]').should('have.text', 'Creer un compte')
  });

  it("Should show SignUp Component when click on link Creer un compte", () => {
    cy.get('[data-cy="sg-link-create-account"]')
      .click()

    cy.get('[data-cy="sgup-title"]').should('have.text', 'Creer un compte');
  });
});
