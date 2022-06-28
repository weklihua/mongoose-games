const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');
	
// prefix: /games
router.get('/', gamesCtrl.index)
router.get('/new', gamesCtrl.new);
router.post('/', gamesCtrl.create)
	
module.exports = router;
