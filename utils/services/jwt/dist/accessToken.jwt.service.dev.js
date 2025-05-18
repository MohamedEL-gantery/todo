"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyAccessToken = exports.generateAccessToken = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateAccessToken = function generateAccessToken(id) {
  var accessToken = _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
  });

  return accessToken;
};

exports.generateAccessToken = generateAccessToken;
var verifyAccessToken = (0, _expressAsyncHandler["default"])(function (token) {
  var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

  return decoded;
});
exports.verifyAccessToken = verifyAccessToken;