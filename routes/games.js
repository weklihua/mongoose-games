const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');
const isLoggedIn = require('../config/auth');

	
// prefix: /games
router.get('/', gamesCtrl.index)
router.get('/new', isLoggedIn, gamesCtrl.new);
router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/:id', gamesCtrl.show)
	
module.exports = router;
