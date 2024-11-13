import express from 'express';
import userController from '../controllers/userController.js';
import addressController from '../controllers/addressController.js';

const router = express.Router();

/*Pagination router of User*/
router.get('/users/addUsers', (req, res)=>{
    res.render('addUsers');
})

router.get('/users/getUpdateUser/:id', userController.getUpdateUser);

/*Pagination router of Address */
router.get('/address/addAddress', (req, res)=>{
    res.render('addAddress');
})

/*Router User */
router.post('/users/createUser', userController.createUser);
router.get('/users/getUsers', userController.getUsers);
router.get('/users/getUpdateUser/:id', userController.getUpdateUser);
router.get('/users/getUser/:id', userController.getUserById);
router.post('/users/updateUser/:id', userController.updateUser);
router.post('/users/deleteUser/:id', userController.deleteUser);

/*Router Address */

router.post('/address/createAddress', addressController.createAddress);


export default router;