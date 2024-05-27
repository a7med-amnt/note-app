import eah from "express-async-handler";
import Note from "#models/note.js";
import error from "#utils/error.js";
export const getUser = eah(async function (rq, rs, nx) {
    const { name, email, _id } = rq.user;
    const notes = await Note.find({ ownerId: _id })
    const data = {
        name,
        email,
        notes
    };
    rs.json({ message: "added successfully", data });
});
