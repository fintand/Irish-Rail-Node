var should = require('should');
var assert = require('assert');
var request = require('supertest');

var server = require('../src/index')

describe('Real Time Trains', function() {
  var url = 'http://localhost:8080';

  describe('GET /api/v1/trains', function() {
    it('should respond with root message in JSON', function(done) {
    request(url)
  	.get('/api/v1/trains')
  	.set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {
        message: 'root of trains.'
      }, done);
    });
  });

  describe('GET /api/v1/trains/stations', function() {
    it('should respond with Array of stations in JSON', function(done) {
    request(url)
  	.get('/api/v1/trains/stations')
  	.set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      res.body[0].should.have.property('name', 'Belfast Central');
      res.body[0].should.have.property('alias');
      res.body[0].should.have.property('latitude');
      res.body[0].should.have.property('longitude');
      res.body[0].should.have.property('code', 'BFSTC');
      res.body[0].should.have.property('id');
      done();
    })
    });
  });

  describe('GET /api/v1/trains/stations/{type}', function() {
    it('should respond with Array of Dart stations in JSON', function(done) {
    request(url)
  	.get('/api/v1/trains/stations/d')
  	.set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      res.body[0].should.have.property('name', 'Malahide');
      res.body[0].should.have.property('alias');
      res.body[0].should.have.property('latitude');
      res.body[0].should.have.property('longitude');
      res.body[0].should.have.property('code', 'MHIDE');
      res.body[0].should.have.property('id');
      done();
    })
    });
  });

  // describe('GET /api/v1/trains/stationByCode/{code}/{mins}', function() {
  //   it('should respond with Array of Trains at station in JSON', function(done) {
  //   request(url)
  // 	.get('/api/v1/trains/stationByCode/HOWTH/60')
  // 	.set('Accept', 'application/json')
  //   .expect('Content-Type', /json/)
  //   .expect(200)
  //   .end(function(err, res) {
  //     if (err) return done(err);
  //     res.body.should.be.instanceof(Array);
  //     res.body[0].should.have.property('serverTime');
  //     res.body[0].should.have.property('stationFullname', 'Howth');
  //     res.body[0].should.have.property('stationCode', 'HOWTH');
  //     res.body[0].should.have.property('trainType', 'DART');
  //     res.body[0].should.have.property('direction');
  //     done();
  //   })
  //   });
  // });

  describe('GET /api/v1/trains/stationByName/:name/:time/:direction', function() {
    it('should respond with Array of Trains at station in JSON', function(done) {
    request(url)
  	.get('/api/v1/trains/stationByName/raheny/60/Southbound')
  	.set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      res.body[0].should.have.property('serverTime');
      res.body[0].should.have.property('stationFullname', 'Raheny');
      res.body[0].should.have.property('stationCode', 'RAHNY');
      res.body[0].should.have.property('trainType', 'DART');
      res.body[0].should.have.property('direction', 'Southbound');
      done();
    })
    });
  });

  describe('GET /api/v1/trains/current', function() {
    it('should respond with Array of All Trains currently running in JSON', function(done) {
    request(url)
  	.get('/api/v1/trains/current')
  	.set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      res.body[0].should.have.property('status');
      res.body[0].should.have.property('latitude');
      res.body[0].should.have.property('longitude');
      res.body[0].should.have.property('code');
      res.body[0].should.have.property('date');
      res.body[0].should.have.property('publicMessage');
      res.body[0].should.have.property('direction');
      done();
    })
    });
  });

  describe('GET /api/v1/trains/current/{type}', function() {
    it('should respond with Array of All Darts currently running in JSON', function(done) {
    request(url)
  	.get('/api/v1/trains/current/d')
  	.set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      res.body[0].should.have.property('status');
      res.body[0].should.have.property('latitude');
      res.body[0].should.have.property('longitude');
      res.body[0].should.have.property('code');
      res.body[0].should.have.property('date');
      res.body[0].should.have.property('publicMessage');
      res.body[0].should.have.property('direction');
      done();
    })
    });
  });



});
