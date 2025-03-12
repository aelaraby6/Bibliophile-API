import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        author: {
            type: String,
            required: [true, "Author is required"],
            trim: true,
        },
        yearPublished: {
            type: Number,
            required: [true, "Year Published is required"],
            min: [1000, "Year must be a valid number"],
        },
    },
    { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
