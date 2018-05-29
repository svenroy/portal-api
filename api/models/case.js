import mongoose from 'mongoose';

const schema = mongoose.Schema({
  caseId: String,
  answers: Array,
});

export default mongoose.model('case', schema);
