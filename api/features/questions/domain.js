import { questionsRepository } from '../../data';

const getQuestions = (caseId) => {
    return questionsRepository.getQuestionsByCaseId(caseId);
}

export {
    getQuestions
}