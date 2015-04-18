var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

// create the user model
var userSchema = mongoose.Schema({
  admin: { type: Boolean, default: false },
  local: {
    username: String,
    password: String,
  },
  github: {
    username: String,
    oauthID: Number,
    token: String,
  },
  email: String
});

// bcrypt middleware
userSchema.methods.generateHash = function(password, cb){
  bcrypt.genSalt(10, function(err, salt){
    if (err) console.log (err);
    bcrypt.hash(password, salt, function(err, hash){
      if (err) console.log (err);
      return cb(err, hash);
    });
  });
};

// password verification
userSchema.methods.comparePassword = function(password, next){
  bcrypt.compare(password, this.local.password, function(err, isMatch){
    if(err){
      return next(err);
    }
    return next(null, isMatch);
  });
};

module.exports = mongoose.model('users', userSchema);