var config = {};

// github keys
config.githubClientID = process.env.githubClientID || 'GET_YOUR_OWN';
config.githubClientSecret = process.env.githubClientSecret || 'GET_YOUR_OWN';
config.githubCallbackURL = process.env.githubCallbackURL || "http://127.0.0.1:3000/auth/github/callback";

// twitter keys
config.twitterConsumerKey = process.env.twitterConsumerKey || 'GET_YOUR_OWN';
config.twitterConsumerSecret = process.env.twitterConsumerSecret || 'GET_YOUR_OWN';
config.twitterAccessTokenKey = process.env.twitterAccessTokenKey || 'GET_YOUR_OWN';
config.twitterAccessTokenSecret = process.env.twitterAccessTokenSecret || 'GET_YOUR_OWN';

// secret key (update in production!!!)
config.secretKey = process.env.secretKey || "\x1d\x0fB\x8d'\xaa\xaf\x04\xca\xfe\n\xb8Vg\x95X\x9b\xd6\x18\xd60T`\xc6";

// mongo uri
config.mongoURI = {
  development: "mongodb://localhost/hackathon",
  test: "mongodb://localhost/hackathon-test",
  stage: process.env.MONGOLAB_URI
};

// hashtags for twitter stream
config.hashtags = '#javascript, #nodejs, #angularjs, #backbone, #jquery, #mongodb, #reactjs, #html5, javascript';

module.exports = config;