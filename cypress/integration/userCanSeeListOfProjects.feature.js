describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });
  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should("contain", "This was my first project.");
      cy.get(".Card").invoke("show", "displays the card info overlay");
    });
  });
  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "FizzBuzz");
      cy.get(".description").should(
        "contain",
        "Creating ruby backend application is fun."
      );
      cy.get(".Card").invoke("show", "displays the card info overlay");
    });
  });
  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Mobile UX");
      cy.get(".description").should(
        "contain",
        "I like to design for the mobile platform"
      );
      cy.get(".Card").invoke("show", "displays the card info overlay");
    });
  });
});
