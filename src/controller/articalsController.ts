import pool from '../db/db';
import {
  addArticalQuery,
  checkArticalExistByIDQuery,
  checkArticalNameExistByIDQuery,
  deleteArticalQuery,
  getArticalQuery,
  getArticalQueryByID,
  updateArticalQuery,
} from '../queries/articals/articalsquery';

export const addArtical = (req: any, res: any) => {
  const { 
    articalId, authorId, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical, isHidden
  } = req.body;
  pool.query(checkArticalNameExistByIDQuery, [articalTitle], (error, results) => {
    if (results.rows.length) {
      return res.send("Article name already exist");
    };
    pool.query(checkArticalExistByIDQuery, [articalId], (error, results) => {
      if(results.rows.length) {
        return res.send("Article id already exist");
      };
    });
    pool.query(addArticalQuery, [articalId, authorId, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical, isHidden], (error, results) => {
      if (error) throw error;
      return res.status(201).send("Article Created Successfully!");
    });
  });
};


export const deleteArtical = (req: any, res: any) => {
  const articalId = parseInt(req.params.id);
  pool.query(getArticalQueryByID, [articalId], (error, results) => {
    const articalNotFound = !results.rows.length;
    if (articalNotFound) {
      return res.send("Article does not exist in database, could not remove");
    };
    pool.query(deleteArticalQuery, [articalId], (error, results) => {
      if (error) throw error;
      return res.status(200).send("Article removed successfully!");
    })
  });
};

export const getArticals = (req: any, res: any) => {
  pool.query(getArticalQuery, (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

export const getArticalByID = (req: any, res: any) => {
  const articalId = parseInt(req.params.id);
  pool.query(getArticalQueryByID, [articalId], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

export const updateArticalByID = (req: any, res: any) => {
  const articalId = parseInt(req.params.id);
  const { authorId, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical, isHidden } = req.body;
  pool.query(getArticalQueryByID, [articalId], (error, results) => {
    const articalNotFound = !results.rows.length;
    if (articalNotFound) {
      return res.send("Article does not exist in database, could not remove");
    };
    pool.query(updateArticalQuery, [articalId, authorId, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical, isHidden], (error, results) => {
      if (error) throw error;
      return res.status(200).send("Article updated successfully");
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