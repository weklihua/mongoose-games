// const game = require('../models/game')
const Game = require('../models/game')

module.exports = {
    new: newGame,
    create,
    index,
    show,
}

function index(req, res) {
    Game.find({},function(err, games){
        console.log(games)
        // games = games.sort('-createdAt')
        res.render('games/index', {
            title: 'All Games',
            games
        })
    })
}

function newGame(req, res) {
    res.render('games/new', {
        title: 'Add a Game'
    })

}

function create(req, res) {
    req.body.genre = req.body.genre.trim()
    // req.body.releaseDate = req.body.releaseDate.toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')
    if (req.body.genre) req.body.genre = req.body.genre.split(/\s*,\s*/)

    req.body.supportedLanguage = req.body.supportedLanguage.trim()
    if (req.body.supportedLanguage) req.body.supportedLanguage = req.body.supportedLanguage.split(/\s*,\s*/)
    const game = new Game(req.body)
    game.save(function(err) {
        if (err) return res.redirect('/games/new')
        console.log(game)
        res.redirect('/games')

    })
}

function show(req, res) {
    Game.findById(req.params.id, function(err, game){
        res.render('games/show', {
            title: null,
            game
        })
    })
}