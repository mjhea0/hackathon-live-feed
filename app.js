// *** main dependencies *** //
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy,
    flash = require('connect-flash'),
    mongoose = require('mongoose');


// *** config file *** //
var config = require('./server/_config');


// *** routes *** //
var mainRoutes = require('./server/routes/index');
var userRoutes = require('./server/routes/users');


// *** express instance *** //
var app = express();


// *** view engine *** ///
app.set('views', path.join(__dirname, './client', 'views'));
app.set('view engine', 'ejs');



// *** middeleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: config.secretKey,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, './client', 'public')));


// *** passport *** //

mongoose.connect(config.mongoURI);
var User = require('./server/models/users.js');

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


// *** main routes *** //

app.use('/', mainRoutes);
app.use('/', userRoutes);


// *** error handlers *** //

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
