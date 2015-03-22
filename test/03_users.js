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

    regularUser.save(function (err, results) {});

    // admin user
    var adminUser = new User({
      local: {
        username: 'test@test.com',
        password: 54321,
      }
    });

    adminUser.save(function (err, results) {});

    done();

  });

  after(function(done) {
    User.collection.drop();
    done();
  });

  it('finds a regular user by username', function(done) {
    User.findOne({ 'github.oauthID': 12345, 'github.username': 'testy' }, function(err, user) {
      user.github.username.should.eql('testy');
      user.github.oauthID.should.eql(12345);
      done();
    });
  });

  it('finds a admin user by username', function(done) {
    User.findOne({ 'local.username': 'test@test.com', 'local.password': 54321 }, function(err, user) {
      user.local.username.should.eql('test@test.com');
      user.local.password.should.eql('54321');
      done();
    });
  });

  it('finds all users', function(done) {
    User.find({}, function(err, user) {
      user.length.should.eql(2);
      done();
    });
  });


it ('login', function(done) {
  request(app)
    .post('/auth/login')
    .send({ email: 'test@test.com', password: '54321' })
    .expect(302);
    done();
  });

  afterEach(function(done) {
    User.remove({ username: 'test@test.com' }, function() {
      done();
    });
  });

  it ('GET "/admin" should display admin page if an admin is logged in', function(done) {
    request(app)
      .get('/auth/admin')
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });


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
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });


  it ('GET "/auth/logout" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/auth/logout')
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });

  it ('GET "/auth/account" should redirect if user is not logged in', function(done) {
    request(app)
      .get('/auth/account')
      .expect(200)
      .end(function (err, res) {
        res.header.location.should.eql('/');
      });
      done();
  });


});