"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMe = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _userService = require("../services/user.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMe = (0, _expressAsyncHandler["default"])(function _callee(req, res, next) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _userService.getUser)(req.params.id));

        case 2:
          user = _context.sent;
          res.status(200).json({
            status: "success",
            user: user
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.getMe = getMe;