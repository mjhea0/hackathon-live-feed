var should = require("should");
var mongoose = require('mongoose');
var superagent = require('superagent');

var User = require("../server/models/users.js");
var db;



describe('routes/index.js', function() {

  it ('GET "/" should 200', function(done) {
    superagent.get('http://localhost:3000/', function(err, res) {
      if (err) console.log('error' + err.message);
      res.status.should.eql(200);
      res.text.should.containEql('Login with Github');
      done();
    });
  });

});