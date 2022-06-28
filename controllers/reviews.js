const Game = require('../models/game')
module.exports = {
    create,
    delete: deleteReview
  }

  function create(req, res) {
    Game.findById(req.params.id, function(err, game){
        game.reviews.push(req.body)
        game.save(function(err) {
            res.redirect(`/games/${game._id}`)
        })
    })

  }

//   async function deleteReview(req, res) {
//     try{
//         const game = await Game.findOne({'reviews._id' : req.params.id, 'reviews.user': req.user._id})
//         // console.log(game)
//         if (!game) return res.redirect('/games')
//         game.reviews.remove(req.params.id)
//         await game.save()
//         res.redirect(`/games/${game._id}`)
    
//       }catch(err){
//         return next(err)
//       }
//   }

async function deleteReview(req, res) {
        const game =await Game.findOne({'reviews._id' : req.params.id})
        console.log(game)
        if (!game) return res.redirect('/games')
        game.reviews.remove(req.params.id)
        game.save()
        res.redirect(`/games/${game._id}`)

      }
  