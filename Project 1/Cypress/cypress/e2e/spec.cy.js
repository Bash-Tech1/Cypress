//write ur tests here
describe("Test 1: Login Validation", () => {
  it("Test 1.1", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("bash");
    cy.get("button").click();
    cy.get("#success-message").should("be.hidden");
  });

  it("Test 1.2", () => {
    cy.visit("http://localhost:3000");
    cy.get("#password").type("password123");
    cy.get("button").click();
    cy.get("#success-message").should("be.hidden");
  });

  it("Test 1.3", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("bash");
    cy.get("#password").type("password123");
    cy.get("button").click();
    cy.get("#success-message").should("be.hidden");
  });
});
describe("Test 2: Dropdown Selection", () => {
  it("Test 2.1", () => {
    cy.visit("http://localhost:3000");
    cy.get("#dropdown").select("Option 1");
    cy.get("#dropdown-message").should("be.visible");
  });

  it("Test 2.2", () => {
    cy.visit("http://localhost:3000");
    cy.get("#dropdown").select("Option 2");
    cy.get("#dropdown-message").should("be.visible");
  });
});

describe("Test 3: Checkbox Interaction", () => {
  it("Test 3", () => {
    cy.visit("http://localhost:3000");
    cy.get("#agree").check();
    cy.get("#checkbox-message").should("be.visible");
    cy.get("#checkbox-message").contains("You agreed to the terms!");
    cy.get("#agree").uncheck();
    cy.get("#checkbox-message").contains("You disagreed with the terms.");
  });
});
/* ==== Test Created with Cypress Studio ==== */
it("Test 4: User Interactions", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  cy.get('[data-cy="double-click-area"]').click();
  cy.get('[data-cy="double-click-area"]').click();
  cy.get('[data-cy="right-click-area"]').should("be.visible");
  /* ==== End Cypress Studio ==== */
});
