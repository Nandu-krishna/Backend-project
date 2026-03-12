import dotenv from 'dotenv';

import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    const server = app.listen(process.env.PORT||3000,()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
    server.on("error",(error)=>{
        console.log("Server error: ",error);
        process.exit(1);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed : ",err)
})
















/* this is a way of doing we will use better way
const app = express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error;

        })
        app.listen(process.env.PORT,()=>{
            console.log(`The app is running on : ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error: ",error);
        throw error;
    }
})()
*/