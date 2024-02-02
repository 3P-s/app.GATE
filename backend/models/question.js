import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    Qid: { 
        type: Number, 
        required: true, 
        unique: true,
    },
    question: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        required: true 
    },
    A: { 
        type: String, 
    },
    B: { 
        type: String, 
    },
    C: { 
        type: String, 
    },
    D: { 
        type: String, 
    },
    answer: { 
        type: Array, 
        required: true 
    },
    marks: { 
        type: Number, 
        required: true 
    },
    year: { 
        type: Number, 
        required: true 
    },
    difficulty: { 
        type: String, 
        required: true 
    },
    tags: { 
        type: Array, 
        required: true 
    },
});

module.exports = mongoose.model('question', questionSchema);
