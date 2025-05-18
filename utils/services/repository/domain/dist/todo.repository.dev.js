"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodos = exports.deleteOneTodo = exports.updateTodos = exports.updateOneTodo = exports.findTodoById = exports.findOneTodo = exports.findAllTodo = exports.createTodo = void 0;

var _todoModal = _interopRequireDefault(require("../../../../models/todo.modal.js"));

var _index = require("../core/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createTodo = function createTodo(data) {
  return regeneratorRuntime.async(function createTodo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _index.createDocument)(_todoModal["default"], data));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createTodo = createTodo;

var findAllTodo = function findAllTodo() {
  var query,
      _args2 = arguments;
  return regeneratorRuntime.async(function findAllTodo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          query = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _index.findAllDocuments)(_todoModal["default"], query));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.findAllTodo = findAllTodo;

var findOneTodo = function findOneTodo(query, message) {
  return regeneratorRuntime.async(function findOneTodo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _index.findOneDocument)(_todoModal["default"], query, message));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.findOneTodo = findOneTodo;

var findTodoById = function findTodoById(id, message) {
  return regeneratorRuntime.async(function findTodoById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _index.findDocumentById)(_todoModal["default"], id, message));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.findTodoById = findTodoById;

var updateOneTodo = function updateOneTodo(query, data, options, message) {
  return regeneratorRuntime.async(function updateOneTodo$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _index.updateOneDocument)(_todoModal["default"], query, data, options, message));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.updateOneTodo = updateOneTodo;

var updateTodos = function updateTodos(query, data, options, message) {
  return regeneratorRuntime.async(function updateTodos$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _index.updateManyDocuments)(_todoModal["default"], query, data, options, message));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.updateTodos = updateTodos;

var deleteOneTodo = function deleteOneTodo(query, message) {
  return regeneratorRuntime.async(function deleteOneTodo$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _index.deleteOneDocument)(_todoModal["default"], query, message));

        case 2:
          return _context7.abrupt("return", _context7.sent);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.deleteOneTodo = deleteOneTodo;

var deleteTodos = function deleteTodos(query, message) {
  return regeneratorRuntime.async(function deleteTodos$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap((0, _index.deleteManyDocuments)(_todoModal["default"], query, message));

        case 2:
          return _context8.abrupt("return", _context8.sent);

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.deleteTodos = deleteTodos;