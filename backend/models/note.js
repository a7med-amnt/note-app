import mongoose from "mongoose";
import schema from "#schemas/noteModel.js";
const noteSchema = new mongoose.Schema(schema, { timestamps: true });

export default mongoose.model("Note", noteSchema);
