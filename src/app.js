import express from "express";
import mongoose from "mongoose";

const PORT = 3000

const app = express()

app.listen(PORT,() =>{
    console.log("hello");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// middelewares

app.use(express.json())