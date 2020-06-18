"use strict";

var request = require("supertest");

var app = require("./index.js");

describe('server', function () {
  it('/?url=https://news.bbc.co.uk', function (done) {
    request(app).get('/?url=https://news.bbc.co.uk').expect(200, done).expect('Welcome to the BBC');
  });
  it('/?url=https://news.bbc.co.uk&url=https://www.theguardian.com', function (done) {
    request(app).get('/?url=https://news.bbc.co.uk&url=https://www.theguardian.com').expect(200, done).expect('Welcome to the BBC').expect('Support the Guardian');
  });
  it('/', function (done) {
    request(app).get('/').expect(200, done).expect('No urls to display');
  });
  it('/?url=m', function (done) {
    request(app).get('/?url=m').expect('Error: Only absolute URLs are supported', done);
  });
});