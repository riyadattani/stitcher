"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorHandler = exports.getStitcher = void 0;

var _stitcher = require("../stitcher/stitcher");

var _mustacheExpress = _interopRequireDefault(require("mustache-express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var urlArray = function urlArray(url) {
  var urls = [];

  if (!Array.isArray(url)) {
    urls.push(url);
  } else {
    urls = url;
  }

  return urls;
};

var getStitcher = function getStitcher(server) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              server.engine('html', (0, _mustacheExpress["default"])());
              server.set('view engine', 'html');
              server.set('views', __dirname + '/views');
              _context2.prev = 3;
              res.render('index.html', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        res.status(200);
                        _context.t0 = res;
                        _context.next = 4;
                        return (0, _stitcher.stitcher)(urlArray(req.query.url), _stitcher.getURL);

                      case 4:
                        _context.t1 = _context.sent;

                        _context.t0.send.call(_context.t0, _context.t1);

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](3);
              return _context2.abrupt("return", next(_context2.t0));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 7]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.getStitcher = getStitcher;

var getErrorHandler = function getErrorHandler() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(error, _, res, next) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(res.status !== 200)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", next(error));

            case 2:
              res.status(error.statusCode);
              return _context3.abrupt("return", res.send('An error occurred!'));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4, _x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.getErrorHandler = getErrorHandler;