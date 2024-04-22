import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    _id: {type: Number, required:true},
    quizId: {type: String, required:true},
    title: {type: String, required:false},
    type: {type: String, 
        enum: ["mcq", "TF", "fillInBlanks"],
        required:false},
    question: { type: String, required: false },
    option1: {type:String, required:false},
    option2: {type:String, required:false},
    option3: {type:String, required:false},
    option4: {type:String, required:false},
    answer: {type: String, required:false},
    points: {type: String}
},{ collection: "questions" });

export default questionSchema;