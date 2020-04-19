const clientPort = process.env.CLIENT_PORT || 3000;

describe("home-automation-model test suit", () => {
  it("visits the home page", () => {
    cy.visit(`http://localhost:${clientPort}/`);
    cy.wait(20000);
    cy.get(".auth-wrapper");
    cy.get(".form-wrapper");
    cy.get(".form-header").contains("Dear smarthome 🏠");
    cy.get("form")
      .contains("Sign in")
      .click();
    cy.get(".input-wrapper").contains("Username" && "Password");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin");
    cy.get(".button-wrapper").click();
    cy.wait(2000);
    cy.get("nav")
      .find("a")
      .find("span")
      .contains("home");
    cy.get("nav")
      .find("span")
      .contains("admin");
    cy.get(".home-wrapper")
      .find(".home")
      .find(".status-bar-wrapper")
      .find(".status-bar");
    cy.get(".components-dashboard-wrapper");
    cy.get(".components-dashboard");
    cy.get(".manage-component-button")
      .find("span")
      .contains("+");
    cy.get(".manage-component-button-wrapper").click();
    cy.get(".new-component-form-wrapper");
    cy.get("new-component-form");
    cy.get("input-wrapper").contains("Space" && "Component");
    cy.get('input[name="space"]').type("Living Room");
    cy.get('input[name="component"]').type("Balcony Lamp");
  });
});
