const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser')
const userRouter=require('./routes/userRouter');
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config();

// signin request

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
});

app.use('/api/users',userRouter);