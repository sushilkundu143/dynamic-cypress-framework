Cypress.Commands.add('runListTests', (elements) => {
  describe('List Tests', () => {
    elements.forEach((element) => {
      it(`should test list item: ${element.text}`, () => {
        console.log('testing element list :: runListTests', element.text);
        cy.get(element.selector).contains(element.text).should('be.visible');
      });
    });
  });
});
