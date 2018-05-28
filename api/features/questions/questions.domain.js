import { questionsRepository } from '../../data';

export const getQuestions = caseId => questionsRepository.getQuestionsByCaseId(caseId);
