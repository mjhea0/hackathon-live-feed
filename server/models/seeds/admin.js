var User = require('../users');
var passport = require('passport');

var seedAdmin = function() {

  User.find({}, function(err, documents) {

    if(documents.length === 0){

      var user = new User();

        user.local.password = 'admin';
        user.local.username = 'ad@min.com';

      user.save(function (err, results) {
        if (!err) {
          console.log('dummy user added!');
        }
      });

    }

  });

};

module.exports = seedAdmin;