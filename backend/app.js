import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();


connectDB();
const app = express();
app.use(express.json());
app.use(cors());


