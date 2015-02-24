var should = require("should");
var mongoose = require('mongoose');
var superagent = require('superagent');

var User = require("../server/models/users.js");
var db;


describe('Project', function () {
  it('Should exist', function (done) {
    done();
  });
});



describe('User', function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
    done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {

    var user = new User({
      oauthID: 12345,
      name: 'testy',
      created: Date.now()
    });

    user.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');
      done();
    });

  });

  afterEach(function(done) {
    User.remove({}, function() {
      done();
    });
  });

  it('find a user by username', function(done) {
    User.findOne({ oauthID: 12345, name: "testy" }, function(err, user) {
      user.name.should.eql('testy');
      user.oauthID.should.eql(12345);
      console.log("name: ", user.name);
      console.log("oauthID: ", user.oauthID);
      done();
    });
  });

  it ('redirect to the right path', function(done) {
    superagent.get('http://localhost:3000/github', function(err, res) {
      if (err) console.log('error' + err.message);
      res.status.should.eql(200);
      res.text.should.containEql('Login with Github');
      res.redirects.should.eql([ 'http://localhost:3000/' ]);
      console.log(res.redirects);
      done();
    });
  });

});