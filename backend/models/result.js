import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({

});

const result = mongoose.model('result', resultSchema);

export default result;