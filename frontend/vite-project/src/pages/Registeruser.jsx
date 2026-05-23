import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

function Registeruser() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit (e) {
     e.preventDefault()
    console.log('hfhfh');
    
    try {
      const res =  await api.post("/macros/createuser", {
        username,email,password
      });
      toast.success("user registered successfully!");
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log('failed to register the user', error.message);
      toast.error('failed to create user');
    }
  }
  return (
    <div className="min-h-screen bg-orange-50 flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-orange-600">
            Create Account 🧡
          </h1>
          <p className="text-gray-500 mt-1">
            Start your fitness journey 💪
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            onChange={e => setUserName(e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition"
          >
            Register 🚀
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Registeruser;