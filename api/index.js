import { router as questionsRouter } from "./features/questions";
import { router as answersRouter } from "./features/answers";

exports.assignRoutes = (app) => {
    questionsRouter(app);
    answersRouter(app);
}