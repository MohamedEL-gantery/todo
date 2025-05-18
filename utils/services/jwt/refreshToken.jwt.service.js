import expressHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const generateRefreshToken = (id) => {
  const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  });

  return refreshToken;
};

export const verifyRefreshToken = expressHandler((token) => {
  const decoded = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);
  return decoded;
});
