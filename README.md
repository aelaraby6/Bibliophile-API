# Bibliophile API

## Overview
Bibliophile API is a simple RESTful API built with Node.js, Express, and MongoDB for managing a collection of books. It allows users to create, read, update, and delete books.

## Features
- **Get All Books**: Retrieve a list of all books.
- **Get a Single Book**: Retrieve details of a specific book by ID.
- **Create a Book**: Add a new book to the database.
- **Update a Book**: Modify an existing book.
- **Delete a Book**: Remove a book from the database.
- **Logging Middleware**: Logs incoming requests to a log file.
- **Validation Middleware**: Ensures required book fields are provided.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing books.
- **Mongoose**: ODM for interacting with MongoDB.
- **Morgan**: HTTP request logger middleware.
- **dotenv**: For managing environment variables.

## Installation
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git
   cd your-repository
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| GET    | `/books`        | Get all books            |
| GET    | `/books/:id`    | Get a single book by ID  |
| POST   | `/books`        | Create a new book        |
| PUT    | `/books/:id`    | Update a book by ID      |
| DELETE | `/books/:id`    | Delete a book by ID      |

## Folder Structure
```
📂 project-root
├── 📂 src
│   ├── 📂 controllers
│   │   ├── bookController.js
│   ├── 📂 models
│   │   ├── bookModel.js
│   ├── 📂 routes
│   │   ├── bookRoutes.js
│   ├── 📂 middlewares
│   │   ├── customMiddleware.js
│   ├── app.js
├── .env
├── .gitignore
├── package.json
├── README.md
```


## License
This project is licensed under the MIT License.

