describe("User can see list of resume details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#resume-tab").click();
  });
  it("displays the employment detail", () => {
    cy.get("employment").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
    });
  });
  it("displays the skills details", () => {
    cy.get("skills").within(() => {
      cy.get("img").should("exist");
      cy.get("para").should("exist");
    });
  });
  it("displays education details", () => {
    cy.get("education").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("para").should("exist");
    });
  });
  it("displays array of items in details section", () => {
    cy.get("details").within(() => {
      cy.get("name").should("exist");
      cy.get("nationality").should("contain", "Dorian Buck");
      cy.get("nationality").should("contain", "American & Swedish");
      cy.get("location").should("exist");
      cy.url().should("contain", "https://goo.gl/maps/2sjjU2UfAYm184hZ8");
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
