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
      .expect(200)
      .end(function (err, res) {
        res.text.should.containEql('Sign in with Github');
      });
      done();
  });

});