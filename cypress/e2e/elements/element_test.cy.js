Cypress.Commands.add('runElementTests', (element) => {
  it(`should test element: ${element.selector}`, () => {
    console.log(">>> it should completed runElementTests");
    cy.get(element.selector).should('be.visible');
    // Add more assertions as needed
  });
});
