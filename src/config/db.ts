import mongoose from 'mongoose';
import { httpLogger } from '../utils/logger';
import { environment } from '../environment';

const MONGO_URI = environment.mongoURI;

export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    httpLogger.info('Connected to MongoDB');
  } catch (err) {
    httpLogger.error('MongoDB connection error', { error: err });
    process.exit(1);
  }
};
