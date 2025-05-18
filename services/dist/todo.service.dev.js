"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodosService = exports.deleteTodoByIdService = exports.updateTodosService = exports.updateTodoByIdService = exports.getSingleTodoService = exports.getTodoByIdService = exports.getAllTodosService = exports.createTodoService = void 0;

var _todoRepository = require("../utils/services/repository/domain/todo.repository.js");

var createTodoService = function createTodoService(data) {
  return regeneratorRuntime.async(function createTodoService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _todoRepository.createTodo)(data));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createTodoService = createTodoService;

var getAllTodosService = function getAllTodosService() {
  var filter,
      _args2 = arguments;
  return regeneratorRuntime.async(function getAllTodosService$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          filter = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _todoRepository.findAllTodo)(filter));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getAllTodosService = getAllTodosService;

var getTodoByIdService = function getTodoByIdService(id) {
  return regeneratorRuntime.async(function getTodoByIdService$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _todoRepository.findTodoById)(id, "Todo not found"));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getTodoByIdService = getTodoByIdService;

var getSingleTodoService = function getSingleTodoService(filter) {
  return regeneratorRuntime.async(function getSingleTodoService$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _todoRepository.findOneTodo)(filter, "Todo not found"));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getSingleTodoService = getSingleTodoService;

var updateTodoByIdService = function updateTodoByIdService(id, updateData) {
  return regeneratorRuntime.async(function updateTodoByIdService$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _todoRepository.updateOneTodo)({
            _id: id
          }, updateData, {
            "new": true,
            runValidators: true
          }, "Todo not found or not updated"));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.updateTodoByIdService = updateTodoByIdService;

var updateTodosService = function updateTodosService(filter, updateData) {
  return regeneratorRuntime.async(function updateTodosService$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _todoRepository.updateTodos)(filter, updateData, {
            "new": true,
            runValidators: true
          }, "No todos updated"));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.updateTodosService = updateTodosService;

var deleteTodoByIdService = function deleteTodoByIdService(id) {
  return regeneratorRuntime.async(function deleteTodoByIdService$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _todoRepository.deleteOneTodo)({
            _id: id
          }, "Todo not found or already deleted"));

        case 2:
          return _context7.abrupt("return", _context7.sent);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.deleteTodoByIdService = deleteTodoByIdService;

var deleteTodosService = function deleteTodosService(filter) {
  return regeneratorRuntime.async(function deleteTodosService$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap((0, _todoRepository.deleteTodos)(filter, "No todos deleted"));

        case 2:
          return _context8.abrupt("return", _context8.sent);

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.deleteTodosService = deleteTodosService;