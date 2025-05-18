"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = exports.signToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signToken = function signToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_SECRET_EXPIRES_IN
  });
};

exports.signToken = signToken;

var createToken = function createToken(user, statusCode, req, res) {
  var token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token: token
  });
};

exports.createToken = createToken;