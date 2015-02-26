var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    request = require("request");


router.get('/', function(req, res) {
  res.render('index', { user: req.user});
});

router.get('/github', ensureAuthenticated, function(req, res){

  var owner = 'RefactorU';
  var repo = 'hackathon-live-feed';
  var url = 'https://api.github.com/repos/'+owner+'/'+repo+'/commits';
  var authToken = req.user.token;

  var options = {
    method: 'get',
    json: true,
    url: url,
    headers : {
      'User-Agent': 'test',
      'Authorization': 'token '+authToken
    }
  };

  request(options, url, function(err, resp, body) {
    if (err) {
      res.status(500).send('Something broke!');
    }
    res.status(200).send({response:body});
  });

});

// todo - add helper for API call !!!!

router.get('/commits', ensureAuthenticated, function(req, res){

  var owner = 'RefactorU';
  var repo = 'hackathon-live-feed';
  var url = 'https://api.github.com/repos/'+owner+'/'+repo+'/commits';
  var authToken = req.user.token;

  var options = {
    method: 'get',
    json: true,
    url: url,
    headers : {
      'User-Agent': 'test',
      'Authorization': 'token '+authToken
    }
  };

  request(options, url, function(err, resp, body) {
    if (err) {
      res.status(500).send('Something broke!');
    }

    response = {
      'name': body[0].commit.author.name,
      'date': body[0].commit.author.date,
      'url': body[0].html_url
    };
    res.render('commits', response);
  });

});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}


module.exports = router;