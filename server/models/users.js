var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

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

userSchema.methods.generateHash = function(password, cb){
  bcrypt.genSalt(10, function(err, salt){
    if (err) console.log (err);
    bcrypt.hash(password, salt, function(err, hash){
      if (err) console.log (err);
      return cb(err, hash);
    });
  });
};

userSchema.methods.comparePassword = function(candidatePassword, next){
  bcrypt.compare(candidatePassword, this.local.password, function(err, isMatch){
    if(err){
      return next(err);
    }
    return next(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);