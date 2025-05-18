"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _todoController = require("../controllers/todo.controller.js");

var _authMiddleware = require("../middlewares/auth.middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_authMiddleware.protect);
router.route("/").post(_todoController.createTodoController).get(_todoController.getAllTodosController).patch(_todoController.updateTodosController)["delete"](_todoController.deleteTodosController);
router.route("/single").get(_todoController.getSingleTodoController);
router.route("/:id").get(_todoController.getTodoByIdController).patch(_todoController.updateTodoByIdController)["delete"](_todoController.deleteTodoByIdController);
var _default = router;
exports["default"] = _default;