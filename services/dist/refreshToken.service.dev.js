"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regenerateAccessToken = void 0;

var _refreshTokenJwtService = require("../utils/services/jwt/refreshToken.jwt.service.js");

var _userRepository = require("../utils/services/repository/domain/user.repository.js");

var _accessTokenJwtService = require("../utils/services/jwt/accessToken.jwt.service.js");

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _appError = _interopRequireDefault(require("../utils/appError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var regenerateAccessToken = (0, _expressAsyncHandler["default"])(function _callee(req, res, next) {
  var refreshToken, decoded, user, accessToken;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          refreshToken = req.headers.cookie.split("=")[1];

          if (refreshToken) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", next(new _appError["default"]("You are not logged in! Please log in to get access", 401)));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _refreshTokenJwtService.verifyRefreshToken)(refreshToken));

        case 5:
          decoded = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap((0, _userRepository.findUserById)(decoded.payload, "User not found"));

        case 8:
          user = _context.sent;
          accessToken = (0, _accessTokenJwtService.generateAccessToken)({
            id: user._id
          });
          return _context.abrupt("return", res.status(200).json({
            status: "success",
            accessToken: accessToken
          }));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.regenerateAccessToken = regenerateAccessToken;