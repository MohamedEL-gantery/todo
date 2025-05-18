import { createUser, loginUser } from "../services/auth.service.js";
import { AuthSchema, AuthSchemaLogin } from "../utils/auth.validation.js";
import AppError from "../utils/appError.js";
import expressHandler from "express-async-handler";

export const signUp = expressHandler(async (req, res, next) => {
  const { error, value } = AuthSchema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConform: req.body.passwordConform,
  });

  if (error) {
    return next(new AppError(error.details[0].message, 400));
  }

  const { message } = await createUser(value);

  res.status(201).json({
    status: "success",
    message,
  });
});

export const login = expressHandler(async (req, res, next) => {
  const { error, value } = AuthSchemaLogin({
    email: req.body.email,
    password: req.body.password,
  });

  if (error) {
    return next(new AppError(error.details[0].message, 400));
  }

  const { message, accessToken, refreshToken, user } = await loginUser(value);

  return res.status(200).json({
    status: "success",
    message,
    accessToken,
    refreshToken,
    user,
  });
});
