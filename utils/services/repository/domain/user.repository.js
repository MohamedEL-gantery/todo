import User from "../../../../models/user.model.js";
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

export const createUser = async (data) => await createDocument(User, data);

export const findAllUser = async (query = {}, message) =>
  await findAllDocuments(User, query, message);

export const findUserByEmail = async (email, message) =>
  await findOneDocument(User, { email }, message);

export const findOneUser = async (query, message) =>
  await findOneDocument(User, query, message);

export const findUserById = async (id, message) =>
  await findDocumentById(User, id, message);

export const updateOneUser = async (query, data, options, message) =>
  await updateOneDocument(User, query, data, options, message);

export const updateUsers = async (query, data, options, message) =>
  await updateManyDocuments(User, query, data, options, message);

export const deleteOneUser = async (query, message) =>
  await deleteOneDocument(User, query, message);

export const deleteUsers = async (query, message) =>
  await deleteManyDocuments(User, query, message);
