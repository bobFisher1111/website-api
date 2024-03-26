import pool from '../db/db';
import {
  addArticleQuery,
  checkArticleExistByIDQuery,
  checkArticleNameExistByIDQuery,
  deleteArticleQuery,
  getArticlesQuery,
  getArticleQueryByID,
  updateArticleQuery,
} from '../queries/articles/articlesquery';

export const addArticle = (req: any, res: any) => {
  const { 
    articleId, authorId, seriesId, sections, sectionLink, sectionType, articleTitle, articleSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, article, isHidden
  } = req.body;
  pool.query(checkArticleNameExistByIDQuery, [articleTitle], (error, results) => {
    if (results.rows.length) {
      return res.send("Article name already exist");
    };
    pool.query(checkArticleExistByIDQuery, [articleId], (error, results) => {
      if(results.rows.length) {
        return res.send("Article id already exist");
      };
    });
    pool.query(addArticleQuery, [articleId, authorId, seriesId, sections, sectionLink, sectionType, articleTitle, articleSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, article, isHidden], (error, results) => {
      if (error) throw error;
      return res.status(201).send("Article Created Successfully!");
    });
  });
};


export const deleteArticle = (req: any, res: any) => {
  const articleId = parseInt(req.params.id);
  pool.query(getArticleQueryByID, [articleId], (error, results) => {
    const articleNotFound = !results.rows.length;
    if (articleNotFound) {
      return res.send("Article does not exist in database, could not remove");
    };
    pool.query(deleteArticleQuery, [articleId], (error, results) => {
      if (error) throw error;
      return res.status(200).send("Article removed successfully!");
    })
  });
};

export const getArticles = (req: any, res: any) => {
  pool.query(getArticlesQuery, (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

export const getArticleByID = (req: any, res: any) => {
  const articleId = parseInt(req.params.id);
  pool.query(getArticleQueryByID, [articleId], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

export const updateArticleByID = (req: any, res: any) => {
  const articleId = parseInt(req.params.id);
  const { authorId, seriesId, sections, sectionLink, sectionType, articleTitle, articleSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, article, isHidden } = req.body;
  pool.query(getArticleQueryByID, [articleId], (error, results) => {
    const articleNotFound = !results.rows.length;
    if (articleNotFound) {
      return res.send("Article does not exist in database, could not remove");
    };
    pool.query(updateArticleQuery, [articleId, authorId, seriesId, sections, sectionLink, sectionType, articleTitle, articleSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, article, isHidden], (error, results) => {
      if (error) throw error;
      return res.status(200).send("Article updated successfully");
    });
  });
};

export default [
  addArticle,
  deleteArticle,
  getArticles,
  getArticleByID,
  updateArticleByID,
];