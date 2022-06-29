const Game = require('../models/game')
module.exports = {
    create,
    delete: deleteReview,
    edit,
    update,
  }

  function create(req, res) {
    console.log(req.body)
    Game.findById(req.params.id, function(err, game){
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;

        game.reviews.push(req.body)
        game.save(function(err) {
            res.redirect(`/games/${game._id}`)
        })
    })

  }

function deleteReview(req, res, next) {
  Game.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(game) {
    // Rogue user!
    if (!game) return res.redirect('/games');
    // Remove the review using the remove method available on Mongoose arrays
    game.reviews.remove(req.params.id);
    // Save the updated game
    game.save().then(function() {
      // Redirect back to the game's show view
      res.redirect(`/games/${game._id}`);
    }).catch(function(err) {
      // Let Express display an error
      return next(err);
      // res.redirect(`/games/${game._id}`);
    });
  });
}
// async function deleteReview(req, res, next) {
//   try{
//     const game = await game.findOne({'reviews._id' : req.params.id, 'reviews.user': req.user._id})
//     // console.log(game)
//     if (!game) return res.redirect('/games')
//     game.reviews.remove(req.params.id)
//     await game.save()
//     res.redirect(`/games/${game._id}`)

//   }catch(err){
//     return next(err)
//   }
// }
// async function deleteReview(req, res, next) {
//         const game =await Game.findOne({'reviews._id' : req.params.id})
//         // console.log(game)
//         if (!game) return res.redirect('/games')
//         game.reviews.remove(req.params.id)
//         game.save()
//         res.redirect(`/games/${game._id}`)

//       }

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
// function edit(req, res, next) {
//   Game.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(game) {
//     // Rogue user!
//     if (!game) return res.redirect('/games');
//     // Remove the review using the remove method available on Mongoose arrays
//     const review = game.reviews.id(req.params.id);
//     res.render('games/edit', {
//       title: 'Edit Game',
//       review
//     })
//   });
// }

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
  Game.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}, function(err, game) {

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