import { questionsRepository } from './questionsRepository';

export const getQuestionsAsync = (cb) => {
  if (cb) {
    questionsRepository.getQuestionsAsync(cb);
  }

  return questionsRepository.getQuestionsAsync();
};
