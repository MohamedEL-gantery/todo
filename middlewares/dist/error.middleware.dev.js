"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function errorHandler(err, req, res, next) {
  var statusCode = err.statusCode || 500;
  var status = err.status || "error";
  var message = err.message || "Something went wrong!";
  var stack = err.stack || "No stack trace available.";
  res.status(statusCode).json({
    status: status,
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : stack,
    error: process.env.NODE_ENV === "production" ? null : err
  });
}

var _default = errorHandler;
exports["default"] = _default;