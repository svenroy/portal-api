import { controller as questionsController } from './features/questions';

class Controllers {
  static configure(server) {
    server.use(questionsController.route, questionsController.router);
  }
}

export { Controllers as controllers };

