const Game = require('../models/game')
module.exports = {
    create,
    delete: deleteReview,
    edit,
    update,
  }

  function create(req, res) {
    Game.findById(req.params.id, function(err, game){
        game.reviews.push(req.body)
        game.save(function(err) {
            res.redirect(`/games/${game._id}`)
        })
    })

  }

async function deleteReview(req, res) {
        const game =await Game.findOne({'reviews._id' : req.params.id})
        console.log(game)
        if (!game) return res.redirect('/games')
        game.reviews.remove(req.params.id)
        game.save()
        res.redirect(`/games/${game._id}`)

      }

function edit(req, res) {
  Game.findOne({'reviews._id': req.params.id}, function(err, game) {

    const review = game.reviews.id(req.params.id);
    console.log(review)
    res.render('games/edit', {
      title: 'Edit Game',
      review
    });
  });
}
  
// async function edit(req, res) {

//     const game =await Game.findOne({'reviews._id' : req.params.id})
//     console.log(game.reviews)
//     if (!game) return res.redirect('/games')
//     res.render('games/edit', {
//       title: 'Edit Game',
//       review: game.reviews.id
//     })
//   }

function update(req, res) {
  Game.findOne({'reviews._id': req.params.id}, function(err, game) {

    const reviewSubdoc = game.reviews.id(req.params.id);
    // Ensure that the review was created by the logged in user
    // if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/games/${game._id}`);
    // Update the text of the review
    reviewSubdoc.content = req.body.content
    reviewSubdoc.rating = req.body.rating
    // Save the updated game
    game.save(function(err) {
      // Redirect back to the game's show view
      res.redirect(`/games/${game._id}`);
    });
  });
}