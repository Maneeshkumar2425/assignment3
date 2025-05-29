const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

// GET /books - list all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - add new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - update book
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  books = books.map(book => book.id == id ? updatedBook : book);
  res.json(updatedBook);
});

// DELETE /books/:id - delete book
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  books = books.filter(book => book.id != id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
