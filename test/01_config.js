process.env.NODE_ENV = 'test';

var app = require('../server/app'),
    should = require("should"),
    mongoose = require('mongoose');
    config = require('../server/_config');



describe('app environment', function(){

  it ('should be "test"', function(done) {
    process.env.NODE_ENV.should.eql('test');
    process.env.NODE_ENV.should.not.eql('development');
    process.env.NODE_ENV.should.not.eql('stage');
    done();
  });

  it ('should be using the test database', function(done) {
    config.mongoURI[app.settings.env].should.eql("mongodb://localhost/hackathon-test");
    done();
  });

});