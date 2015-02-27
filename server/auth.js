// authentication

var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy;

var User = require('./models/users.js');
var config = require('./_config');

// passport github strategy
passport.use(new GitHubStrategy({
  clientID: config.githubClientID,
  clientSecret: config.githubClientSecret,
  callbackURL: config.githubCallbackURL
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({ oauthID: profile.id }, function(err, user) {
    if(err) { console.log(err); }
    if (!err && user !== null) {
      done(null, user);
    } else {
      user = new User({
        oauthID: profile.id,
        name: profile.displayName,
        created: Date.now(),
        token: accessToken
      });
      user.save(function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("saving user ...");
          done(null, user);
        }
      });
    }
  });
}));

// serialize and deserialize user (passport)
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user._id);
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    console.log(user);
    if(!err) done(null, user);
    else done(err, null);
  });
});

module.exports = passport;