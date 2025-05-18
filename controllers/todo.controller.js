import expressHandler from "express-async-handler";
import {
  createTodoService,
  getAllTodosService,
  getTodoByIdService,
  getSingleTodoService,
  updateTodoByIdService,
  updateTodosService,
  deleteTodoByIdService,
  deleteTodosService,
} from "../services/todo.service.js";

// Create a new todo
export const createTodoController = expressHandler(async (req, res) => {
  const todo = await createTodoService({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    userId: req.user.id,
  });
  res.status(201).json({ status: "success", data: todo });
});

// Get all todos
export const getAllTodosController = expressHandler(async (req, res) => {
  const todos = await getAllTodosService({
    userId: req.user._id,
  });

  res
    .status(200)
    .json({ status: "success", results: todos.length, data: todos });
});

// Get todo by ID
export const getTodoByIdController = expressHandler(async (req, res) => {
  const todo = await getTodoByIdService(req.params.id);
  res.status(200).json({ status: "success", data: todo });
});

// Get single todo by filter (e.g., query)
export const getSingleTodoController = expressHandler(async (req, res) => {
  const todo = await getSingleTodoService(req.query);
  res.status(200).json({ status: "success", data: todo });
});

// Update todo by ID
export const updateTodoByIdController = expressHandler(async (req, res) => {
  const updated = await updateTodoByIdService(req.params.id, req.body);
  res.status(200).json({ status: "success", data: updated });
});

// Update multiple todos
export const updateTodosController = expressHandler(async (req, res) => {
  const updated = await updateTodosService(req.query, req.body);
  res.status(200).json({ status: "success", data: updated });
});

// Delete todo by ID
export const deleteTodoByIdController = expressHandler(async (req, res) => {
  await deleteTodoByIdService(req.params.id);
  res.status(204).json({ status: "success", message: "Todo deleted" });
});

// Delete multiple todos
export const deleteTodosController = expressHandler(async (req, res) => {
  await deleteTodosService(req.query);
  res.status(204).json({ status: "success", message: "Todos deleted" });
});
