import express from 'express';
import {
  createTodo,
  getTodos,
  getTodo,
  updateTodoStatus,
  updateTodo,
  deleteTodo,
} from '../controllers/taskController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authenticate);

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.patch('/:id', updateTodoStatus);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
