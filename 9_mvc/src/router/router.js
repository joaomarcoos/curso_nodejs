import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks/getAllTasks', taskController.getAllTasks);
router.post("/tasks/createTask", taskController.createTask);
router.delete("/tasks/deleteTask/:id", taskController.deleteTask);


export default router;