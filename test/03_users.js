process.env.NODE_ENV = 'test';
var app = require('../server/app'),
    request = require('supertest'),
    should = require("should"),
    mongoose = require('mongoose'),
    User = require("../server/models/users.js"),
    assert = require("assert");


describe("users.js Routes", function() {

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
      assert.equal(user.github.username, 'testy');
      assert.equal(user.github.oauthID, 12345);
      done();
    });
  });

  it('finds a admin user by username', function(done) {
    User.findOne({ 'local.username': 'test@test.com', 'local.password': 'password' }, function(err, user) {
      user.should.be.an.instanceOf(User);
      assert.equal(user.local.username, 'test@test.com');
      assert.equal(user.local.password, 'password');
      done();
    });
  });

  it('finds all users', function(done) {
    User.find({}, function(err, user) {
      assert.equal(user.length, 2);
      done();
    });
  });

  describe('GET /auth/login', function(){
    it ('should return a view', function(done) {
      request(app)
        .get('/auth/login')
        .end(function (err, res) {
          assert.equal(res.statusCode, 200);
          assert.equal(res.status, 200);
          res.text.should.containEql('<h1>Login</h1>\n');
          done();
        });
    });
  });

  describe('GET /auth/logout', function(){
    it ('should redirect if user is not logged in', function(done) {
      request(app)
        .get('/auth/logout')
        .end(function (err, res) {
          assert.equal(res.statusCode, 302);
          assert.equal(res.status, 302);
          assert.equal(res.header.location, '/');
          done();
        });
    });
  });

  describe('GET /auth/account', function(){
    it ('should redirect if user is not logged in', function(done) {
      request(app)
        .get('/auth/account')
        .end(function (err, res) {
          assert.equal(res.statusCode, 302);
          assert.equal(res.status, 302);
          assert.equal(res.header.location, '/');
          done();
        });
    });
  });

  describe('GET /auth/admin', function(){
    it ('should redirect if user is not logged in', function(done) {
      request(app)
        .get('/auth/admin')
        .end(function (err, res) {
          assert.equal(res.statusCode, 302);
          assert.equal(res.status, 302);
          assert.equal(res.header.location, '/');
          done();
        });
    });

  });

});