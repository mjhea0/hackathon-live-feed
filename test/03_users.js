var should = require("should");
var mongoose = require('mongoose');
var request = require('supertest');
var express = require('express');
var User = require("../server/models/users.js");

process.env.NODE_ENV = 'test';
var app = require('../server/app');


describe("routes/users.js", function() {

  before(function(done) {
    var user = new User({
        github: {
          username: 'testy',
          oauthID: 12345,
        }
    });

    user.save(function (err, results) {
      done();
    });

  });

  after(function(done) {
    User.collection.drop();
    done();
  });

  it('finds a user by username', function(done) {
    User.findOne({ 'github.oauthID': 12345, 'github.username': 'testy' }, function(err, user) {
      user.github.username.should.eql('testy');
      user.github.oauthID.should.eql(12345);
      done();
    });
  });

  it('finds all users', function(done) {
    User.find({}, function(err, user) {
      user.length.should.eql(1);
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

  // it ('GET "/admin" should display admin page if an admin is logged in', function(done) {
  //   request(app)
  //     .post('/auth/login')
  //     .send({username: 'test@test.com', password: 'admin' })
  //     .expect(302)
  //     .end(function (err, res) {
  //       res.header.location.should.eql('/admin');
  //     });
  //     done();
  // });


  it ('GET "/auth/logout" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/auth/logout')
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