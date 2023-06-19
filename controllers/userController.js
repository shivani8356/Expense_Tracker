const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.signup = async (req , res) => {
    // CREATE USER FROM THE OBTAINED DETAILS
    try {
        const {name,email,password,passwordConfirm} = req.body;
        const user = await User.create({
        name,
        email,
        password,
        passwordConfirm
    })
    const token = jwt.sign({ id : user._id }, process.env.JWT_SECRETKEY , {expiresIn : '3d'});
    return res.status(200).json({
        status : "success",
        data : {
            token
        }
    })
} catch (error) {
        res.status(400).json({
            status : "fail",
            message : "unable to sign in user"
        })
    }
}

exports.login = async (req,res)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            status : "fail",
            message : "email address or password is missing"
        })
    }
    const user = await User.findOne({email}).select('+password');
    console.log(user);
    if(!user || !(user.checkPassword(user.password,password))){
        return res.status(400).json({
            status : "fail",
            message : "incorrect password or email"
        })
    }
const token = jwt.sign({ id : user._id }, process.env.JWT_SECRETKEY , {expiresIn : '3d'});
res.status(200).json({
    status : "success",
    data : {
        token
    }
})
}




