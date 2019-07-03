describe("home-automation-model test suit", () => {
  it("visits the home page", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(10000);
    cy.get(".auth-wrapper");
    cy.get(".form-wrapper");
    cy.get(".form-header").contains("Dear smarthome 🏠");
    cy.get("form")
      .contains("Sign in")
      .click();
    cy.get(".input-wrapper").contains("Username");
    cy.get(".input-wrapper").contains("Password");
    cy.get("input")
      .contains('[type="text"]')
      .type("admin");
    cy.get("input")
      .contains('[type="password"]')
      .type("admin");
  });
});
