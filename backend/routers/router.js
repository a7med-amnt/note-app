import express from "express";
//---middlewares
import error from "#middlewares/error.js";
import checkTokon from "#middlewares/checkToken.js";
//---routers
import notFound from "#routers/notFound.js";
import home from "#routers/home.js";
import auth from "#routers/auth.js";
import note from "#routers/note.js";
import user from "#routers/user.js";

const router = express.Router();

router.use(express.json());

//---routes
router.use("/api", home);
router.use("/api/v1/auth", auth);
router.use("/api/v1/notes", checkTokon, note);
router.use("/api/v1/users", checkTokon,user);

//---not found
router.use("*", notFound);

//---error handler
router.use(error);

export default router;
