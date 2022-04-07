describe("Error Component", () => {
  beforeEach(() => {
    cy.visit("/dlkdl");
  });

  it("Error Component title text should contain Erreur 404", () => {
    cy.get('[data-cy="error-title"]').should('have.text', 'Erreur 404');
  });

  it("Error Component sub title text should contain Oups! Le lien semble incorrect", () => {
    cy.get('[data-cy="error-sb-title"]').should('have.text', 'Oups! Le lien semble incorrect');
  });

  it("Error Component return button should contain Retour", () => {
    cy.get('[data-cy="error-return-btn"]').should('have.text', 'Retour');
  });

});
