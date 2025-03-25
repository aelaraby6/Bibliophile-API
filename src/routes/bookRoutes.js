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
router.get("/", GetAllBooksController);

// Get One Book
router.get("/:id", GetOneBookController);

// Create Book
router.post("/", CreateBookController);

// Update Book
router.put("/:id", EditBookController);

// Delete Book
router.delete("/:id", DeleteBookController);

export default router;
