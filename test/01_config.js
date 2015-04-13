process.env.NODE_ENV = 'test';
var app = require('../server/app'),
    mongoose = require('mongoose'),
    assert = require("assert"),
    config = require('../server/_config');


describe('app environment', function(){
  it ('should be "test"', function(done) {
    assert.equal(process.env.NODE_ENV, 'test');
    assert.notEqual(process.env.NODE_ENV, 'development');
    assert.notEqual(process.env.NODE_ENV, 'stage');
    done();
  });

  it ('should be using the test database', function(done) {
    assert.equal(config.mongoURI[app.settings.env], "mongodb://localhost/hackathon-test");
    done();
  });

});