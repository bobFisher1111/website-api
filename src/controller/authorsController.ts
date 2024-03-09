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
    authorid, authorname, avatarimage, biography, titles, facebook, twitter, youtube, email, about
  } = req.body;
  // check if email is valid and not already in database
  pool.query(checkStudentExistByAuthorsNameQuery, [authorname], (error, results) => {
    if (results.rows.length) {
      res.send("Author already exist");
    }
    // add student to db
    pool.query(addAuthorQuery, [authorid, authorname, avatarimage, biography, titles, facebook, twitter, youtube, email, about], (error, results) => {
      if (error) throw error;
      res.status(201).send("Author Created Successfully!");
    });
  });
};

export const deleteAuthor = (req: any, res: any) => {
  const authorid = parseInt(req.params.id);
  pool.query(getAuthorQueryByID, [authorid], (error, results) => {
    const authorNotFound = !results.rows.length;
    if (authorNotFound) {
      res.send("Author does not exist in database, could not remove");
    };
    pool.query(deleteAuthorQuery, [authorid], (error, results) => {
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
  const authorid = parseInt(req.params.id);
  // passing in: query, params, callback
  pool.query(getAuthorQueryByID, [authorid], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const updateAuthorByAuthorID = (req: any, res: any) => {
  const authorid = parseInt(req.params.id);
  const { authorname, avatarimage, biography, titles, facebook, twitter, youtube, email, about } = req.body;
  pool.query(getAuthorQueryByID, [authorid], (error, results) => {
    const authorNotFound = !results.rows.length;
    if (authorNotFound) {
      res.send("Author does not exist in database, could not remove");
    };
    pool.query(updateAuthorQuery, [authorid, authorname, avatarimage, biography, titles, facebook, twitter, youtube, email, about], (error, results) => {
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