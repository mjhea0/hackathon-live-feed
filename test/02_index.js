process.env.NODE_ENV = 'test';

var should = require("should"),
    mongoose = require('mongoose'),
    request = require('supertest'),
    express = require('express'),
    app = require('../server/app');


describe("routes/index.js", function() {

  before(function(done) {
    done();
  });

  after(function(done) {
    done();
  });

  it ('GET "/" should 200', function(done) {
    request(app)
      .get('/')
      .end(function (err, res) {
        should.not.exist(err);
        res.statusCode.should.eql(200);
        res.text.should.containEql('Sign in with Github');
        res.text.should.containEql('Admin Login');
      });
      done();
  });

});