const Game = require('../models/game')
module.exports = {
    create
  }

  function create(req, res) {
    Game.findById(req.params.id, function(err, game){
        game.reviews.push(req.body)
        game.save(function(err) {
            res.redirect(`/games/${game._id}`)
        })
    })

  }