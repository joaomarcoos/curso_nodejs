import express from 'express';
import { Router } from 'express';
import bookController from '../controllers/bookControllers.js'

const router = Router();

router.get('/registerBook', (req, res) => {
    res.render('registerBook');
});

router.get('/getBooks', bookController.getAllBooks);
router.get('/searchBook', bookController.searchBook);
router.post('/create', bookController.createBook);


export default router;