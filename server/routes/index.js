var express = require('express'),
    router = express.Router(),
    request = require("request");


router.get('/', function(req, res) {
  res.render('index', { user: req.user});
});


module.exports = router;