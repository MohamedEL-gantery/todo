import express from "express";
import {
  createTodoController,
  getAllTodosController,
  getTodoByIdController,
  getSingleTodoController,
  updateTodoByIdController,
  updateTodosController,
  deleteTodoByIdController,
  deleteTodosController,
} from "../controllers/todo.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);
router
  .route("/")
  .post(createTodoController)
  .get(getAllTodosController)
  .patch(updateTodosController)
  .delete(deleteTodosController);

router.route("/single").get(getSingleTodoController);

router
  .route("/:id")
  .get(getTodoByIdController)
  .patch(updateTodoByIdController)
  .delete(deleteTodoByIdController);

export default router;
