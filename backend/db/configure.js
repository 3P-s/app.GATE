import mongoose from 'mongoose'

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);

        console.log("successfully connected🟩")
    }
    
    catch (err){
        console.log(err);
        process.exit(1)
    }
}

export default connectDB;