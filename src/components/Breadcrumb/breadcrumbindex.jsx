import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Breadcrumb({darkMode}) {
  const location = useLocation();
  console.log("Current Path:", location.pathname); // Debugging: Path yang sedang diakses
  const pathSegments = location.pathname.split("/").filter((segment) => segment);
  console.log("Breadcrumb Rendering:", pathSegments); // Debugging: Segmen yang dirender

  if (pathSegments.length === 0) return null; // 🔥 Tidak tampil di halaman Home
  if (pathSegments[0] === "profile") {
    pathSegments.unshift("list"); // Menambahkan 'list' di awal jika tidak ada
  }

  const formatSegment = (segment) => {
    switch (segment) {
      case "list": return "Users";
      case "services": return "Our Services";
      case "profile": return "Profile";
      default: return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  };

  return (
    <nav
      className={`${
        darkMode
          ? "bg-gray-800 py-4 px-8 mt-7 shadow-md text-md"
          : "bg-gray-900 py-4 px-8 mt-7 shadow-md text-md"
      }`}
    >
      <ul className="flex items-center space-x-4">
        <li>
          <Link
            to="/"
            className={`${
              darkMode
                ? "text-white hover:underline font-semibold text-md"
                : "text-white hover:underline font-semibold text-md"
            }`}
          >
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          return (
            <li key={index} className="flex items-center space-x-4">
              <span className="text-gray-500">/</span>
              <Link
                to={path}
                className={`${
                  darkMode
                    ? "text-white hover:underline font-semibold text-md"
                    : "text-white hover:underline font-semibold text-md"
                }`}
              >
                {formatSegment(decodeURIComponent(segment))}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}




export default Breadcrumb;
