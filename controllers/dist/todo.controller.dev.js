"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodosController = exports.deleteTodoByIdController = exports.updateTodosController = exports.updateTodoByIdController = exports.getSingleTodoController = exports.getTodoByIdController = exports.getAllTodosController = exports.createTodoController = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _todoService = require("../services/todo.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create a new todo
var createTodoController = (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var todo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.createTodoService)({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            userId: req.user.id
          }));

        case 2:
          todo = _context.sent;
          res.status(201).json({
            status: "success",
            data: todo
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Get all todos

exports.createTodoController = createTodoController;
var getAllTodosController = (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var todos;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.getAllTodosService)({
            userId: req.user.id,
            status: req.query.status
          }));

        case 2:
          todos = _context2.sent;
          res.status(200).json({
            status: "success",
            results: todos.length,
            data: todos
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Get todo by ID

exports.getAllTodosController = getAllTodosController;
var getTodoByIdController = (0, _expressAsyncHandler["default"])(function _callee3(req, res) {
  var todo;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.getTodoByIdService)(req.params.id));

        case 2:
          todo = _context3.sent;
          res.status(200).json({
            status: "success",
            data: todo
          });

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // Get single todo by filter (e.g., query)

exports.getTodoByIdController = getTodoByIdController;
var getSingleTodoController = (0, _expressAsyncHandler["default"])(function _callee4(req, res) {
  var todo;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.getSingleTodoService)(req.query));

        case 2:
          todo = _context4.sent;
          res.status(200).json({
            status: "success",
            data: todo
          });

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // Update todo by ID

exports.getSingleTodoController = getSingleTodoController;
var updateTodoByIdController = (0, _expressAsyncHandler["default"])(function _callee5(req, res) {
  var updated;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.updateTodoByIdService)(req.params.id, req.body));

        case 2:
          updated = _context5.sent;
          res.status(200).json({
            status: "success",
            data: updated
          });

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // Update multiple todos

exports.updateTodoByIdController = updateTodoByIdController;
var updateTodosController = (0, _expressAsyncHandler["default"])(function _callee6(req, res) {
  var updated;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.updateTodosService)(req.query, req.body));

        case 2:
          updated = _context6.sent;
          res.status(200).json({
            status: "success",
            data: updated
          });

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // Delete todo by ID

exports.updateTodosController = updateTodosController;
var deleteTodoByIdController = (0, _expressAsyncHandler["default"])(function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.deleteTodoByIdService)(req.params.id));

        case 2:
          res.status(204).json({
            status: "success",
            message: "Todo deleted"
          });

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
}); // Delete multiple todos

exports.deleteTodoByIdController = deleteTodoByIdController;
var deleteTodosController = (0, _expressAsyncHandler["default"])(function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap((0, _todoService.deleteTodosService)(req.query));

        case 2:
          res.status(204).json({
            status: "success",
            message: "Todos deleted"
          });

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
});
exports.deleteTodosController = deleteTodosController;