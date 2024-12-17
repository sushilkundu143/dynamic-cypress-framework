Cypress.Commands.add('runListItemTests', (element) => {
  it(`should test list item: ${element.selector}`, () => {
    cy.get(element.selector).should('be.visible');
    // Add more assertions as needed
  });
});
