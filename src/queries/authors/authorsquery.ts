export const addAuthorQuery = "INSERT INTO Authors (authorid, authorname, avatarimage, biography, titles, facebook, twitter, youtube, email, about) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)"
export const checkStudentExistByAuthorsNameQuery = "SELECT s FROM Authors s WHERE s.authorname = $1";
export const deleteAuthorQuery = "DELETE FROM Authors WHERE authorid = $1";
export const getAuthorsQuery = "SELECT * FROM Authors";
export const getAuthorQueryByID = "SELECT * FROM Authors WHERE authorid = $1";
export const updateAuthorQuery = "UPDATE Authors SET authorid = $1, authorname = $2, avatarimage = $3, biography = $4, titles = $5, facebook = $6, twitter = $7, youtube = $8, email = $9, about = $10 WHERE authorid = $1";

export default [
  addAuthorQuery,
  checkStudentExistByAuthorsNameQuery,
  deleteAuthorQuery,
  getAuthorsQuery,
  getAuthorQueryByID,
  updateAuthorQuery,
];