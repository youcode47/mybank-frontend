describe("SignUp Component", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("SignUp Component card title text should contain Creer un compte", () => {
    cy.get('[data-cy="sgup-title"]').should('have.text', 'Creer un compte');
  });

  it("SignUp Component input lastName placeholder should contain Nom", () => {
    cy.get('[data-cy="sgup-lastname"]').should('have.attr', 'placeholder', 'Nom')
  });

  it("SignUp Component input firstName placeholder should contain Prenom(s)", () => {
    cy.get('[data-cy="sgup-firstname"]').should('have.attr', 'placeholder', 'Prenom(s)')
  });

  it("SignUp Component input phone placeholder should contain Telephone", () => {
    cy.get('[data-cy="sgup-phone"]').should('have.attr', 'placeholder', 'Telephone')
  });

  it("SignUp Component input email placeholder should contain Email", () => {
    cy.get('[data-cy="sgup-email"]').should('have.attr', 'placeholder', 'Email')
  });

  it("SignUp Component input username placeholder should contain Nom utilisateur", () => {
    cy.get('[data-cy="sgup-username"]').should('have.attr', 'placeholder', 'Nom utilisateur')
  });

  it("SignUp Component input password placeholder should contain Nom utilisateur", () => {
    cy.get('[data-cy="sgup-password"]').should('have.attr', 'placeholder', 'Mot de passe')
  });

  it("SignUp Component register button should contain Enregistrer", () => {
    cy.get('[data-cy="sgup-register"]').should('have.text', 'Enregistrer');
  });

  it("SignUp Component Question text should contain Vous avez déjà un compte ?", () => {
    cy.get('[data-cy="sgup-question"]').should('have.text', 'Vous avez déjà un compte ?')
  });

  it("SignUp Component Button Connexion text should contain Se connecter ?", () => {
    cy.get('[data-cy="sgup-btn-connect"]').should('have.text', 'Se connecter')
  });
});
