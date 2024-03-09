import { Router } from 'express';
import {
  addArtical,
  deleteArtical,
  getArticals,
  getArticalByID,
  updateArticalByID,
} from '../controller/articalsController';
import {
  addAuthor,
  deleteAuthor,
  getAuthors,
  getAuthorByAuthorID,
  updateAuthorByAuthorID,
} from '../controller/authorsController';
import {
  addBook,
  deleteBook,
  getBooks,
  getBooksByID,
  updateBookByID
} from '../controller/booksController';
import {
  addStudent,
  deleteStudent,
  getStudents,
  getStudentById,
  updateStudentById,
} from '../controller/controller';
import {
  addSeries,
  deleteSeries,
  getSeries,
  getSeriesByAuthorID,
  updateSeriesBySeriesID,
} from '../controller/seriesController';
import {
  getWebsiteData,
} from '../controller/websiteController'

const router = Router();

router.get('/', getStudents);
router.post('/add_student', addStudent);
router.delete('/delete_student/:id', deleteStudent);
router.get('/get_student_by_id/:id', getStudentById);
router.put('/update_student_by_id/:id', updateStudentById);

// authors
router.get('/authors', getAuthors);
router.post('/add_author', addAuthor);
router.delete('/delete_author/:id', deleteAuthor);
router.get('/get_author_by_authorid/:id', getAuthorByAuthorID);
router.put('/update_author_by_authorid/:id', updateAuthorByAuthorID);

// Series:
router.post('/add_series', addSeries);
router.delete('/delete_series/:id', deleteSeries);
router.get('/series', getSeries);
router.get('/get_series_by_id/:id', getSeriesByAuthorID);
router.put('/update_series_by_seriesid/:id', updateSeriesBySeriesID);

// Books:
router.post('/add_book', addBook);
router.delete('/delete_book/:id', deleteBook);
router.get('/books', getBooks);
router.get('/get_book_by_id/:id', getBooksByID);
router.put('/update_book_by_bookiD/:id', updateBookByID);

// Articals:
router.post('/add_artical', addArtical);
router.delete('/delete_artical/:id', deleteArtical);
router.get('/articals', getArticals);
router.get('/get_artical_by_id/:id', getArticalByID);
router.put('/update_artical/:id', updateArticalByID);

// website data:
router.get('/website_data', getWebsiteData);

export default router;