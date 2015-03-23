var User = require('../users');
var passport = require('passport');

var seedAdmin = function() {

  User.find({}, function(err, documents) {

    if(documents.length === 0){

      var user = new User();

      user.generateHash('admin', function(err, hash){

        user.admin = true;
        user.local.password = hash;
        user.local.username = 'ad@min.com';

        user.save(function(err){
          if (!err) {
            console.log("user added!");
          }
        });

      });

    }

  });

};

module.exports = seedAdmin;