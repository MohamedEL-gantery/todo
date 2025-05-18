"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.createUser = void 0;

var _userModel = _interopRequireDefault(require("../models/user.model.js"));

var _appError = _interopRequireDefault(require("../utils/appError.js"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _accessTokenJwtService = require("../utils/services/jwt/accessToken.jwt.service.js");

var _refreshTokenJwtService = require("../utils/services/jwt/refreshToken.jwt.service.js");

var _passwordService = require("../utils/services/password/password.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createUser = (0, _expressAsyncHandler["default"])(function _callee(data) {
  var name, email, password, userExist, passwordHash;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          name = data.name, email = data.email, password = data.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 3:
          userExist = _context.sent;

          if (!userExist) {
            _context.next = 6;
            break;
          }

          throw new _appError["default"]("User already exists ", 400);

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap((0, _passwordService.hashPassword)(password));

        case 8:
          passwordHash = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(_userModel["default"].create({
            name: name,
            email: email,
            password: passwordHash
          }));

        case 11:
          return _context.abrupt("return", {
            message: "User created successfully"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.createUser = createUser;
var loginUser = (0, _expressAsyncHandler["default"])(function _callee2(_ref) {
  var email, password, user, isPasswordCorrect, accessToken, refreshToken;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = _ref.email, password = _ref.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 6;
            break;
          }

          throw new _appError["default"]("Invalid email or password", 401);

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap((0, _passwordService.comparePassword)(password, user.password));

        case 8:
          isPasswordCorrect = _context2.sent;

          if (isPasswordCorrect) {
            _context2.next = 11;
            break;
          }

          throw new _appError["default"]("Invalid email or password", 401);

        case 11:
          accessToken = (0, _accessTokenJwtService.generateAccessToken)(user._id);
          refreshToken = (0, _refreshTokenJwtService.generateRefreshToken)(user._id);
          return _context2.abrupt("return", {
            message: "Login successfully",
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: user
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.loginUser = loginUser;