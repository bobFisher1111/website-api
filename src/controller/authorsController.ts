import pool from '../db/db';
import {
  addAuthorQuery,
  checkStudentExistByAuthorsNameQuery,
  deleteAuthorQuery,
  getAuthorsQuery,
  getAuthorQueryByID,
  updateAuthorQuery,
} from '../queries/authors/authorsquery';

// Personal Website:
export const addAuthor = (req: any, res: any) => {
  const { 
    authorId, authorName, avatarImage, biography, titles, facebook, twitter, youtube, email, about, isHidden
  } = req.body;
  // check if email is valid and not already in database
  pool.query(checkStudentExistByAuthorsNameQuery, [authorName], (error, results) => {
    if (results.rows.length) {
    }
    // add student to db
    pool.query(addAuthorQuery, [authorId, authorName, avatarImage, biography, titles, facebook, twitter, youtube, email, about, isHidden], (error, results) => {
      if (error) throw error;
      res.status(201).send("Author Created Successfully!");
    });
  });
};

export const deleteAuthor = (req: any, res: any) => {
  const authorId = parseInt(req.params.id);
  pool.query(getAuthorQueryByID, [authorId], (error, results) => {
    const authorNotFound = !results.rows.length;
    if (authorNotFound) {
      return res.send("Author does not exist in database, could not remove");
    };
    pool.query(deleteAuthorQuery, [authorId], (error, results) => {
      if (error) throw error;
      res.status(200).send("Author removed successfully!");
    })
  });
};

export const getAuthors = (req: any, res: any) => {
  pool.query(getAuthorsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getAuthorByAuthorID = (req: any, res: any) => {
  const authorId = parseInt(req.params.id);
  // passing in: query, params, callback
  pool.query(getAuthorQueryByID, [authorId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const updateAuthorByAuthorID = (req: any, res: any) => {
  const authorId = parseInt(req.params.id);
  const { authorName, avatarImage, biography, titles, facebook, twitter, youtube, email, about, isHidden } = req.body;
  pool.query(getAuthorQueryByID, [authorId], (error, results) => {
    const authorNotFound = !results.rows.length;
    if (authorNotFound) {
      return res.send("Author does not exist in database, could not remove");
    };
    pool.query(updateAuthorQuery, [authorId, authorName, avatarImage, biography, titles, facebook, twitter, youtube, email, about, isHidden], (error, results) => {
      if (error) throw error;
      res.status(200).send("Author updated successfully");
    });
  });
}

export default [
  addAuthor,
  deleteAuthor,
  getAuthors,
  getAuthorByAuthorID,
  updateAuthorByAuthorID,
];