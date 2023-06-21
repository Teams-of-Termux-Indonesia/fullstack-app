import asyncHandler from 'express-async-handler';


export const authUser = asyncHandler(async (req,res)=>{
    res.json({message:'auth'});
});

export const registerUser = asyncHandler(async(req,res)=>{
    res.json({message:'register'});
});

export const logoutUser = asyncHandler(async(req,res)=>{
    res.json({message:'logout'});
});

export const getUserProfile = asyncHandler(async(req,res)=>{
    res.json({message:'profile'});
});

export const updateUserProfile = asyncHandler(async(req,res)=>{
    res.json({message:'update profile'});
})