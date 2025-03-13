
import mongoose from 'mongoose';



const connectToMongo = async () => {
  try {


    
   await mongoose.connect('mongodb+srv://AnonUser123:AnonUser123@cluster0.2slly.mongodb.net/');

    console.log('Connected to MongoDB');
    

  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectToMongo;
