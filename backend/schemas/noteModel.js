import mongoose from "mongoose";

export default {
    title: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 30
    },
    content: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 200
    },
    isPined: {
        type: Boolean,
        default: false
    },
    tags: [String],
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
};
