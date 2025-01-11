import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRouter.js';

//App config
const app=express();
const port= process.env.port || 4000;
connectDB();
connectCloudinary();
//middlewares
app.use(cors())
app.use(express.json())

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter)
app.get('/',(req,res)=>{
    res.send('API Working ');

})
app.listen(port,()=> console.log('Server started on port :'+port))