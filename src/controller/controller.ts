import pool from '../db/db';
import { 
  addStudentQuery,
  checkStudentExistByEmailQuery,
  deleteStudentQuery,
  getStudentsQuery,
  getStudentsQueryByID,
  updateStudentQuery,
} from '../queries/queries';

export const addStudent = (req: any, res: any) => {
  const { name, email, age, dob } = req.body;
  // check if email is valid and not already in database
  pool.query(checkStudentExistByEmailQuery, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exist");
    }
    // add student to db
    pool.query(addStudentQuery, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send("Student Created Successfully!");
    });
  });
};

export const deleteStudent = (req: any, res: any) => {
  const id = parseInt(req.params.id);
  pool.query(getStudentsQueryByID, [id], (error, results) => {
    const studentNotFound = !results.rows.length;
    if (studentNotFound) {
      res.send("Student does not exist in database, could not remove");
    };
    pool.query(deleteStudentQuery, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student removed successfully!");
    })
  });
};

export const getStudents = (req: any, res: any) => {
  pool.query(getStudentsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getStudentById = (req: any, res: any) => {
  const id = parseInt(req.params.id);
  // passing in: query, params, callback
  pool.query(getStudentsQueryByID, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const updateStudentById = (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const { name, email, age, dob } = req.body;
  pool.query(getStudentsQueryByID, [id], (error, results) => {
    const studentNotFound = !results.rows.length;
    if (studentNotFound) {
      res.send("Student does not exist in database, could not update");
    };
    pool.query(updateStudentQuery, [name, email, age, dob, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully");
    });
  });
};

export default [
  addStudent,
  deleteStudent,
  getStudents,
  getStudentById,
  updateStudentById,
];