import express from "express";
import { 
    GetAllBooksController, 
    CreateBookController, 
    GetOneBookController, 
    EditBookController, 
    DeleteBookController 
} from "../controllers/bookController.js";

const router = express.Router();

// Get All Books
router.get("/books", GetAllBooksController);

// Get One Book
router.get("/books/:id", GetOneBookController);

// Create Book
router.post("/books", CreateBookController);

// Update Book
router.put("/books/:id", EditBookController);

// Delete Book
router.delete("/books/:id", DeleteBookController);

export default router;
