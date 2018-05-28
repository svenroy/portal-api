const debug = require('debug')('app:questionsRepository:mongoDbAdapter');

const getQuestionsAsync = (cb) => {
  const data = {
    questions: 'some questions ',
  };

  debug('hello from Mongo', data);
  if (cb) {
    cb(data);
  }

  return new Promise(((resolve) => {
    resolve(data);
  }));
};

export { getQuestionsAsync };

