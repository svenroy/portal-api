import questionsDomain from './domain';

const getQuestions = (req, res) => {
    const caseId = req.params.caseId;
    
    var questionSet = questionsDomain.getQuestions(caseId);
    res.send(questionSet);
};

const controller = (server, nextHandler) => {
    server.get("/api/questions/:caseId", middleware(getQuestions, nextHandler));
}

const middleware = (controllerAction, nextHandler) => (req, res, next) => {
    controllerAction(req, res);
    nextHandler(next);
}

export default controller;