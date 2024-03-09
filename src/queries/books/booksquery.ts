export const addBookQuery = "INSERT INTO Books (bookId, bookTitle, bookSubtitle, buy, genre, publishedDate, bookCoverLarge, bookCoverSmall, authorid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)";
export const checkBookExistByBookNameQuery = "SELECT s FROM Books s WHERE s.bookId = $1";
export const deleteBooksQuery = "DELETE FROM Books WHERE bookId = $1";
export const getBooksQuery = "SELECT * FROM Books";
export const getBooksQueryByID = "SELECT * FROM Books WHERE bookId = $1";
export const updateBooksQuery = "UPDATE Books SET bookId = $1, bookTitle = $2, bookSubtitle = $3, buy = $4, genre = $5, publishedDate = $6, bookCoverLarge = $7, bookCoverSmall = $8, authorid = $9 WHERE bookId = $1";

export default [
  addBookQuery,
  checkBookExistByBookNameQuery,
  deleteBooksQuery,
  getBooksQuery,
  getBooksQueryByID,
  updateBooksQuery,
];