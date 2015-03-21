var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

// create the user model
var userSchema = mongoose.Schema({
  admin: { type: Boolean, default: false },
  local: {
    username: String,
    password: String
  },
  github: {
    username: String,
    oauthID: Number,
    token: String,
  },
  email: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);