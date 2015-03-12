var express = require('express'),
    router = express.Router(),
    passport = require('../auth');


router.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){});

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    req.flash('success', 'Successfully logged in.');
    res.redirect('/');
});

router.get('/logout', ensureAuthenticated, function(req, res){
  req.logout();
  req.flash('success', 'Successfully logged out.');
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
  req.flash('error', 'Please log in.');
  res.redirect('/');
}


module.exports = router;
