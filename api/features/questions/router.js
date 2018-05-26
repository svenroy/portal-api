
import * as questionsDomain from './domain';

const getQuestions = (req, res, next) => {
    const caseId = req.params.caseId;
    
    var questionSet = questionsDomain.getQuestions(caseId);
    res.send(questionSet);
};

const handle = (app) => {
    app.get("/api/questions/:caseId", getQuestions)
}

export default handle;