var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var User = require('../models/users.js');
var config = require('../_config');


// passport local strategy
passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({ 'local.username': username }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    });
  });
}));


// serialize and deserialize the user (passport)
passport.serializeUser(function(user, done) {
  // console.log('serializeUser: ' + user._id);
  done(null, user._id);
});
passport.deserializeUser(function(userID, done) {
  User.findById(userID, function(err, user){
    // console.log(user);
    if(!err) done(null, user);
    else done(err, null);
  });
});


module.exports = passport;