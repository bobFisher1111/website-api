import { Router } from 'express';
import {
  addStudent,
  deleteStudent,
  getStudents,
  getStudentById,
  updateStudentById,
} from './controller';

const router = Router();

router.get('/', getStudents);
router.post('/add_student', addStudent);
router.delete('/delete_student/:id', deleteStudent);
router.get('/get_student_by_id/:id', getStudentById);
router.put('/update_student_by_id/:id', updateStudentById);


export default router;