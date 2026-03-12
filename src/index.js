import dotenv from 'dotenv';

import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path:'./.env'
})

connectDB()

















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