var express = require('express');
var router = express.Router();
const passport = require('passport')
const indexCtrl = require('../controllers/index');


/* GET home page. */
router.get('/', indexCtrl.index);
// router.get('/:id', indexCtrl.show)

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
))

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
))

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(err) {
    if (err) console.log(err)
    res.redirect('/')
  });
});


module.exports = router;
