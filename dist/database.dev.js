"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectDB = function connectDB(url) {
  if (!url) {
    throw new Error("MongoDB connection URL is required");
  }

  _mongoose["default"].connect(url).then(function () {
    console.log("MongoDB connected successfully");
  })["catch"](function (err) {
    console.log("MongoDB connection failed", err.message);
  });
};

var _default = connectDB;
exports["default"] = _default;