Cypress.Commands.add('runBannerTests', (elements) => {
  describe('Banner Tests', () => {
    elements.forEach((element) => {
      it(`should test banner element: ${element.text}`, () => {
        console.log('testing element banner:: runBannerTests', element.text);
        // cy.get(element.selector).contains(element.text).should('be.visible');
        cy.get(element.selector)
          .should('be.visible')
          .invoke('html')
          .should('match', new RegExp(element.text));
      });
    });
  });
});
