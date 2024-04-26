// Import Mongoose
import mongoose from 'mongoose';

// Get Schema class from Mongoose
const { Schema } = mongoose;

// Define sub-schema for chart data
const chartSchema = new Schema({
    chart: [
        [String], // Array of strings for column names
        [Schema.Types.Mixed] // Array of mixed types for data
    ],
    title: String,
    other: [
        [String, Schema.Types.Mixed] // Array of arrays containing string and mixed types
    ]
});

// Define sub-schema for barchart report
const barchartReportSchema = new Schema({
    test2: [ // Array of arrays for test2 report data
        [String], // Array of strings for column names
        [Number] // Array of numbers for data
    ],
    test1: [ // Array of arrays for test1 report data
        [String], // Array of strings for column names
        [Number] // Array of numbers for data
    ]
});

// Define main schema
const resultSchema = new Schema({
    // resultid: uuid, // Unique identifier for result
    partial: Number,
    piechart: {
        report: {
            test1: chartSchema, // Sub-schema for test1 report
            test2: chartSchema // Sub-schema for test2 report
        }
    },
    barchart: {
        report: barchartReportSchema // Sub-schema for barchart report
    }
});

// Create model from schema
const Result = mongoose.model('Result', resultSchema);

// Export the model
export default Result;
