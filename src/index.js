import dotenv from 'dotenv';
import { connectToMongo } from "./db/databaseConnection.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectToMongo()
.then(()=>{
    const PORT = process.env.PORT || 3000
    app.listen(PORT,(err)=>{
        if(!err) console.log(`Server Started at ${PORT}`)
    })
})
.catch(err=>{
    console.log("Mongo Db connection failed", err.message)
})
    
