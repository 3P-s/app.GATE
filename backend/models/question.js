import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    A: {
        type: String,
        required: true,
    },
    B: {
        type: String,
        required: true,
    },
    C: {
        type: String,
        required: true,
    },
    D: {
        type: String,
        required: true,
    },

    correct: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('question', questionSchema);