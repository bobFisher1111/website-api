export const addAuthorQuery = `INSERT INTO Authors ("authorId", "authorName", "avatarImage", biography, titles, facebook, twitter, youtube, email, about, "isHidden") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`
export const checkAuthorExistByAuthorsNameQuery = `SELECT "authorName" FROM Authors WHERE "authorName" = $1`;
export const checkAuthorIDExistQuery = `SELECT "authorId" FROM Authors WHERE "authorId" = $1`;
export const deleteAuthorQuery = `DELETE FROM Authors WHERE "authorId" = $1`;
export const getAuthorsQuery = "SELECT * FROM Authors";
export const getAuthorQueryByID = `SELECT * FROM Authors WHERE "authorId" = $1`;
export const updateAuthorQuery = `UPDATE Authors SET "authorId" = $1, "authorName" = $2, "avatarImage" = $3, biography = $4, titles = $5, facebook = $6, twitter = $7, youtube = $8, email = $9, about = $10, "isHidden"= $11 WHERE "authorId" = $1`;

export default [
  addAuthorQuery,
  checkAuthorIDExistQuery,
  checkAuthorExistByAuthorsNameQuery,
  deleteAuthorQuery,
  getAuthorsQuery,
  getAuthorQueryByID,
  updateAuthorQuery,
];