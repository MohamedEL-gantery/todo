"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUsers = exports.deleteOneUser = exports.updateUsers = exports.updateOneUser = exports.findUserById = exports.findOneUser = exports.findUserByEmail = exports.findAllUser = exports.createUser = void 0;

var _userModel = _interopRequireDefault(require("../../../../models/user.model.js"));

var _index = require("../core/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createUser = function createUser(data) {
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _index.createDocument)(_userModel["default"], data));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createUser = createUser;

var findAllUser = function findAllUser() {
  var query,
      message,
      _args2 = arguments;
  return regeneratorRuntime.async(function findAllUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          query = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
          message = _args2.length > 1 ? _args2[1] : undefined;
          _context2.next = 4;
          return regeneratorRuntime.awrap((0, _index.findAllDocuments)(_userModel["default"], query, message));

        case 4:
          return _context2.abrupt("return", _context2.sent);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.findAllUser = findAllUser;

var findUserByEmail = function findUserByEmail(email, message) {
  return regeneratorRuntime.async(function findUserByEmail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _index.findOneDocument)(_userModel["default"], {
            email: email
          }, message));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.findUserByEmail = findUserByEmail;

var findOneUser = function findOneUser(query, message) {
  return regeneratorRuntime.async(function findOneUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _index.findOneDocument)(_userModel["default"], query, message));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.findOneUser = findOneUser;

var findUserById = function findUserById(id, message) {
  return regeneratorRuntime.async(function findUserById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _index.findDocumentById)(_userModel["default"], id, message));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.findUserById = findUserById;

var updateOneUser = function updateOneUser(query, data, options, message) {
  return regeneratorRuntime.async(function updateOneUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _index.updateOneDocument)(_userModel["default"], query, data, options, message));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.updateOneUser = updateOneUser;

var updateUsers = function updateUsers(query, data, options, message) {
  return regeneratorRuntime.async(function updateUsers$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _index.updateManyDocuments)(_userModel["default"], query, data, options, message));

        case 2:
          return _context7.abrupt("return", _context7.sent);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.updateUsers = updateUsers;

var deleteOneUser = function deleteOneUser(query, message) {
  return regeneratorRuntime.async(function deleteOneUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap((0, _index.deleteOneDocument)(_userModel["default"], query, message));

        case 2:
          return _context8.abrupt("return", _context8.sent);

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.deleteOneUser = deleteOneUser;

var deleteUsers = function deleteUsers(query, message) {
  return regeneratorRuntime.async(function deleteUsers$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap((0, _index.deleteManyDocuments)(_userModel["default"], query, message));

        case 2:
          return _context9.abrupt("return", _context9.sent);

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
};

exports.deleteUsers = deleteUsers;