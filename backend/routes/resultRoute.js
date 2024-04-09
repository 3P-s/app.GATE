import express from 'express';
import { getResults, getRecommendations, getAllResults } from '../controllers/resultController.js';

const resultRoutes = express.Router();

resultRoutes.post('/analyse', getResults);
resultRoutes.put('/recommend', getRecommendations);
resultRoutes.get('/all', getAllResults);

export default resultRoutes;
