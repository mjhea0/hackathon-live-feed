var should = require("should");
var mongoose = require('mongoose');
var request = require('supertest');
var express = require('express');
var User = require("../server/models/users.js");

process.env.NODE_ENV = 'test';
var app = require('../app');

describe("routes/users.js", function() {

  before(function(done) {
    var user = new User({
      oauthID: 12345,
      name: 'testy',
      created: Date.now()
    });

    user.save();
    done();

  });

  after(function(done) {
    User.remove({});
    mongoose.disconnect();
    done();
  });

  it('finds a user by username', function(done) {
    User.findOne({ oauthID: 12345, name: "testy" }, function(err, user) {
      user.name.should.eql('testy');
      user.oauthID.should.eql(12345);
      done();
    });
  });

  it ('GET "/admin" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/admin')
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });

  it ('GET "/logout" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/logout')
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });

  it ('GET "/account" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/account')
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });


});