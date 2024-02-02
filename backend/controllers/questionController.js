import question from "../models/question.js";

const getQuestions = async (req, res) => {
    try {
        const questions = await question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(404).json({
        message: error.message,
        });
    }
};

const addQuestion = async (req, res) => {
    const { question, A, B, C, D, correct, tags } = req.body;
    const newQuestion = new question({ question, A, B, C, D, correct, tags });
    try {
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(409).json({
        message: error.message,
        });
    }
}

module.exports = { getQuestions, addQuestion }