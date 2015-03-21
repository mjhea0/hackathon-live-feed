var Admin = require('../user');
var passport = require('passport');

var seedAdmin = function() {

  Admin.find({}, function(err, documents) {

    if(documents.length === 0){
      Admin.register(new Admin({username: 'ad@min.com', admin: true}),
        'admin', function(err, user) {});
      console.log('Dummy admin added!');
    }

  });

};

module.exports = seedAdmin;