import express from "express";
//---middlewares
import error from "#middlewares/error.js";
//---routers
import home from "#routers/home.js";
import notFound from "#routers/notFound.js";

const router = express.Router();

router.use(express.json());

//---routes
router.use("/api", home);

//---not found
router.use("*", notFound);

//---error handler
router.use(error);

export default router;
