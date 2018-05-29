import chalk from 'chalk';
import config from './config';

import { controllers } from './api';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = require('express')();
const debug = require('debug')('app');

require('./middleware/appMiddleware')(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
controllers.configure(app);

app.listen(config.port, () => {
  debug(`listening at ${chalk.green(config.port)}`);
});

module.exports = app;
