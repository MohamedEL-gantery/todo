"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.hashPassword = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hashPassword = function hashPassword(password) {
  var salt, hash;
  return regeneratorRuntime.async(function hashPassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].genSalt(12));

        case 2:
          salt = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(password, salt));

        case 5:
          hash = _context.sent;
          return _context.abrupt("return", hash);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(password, hash) {
  var isMatch;
  return regeneratorRuntime.async(function comparePassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(password, hash));

        case 2:
          isMatch = _context2.sent;
          return _context2.abrupt("return", isMatch);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.comparePassword = comparePassword;