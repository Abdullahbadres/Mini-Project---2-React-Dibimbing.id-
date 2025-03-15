import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const token = localStorage.getItem("accessToken"); // Pastikan pakai accessToken
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!token && !isChecked) {
      setIsChecked(true); // Supaya tidak muncul dua kali
      const confirmRedirect = window.confirm(
        "You are not logged in. Do you want to go to the login page?"
      );
      if (confirmRedirect) {
        window.location.replace("/login"); // Redirect pakai replace untuk menghindari loop
      }
    }
  }, [token, isChecked]);

  if (!token) {
    return null; // Menghindari render ulang saat belum login
  }

  return <Outlet />;
};

export default ProtectedRoute;
