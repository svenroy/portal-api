import express from 'express';

const debug = require('debug')('app:statecontroller');

const router = express.Router();
const route = '/api/state';

router.get('/:caseId', (req, res, next) => {
  const { caseId } = req.params;

  debug('Get called');
  if (caseId === '') {
    res.status(404);
    res.send('Invalid case id');
  }

  return next();
});

export { route, router };
