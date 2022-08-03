import mongoose from 'mongoose';

const collectionName = 'users';

const schema = new mongoose.Schema({
  firs_name: String,
  last_name: String,
  enterprise: String,
  job: String,
});

export default {
  collectionName,
  schema,
};
