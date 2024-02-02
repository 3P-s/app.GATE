import express from 'express';
import { getQuestions, addQuestion } from '../controllers/questionController.js';

const questionRouter = express.Router();

questionRouter.get('/', getQuestions);
questionRouter.post('/', addQuestion);

export default questionRouter;