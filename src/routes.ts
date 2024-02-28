import { Router } from 'express';
import getStudents from './controller';

const router = Router();

router.get('/', getStudents);

export default router;