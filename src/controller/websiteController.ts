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
const staticData = require('../staticData/staticData.json');

export const getWebsiteData = async(req: any, res: any) => {
  try {
    // Use later but now need to save on database cost
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
    // return res.json(staticData);
  } catch (error) {
    throw error
  }
};

export const getWebsiteDataBuildJSON = async(req: any, res: any) => {
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
    // return res.json(staticData);
  } catch (error) {
    throw error
  }
};

export default [
  getWebsiteData,
  getWebsiteDataBuildJSON,
];