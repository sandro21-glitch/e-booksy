import Book from "../models/bookModel.js";

export const getAllBook = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

// get single book
export const getSingleBook = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Book id is required");
  }

  try {
    const book = await Book.findById({ _id: id });
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

//add new book
export const addNewBook = async (req, res) => {
  const { title, author, genre, price, description, image } = req.body;
  if (req.user.userId) {
    res.status(404).send("user not found");
  }
  if (!title || !author || !genre || !price || !description || !image) {
    return res.status(400).send("All fields are required");
  }

  try {
    const book = Book({
      title,
      author,
      genre,
      price,
      description,
      image,
    });
    book.save();

    res.status(201).send({ message: "Book added successfully", book });
  } catch (error) {
    res.status(500).send("Internal server error", error.message);
  }
};

//delete book
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Book id is required");
  }

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send({ message: "Book deleted successfully", book });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

//update book
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, price, description, image } = req.body;

  if (!id) {
    return res.status(400).send("Book id is required");
  }
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.price = price;
    book.description = description;
    book.image = image;
    await book.save();
    res.status(200).send({ message: "Book updated successfully", book });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
