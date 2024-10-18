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
router.get('/getEditBook/:id', bookController.getEditBook);
router.post('/updateBook/:id', bookController.updateBook);
router.post('/deleteBook/:id', bookController.deleteBook);


export default router;