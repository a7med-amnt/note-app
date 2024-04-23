import express from "express";
import { addNote, editNote, getAllNotes,deleteNote } from "#controllers/note.js";
import dataValidator from "#middlewares/dataValidator.js";
import { addValidation, editValidation } from "#schemas/noteValidation.js";

const router = express.Router();

router.route("/").post(dataValidator(addValidation), addNote);
router.route("/:noteId").put(dataValidator(editValidation), editNote);
router.route("/:noteId").delete( deleteNote);
router.route("/").get(getAllNotes);

export default router;
