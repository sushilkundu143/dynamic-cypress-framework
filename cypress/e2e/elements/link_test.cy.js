Cypress.Commands.add('runLinkTests', (element) => {
  it(`should test link: ${element.selector}`, () => {
    console.log(">>> it should completed runLinkTests");
    cy.get(element.selector).should('have.attr', 'href');
  });
});
