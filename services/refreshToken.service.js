import { verifyRefreshToken } from "../utils/services/jwt/refreshToken.jwt.service.js";
import { findUserById } from "../utils/services/repository/domain/user.repository.js";
import { generateAccessToken } from "../utils/services/jwt/accessToken.jwt.service.js";
import expressHandler from "express-async-handler";
import AppError from "../utils/appError.js";

export const regenerateAccessToken = expressHandler(async (req, res, next) => {
  const refreshToken = req.headers.cookie.split("=")[1];

  if (!refreshToken) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );
  }

  const decoded = await verifyRefreshToken(refreshToken);

  const user = await findUserById(decoded.payload, "User not found");

  const accessToken = generateAccessToken({ id: user._id });

  return res.status(200).json({
    status: "success",
    accessToken,
  });
});
