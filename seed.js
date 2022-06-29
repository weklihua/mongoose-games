// Uncomment the next line if using a .env to hold the db connection string
require('dotenv').config();

// Connect to the db
require('./config/database');

const Game = require('./models/game');

// For better organization, the see data is being stored in a separate data.js module
const data = require('./data');


// Save the promises (or call right in the array if feeling frisky)
const p1 = Game.deleteMany({});
// Promise.all will return a single promise that resolves
// only after all of the array's promises resolve
Promise.all([p1])
.then(function(results) {
  console.log(results);
  return Game.create(data.games);

})
// Yes we can!
.then(process.exit);

