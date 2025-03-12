import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import BookRoutes from "./routes/bookRoutes.js"
import { requestLogger, validateBook } from "./middlewares/customMiddleware.js";
import dotenv from "dotenv";

dotenv.config();


const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT



const app = express()


// middelewares
app.use(express.json())
app.use(morgan("dev"));
app.use(requestLogger);


// connect DB

mongoose.connect(
  MONGO_URI
)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error:", err));

// Routes
app.use(BookRoutes)

// Server
app.listen(PORT, () => {
  console.log("server is start on port 3000");
})

