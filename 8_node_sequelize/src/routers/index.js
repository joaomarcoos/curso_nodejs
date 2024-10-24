import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/users/createUser', userController.createUser);
router.get('/users/getUsers', userController.getUsers);
router.get('/users/getUser/:id', userController.getUserById);
router.put('/users/updateUser/:id', userController.updateUser);
router.delete('/users/deleteUser/:id', userController.deleteUser);


export default router;