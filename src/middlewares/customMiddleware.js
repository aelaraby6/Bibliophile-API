import fs from "fs";


// Request Logger Middleware
export const requestLogger = (req, res, next) => {
    const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;

    fs.appendFile("logs.txt", logEntry, (err) => {
        if (err) console.error("Error writing to log file", err);
    });

    next();
};

// Validation Middleware

export const validateBook = (req, res, next) => {
    const { title, author, yearPublished } = req.body;

    if (!title || !author || !yearPublished) {
        return res.status(400).json({ error: "Title, author, and yearPublished are required." });
    }

    next(); 
};
