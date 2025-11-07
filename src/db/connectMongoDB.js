import mongoose  from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL;
    await mongoose.connect(mongoUrl);
    console.log('MongoDB sucsefully connected');
  } catch (error) {
    console.log(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
