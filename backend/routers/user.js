import express from "express";
import { getOwner } from "#controllers/user.js";

const router = express.Router();

router.route("/").get(getOwner);

export default router;
