import macros from "../models/macro.js";

export const getMacros = async (req,res)=>{
  try {
    const response = await macros.find();
    res.status(200).json(response);
  } catch (error) {
    console.log('failed to get macros',error.message);
    res.json({
    message:"failed to get macros"
  });
  }
};

export const getOneMacro = async (req,res) => {
  const id = req.params.id
   try {
    const response = await macros.findById(id);
    res.status(200).json(response);
  } catch (error) {
    console.log('failed to get one macros',error.message);
    res.json({
    message:"failed to get one macros"
  });
  }
}


export const getThisUsersMacro = async (req,res) => {
  const id = req.params.userId;
  console.log("id-",id);
  
   try {
    const response = await macros.find({userId:id});
    res.status(200).json(response);
  } catch (error) {
    console.log('failed to get one macros',error.message);
    res.json({
    message:"failed to get one macros"
  });
  }
}


export const createMacros = async (req,res)=> {
 try {
   const {foodname,quantity,calorie,protein,carbs, fat, userId} = req.body;
   const response = new macros({
    foodname,quantity,calorie,carbs,fat,protein, userId
   });
   const saveMacros = await response.save();

   res.json(saveMacros);

 } catch (error) {
  console.log('failed to create macros',error.message);
  res.json({
    message:"failed to create macros"
  });
 }
}

export const updateMacros = async (req,res)=> {
 try {
   const {foodname,quantity,calorie,protein,carbs, fat} = req.body;
   const id = req.params.id;

   const response = await macros.findByIdAndUpdate(id, {
    foodname,quantity,calorie,protein,carbs,fat
   })

   res.json(response);

 } catch (error) {
  console.log('failed to update macro',error.message);
  res.json({
    message:"failed to update macros"
  });
 }
}

export const deleteMacros = async (req,res)=> {
 try {
   const id = req.params.id;
   const response = await macros.findByIdAndDelete(id);
   res.json({
    message:"deleted successfully"
   });

 } catch (error) {
  console.log('failed to create macro',error.message);
  res.json({
    message:"failed to delete macros"
  });
 }
}