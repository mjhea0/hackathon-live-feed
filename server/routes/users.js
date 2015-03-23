var express = require('express'),
    router = express.Router(),
    passportGithub = require('../auth/github'),
    passportLocal = require('../auth/local');


// github auth

router.get('/github',
  passportGithub.authenticate('github'),
  function(req, res){});

router.get('/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    req.flash('success', 'Successfully logged in.');
    res.redirect('/');
});


// local auth

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  passportLocal.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      return res.redirect('/auth/login');
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
});


// user management

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
