import express from "express";
import { getMe } from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);
router.route("/:id").get(getMe);
export default router;
