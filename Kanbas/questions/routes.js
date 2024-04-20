import * as dao from "./dao.js";

export default function QuestionRoutes(app){
    const createQuestion = async (req, res) => {
        const question = await dao.createQuestion(req.body);
        res.json(question);
    };

    const deleteQuestion = async (req, res) => {
        const status = await dao.deleteQuestion(req.params.questionId);
        res.json(status);
    };

    const findAllQuestions = async (req, res) => {
        const questions = await dao.findAllQuestions();
        res.json(questions);
        return;
    };

    const findQuestionById = async (req, res) => {
        console.log("here")
        const question = await dao.findQuestionById(req.params.questionId, req.params.quizId);
        res.json(question);
    };


    const updateQuestion = async (req, res) => {
        const {questionId, quizId} = req.params;
        const status = await dao.updateQuestion(questionId, req.body);
        // const currentQuestion = await dao.findQuestionById(questionId, quizId);
        res.json(status);
    };


    app.post("/api/quizzes/:quizId/questions", createQuestion);
    app.get("/api/quizzes/:quizId/questions", findAllQuestions);
    app.get("/api/quizzes/:quizId/questions/:questionId", findQuestionById);
    app.put("/api/quizzes/:quizId/questions/:questionId", updateQuestion);
    app.delete("/api/quizzes/:quizId/questions/:questionId", deleteQuestion);
}