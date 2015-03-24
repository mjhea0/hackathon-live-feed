var express = require('express'),
    router = express.Router(),
    Twitter = require('twitter');

var config = require('../_config');


var client = new Twitter({
  consumer_key: config.twitterConsumerKey,
  consumer_secret: config.twitterConsumerSecret,
  access_token_key: config.twitterAccessTokenKey,
  access_token_secret: config.twitterAccessTokenSecret
});

router.get('/', ensureAuthenticated, function(req, res) {

  var params = {screen_name: 'refactoru'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      res.send(tweets);
    }
  });

});

router.get('/tweets', ensureAuthenticated, function(req, res) {

  var params = {screen_name: 'refactoru'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      var responseArr = [];
      var responseObj = {};
      for (var i = 0; i < tweets.length; i++) {
        responseObj = {};
        responseObj.text = tweets[i].text;
        responseArr.push(responseObj);
      }
      res.render('tweets', {response:responseArr});
    }
  });

});

router.get('/fetchtweets', ensureAuthenticated, function(req, res) {

  var params = {screen_name: 'refactoru'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      var responseArr = [];
      var responseObj = {};
      for (var i = 0; i < tweets.length; i++) {
        responseObj = {};
        responseObj.text = tweets[i].text;
        responseArr.push(responseObj);
      }
      res.send({response:responseArr, data: req.body});
    }
  });

});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}


module.exports = router;