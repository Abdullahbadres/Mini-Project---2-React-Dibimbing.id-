import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar({ isLoggedIn, setIsLoggedIn, darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const syncAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };
 


  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 dark:bg-gray-800 text-white flex justify-between items-center z-20 shadow-lg">
      <div className="flex items-center">
        <img src="data:image/png;base64,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" 
              alt="Logo" className="w-10 h-10 mr-3" />
        <Link to="/" className="text-2xl font-bold">WebDev</Link>
      </div>


      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:opacity-80 text-lg">Home</Link>
        <Link to="/list" className="hover:opacity-80 text-lg">Users</Link>
        <Link to="/services" className="hover:opacity-80 text-lg">Services</Link>
        {isLoggedIn ? (
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
        ) : (
          <>
            <Link to="/login" className="hover:opacity-80 text-lg" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/register" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </>
        )}
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-700 dark:bg-gray-600">
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-white" />}
        </button>
      </div>

      <div className="md:hidden mr-5">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          {isMenuOpen ? <XMarkIcon className="w-8 h-8 text-white" /> : <Bars3Icon className="w-8 h-8 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute md:hidden top-16 left-0 w-full bg-gray-900 dark:bg-gray-800 flex flex-col items-center gap-6 p-5 transition-all ${isMenuOpen ? "block" : "hidden"}`}>
        <Link to="/" className="hover:opacity-80 text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/list" className="hover:opacity-80 text-lg" onClick={() => setIsMenuOpen(false)}>Users</Link>
        <Link to="/services" className="hover:opacity-80 text-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-700 dark:bg-gray-600">
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-white" />}
        </button>
        {isLoggedIn ? (
          <div className="flex flex-col items-center gap-3">
            {/* <img src={user?.avatar || "https://via.placeholder.com/40"} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-500" />
            <span className="text-lg font-semibold">{user?.name || "User"}</span> */}
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="hover:opacity-80 text-lg" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/register" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;










{/* data:image/png;base64,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 */}