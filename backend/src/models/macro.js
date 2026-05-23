import mongoose, { Types } from "mongoose";

const macroSchema = new mongoose.Schema({
  foodname:{
    type:String,
    required:true,
  },
  quantity:{
    type:Number,
    required:true
  }, calorie:{
     type:Number,
    required:true
  }, protein:{
     type:Number,
    required:true
  }, carbs: {
     type:Number,
    required:true
  }, fat: {
     type:Number,
    required:true
  }, userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true,
  }
}, {timestamps:true});

const macros = mongoose.model("macros", macroSchema);

export default macros;