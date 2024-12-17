// const fs = require('fs');

// module.exports = (on, config) => {
//   on('task', {
//     listFixtureFiles() {
//       const fixturesDir = './cypress/fixtures';
//       return fs.readdirSync(fixturesDir).filter(file => file.endsWith('.json'));
//     },
//     readFixtureFile(filename) {
//       return fs.readFileSync(`./cypress/fixtures/${filename}`, 'utf8');
//     }
//   });
// };

// const fs = require('fs');
// const path = require('path');

// module.exports = (on, config) => {
//   on('task', {
//     listFixtureFiles() {
//       return new Promise((resolve, reject) => {
//         const fixturesPath = path.resolve('cypress', 'fixtures');
//         fs.readdir(fixturesPath, (err, files) => {
//           if (err) {
//             console.error('Error listing fixture files:', err);
//             return reject(err);
//           }
//           const jsonFiles = files.filter(file => file.endsWith('.json'));
//           console.log('Fixture files:', jsonFiles);
//           resolve(jsonFiles);
//         });
//       });
//     },
//     readFixtureFile(filename) {
//       return new Promise((resolve, reject) => {
//         const filePath = path.resolve('cypress', 'fixtures', filename);
//         fs.readFile(filePath, 'utf8', (err, data) => {
//           if (err) {
//             console.error(`Error reading fixture file ${filename}:`, err);
//             return reject(err);
//           }
//           console.log(`Read fixture file ${filename}:`, data);
//           resolve(data);
//         });
//       });
//     }
//   });
//   return config;
// };
