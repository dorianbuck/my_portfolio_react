describe("User can see list of about details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#about-tab").click();
    cy.get("#about-header").trigger("mouseover");
    cy.get(".ui.left.center.popup.transition.visible").should("exist");
  });
  it("displays a popup with more bio info", () => {
    cy.get(".ui.left.center.popup.transition.visible").within(() => {
      cy.get(".header").should("exist");
      cy.get(".header").should("contain", "Dorian Buck");
      cy.get(".description").should("contain", "American & Swedish");
      cy.get("#about-1").should("exist");
      cy.get(".extra").should("contain", "Stockholm, Sweden");
      cy.get(".description").should("exist");
      // cy.get(".description").should("contain", "Watersports, Wintersports, riding motorcycle, travel, technology and being outdoors");
      cy.get(".extra").should("exist");
      cy.get(".extra").should("contain", "English and Swedish");
      cy.get(".description").should("exist");
      // cy.get(".description").should("contain", "Dynamic, Agile methodoligy, Flexable, Adaptable, Approchable and a Problemsolver");
      cy.get(".extra").should("exist");
      cy.get(".extra").should("contain", "References available upon request");
    });
  });
});
