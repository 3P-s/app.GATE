import express from 'express';
import cors from 'cors';
import connectDB from './db/configure.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});