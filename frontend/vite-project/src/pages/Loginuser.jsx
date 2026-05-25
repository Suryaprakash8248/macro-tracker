import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios.js";

function Loginuser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 

 

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const res = await api.post("/macros/login", {
        email, password
      });
      toast.success("login successful");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      navigate("/homepage");
    } catch (error) {
      console.log('failed to log in', error.message);
      toast.error("failed to login!");    
    }

  }
  return (
    <div className="min-h-screen bg-orange-50 flex justify-center items-center px-4 dark:bg-black dark:text-white">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md dark:bg-gray-900 ">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-orange-600">
            Welcome  🔥
          </h1>
          <p className="text-gray-500 mt-1 dark:text-white">
            Track your macros and stay strong 💪
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-black dark:text-white"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-black dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 dark:text-white py-2 rounded-xl font-semibold transition"
          >
            Login 💪
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6 text-sm md:text-lg dark:text-white">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Loginuser;