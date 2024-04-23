import eah from "express-async-handler";
import Note from "#models/note.js";
import error from "#utils/error.js";
export const addNote = eah(async function (rq, rs, nx) {
    let noteData = rq.validData;

    noteData.ownerId = rq.user._id;

    const note = new Note(noteData);
    await note.save();
    rs.json({ message: "added successfully" });
});
export const editNote = eah(async function (rq, rs, nx) {
    let noteData = rq.validData;
    let noteId = rq.params.noteId;
    let note = await Note.findById(noteId);

    if (!note) return nx(error("note not found", 404));
    await Note.findOneAndUpdate({ _id: noteId }, noteData);

    rs.json({ message: "updated successfully" });
});

export const deleteNote = eah(async function (rq, rs, nx) {
    let noteId = rq.params.noteId;
    let note = await Note.findById(noteId);

    if (!note) return nx(error("note not found", 404));
    await Note.deleteOne({ _id: noteId });

    rs.json({ message: "deleted successfully" });
});

export const getAllNotes = eah(async function (rq, rs, nx) {
    const ownerId = rq.user._id;
    const notes = await Note.find({ ownerId });
    rs.json({ message: "get all notes successfully", notes });
});
