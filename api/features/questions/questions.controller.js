import express from 'express';
import * as questionsDomain from './questions.domain';

const router = express.Router();

const route = '/api/questions';

router.get('/:caseId', (req, res) => {
  const { caseId } = req.params;

  const questionSet = questionsDomain.getQuestions(caseId);
  res.send(questionSet);
});

export { route, router };
