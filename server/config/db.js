import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB connected: ${conn.connection.host}`.magenta.underline.bold
    );
  } catch (error) {
    console.log(`CONNECTION_ERROR: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
