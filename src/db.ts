import mongoose, { Schema, model } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.MONGO_URL)
const mongoUrl: string = process.env.MONGO_URL || 'mongodb://localhost:27017/myDatabase';

// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Create a User model
export const User = model<IUser>('User', UserSchema);