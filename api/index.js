import { controller as questionsController } from './features/questions';
import { controller as stateController } from './features/state';

class Controllers {
  static configure(app) {
    app.use(questionsController.route, questionsController.router);
    app.use(stateController.route, stateController.router);
  }
}

export { Controllers as controllers };

