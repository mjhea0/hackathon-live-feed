var should = require("should");
var mongoose = require('mongoose');
var request = require('supertest');
var express = require('express');

process.env.NODE_ENV = 'test';
var app = require('../server/app');


describe("routes/git.js", function() {

  before(function(done) {
    done();
  });

  after(function(done) {
    done();
  });

  it ('GET "/git" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/git')
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });

});