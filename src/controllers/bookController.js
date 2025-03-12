import Book from "../models/bookModel.js";

// Get All Books
export const GetAllBooksController = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            data: books,
            message: "Books retrieved successfully",
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get One Book
export const GetOneBookController = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({
            data: book,
            message: "Book retrieved successfully",
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create New Book
export const CreateBookController = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();

        res.status(201).json({
            data: book,
            message: "Book created successfully",
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update Book
export const EditBookController = async (req, res) => {
    try {
        const { id } = req.params;
        const bookToUpdate = req.body;

        const book = await Book.findByIdAndUpdate(id, bookToUpdate, { new: true });

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({
            data: book,
            message: "Book updated successfully",
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Book
export const DeleteBookController = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({
            data: book,
            message: "Book deleted successfully",
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
