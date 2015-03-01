var should = require("should");
var mongoose = require('mongoose');
var superagent = require('superagent');

var User = require("../server/models/users.js");
var db;



describe("routes/users.js", function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
    done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  it ('GET "/git/github" should redirect if user is not logged in', function(done) {
    superagent.get('http://localhost:3000/git/github', function(err, res) {
      if (err) console.log('error' + err.message);
      res.status.should.eql(200);
      res.text.should.containEql('Login with Github');
      res.redirects.should.eql([ 'http://localhost:3000/' ]);
      done();
    });
  });

});