import mongoose from "mongoose";

const connectDb = async ()=> {
  try {
   await mongoose.connect(process.env.MONGO_URL);
   console.log('successfully connected with mongodb');
   
  } catch (error) {
    console.log('failed to connect with db',error);
    
  }
};

export default connectDb;