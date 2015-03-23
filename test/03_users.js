process.env.NODE_ENV = 'test';

var should = require("should"),
    mongoose = require('mongoose'),
    request = require('supertest'),
    express = require('express'),
    User = require("../server/models/users.js"),
    app = require('../server/app');


describe("routes/users.js - logged in", function() {

  before(function(done) {

    // regular user
    var regularUser = new User({
      github: {
        username: 'testy',
        oauthID: 12345,
      }
    });

    regularUser.save(function (err, results) {
      if (err) console.log('error' + err.message);
    });

    // admin user
    var adminUser = new User({
      local: {
        username: 'test@test.com',
        password: 'password',
      }
    });

    adminUser.save(function (err, results) {
      if (err) console.log('error' + err.message);
    });

    done();

  });

  after(function(done) {
    User.collection.drop();
    done();
  });

  it('finds a regular user by username', function(done) {
    User.findOne({ 'github.oauthID': 12345, 'github.username': 'testy' }, function(err, user) {
      user.should.be.an.instanceOf(User);
      user.github.username.should.eql('testy');
      user.github.oauthID.should.eql(12345);
      done();
    });
  });

  it('finds a admin user by username', function(done) {
    User.findOne({ 'local.username': 'test@test.com', 'local.password': 'password' }, function(err, user) {
      user.should.be.an.instanceOf(User);
      user.local.username.should.eql('test@test.com');
      user.local.password.should.eql('password');
      done();
    });
  });

  it('finds all users', function(done) {
    User.find({}, function(err, user) {
      user.length.should.eql(2);
      done();
    });
  });

  // it ('login', function(done) {
  //   request(app)
  //     .post('/auth/login')
  //     .field('username', 'test@test.com')
  //     .field('password', 'password')
  //     .expect('Content-Type', /plain/)
  //     .end(function (err, res) {
  //       res.statusCode.should.eql(302);
  //       res.header.location.should.eql('/');
  //     });
  //     done();
  // });


  // it ('GET "/admin" should display admin page if an admin is logged in', function(done) {
  //   request(app)
  //     .get('/auth/admin')
  //     .end(function (err, res) {
  //       should.not.exist(err);
  //       res.statusCode.should.eql(200);
  //       res.header.location.should.eql('/auth/admin');
  //     });
  //     done();
  // });


});


describe("routes/users.js - not logged in", function() {

  before(function(done) {
    done();
  });

  after(function(done) {
    done();
  });

  it ('GET "/auth/admin" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/auth/admin')
      .end(function (err, res) {
        should.not.exist(err);
        res.statusCode.should.eql(302);
        res.header.location.should.eql('/');
      });
      done();
  });


  it ('GET "/auth/logout" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/auth/logout')
      .end(function (err, res) {
        should.not.exist(err);
        res.statusCode.should.eql(302);
        res.header.location.should.eql('/');
      });
      done();
  });

  it ('GET "/auth/account" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/auth/account')
      .end(function (err, res) {
        should.not.exist(err);
        res.statusCode.should.eql(302);
        res.header.location.should.eql('/');
      });
      done();
  });


});