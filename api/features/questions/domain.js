import { questionsRepository } from '../../data';

const getQuestions = (caseId) => {
    return questionsRepository.getQuestionsByCaseId(caseId);
}

const addTwoNumbers = (x, y) => {
    return x + y;
}

export {
    getQuestions,
    addTwoNumbers
}