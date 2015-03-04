var should = require("should");
var mongoose = require('mongoose');
var request = require('supertest');
var express = require('express');

process.env.NODE_ENV = 'test';
var app = require('../app');


describe("routes/users.js", function() {

  before(function(done) {
    done();
  });

  after(function(done) {
    // mongoose.disconnect();
    done();
  });

  it ('GET "/" should 200', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        res.text.should.containEql('Login with Github');
      });
      done();
  });

});