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
   const isDark = localStorage.theme;

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
  };

   useEffect(()=> {
      if(isDark === "dark") {
        document.getElementById("mainDiv").classList.add("dark")
      }
    },[]);

 return (
  <div id='mainDiv'>
    <div className="min-h-screen bg-orange-50 flex justify-center items-center px-4 dark:bg-black">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md dark:bg-gray-800">

       <div className='flex  justify-around items-center mb-5'>
        <Link to="/homepage" className="block text-center  text-gray-500 hover:text-orange-500 dark:hover:text-green-600">
        ← Back
      </Link>
      
      <h1 className="text-2xl font-bold text-orange-600 text-center  dark:text-green-700">
        Update Meal ✏️
      </h1>
       </div>

     

      <form onSubmit={handleSubmit} className="space-y-3 flex flex-col gap-1">

        <label className=' text-orange-600 text-xl dark:text-green-500' htmlFor="">Foodname:</label>
        <input
          type="text"
          value={foodName}
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setFoodName(e.target.value)}
        /> 

        <label  className=' text-orange-600 text-xl dark:text-green-500' htmlFor="">Quantity:</label>

        <input
          type="number"
          value={quantity}
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label  className=' text-orange-600 text-xl dark:text-green-500' htmlFor="">Calories:</label>

        <input
          type="number"
          value={calorie}
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setCalorie(e.target.value)}
        />

        <label  className=' text-orange-600 text-xl dark:text-green-500' htmlFor="">Protein:</label>

        <input
          type="number"
          value={protein}
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setProtein(e.target.value)}
        />
        <label  className=' text-orange-600 text-xl dark:text-green-500' htmlFor="">Carbs:</label>

        <input
          type="number"
          value={carbs}
          className="w-full border p-2 rounded-lg focus:outline-orange-400 dark:bg-black dark:text-white"
          onChange={(e) => setCarbs(e.target.value)}
        />

          <label  className=' text-orange-600 text-xl   dark:text-green-500' htmlFor="">Fat:</label>
       <input
          type="number"
          value={fat}
          className="w-full border p-2 rounded-lg focus:outline-orange-400  dark:bg-black dark:text-white"
          onChange={(e) => setFat(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl  font-semibold dark:bg-green-700"
        >
          Update 💪
        </button>
      </form>

      
    </div>
  </div>
  </div>
);
}

export default Updatemacro;