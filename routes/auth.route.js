import express from "express";
import { signUp, login } from "../controllers/auth.controller.js";
import { regenerateAccessToken } from "../services/refreshToken.service.js";

const router = express.Router();

router.route("/").post(signUp);

router.route("/regenerateAccessToken").get(regenerateAccessToken);

router.route("/login").post(login);

export default router;
