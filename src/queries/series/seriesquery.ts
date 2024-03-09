export const addSerieQuery = "INSERT INTO Series (seriesId, authorId, seriesTitle, seriesCoverImageOrVideo, seriesAuthors, useVideoInsteadOfImage, seriesType, seriesTypeTitle, seriesStartDate, sectionLink, section) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
export const checkSeriesExistBySeriesNameQuery = "SELECT s FROM Series s WHERE s.seriesId = $1";
export const deleteSeriesQuery = "DELETE FROM Series WHERE seriesId = $1";
export const getSeriesQuery = "SELECT * FROM Series";
export const getSeriesQueryByID = "SELECT * FROM Series WHERE seriesId = $1";
export const updateSeriesQuery = "UPDATE Series SET seriesId = $1, authorId = $2, seriesTitle = $3, seriesCoverImageOrVideo = $4, seriesAuthors = $5, useVideoInsteadOfImage = $6, seriesType = $7, seriesTypeTitle = $8, seriesStartDate = $9, sectionLink = $10, section = $11 WHERE seriesId = $1";

export default [
  addSerieQuery,
  checkSeriesExistBySeriesNameQuery,
  deleteSeriesQuery,
  getSeriesQuery,
  getSeriesQueryByID,
  updateSeriesQuery,
];