import * as questionsDomain from './domain';

const getQuestionsRoute = (req, res) => {
  const { caseId } = req.params;

  const questionSet = questionsDomain.getQuestions(caseId);
  res.send(questionSet);
};

const controller = (server) => {
  server.get('/api/questions/:caseId', getQuestionsRoute);
};

export default controller;
