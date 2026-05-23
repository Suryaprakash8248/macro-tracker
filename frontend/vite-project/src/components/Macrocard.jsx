import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import api from '../lib/axios';
import { useParams } from 'react-router';

function Macrocard({macro,onDelete}) {
   const id = macro._id
   async function handleDelete () {
    try {
      const res = await api.delete(`/macros/${macro._id}`);
      toast.success("deleted successfully");
      onDelete(macro._id, "surya");
    } catch (error) {
      console.log('failed to delete macro', error.message);
      toast.error('failed to delete macro')
      
    }
  }
  return (
  <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition flex flex-col justify-between">

    <div>
      <h2 className="text-xl font-semibold text-orange-600 mb-2">
        {macro.foodname} 🍽️
      </h2>

      <div className="space-y-1 text-gray-700 text-sm">
        <p>🍚 Quantity: {macro.quantity}</p>
        <p>🔥 Calories: {macro.calorie}</p>
        <p>💪 Protein: {macro.protein}g</p>
        <p>🍞 Carbs: {macro.carbs}g</p>
        <p>🥑 Fat: {macro.fat}g</p>
      </div>
    </div>

    {/* Actions */}
    <div className="flex justify-between mt-4">
      <Link to={`/updatemacro/${id}`}>
        <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-lg text-sm">
          Edit
        </button>
      </Link>

      <button
        onClick={handleDelete}
        className="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded-lg text-sm"
      >
        Delete
      </button>
    </div>
  </div>
);
}

export default Macrocard;