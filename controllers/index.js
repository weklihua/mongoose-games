const Game = require('../models/game')
module.exports = {
    index,
  }

  function index(req, res) {
  
        res.render('index', { title: 'Welcome to Nintendo Spot' });
      
  }

