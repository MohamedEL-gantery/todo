import Todo from "../../../../models/todo.modal.js";
import {
  createDocument,
  deleteManyDocuments,
  deleteOneDocument,
  findAllDocuments,
  findDocumentById,
  findOneDocument,
  updateManyDocuments,
  updateOneDocument,
} from "../core/index.js";

export const createTodo = async (data) => await createDocument(Todo, data);

export const findAllTodo = async (query = {}) =>
  await findAllDocuments(Todo, query);

export const findOneTodo = async (query, message) =>
  await findOneDocument(Todo, query, message);

export const findTodoById = async (id, message) =>
  await findDocumentById(Todo, id, message);

export const updateOneTodo = async (query, data, options, message) =>
  await updateOneDocument(Todo, query, data, options, message);

export const updateTodos = async (query, data, options, message) =>
  await updateManyDocuments(Todo, query, data, options, message);

export const deleteOneTodo = async (query, message) =>
  await deleteOneDocument(Todo, query, message);

export const deleteTodos = async (query, message) =>
  await deleteManyDocuments(Todo, query, message);
