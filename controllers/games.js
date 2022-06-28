const game = require('../models/game')
const Game = require('../models/game')

module.exports = {
    new: newGame,
    create,
    index,
}

function index(req, res) {
    Game.find({}, function(err, games){
        res.render('games/index', {
            title: 'All Games',
            games
        })
    })
}

function newGame(req, res) {
    res.render('games/new')

}

function create(req, res) {
    console.log(req.body)
    req.body.genre = req.body.genre.trim()
    if (req.body.genre) req.body.genre = req.body.genre.split(/\s*,\s*/)

    req.body.supportedLanguage = req.body.supportedLanguage.trim()
    if (req.body.supportedLanguage) req.body.supportedLanguage = req.body.supportedLanguage.split(/\s*,\s*/)
    const game = new Game(req.body)
    game.save(function(err) {
        if (err) return res.redirect('/games/new')
        console.log(game)
        res.redirect('/games/new')

    })
}