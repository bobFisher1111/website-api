import pool from '../db/db';
import {
  addSerieQuery,
  checkSeriesExistBySeriesNameQuery,
  deleteSeriesQuery,
  getSeriesQuery,
  getSeriesQueryByID,
  updateSeriesQuery,
} from '../queries/series/seriesquery';

export const addSeries = (req: any, res: any) => {
  const { 
    seriesId, authorId, seriesTitle, seriesCoverImageOrVideo, seriesAuthors, useVideoInsteadOfImage, seriesType, seriesTypeTitle, seriesStartDate, sectionLink, section
  } = req.body;
  pool.query(checkSeriesExistBySeriesNameQuery, [seriesId], (error, results) => {
    if (results.rows.length) {
      res.send("Series already exist");
    }
    pool.query(addSerieQuery, [seriesId, authorId, seriesTitle, seriesCoverImageOrVideo, seriesAuthors, useVideoInsteadOfImage, seriesType, seriesTypeTitle, seriesStartDate, sectionLink, section], (error, results) => {
      if (error) throw error;
      res.status(201).send("Series Created Successfully!");
    });
  });
};

export const deleteSeries = (req: any, res: any) => {
  const seriesId = parseInt(req.params.id);
  pool.query(getSeriesQueryByID, [seriesId], (error, results) => {
    const seriesNotFound = !results.rows.length;
    if (seriesNotFound) {
      res.send("Series does not exist in database, could not remove");
    };
    pool.query(deleteSeriesQuery, [seriesId], (error, results) => {
      if (error) throw error;
      res.status(200).send("Series removed successfully!");
    })
  });
};

export const getSeries = (req: any, res: any) => {
  pool.query(getSeriesQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getSeriesByAuthorID = (req: any, res: any) => {
  const seriesId = parseInt(req.params.id);
  pool.query(getSeriesQueryByID, [seriesId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const updateSeriesBySeriesID = (req: any, res: any) => {
  const seriesId = parseInt(req.params.id);
  const { authorId, seriesTitle, seriesCoverImageOrVideo, seriesAuthors, useVideoInsteadOfImage, seriesType, seriesTypeTitle, seriesStartDate, sectionLink, section } = req.body;
  pool.query(getSeriesQueryByID, [seriesId], (error, results) => {
    const seriesNotFound = !results.rows.length;
    if (seriesNotFound) {
      res.send("Series does not exist in database, could not remove");
    };
    pool.query(updateSeriesQuery, [seriesId, authorId, seriesTitle, seriesCoverImageOrVideo, seriesAuthors, useVideoInsteadOfImage, seriesType, seriesTypeTitle, seriesStartDate, sectionLink, section], (error, results) => {
      if (error) throw error;
      res.status(200).send("Series updated successfully");
    });
  });
}

export default [
  addSeries,
  deleteSeries,
  getSeries,
  getSeriesByAuthorID,
  updateSeriesBySeriesID,
];