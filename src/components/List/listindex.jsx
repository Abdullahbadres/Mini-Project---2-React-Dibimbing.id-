import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEnvelope, FaSearch } from "react-icons/fa";

function List({ darkMode }) { 
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const userProfiles = {
    1: { title: "Fullstack Developer", experience: "8+ years in Web Development & Cloud" },
    2: { title: "Frontend Developer", experience: "6+ years in UI/UX & React.js" },
    3: { title: "Backend Developer", experience: "7+ years in APIs & Databases" },
    4: { title: "AI Specialist", experience: "5+ years in Machine Learning & NLP" },
    5: { title: "Cybersecurity Analyst", experience: "4+ years in Network Security" },
    6: { title: "Mobile Developer", experience: "6+ years in iOS & Android Development" },
    7: { title: "Cloud Engineer", experience: "9+ years in AWS, Azure & GCP" },
    8: { title: "Data Scientist", experience: "5+ years in Big Data & AI Analytics" },
    9: { title: "Software Engineer", experience: "10+ years in Software Architecture" },
    10: { title: "DevOps Engineer", experience: "7+ years in CI/CD & Kubernetes" },
    11: { title: "UI/UX Designer", experience: "6+ years in Figma & Adobe XD" },
    12: { title: "System Administrator", experience: "8+ years in Linux & Cloud Security" },
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`https://reqres.in/api/users?page=${currentPage}`)
      .then(response => {
        setAllUsers(response.data.data);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, [currentPage]);

  // ✅ Filtering berdasarkan nama dan job title
  const filteredUsers = allUsers.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const jobTitle = userProfiles[user.id]?.title?.toLowerCase() || "";
    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      jobTitle.includes(searchQuery.toLowerCase())
    );
  });

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} p-6`}>
      <br/><h1 className="text-3xl font-bold text-left mb-6">List of our Web Developers</h1>

      {/* Search Box */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none 
              ${darkMode ? "bg-gray-800 text-white border-amber-600" : "bg-white text-black border-gray-300"}`}
          />
        </div>
      </div>

      
      <div className="flex flex-col gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div 
              key={user.id} 
              className={`p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between transition-all hover:scale-105 hover:shadow-xl 
              ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
            >

              {/* 🔹 Kiri: Foto, Nama, Email */}
              <div className="flex items-center gap-4 w-full sm:w-1/3 text-center sm:text-left">
                <img 
                  src={user.avatar} 
                  alt={user.first_name} 
                  className="w-16 h-16 rounded-full border-4 border-gray-300 dark:border-gray-600"
                />
                <div>
                  <Link to={`/profile/${user.id}`} className="text-lg font-semibold hover:underline block">
                    {user.first_name} {user.last_name}
                  </Link>
                  <p className="text-sm flex items-center justify-center sm:justify-start gap-1">
                    <FaEnvelope className="text-blue-500" /> {user.email}
                  </p>
                </div>
              </div>

              {/* 🔹 Tengah: Job Title & Experience */}
              <div className="text-center sm:text-right flex-1 mt-4 sm:mt-0">
                <p className="text-sm font-semibold">{userProfiles[user.id]?.title || "Web Developer"}</p>
                <p className="text-sm font-light ml-2">{userProfiles[user.id]?.experience || "Experience not available"}</p>
              </div>

              {/* 🔹 Kanan: Tombol View Profile */}
              <div className="w-full sm:w-1/3 flex justify-center sm:justify-end mt-4 sm:mt-0">
                <Link
                  to={`/profile/${user.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition"
        >
          Previous
        </button>

        <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>

        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default List;
