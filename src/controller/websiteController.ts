import pool from '../db/db';
import {
  getArticalQuery,
} from '../queries/articals/articalsquery';
import {
  getAuthorsQuery,
} from '../queries/authors/authorsquery';
import {
  getBooksQuery,
} from '../queries/books/booksquery'
import {
  getSeriesQuery,
} from '../queries/series/seriesquery';

export const getWebsiteData = async(req: any, res: any) => {
  try {
    const articals = await pool.query(getArticalQuery);
    const authors = await pool.query(getAuthorsQuery);
    const books = await pool.query(getBooksQuery);
    const series = await pool.query(getSeriesQuery);
    const data: any = { 'websiteData':  {
        'articals': articals.rows,
        'authors': authors.rows,
        'books': books.rows,
        'series': series.rows,
      }
    };
    return res.json(data);
  } catch (error) {
    throw error
  }
};

export default [
  getWebsiteData,
];