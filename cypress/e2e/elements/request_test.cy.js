Cypress.Commands.add('runRequestTests', (element) => {
  describe('Request Tests', () => {
    it(`should test link redirection for: ${element.text}`, () => {
      console.log(">>> it should completed runRequestTests");
      cy.get(element.selector)
        .contains(element.text)
        .then(($link) => {
          const href = $link.attr('href');
          if (href) {
            cy.request(href).then((response) => {
              expect(response.status).to.eq(200);
            });
          }
        });
    });
  });
});
