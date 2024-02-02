const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./db/configure');

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

