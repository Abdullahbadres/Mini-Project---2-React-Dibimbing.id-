import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || error || successMessage) {
      const timer = setTimeout(() => {
        setEmailError("");
        setError("");
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [emailError, error, successMessage]);

  const validateEmail = (email) => {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async () => {
    setEmailError("");
    setError("");
    setSuccessMessage("");

    if (!validateEmail(email)) {
      setEmailError("⚠ Please enter a valid email address.");
      return;
    }

    if (password !== "cityslicka") {
      setError("❌ Incorrect password. Please check again.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.token);
      setIsLoggedIn(true);
      setSuccessMessage("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError("⚠ Login failed! Please check your email and password.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Welcome Back!</h2>

        
        {emailError && <div className="bg-red-500 text-white p-2 rounded text-center mb-3">{emailError}</div>}
        {error && <div className="bg-red-500 text-white p-2 rounded text-center mb-3">{error}</div>}
        {successMessage && <div className="bg-green-500 text-white p-2 rounded text-center mb-3">{successMessage}</div>}

        
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none dark:bg-gray-800 dark:text-white"
          />
        </div>

        
        <div className="mb-4 relative">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none dark:bg-gray-800 dark:text-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500 dark:text-gray-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account? <span className="text-blue-500 cursor-pointer hover:underline">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;