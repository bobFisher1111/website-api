import pool from '../db/db';
import {
  getArticlesQuery,
} from '../queries/articles/articlesquery';
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
    const articles = await pool.query(getArticlesQuery);
    const authors = await pool.query(getAuthorsQuery);
    const books = await pool.query(getBooksQuery);
    const series = await pool.query(getSeriesQuery);
    const data: any = { 'websiteData':  {
        'articles': articles.rows,
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