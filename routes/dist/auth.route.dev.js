"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authController = require("../controllers/auth.controller.js");

var _refreshTokenService = require("../services/refreshToken.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route("/").post(_authController.signUp);
router.route("/regenerateAccessToken").get(_refreshTokenService.regenerateAccessToken);
router.route("/login").post(_authController.login);
var _default = router;
exports["default"] = _default;