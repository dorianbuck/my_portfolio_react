describe("User can see list of resume details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#resume-tab").click();
  });
  it("displays the education detail", () => {
    cy.get("#employment-1").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the previous employment history detail", () => {
    cy.get("#employment-2").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the previous employment history detail", () => {
    cy.get("#employment-3").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the previous employment history detail", () => {
    cy.get("#employment-4").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the previous employment history detail", () => {
    cy.get("#employment-5").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the previous employment history detail", () => {
    cy.get("#employment-6").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the previous employment history detail", () => {
    cy.get("#employment-7").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the education detail", () => {
    cy.get("#employment-8").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
  it("displays the education detail", () => {
    cy.get("#employment-9").within(() => {
      cy.get("title").should("exist");
      cy.get("date").should("exist");
      cy.get("details").should("exist");
      cy.get(".image").should("exist");
    });
  });
});
