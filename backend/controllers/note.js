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
    let ownerId = rq.user._id;

    let note = await Note.findOne({ _id: noteId, ownerId });

    if (!note) return nx(error("note not found", 404));
    await Note.findOneAndUpdate({ _id: noteId }, noteData);

    rs.json({ message: "updated successfully" });
});

export const deleteNote = eah(async function (rq, rs, nx) {
    let noteId = rq.params.noteId;
    let ownerId = rq.user._id;
    let note = await Note.findOne({ _id: noteId, ownerId });

    if (!note) return nx(error("note not found", 404));
    await Note.deleteOne({ _id: noteId });

    rs.json({ message: "deleted successfully" });
});

export const getNotes = eah(async function (rq, rs, nx) {
    const ownerId = rq.user._id;
    let qSearch = rq.query?.search || "";

    let notes = await Note.find({
        ownerId,
        $or: [
            {
                title: {
                    $regex: qSearch,
                    $options: "i"
                }
            },
            {
                content: {
                    $regex: qSearch,
                    $options: "i"
                }
            },
            { tags: qSearch }
        ]
    }).sort({ pin: -1,createdAt:-1 });

    rs.json({ message: "get notes successfully", notes });
});
export const getNote = eah(async function (rq, rs, nx) {
    const ownerId = rq.user._id;
    const noteId = rq.params.noteId;

    let note = await Note.findOne({
        ownerId,
        _id: noteId
    });

    if (!note) return nn(error("note not found", 404));

    rs.json({ message: "get note successfully", note });
});

export const togglePin = eah(async function (rq, rs, nx) {
    const noteId = rq.params.noteId;
    const ownerId = rq.user._id;
    let note = await Note.findOne({
        ownerId,
        _id: noteId
    });
    if (!note) return nx(error("not found note", 404));

    note.pin = !note.pin;
    await note.save();
    rs.json({ message: "pin toggled successfully" });
});
