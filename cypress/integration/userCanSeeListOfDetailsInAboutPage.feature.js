describe("User can see list of about details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#about-tab").click();
    cy.get("segment").trigger("mouseover");
    cy.get(".popover").should("be.visible");
  });

  it("displays a popup with more bio info", () => {
    cy.get("details").within(() => {
      cy.get("name").should("exist");
      cy.get("name").should("contain", "Dorian Buck");
      cy.get("nationality").should("contain", "American & Swedish");
      cy.get("location").should("exist");
      cy.url().should("contain", "Stockholm");
      cy.get("hobbies").should("exist");
      cy.get("hobbies").should(
        "contain",
        "Watersports, Wintersports, riding motorcycle, travel, technology and being outdoors"
      );
      cy.get("lang").should("exist");
      cy.get("lang").should("contain", "English and Swedish");
      cy.get("keyw").should("exist");
      cy.get("keyw").should(
        "contain",
        "Dynamic, Agile methodoligy, Flexable, Adaptable, Approchable and a Problemsolver"
      );
      cy.get("reference").should("exist");
      cy.get("reference").should(
        "contain",
        "References available upon request"
      );
    });
  });
});
