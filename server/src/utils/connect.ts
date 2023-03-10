import mongoose from 'mongoose';
import config from 'config';
const connectDb = async () => {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    console.log('Connected to DB');
  } catch (error) {
    console.error('Could not connect to DB');
    process.exit(1);
  }
};

export default connectDb;
