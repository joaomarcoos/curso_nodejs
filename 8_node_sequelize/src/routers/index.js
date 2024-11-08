import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

/*Rotas de paginação */
router.get('/users/addUsers', (req, res)=>{
    res.render('addUsers');
})

router.get('/users/getUpdateUser/:id', userController.getUpdateUser);

router.post('/users/createUser', userController.createUser);
router.get('/users/getUsers', userController.getUsers);
router.get('/users/getUser/:id', userController.getUserById);
router.post('/users/updateUser/:id', userController.updateUser);
router.post('/users/deleteUser/:id', userController.deleteUser);


export default router;