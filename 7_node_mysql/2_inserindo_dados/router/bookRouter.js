import express from 'express';
import { Router } from 'express';
import connection from "../index.js";
import bookController from '../controllers/bookControllers.js'

const route = Router();

route.post('/create', (req, res)=> bookController.createBook(connection));

export default route;