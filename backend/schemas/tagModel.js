import mongoose from "mongoose";

export default {
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tag: String
};
