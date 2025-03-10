import express from "express";
import mongoose from "mongoose";

const PORT = 3000

const app = express()


// middelewares
app.use(express.json())


// connect DB

mongoose.connect(
  "",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error:", err));


app.listen(PORT,() =>{
    console.log("server is start on port 3000");
})

