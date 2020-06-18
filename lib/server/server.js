"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _handlers = require("./handlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.get('/', (0, _handlers.getStitcher)(server));
server.use((0, _handlers.getErrorHandler)());
var _default = server;
exports["default"] = _default;