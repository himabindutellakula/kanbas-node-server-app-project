import model from "./model.js";
export const createQuestion = (question) => model.create(question);
export const findAllQuestions = () => model.find();
export const findQuestionById = (questionId, quizId) => model.findOne({_id: questionId, quizId:quizId});
export const updateQuestion = (questionId, question) => model.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });