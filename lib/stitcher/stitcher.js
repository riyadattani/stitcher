"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getURL = exports.stitcher = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

require("regenerator-runtime/runtime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var stitcher = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(urls, getURL) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Promise.all(urls.map(getURL));

          case 3:
            return _context.abrupt("return", _context.sent.join(""));

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", Promise.reject("An error occurred when stitching the urls \"".concat(_context.t0.message, "\"")));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function stitcher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.stitcher = stitcher;

var getURL = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = Promise;
            _context2.next = 4;
            return (0, _nodeFetch["default"])(url);

          case 4:
            _context2.t1 = _context2.sent.text();
            return _context2.abrupt("return", _context2.t0.resolve.call(_context2.t0, _context2.t1));

          case 8:
            _context2.prev = 8;
            _context2.t2 = _context2["catch"](0);
            return _context2.abrupt("return", Promise.reject("An error occurred when getting a url \"".concat(_context2.t2.message, "\"")));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getURL(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getURL = getURL;