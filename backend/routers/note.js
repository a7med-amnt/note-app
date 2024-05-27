import express from "express";
import {
    addNote,
    togglePin,
    editNote,
    getNotes,
    deleteNote,
    getNote
} from "#controllers/note.js";
import dataValidator from "#middlewares/dataValidator.js";
import { addValidation, editValidation } from "#schemas/noteValidation.js";

const router = express.Router();

router.route("/").post(dataValidator(addValidation), addNote);
router.route("/pin/:noteId").put(togglePin);
router.route("/:noteId").put(dataValidator(editValidation), editNote);
router.route("/:noteId").delete(deleteNote);
router.route("/").get(getNotes);
router.route("/:noteId").get(getNote);

export default router;
