"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.signUp = void 0;

var _authService = require("../services/auth.service.js");

var _authValidation = require("../utils/auth.validation.js");

var _appError = _interopRequireDefault(require("../utils/appError.js"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signUp = (0, _expressAsyncHandler["default"])(function _callee(req, res, next) {
  var _AuthSchema, error, value, _ref, message;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _AuthSchema = (0, _authValidation.AuthSchema)({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConform: req.body.passwordConform
          }), error = _AuthSchema.error, value = _AuthSchema.value;

          if (!error) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", next(new _appError["default"](error.details[0].message, 400)));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _authService.createUser)(value));

        case 5:
          _ref = _context.sent;
          message = _ref.message;
          res.status(201).json({
            status: "success",
            message: message
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.signUp = signUp;
var login = (0, _expressAsyncHandler["default"])(function _callee2(req, res, next) {
  var _AuthSchemaLogin, error, value, _ref2, message, accessToken, refreshToken, user;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _AuthSchemaLogin = (0, _authValidation.AuthSchemaLogin)({
            email: req.body.email,
            password: req.body.password
          }), error = _AuthSchemaLogin.error, value = _AuthSchemaLogin.value;

          if (!error) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", next(new _appError["default"](error.details[0].message, 400)));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap((0, _authService.loginUser)(value));

        case 5:
          _ref2 = _context2.sent;
          message = _ref2.message;
          accessToken = _ref2.accessToken;
          refreshToken = _ref2.refreshToken;
          user = _ref2.user;
          return _context2.abrupt("return", res.status(200).json({
            status: "success",
            message: message,
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: user
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.login = login;