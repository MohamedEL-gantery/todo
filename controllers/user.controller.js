import expressHandler from "express-async-handler";
import { getUser } from "../services/user.service.js";

export const getMe = expressHandler(async (req, res, next) => {
  const user = await getUser(req.params.id);
  res.status(200).json({
    status: "success",
    user,
  });
});
