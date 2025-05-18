import expressHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const generateAccessToken = (id) => {
  const accessToken = jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  });
  return accessToken;
};

export const verifyAccessToken = expressHandler((token) => {
  const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

  return decoded;
});
