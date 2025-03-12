import Book from "../models/bookModel.js"



// Get All
export const GetAllBooksController = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json({
            data: books,
            message: "Book found successfully",
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get one
export const GetOneBookController = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)

        res.status(200).json({
            data: book,
            message: "Book found successfully",
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Post
export const CreateBookController = async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()

        res.status(200).json({
            data: book,
            message: "Book created successfully",
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Put

export const EditBookController = async (req, res) => {
    try {
        const { id } = req.params
        const bookToupdate = req.body

        const book = await Book.findByIdAndUpdate(id, bookToupdate, { new: true })

        res.status(200).json({
            data: book,
            message: "Book updated successfully",
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Delete

export const DeleteBookController = async (req, res) => {
    try {
        const { id } = req.params
        const bookToupdate = req.body

        const book = await Book.findByIdAndDelete(id, bookToupdate, { new: true })

        res.status(200).json({
            data: book,
            message: "Book Deleted successfully",
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}