import {useEffect, useState} from 'react'
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router';
import api from '../lib/axios';
import { useNavigate } from 'react-router';

function Updatemacro() {
   const [foodName,setFoodName] = useState("");
   const [quantity, setQuantity] = useState(0);
   const [calorie, setCalorie] = useState(0);
   const [protein, setProtein] = useState(0);
   const [carbs, setCarbs] = useState(0);
   const [fat, setFat] = useState(0);
   const {id} = useParams();
   const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem("user"));

   useEffect(()=>{
      const fetchOldMacro = async ()=>{
      

      try {
        const res = await api.get(`/macros/${id}`);
        
        console.log(res.data);
        
        setFoodName(res.data.foodname);
        setQuantity(res.data.quantity);
        setCalorie(res.data.calorie);
        setProtein(res.data.protein);
        setCarbs(res.data.carbs);
        setFat(res.data.fat);

      } catch (error) {
        console.log('failed to fetch this old macro', error.message);
        toast.error('failed to fetch this macro')
        
      }
    }; fetchOldMacro();
   },[]);
  

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.put(`/macros/${id}`, {
        foodname:foodName,quantity,calorie,protein,carbs,fat
      });
      toast.success("macro updated successfully!");
      navigate("/homepage");
    } catch (error) {
      console.log('failed to update this macrro', error.message);
      toast.error("failed to update this macro")
    }
  }
 return (
  <div className="min-h-screen bg-orange-50 flex justify-center items-center px-4">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

      <h1 className="text-2xl font-bold text-orange-600 text-center mb-6">
        Update Meal ✏️
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <label className=' text-orange-600 text-xl' htmlFor="">Foodname:</label>
        <input
          type="text"
          value={foodName}
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setFoodName(e.target.value)}
        /> 

        <label  className=' text-orange-600 text-xl' htmlFor="">Quantity:</label>

        <input
          type="number"
          value={quantity}
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label  className=' text-orange-600 text-xl' htmlFor="">Calories:</label>

        <input
          type="number"
          value={calorie}
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setCalorie(e.target.value)}
        />

        <label  className=' text-orange-600 text-xl' htmlFor="">Protein:</label>

        <input
          type="number"
          value={protein}
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setProtein(e.target.value)}
        />
        <label  className=' text-orange-600 text-xl' htmlFor="">Carbs:</label>

        <input
          type="number"
          value={carbs}
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setCarbs(e.target.value)}
        />

          <label  className=' text-orange-600 text-xl' htmlFor="">Fat:</label>
       <input
          type="number"
          value={fat}
          className="w-full border p-2 rounded-lg focus:outline-orange-400"
          onChange={(e) => setFat(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold"
        >
          Update 💪
        </button>
      </form>

      <Link to="/homepage" className="block text-center mt-4 text-gray-500 hover:text-orange-500">
        ← Back
      </Link>
    </div>
  </div>
);
}

export default Updatemacro;