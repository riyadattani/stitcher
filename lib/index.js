"use strict";

var _index = _interopRequireDefault(require("./server/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 3000;

_index["default"].listen(port, function () {
  return console.log("Listening on port ".concat(port, "!"));
});