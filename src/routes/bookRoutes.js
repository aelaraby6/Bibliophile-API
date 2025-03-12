import express from "express";
import Book from "../models/bookModel.js"
import { GetAllBooksController, CreateBookController, GetOneBookController, EditBookController, DeleteBookController } from "../controllers/bookController.js";

const router = express.Router()


// Get All Books
router.get('/books', GetAllBooksController)

// Get One Book
router.get('/books/:id', GetOneBookController)


// Delete 
router.post('/books', CreateBookController)

// update book
router.put('/books/:id', EditBookController)

// Delete Book
router.delete('/books/:id', DeleteBookController)

export default router;
