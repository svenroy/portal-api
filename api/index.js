import { controller as questionsController } from "./features/questions";

exports.configureControllers = (server) => {
    questionsController(server, (next) => {
        return next();
    });
}