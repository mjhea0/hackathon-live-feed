process.env.NODE_ENV = 'test';
var app = require('../server/app'),
    request = require('supertest'),
    should = require("should"),
    mongoose = require('mongoose'),
    User = require("../server/models/users.js"),
    assert = require("assert");


describe("routes/git.js", function() {

  before(function(done) {
    done();
  });

  after(function(done) {
    done();
  });

  describe('GET /git', function(){
    it ('should redirect if user is not logged in', function(done) {
      request(app)
        .get('/git')
        .end(function (err, res) {
          assert.equal(res.statusCode, 302);
          assert.equal(res.status, 302);
          assert.equal(res.header.location, '/');
          done();
        });
    });
  });

});