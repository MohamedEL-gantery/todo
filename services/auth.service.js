import User from "../models/user.model.js";
import AppError from "../utils/appError.js";
import expressHandler from "express-async-handler";
import { generateAccessToken } from "../utils/services/jwt/accessToken.jwt.service.js";
import { generateRefreshToken } from "../utils/services/jwt/refreshToken.jwt.service.js";
import {
  comparePassword,
  hashPassword,
} from "../utils/services/password/password.service.js";

export const createUser = expressHandler(async (data) => {
  const { name, email, password } = data;

  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new AppError("User already exists ", 400);
  }

  const passwordHash = await hashPassword(password);

  await User.create({
    name,
    email,
    password: passwordHash,
  });

  return {
    message: "User created successfully",
  };
});

export const loginUser = expressHandler(async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    throw new AppError("Invalid email or password", 401);
  }

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  return {
    message: "Login successfully",
    accessToken,
    refreshToken,
    user,
  };
});
