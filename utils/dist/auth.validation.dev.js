"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthSchemaLogin = exports.AuthSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AuthSchema = function AuthSchema(user) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(3).max(30).required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(6).max(20),
    passwordConform: _joi["default"].ref("password")
  });

  return schema.validate(user);
};

exports.AuthSchema = AuthSchema;

var AuthSchemaLogin = function AuthSchemaLogin(user) {
  var schema = _joi["default"].object({
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(6).max(20)
  });

  return schema.validate(user);
};

exports.AuthSchemaLogin = AuthSchemaLogin;