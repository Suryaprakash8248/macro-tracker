import React, { useState } from 'react'
import toast from 'react-hot-toast';
import api from '../lib/axios';
import { Navigate, useNavigate } from 'react-router';
function Createmacro() {

  const [foodname,setFoodName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  
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

 return (
  <div className="min-h-screen bg-orange-50 flex justify-center items-center px-4">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

      <h1 className="text-2xl font-bold text-orange-600 text-center mb-6">
        Add New Meal 🍗
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Food name"
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setFoodName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Calories"
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setCalorie(e.target.value)}
        />

        <input
          type="number"
          placeholder="Protein (g)"
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setProtein(e.target.value)}
        />

        <input
          type="number"
          placeholder="Carbs (g)"
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setCarbs(e.target.value)}
        />

        <input
          type="number"
          placeholder="Fat (g)"
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setFat(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold"
        >
          Create 💪
        </button>
      </form>
    </div>
  </div>
);
}

export default Createmacro;