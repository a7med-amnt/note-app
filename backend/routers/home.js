import express from "express";
import { instructionsApi } from "#controllers/home.js";

const router = express.Router();

router.route("/").get(instructionsApi);

export default router;
