import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";

const connectToMongo = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb Connected")
    } catch (err) {
        console.log(`Error in MongoDb connection ${err.message}`)
    }
}

export {connectToMongo}