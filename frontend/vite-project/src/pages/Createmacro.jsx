import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import api from '../lib/axios';
import { Navigate, useNavigate, Link } from 'react-router';
function Createmacro() {

  const [foodname,setFoodName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const isDark = localStorage.theme;

  
   async function handleSubmit(e) {
    e.preventDefault();
    
    if(foodname ==="" || quantity===0 || calorie===0 || fat===0 || protein===0 || carbs===0) {
      toast("fill every single parameter");
      return;
    }
    try {
      const res = await api.post("/macros", {
        foodname,calorie,quantity,protein,fat,carbs, userId:user._id
      });
      toast.success('macro created successfully!');
      navigate("/homepage")
    } catch (error) {
      console.log("failed to create macro", error.message);
      toast.error('failed to create macro');
      
    }
  };

  useEffect(()=> {
    if(isDark === "dark") {
      document.getElementById("mainDiv").classList.add("dark")
    }
  },[])

 return (
  <div id='mainDiv'>
    <div  className="min-h-screen bg-orange-50 flex justify-center items-center px-4 dark:bg-black">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md dark:bg-gray-800">

     <div className='flex justify-around items-center  mb-5'>

       <div className=''>
        <Link to="/homepage" className="block text-center  text-gray-500 hover:text-orange-500 dark:hover:text-green-600">
              ← Back
       </Link>
       </div>

      <div className=''>
        <h1 className="text-2xl font-bold text-orange-600 text-center  dark:text-green-700">
        Add New Meal 🍗
      </h1>
      </div>
     </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Food name"
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setFoodName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Calories"
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setCalorie(e.target.value)}
        />

        <input
          type="number"
          placeholder="Protein (g)"
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setProtein(e.target.value)}
        />

        <input
          type="number"
          placeholder="Carbs (g)"
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setCarbs(e.target.value)}
        />

        <input
          type="number"
          placeholder="Fat (g)"
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setFat(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold dark:bg-green-800"
        >
          Create 💪
        </button>
      </form>
    </div>
  </div>
  </div>
);
}

export default Createmacro;