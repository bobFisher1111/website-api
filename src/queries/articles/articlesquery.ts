export const addArticleQuery = `INSERT INTO Articles ("articleId", "authorId", "seriesId", "sections", "sectionLink", "sectionType", "articleTitle", "articleSubTitle", "publishedDate", "numberOfFavorites", "series", "seriesChapter", "seriesType", "useVideoInsteadOfImage", "coverImageOrVideo", "article", "isHidden") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`;
export const checkArticleExistByIDQuery = `SELECT "articleId" FROM Articles WHERE "articleId" = $1`;
export const checkArticleNameExistByIDQuery = `SELECT "articleTitle" FROM Articles WHERE "articleTitle" = $1`;
export const deleteArticleQuery = `DELETE FROM Articles WHERE "articleId" = $1`;
export const getArticlesQuery = "SELECT * FROM Articles";
export const getArticleQueryByID = `SELECT * FROM Articles WHERE "articleId" = $1`;
export const updateArticleQuery = `UPDATE Articles SET "articleId" = $1, "authorId" = $2, "seriesId" = $3, "sections" = $4, "sectionLink" = $5, "sectionType" = $6, "articleTitle" = $7, "articleSubTitle" = $8, "publishedDate" = $9, "numberOfFavorites" = $10, "series" = $11, "seriesChapter" = $12, "seriesType" = $13, "useVideoInsteadOfImage" = $14, "coverImageOrVideo" = $15, "article" = $16, "isHidden" = $17 WHERE "articleId" = $1`;

export default [
  addArticleQuery,
  checkArticleExistByIDQuery,
  checkArticleNameExistByIDQuery,
  deleteArticleQuery,
  getArticlesQuery,
  getArticleQueryByID,
  updateArticleQuery,
];