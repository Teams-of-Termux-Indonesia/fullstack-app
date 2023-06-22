import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

export const authUser = asyncHandler(async (req,res)=>{
   try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    await user.matchPassword(password)
    generateToken(res,user._id);
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email
    });
   }catch(err){
    res.status(401).json({error:err.message});
   }
});

export const registerUser = asyncHandler(async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        await User.findOne({email});
        const user = await User.create({
            name,
            email,
            password
        });
        generateToken(res, user._id);
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
        });
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

export const logoutUser = asyncHandler(async(req,res)=>{
    try{
        res.cookie('jwt','',{
            httpOnly:true,
            expires:new Date(0),
        });
        res.status(200).json({message:'logged out'});
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

export const getUserProfile = asyncHandler(async(req,res)=>{
    try{
        const {_id,name,email} = req.body;
        res.json({
            _id,
            name,
            email
        });
    }catch(err){
        res.status(404).json({error:err.message});
    }
});

export const updateUserProfile = asyncHandler(async(req,res)=>{
    try{
        const {_id,name,email,password} = req.body;
        const user = await User.findById(_id);
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password;
        const uus = await user.save();
        res.json({
            _id:uus._id,
            name:uus.name,
            email:uus.email
        });
    }catch(err){
        res.status(404).json({error:err.message});
    }
})