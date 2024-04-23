import express from "express";
import { signup, signin } from "#controllers/auth.js";
import dataValidator from "#middlewares/dataValidator.js";
import { signupValidation, signinValidation } from "#schemas/authValidation.js";

const router = express.Router();

router.route("/signup").post(dataValidator(signupValidation), signup);
router.route("/signin").post(dataValidator(signinValidation), signin);

export default router;
