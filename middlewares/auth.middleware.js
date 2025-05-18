import expressHandler from "express-async-handler";
import AppError from "../utils/appError.js";
import { findUserById } from "../utils/services/repository/domain/user.repository.js";
import { verifyAccessToken } from "../utils/services/jwt/accessToken.jwt.service.js";

export const protect = expressHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );
  }

  let decoded;
  try {
    decoded = await verifyAccessToken(token);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(
        new AppError("Your token has expired! Please log in again.", 401)
      );
    }
    return next(new AppError("Invalid or expired access token", 403));
  }

  const currentUser = await findUserById(decoded.id, "User not found");

  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token does no longer exist", 401)
    );
  }

  req.user = currentUser;

  next();
});
