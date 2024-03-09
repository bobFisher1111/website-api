import pool from '../db/db';
import {
  addBookQuery,
  checkBookExistByBookNameQuery,
  deleteBooksQuery,
  getBooksQuery,
  getBooksQueryByID,
  updateBooksQuery,
} from '../queries/books/booksquery';

export const addBook = (req: any, res: any) => {
  const { 
    bookId, bookTitle, bookSubtitle, buy, genre, publishedDate, bookCoverLarge, bookCoverSmall, authorid
  } = req.body;
  pool.query(checkBookExistByBookNameQuery, [bookId], (error, results) => {
    if (results.rows.length) {
      res.send("Book already exist");
    }
    pool.query(addBookQuery, [bookId, bookTitle, bookSubtitle, buy, genre, publishedDate, bookCoverLarge, bookCoverSmall, authorid], (error, results) => {
      if (error) throw error;
      res.status(201).send("Book Created Successfully!");
    });
  });
};

export const deleteBook = (req: any, res: any) => {
  const bookId = parseInt(req.params.id);
  pool.query(getBooksQueryByID, [bookId], (error, results) => {
    const bookNotFound = !results.rows.length;
    if (bookNotFound) {
      res.send("Book does not exist in database, could not remove");
    };
    pool.query(deleteBooksQuery, [bookId], (error, results) => {
      if (error) throw error;
      res.status(200).send("Book removed successfully!");
    })
  });
};

export const getBooks = (req: any, res: any) => {
  pool.query(getBooksQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getBooksByID = (req: any, res: any) => {
  const bookId = parseInt(req.params.id);
  pool.query(getBooksQueryByID, [bookId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const updateBookByID = (req: any, res: any) => {
  const bookId = parseInt(req.params.id);
  const { bookTitle, bookSubtitle, buy, genre, publishedDate, bookCoverLarge, bookCoverSmall, authorid } = req.body;
  pool.query(getBooksQueryByID, [bookId], (error, results) => {
    const authortNotFound = !results.rows.length;
    if (authortNotFound) {
      res.send("Book does not exist in database, could not remove");
    };
    pool.query(updateBooksQuery, [bookId, bookTitle, bookSubtitle, buy, genre, publishedDate, bookCoverLarge, bookCoverSmall, authorid], (error, results) => {
      if (error) throw error;
      res.status(200).send("Book updated successfully");
    });
  });
};

export default [
  addBook,
  deleteBook,
  getBooks,
  getBooksByID,
  updateBookByID
];