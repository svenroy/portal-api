import { questionsRepository } from '../../data';

export const getQuestionsAsync = (cb) => {
  if (cb) {
    questionsRepository.getQuestionsAsync(cb);
  }

  return questionsRepository.getQuestionsAsync();
};
