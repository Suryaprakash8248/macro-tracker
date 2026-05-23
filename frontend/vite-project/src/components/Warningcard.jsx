import React from "react";
import { Link } from "react-router";

function Warningcard() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white border border-orange-200 rounded-2xl shadow-md p-8 text-center max-w-md w-full">

        {/* Icon */}
        <div className="text-5xl mb-4">⚠️🍽️</div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-orange-600 mb-2">
          No Meals Added Yet
        </h2>

        <p className="text-gray-500 mb-6">
          Start tracking your nutrition by adding your first meal 💪
        </p>

        {/* CTA */}
        <Link to="/createmacro">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl shadow transition">
            + Create New Meal
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Warningcard;