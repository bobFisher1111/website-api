export const addArticalQuery = "INSERT INTO Articals (articalId, authorid, seriesId, sections, sectionLink, sectionType, articalTitle, articalSubTitle, publishedDate, numberOfFavorites, series, seriesChapter, seriesType, useVideoInsteadOfImage, coverImageOrVideo, artical) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)";
export const checArticalExistByIDQuery = "SELECT s FROM Articals s WHERE s.articalId = $1";
export const deleteArticalQuery = "DELETE FROM Articals WHERE articalId = $1";
export const getArticalQuery = "SELECT * FROM Articals";
export const getArticalQueryByID = "SELECT * FROM Articals WHERE articalId = $1";
export const updateArticalQuery = "UPDATE Articals SET articalId = $1, authorid = $2, seriesId = $3, sections = $4, sectionLink = $5, sectionType = $6, articalTitle = $7, articalSubTitle = $8, publishedDate = $9, numberOfFavorites = $10, series = $11, seriesChapter = $12, seriesType = $13, useVideoInsteadOfImage = $14, coverImageOrVideo = $15, artical = $16  WHERE articalId = $1";

export default [
  addArticalQuery,
  checArticalExistByIDQuery,
  deleteArticalQuery,
  getArticalQuery,
  getArticalQueryByID,
  updateArticalQuery,
];