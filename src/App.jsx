import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home/homeindex";
import List from "./components/List/listindex";
import Login from "./Pages/Login/loginindex";
import Register from "./Pages/Register/registerindex";
import DetailPage from "./Pages/DetailPage/detailpageindex";
import ProfilePage from "./Pages/ProfilPage/profilpageindex";
import Navbar from "./components/Navbar/navbarindex";
import Footer from "./components/Footer/footerindex";
import ProtectedRoute from "./routes/ProtectedRoute";
import Services from "./Pages/Services/servicesindex.jsx"
import Breadcrumb from "./components/Breadcrumb/breadcrumbindex";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("accessToken"));
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const syncState = () => {
      setIsLoggedIn(!!localStorage.getItem("accessToken")); // accessToken
      setDarkMode(localStorage.getItem("darkMode") === "true");
    };

    window.addEventListener("storage", syncState);
    return () => window.removeEventListener("storage", syncState);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <BrowserRouter>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}  
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <Breadcrumb/>
      {console.log("Rendering Breadcrumb...")}

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services darkMode={darkMode}/>} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/list" element={<List darkMode={darkMode} />} />
          <Route path="/profile/:id" element={<ProfilePage darkMode={darkMode} />} />
          <Route path="/detail/:id" element={<DetailPage darkMode={darkMode} />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
