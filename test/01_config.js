process.env.NODE_ENV = 'test';
var app = require('../server/app');
var should = require("should");
var mongoose = require('mongoose');


describe('app environment', function(){
  it ('should be "test"', function(done) {
    process.env.NODE_ENV.should.eql('test');
    process.env.NODE_ENV.should.not.eql('development');
    process.env.NODE_ENV.should.not.eql('stage');
    done();
  });
});