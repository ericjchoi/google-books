import axios from "axios";

export default {
  // Gets all books of query result
  queryBooks: function (enteredSearchWord) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${enteredSearchWord}`);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/books", bookData);
  },
  // Gets saved books from the database
  savedBooks: function () {
    return axios.get("books/");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
