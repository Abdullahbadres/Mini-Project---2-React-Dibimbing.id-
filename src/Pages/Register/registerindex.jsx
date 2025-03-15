import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const validateEmail = (email) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setNotification({ message: "⚠ Please use a correct email format.", type: "error" });
      return;
    }
    if (password !== "pistol") {
      setNotification({ message: "❌ Incorrect password. Please check again.", type: "error" });
      return;
    }

    setLoading(true);
    setNotification({ message: "", type: "" });

    try {
      await axios.post("https://reqres.in/api/register", { email, password });
      setNotification({ message: "✅ Registration successful! Redirecting...", type: "success" });
      setTimeout(() => navigate("/login"), 2000);
    } catch {
      setNotification({ message: "⚠ Registration failed! Check your email & password.", type: "error" });
    }

    setLoading(false);
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen
        bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
        dark:bg-gray-900 text-gray-900 dark:text-white px-6"
    >
      {/* Register Card */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>

        {/* 🔥 Notifikasi di dalam box */}
        {notification.message && (
          <div className={`p-3 rounded-md text-center text-white font-semibold 
            ${notification.type === "error" ? "bg-red-500" : "bg-green-500"} animate-fadeIn`}>
            {notification.message}
          </div>
        )}

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-all"
        >
          {loading ? "Processing..." : "Register"}
        </button>

        {/* Link ke Login */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-purple-500 hover:underline">
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
