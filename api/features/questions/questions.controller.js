import express from 'express';
import * as questionsDomain from './questions.domain';

// const debug = require('debug')('app:questions.controller');

const router = express.Router();

const route = '/api/questions';

router.get('/:caseId', (req, res, next) => {
  (async function awaitable() {
    const questionSet = await questionsDomain.getQuestionsAsync();
    res.send(questionSet);
  }());

  return next();
});

export { route, router };
