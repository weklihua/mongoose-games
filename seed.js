// Uncomment the next line if using a .env to hold the db connection string
require('dotenv').config();

// Connect to the db
require('./config/database');

const Game = require('./models/game');

// For better organization, the see data is being stored in a separate data.js module
const data = require('./data');


// Just a query object as an arg, no callback!
Movie.deleteMany({})
// The cb provided to the .then does not use the error-first signature
// use .catch instead to deal with errors
.then(function(results) {
  // results will be whatever the promise
  // returned by the deleteMany method resolves to
  console.log(results);
  // process.exit() immediately exits a Node program
  process.exit();
});
























// const p = new Promise(function(resolve, reject) {
//     let value = 42;
//     resolve(value);
//   });
  
//   console.log(p)

//   p.then(function(result) {
//     console.log(result);
//   });

//   p
// .then(function(result) {
//   console.log(result);
//   return 42;
// })
// .then(function(result) {
//   console.log(result);
//   return 'Done!'
// })
// .then(function(result) {
//   console.log(result);
// });
