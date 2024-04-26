import express from 'express';
import { getResults, getRecommendations, getAllResults } from '../controllers/resultController.js';

const resultRoutes = express.Router();

resultRoutes.put('/analyse', getResults);
resultRoutes.post('/recommend', getRecommendations);
resultRoutes.get('/all', getAllResults);

export default resultRoutes;
