"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protect = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _appError = _interopRequireDefault(require("../utils/appError.js"));

var _userRepository = require("../utils/services/repository/domain/user.repository.js");

var _accessTokenJwtService = require("../utils/services/jwt/accessToken.jwt.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var protect = (0, _expressAsyncHandler["default"])(function _callee(req, res, next) {
  var token, decoded, currentUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
          }

          if (token) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", next(new _appError["default"]("You are not logged in! Please log in to get access", 401)));

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _accessTokenJwtService.verifyAccessToken)(token));

        case 6:
          decoded = _context.sent;
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);

          if (!(_context.t0.name === "TokenExpiredError")) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", next(new _appError["default"]("Your token has expired! Please log in again.", 401)));

        case 13:
          return _context.abrupt("return", next(new _appError["default"]("Invalid or expired access token", 403)));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap((0, _userRepository.findUserById)(decoded.id, "User not found"));

        case 16:
          currentUser = _context.sent;

          if (currentUser) {
            _context.next = 19;
            break;
          }

          return _context.abrupt("return", next(new _appError["default"]("The user belonging to this token does no longer exist", 401)));

        case 19:
          req.user = currentUser;
          next();

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
});
exports.protect = protect;