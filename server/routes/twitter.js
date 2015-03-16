var express = require('express'),
    router = express.Router(),
    passport = require('../auth'),
    Twitter = require('twitter');

var config = require('../_config');

var client = new Twitter({
  consumer_key: config.twitterConsumerKey,
  consumer_secret: config.twitterConsumerSecret,
  access_token_key: config.twitterAccessTokenKey,
  access_token_secret: config.twitterAccessTokenSecret
});


router.get('/', ensureAuthenticated, function(req, res) {

  res.send('almost done!');

  // client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  //   stream.on('data', function(tweet) {
  //     res.send(tweet.text);
  //     // add res.render
  //   });
  //   stream.on('error', function(error) {
  //     throw error;
  //   });
  // });

});

router.get('/tweets', ensureAuthenticated, function(req, res) {

  res.send('almost done!');

  // client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  //   stream.on('data', function(tweet) {
  //     res.send(tweet.text);
  //     // add res.render
  //   });
  //   stream.on('error', function(error) {
  //     throw error;
  //   });
  // });

});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}


module.exports = router;