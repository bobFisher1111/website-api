export const addStudentQuery = "INSERT INTO students (name, email, age, dob) VALUES($1, $2, $3, $4)";
export const checkStudentExistByEmailQuery = "SELECT s FROM students s WHERE s.email = $1";
// export const checkStudentExistByIDQuery = "SELECT s FROM students s WHERE s = $1";
export const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
export const getStudentsQuery = "SELECT * FROM students";
export const getStudentsQueryByID = "SELECT * FROM students WHERE id = $1";
export const updateStudentQuery = "UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5";

export default [
  addStudentQuery,
  checkStudentExistByEmailQuery,
  deleteStudentQuery,
  getStudentsQuery,
  getStudentsQueryByID,
  updateStudentQuery,
];