

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const dbconnect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")
    }
    catch(error){
        console.log("db connection failed")
    }
    
}


