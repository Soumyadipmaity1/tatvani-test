"use client";
import { useState } from 'react';
// import { useSignIn } from '@/hooks/user/useSignIn';
import { useRouter } from 'next/navigation';
import {
  useMutation,
  useQuery, useQueryClient
} from '@tanstack/react-query'
import axios from 'axios'
// import toast from 'react-hot-toast';
const Login = () => {
  // default email and password
  const [email, setEmail] = useState('admin@tatvani.com'); // Default email
  const [password, setPassword] = useState('tatvani'); // Default password
  // const { login } = useAuth();
  // const navigate = useNavigate();
  const router = useRouter();


  // const signInMutation = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default submission behavior
  
    try {
      const response = await axios.post("/api/users/sign-in", {
        email,
        password,
      });
  
      if (response.status === 200) {
        router.push("/dashboard");
        // console.log("success");
        // navigate("/dashboard"); // Use navigate with the correct method
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error:", error.response.data.message);
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-white">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none focus:border-yellow-500 transition"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none focus:border-yellow-500 transition"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 rounded transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
