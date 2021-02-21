import express from 'express'
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler'
const userRouter=express.Router();



userRouter.post('/signin',expressAsyncHandler(async (req,res)=>{
    const user= await User.findOne({email:req.body.email});
    if(user){
        res.send();
    }
    res.status(401).send({message:"Invalid email or password"});    
}));


userRouter.post('/register',expressAsyncHandler(async (req,res)=>{
    const user=new User({name:req.body.name,email:req.body.email,password:req.body.password});
    const  createdUser=await  user.save()
    res.send("User Created");
}))

// userRouter.get('/:id',isAuth,expressAsyncHandler(async(req,res)=>{
//     const user=await User.findById(req.params.id);
//     if(user){
//         res.send(user);
//     }else{
//         res.send(404).send({message:"User Not Found"});
//     }
// }));

userRouter.put('/profile',isAuth,expressAsyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id);

    if(user){
        user.name=req.body.name || user.name;
        user.email=req.body.email || user.email;
        if(req.body.password){
            user.password=bcrypt.hashSync(req.body.password,8);
        }
        const updatedUser=await user.save();
        res.send({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            isAdmin:updatedUser.isAdmin,
            token:generateToken(updatedUser),
        })
    }
}))

export default userRouter;