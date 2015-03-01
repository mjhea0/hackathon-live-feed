var express = require('express'),
    router = express.Router(),
    passport = require('../auth');


router.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){});

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
});

router.get('/logout', ensureAuthenticated, function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});


router.get('/admin', ensureAuthenticated, function(req, res){
  res.render('admin', { user: req.user });
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}


module.exports = router;
