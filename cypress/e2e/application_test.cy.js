import data1 from '../fixtures/cypress/exampleStruct.json';
import data2 from '../fixtures/cypress/pageStructure.json';
import data3 from '../fixtures/cypress/utilitiesPage.json';

let combindedData = [data1, data2, data3];
// describe('Application Test Suite', () => {
//   // Load JSON data containing page structure
//   it('should run all module tests dynamically', () => {
//     console.log(">>> step 1:: start the script");
//     // List all fixture files
//     cy.task('listFixtureFiles').then((files) => {
//       console.log(">>> step 2: files name array", files);
//       // Process each file sequentially
//       files.forEach((filename) => {
//         // Read and parse the JSON file
//         cy.task('readFixtureFile', filename).then((data) => {
//           const jsonData = JSON.parse(data);
//           console.log(">>> step 3: each files jsonData", jsonData);

//           // Define a new test suite for each JSON file
//           context(`Tests for ${jsonData.url}`, () => {
//             before(() => {
//               // Visit the URL defined in the JSON
//               const baseUrl = Cypress.config('baseUrl');
//               console.log(">>> step 4: baseUrl", baseUrl);
//               cy.visit(`${baseUrl}${jsonData.url}`);
//             });

//             it('should run Independent Page tests', () => {
//               // Check if jsonData is loaded
//               if (!jsonData) {
//                 throw new Error('JSON data not loaded');
//               }

//               // Loop through each module in the JSON data
//               jsonData.modules.forEach((module) => {
//                 switch (module.type) {
//                   case 'navbar':
//                     cy.runNavbarTests(module.elements);
//                     break;
//                   case 'list':
//                     cy.runListTests(module.elements);
//                     break;
//                   case 'banner':
//                     cy.runBannerTests(module.elements);
//                     break;
//                   default:
//                     throw new Error(`Unknown module type: ${module.type}`);
//                 }
//               });

//               // Wait and log completion message
//               cy.wait(1000);
//               cy.log("Script running completed");
//             });
//           });
//         });
//       });
//     });
//   });
// });

describe('Application Test Suite', () => {
  let allJsonData = [];

  // Before all tests, load all JSON data
  before(() => {
    console.log(">>> step 1: Start the script");

    // List all fixture files
    cy.task('listFixtureFiles').then((files) => {
      console.log(">>> step 2: Files name array", files);

      // Use Cypress.Promise.all to ensure all files are read before proceeding
      const fileReadPromises = files.map((filename) => {
        return cy.task('readFixtureFile', filename).then((data) => {
          const jsonData = JSON.parse(data);
          console.log(">>> step 3: Each file's jsonData", jsonData);
          allJsonData.push(jsonData);
        });
      });

      // Wait for all promises to resolve
      return Cypress.Promise.all(fileReadPromises);
    });
  });

  // Define a new test suite for each JSON file
  it('should run all module tests dynamically', function () {
    // Ensure the data is available
    cy.wrap(null).then(() => {
      if (!allJsonData.length) {
        throw new Error('No JSON data loaded');
      }

      allJsonData.forEach((jsonData) => {
        describe(`Tests for ${jsonData.url}`, function () {
          before(() => {
            const baseUrl = Cypress.config('baseUrl');
            const fullUrl = `${baseUrl}${jsonData.url}`;
            console.log(`>>> step 4: Visiting URL ${fullUrl}`);
            cy.visit(fullUrl);
          });

          it('should run Independent Page tests', () => {
            if (!jsonData) {
              throw new Error('JSON data not loaded');
            }

            cy.log("Data :::", jsonData);

            jsonData.modules.forEach((module) => {
              switch (module.type) {
                case 'navbar':
                  cy.runNavbarTests(module.elements);
                  break;
                case 'list':
                  cy.runListTests(module.elements);
                  break;
                case 'banner':
                  cy.runBannerTests(module.elements);
                  break;
                default:
                  throw new Error(`Unknown module type: ${module.type}`);
              }
            });

            cy.log('Script running completed');
          });
        });
      });
    });
  });
});
