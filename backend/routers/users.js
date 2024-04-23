import express from "express";
import { getUser } from "#controllers/users.js";

const router = express.Router();

router.route("/signup").post(getUser);

export default router;
