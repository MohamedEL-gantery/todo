"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyRefreshToken = exports.generateRefreshToken = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateRefreshToken = function generateRefreshToken(id) {
  var refreshToken = _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
  });

  return refreshToken;
};

exports.generateRefreshToken = generateRefreshToken;
var verifyRefreshToken = (0, _expressAsyncHandler["default"])(function (token) {
  var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);

  return decoded;
});
exports.verifyRefreshToken = verifyRefreshToken;