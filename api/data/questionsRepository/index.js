import config from '../../../config';

let db = require('./mongoDbAdapter');

if (config.data.questions === 'api') {
  db = require('./apiAdapter');
}

export { db };
