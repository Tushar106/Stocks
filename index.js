import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.js'
import updateRouter from './routers/update.js'

const app=express();
const connect=async ()=>{
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO)
        console.log("connect")
    }
    catch(error){
        throw error
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDb Disconnect")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDb is connected")
})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(cookieParser())
app.use(express.json());
app.use("/auth",authRouter)
app.use("/update",updateRouter);
app.listen(8800,()=>{
    connect();
    console.log("Server 8800 started");
})
