var database = require('../utils/database');
var app = require('../../app');
var client = require('supertest');
var assert = require('assert');
var data = require('../utils/data');


describe('/api/users', function() {
  describe('POST', function() {
    it('should create a user from the json payload', function(done) {
      client(app)
        .post('/api/users')
        .send(data.fake_user)
        .end(function(err, res) {
          assert.equal(res.status, 201);
          done();
        });
    });
    it('should return 400 Bad Request if bad payload', function(done) {
      var data = {};
      client(app)
        .post('/api/users')
        .send(data)
        .end(function(err, res) {
          assert.equal(res.status, 400);
          done();
        });
    });
  });
});