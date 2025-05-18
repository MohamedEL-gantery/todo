import {
  createTodo,
  deleteOneTodo,
  deleteTodos,
  findAllTodo,
  findOneTodo,
  findTodoById,
  updateOneTodo,
  updateTodos,
} from "../utils/services/repository/domain/todo.repository.js";

export const createTodoService = async (data) => {
  return await createTodo(data);
};

export const getAllTodosService = async (filter = {}) => {
  return await findAllTodo(filter);
};

export const getTodoByIdService = async (id) => {
  return await findTodoById(id, "Todo not found");
};

export const getSingleTodoService = async (filter) => {
  return await findOneTodo(filter, "Todo not found");
};

export const updateTodoByIdService = async (id, updateData) => {
  return await updateOneTodo(
    { _id: id },
    updateData,
    {
      new: true,
      runValidators: true,
    },
    "Todo not found or not updated"
  );
};

export const updateTodosService = async (filter, updateData) => {
  return await updateTodos(
    filter,
    updateData,
    {
      new: true,
      runValidators: true,
    },
    "No todos updated"
  );
};

export const deleteTodoByIdService = async (id) => {
  return await deleteOneTodo({ _id: id }, "Todo not found or already deleted");
};

export const deleteTodosService = async (filter) => {
  return await deleteTodos(filter, "No todos deleted");
};
