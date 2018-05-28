import { controller as questionsController } from './features/questions';
import { controller as stateController } from './features/state';

class Controllers {
  static configure(server) {
    server.use(questionsController.route, questionsController.router);
    server.use(stateController.route, stateController.router);
  }
}

export { Controllers as controllers };

