import AppError from "../../../appError.js";

export const createDocument = async (model, data) => {
  const doc = await model.create(data);
  return doc;
};

export const findAllDocuments = async (model, query) => {
  const docs = await model.find(query);

  return {
    total: docs.length,
    docs,
  };
};

export const findOneDocument = async (
  model,
  query,
  message = "Document not found"
) => {
  const doc = await model.findOne(query);
  if (!doc) {
    throw new AppError(message, 404);
  }
  return doc;
};

export const findDocumentById = async (
  model,
  id,
  message = "Document not found"
) => {
  const doc = await model.findById(id);
  if (!doc) {
    throw new AppError(message, 404);
  }
  return doc;
};

export const updateOneDocument = async (
  model,
  query,
  data,
  options = {},
  message = "Document not found"
) => {
  const doc = await model.findOneAndUpdate(query, data, options);
  if (!doc) {
    throw new AppError(message, 404);
  }
  return doc;
};

export const updateManyDocuments = async (
  model,
  query,
  data,
  options = {},
  message = "No documents were updated"
) => {
  const result = await model.updateMany(query, data, options);
  if (result.modifiedCount === 0) {
    throw new AppError(message, 404);
  }
  return result;
};

export const deleteOneDocument = async (
  model,
  query,
  message = "Document not found"
) => {
  const doc = await model.findOneAndDelete(query);
  if (!doc) {
    throw new AppError(message, 404);
  }
  return true;
};

export const deleteManyDocuments = async (
  model,
  query,
  message = "No documents were deleted"
) => {
  const result = await model.deleteMany(query);
  if (result.deletedCount === 0) {
    throw new AppError(message, 404);
  }
  return true;
};
