import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import BookRoutes from "./routes/bookRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import { requestLogger } from "./middlewares/customMiddleware.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Connect to Database
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Connection error:", err));

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(requestLogger);


// Routes

app.use("/users", UserRoutes);
app.use("/books", BookRoutes);


