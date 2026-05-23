import mongoose from "mongoose";
import users from "../models/users.js";
import bcrypt from "bcrypt";


export const getUser = async (req,res)=> {
  try {
    const response = await users.find();
    res.status(200).json({message:response});
  } catch (error) {
    console.log('failed to get the user', error.message);
    res.json(error)
    
  }
}

export const getOneUser = async (req,res)=> {
  try {
    const userId = req.params.userId;
    const response = await users.find({userId:userId});
    res.status(200).json({message:"success", jf:response});
  } catch (error) {
    console.log('failed to get this user', error.message);
    res.json(error);
    
  }
}

export const createUser = async (req,res)=> {
  try {
    const {username, email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const response = await users({
      username, email, password:hashedPassword
    });
    const saveUser = response.save();
    res.status(200).json({message:saveUser});
  } catch (error) {
    console.log('failed to create user', error.message);
    res.json(error)
    
  }
}

export const loginUser = async (req,res)=> {
  try {
    const {email, password} = req.body;
    const getUser = await users.findOne({email:email});

    if(!getUser) {
      console.log("invalid user");
      return res.status(400).json({message:"invallid user"})
    }

    const isMatch = await bcrypt.compare(password, getUser.password);
    if(!isMatch) {
      return res.status(400).json({message:"wrong password try agian"});
    }

    res.json({message:"login successfully",
      user:{
        _id:getUser._id,
        email:getUser.email
      }});
  } catch (error) {
    console.log('failed to login user', error.message);
    res.json(error)
    
  }
}

export const deleteUser = async (req,res)=> {
  try {
    const id = req.params.id;
    const response = await users.findByIdAndDelete(id);
    res.status(200).json({message:"deleted successfully!"});
  } catch (error) {
    console.log('failed to delete user', error.message);
    res.json(error)
    
  }
}

