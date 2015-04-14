var express = require('express'),
    router = express.Router(),
    request = require("request");


router.get('/', function(req, res) {
  res.render('index', { user: req.user});
});

router.get('/dashboard', ensureAuthenticated, function(req, res) {
  res.render('dashboard', { user: req.user});
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}


module.exports = router;