"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("./index.js"));

var _handlers = require("./handlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

x.describe('stitcher handler', function () {
  it('/?url=https://news.bbc.co.uk', function (done) {
    (0, _supertest["default"])(_index["default"]).get('/?url=https://news.bbc.co.uk').expect(200, done).expect('Welcome to the BBC');
  });
  var server = jest.fn();
  var stitcherHandler = (0, _handlers.getStitcher)(server);
  var res = jest.Mocked({
    status: jest.fn()
  });
  it('returns a 200 status code', function () {
    res.status.mockReturnThis();
  });
});