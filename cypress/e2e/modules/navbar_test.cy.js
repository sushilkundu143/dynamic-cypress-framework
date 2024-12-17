Cypress.Commands.add('runNavbarTests', (elements) => {
  console.log('step 2:: elements', elements);
  describe('Navbar Tests', () => {
    elements.forEach((element) => {
      console.log('step 3: element', element);
      it(`should test link: ${element.text}`, () => {
        console.log('testing element navbar:: runNavbarTests', element.text);
        cy.get(element.selector).contains(element.text).should('be.visible');
        cy.runRequestTests(element);
      });
    });
  });
});
