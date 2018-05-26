import { questionsRepository } from '../../data';

class QuestionsDomain {
    constructor() {
    }

    getQuestions(caseId) {
        return questionsRepository.getQuestionsByCaseId(caseId);
    }
}

export default new QuestionsDomain();