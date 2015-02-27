var express = require('express'),
    router = express.Router(),
    passport = require('../auth'),
    request = require("request");


router.get('/', function(req, res) {
  res.render('index', { user: req.user});
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}


module.exports = router;