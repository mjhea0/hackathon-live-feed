var should = require("should");
var mongoose = require('mongoose');
var request = require('supertest');
var express = require('express');

process.env.NODE_ENV = 'test';
var app = require('../server/app');


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