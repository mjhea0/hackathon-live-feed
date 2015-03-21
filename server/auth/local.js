var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var User = require('../models/users.js');
var config = require('../_config');


// passport local strategy
passport.use(new LocalStrategy({
  passReqToCallback: true
},
  function(req, username, password, done) {
    User.findOne({ 'local.username': username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: req.flash('success', 'Incorrect username and/or password.') });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: req.flash('success', 'Incorrect username and/or password.') });
      }
      return done(null, user);
    });
  }
));


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