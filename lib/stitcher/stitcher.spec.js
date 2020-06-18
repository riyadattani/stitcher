"use strict";

var _stitcher = require("./stitcher");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe("Stitcher", function () {
  test('pass urls and return a stitched string', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var stubCall;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            stubCall = function stubCall(url) {
              if (url === "hello.com") {
                return "hello";
              }

              if (url === "awesome.com") {
                return "awesome";
              }

              if (url === "world.com") {
                return "world";
              }
            };

            _context.t0 = expect;
            _context.next = 4;
            return (0, _stitcher.stitcher)(["hello.com", "awesome.com", "world.com"], stubCall);

          case 4:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1).toEqual("helloawesomeworld");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('return an empty string if no urls passed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var stubGetUrl;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            stubGetUrl = jest.fn();
            _context2.t0 = expect;
            _context2.next = 4;
            return (0, _stitcher.stitcher)([], stubGetUrl);

          case 4:
            _context2.t1 = _context2.sent;
            (0, _context2.t0)(_context2.t1).toEqual("");

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});