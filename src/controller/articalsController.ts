import pool from '../db/db';
import {
  addArticalQuery,
  checArticalExistByIDQuery,
  deleteArticalQuery,
  getArticalQuery,
  getArticalQueryByID,
  updateArticalQuery,
} from '../queries/articals/articalsquery';

export const addArtical = (req: any, res: any) => {
  const { 
    articalId, authorid, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical
  } = req.body;
  pool.query(checArticalExistByIDQuery, [articalId], (error, results) => {
    if (results.rows.length) {
      res.send("Artical already exist");
    }
    pool.query(addArticalQuery, [articalId, authorid, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical], (error, results) => {
      if (error) throw error;
      res.status(201).send("Artical Created Successfully!");
    });
  });
};


export const deleteArtical = (req: any, res: any) => {
  const articalId = parseInt(req.params.id);
  pool.query(getArticalQueryByID, [articalId], (error, results) => {
    const articalNotFound = !results.rows.length;
    if (articalNotFound) {
      res.send("Artical does not exist in database, could not remove");
    };
    pool.query(deleteArticalQuery, [articalId], (error, results) => {
      if (error) throw error;
      res.status(200).send("Artical removed successfully!");
    })
  });
};

export const getArticals = (req: any, res: any) => {
  pool.query(getArticalQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getArticalByID = (req: any, res: any) => {
  const articalId = parseInt(req.params.id);
  pool.query(getArticalQueryByID, [articalId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const updateArticalByID = (req: any, res: any) => {
  const articalId = parseInt(req.params.id);
  const { authorid, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical } = req.body;
  pool.query(getArticalQueryByID, [articalId], (error, results) => {
    const articalNotFound = !results.rows.length;
    if (articalNotFound) {
      res.send("Artical does not exist in database, could not remove");
    };
    pool.query(updateArticalQuery, [articalId, authorid, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical], (error, results) => {
      if (error) throw error;
      res.status(200).send("Artical updated successfully");
    });
  });
};

export default [
  addArtical,
  deleteArtical,
  getArticals,
  getArticalByID,
  updateArticalByID,
];