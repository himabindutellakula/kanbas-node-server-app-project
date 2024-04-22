import mongoose from "mongoose";


const quizSchema = new mongoose.Schema({
    _id: {type: String},
    title: { type: String, required: false },
    course: { type: String, required: false },
    points: { type: Number, required: false },
    description: String,
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    published: { type: Boolean, default: false },
    quizType: {
        type: String,
        enum: ["practiceQuiz", "gradedQuiz"],
        default: "practiceQuiz",
    },
    assignmentGroup: String,
    shuffleAnswers: { type: Boolean, default: false },
    timeLimit: Number,
    multipleAttempts: { type: Boolean, default: false },
    viewResponses: {
        type: String,
        enum: ["Always", "AfterGrading", "AfterDueDate"],
        default: "Always",
    },
    showCorrectAnswers: {
        type: String,
        enum: ["immediately", "afterAllAttempts"],
        default: "immediately",
    },
    oneQuestionAtATime: { type: Boolean, default: true },
    requireRespondousLockDownBrowser: { type: Boolean, default: false },
    requiredToViewQuizResults: { type: Boolean, default: false },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: true },
    quizFor: { type: String, default: "Everyone" },
    accessCode: String
}, { collection: "quizzes" });

export default quizSchema;