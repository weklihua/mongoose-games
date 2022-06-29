const Game = require('../models/game')
module.exports = {
    index,
//     show,
  }

  function index(req, res) {
  
        res.render('index', { title: 'Welcome to Nintendo Spot' });
      
  }

// function show(req, res) {
//       res.render
// }

// function show(req, res) {
//       Game.findById(req.params.id, function(err, game){
//           res.render('games/show', {
//               title: null,
//               game
//           })
//       })
//   }