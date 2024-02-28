import pool from './db/studentsdb';

const getStudents = (req: any, res: any) => {
  pool.query("SELECT * FROM students", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export default getStudents;