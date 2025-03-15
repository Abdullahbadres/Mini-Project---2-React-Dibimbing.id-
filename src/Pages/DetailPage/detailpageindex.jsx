import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (err) {
        setError("Gagal mengambil data pengguna.");
      }
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;
  if (!user) return <p className="text-center mt-5">User not found.</p>;

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl mb-4">User Profile</h2>
      <div className="border p-6 rounded shadow-md inline-block">
        <img src={user.avatar} alt={user.first_name} className="mx-auto rounded-full w-24 h-24 mb-2" />
        <h3 className="text-lg font-semibold">{user.first_name} {user.last_name}</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="mt-4">
        <Link to="/list" className="text-blue-500">Back to List User</Link>
      </div>
    </div>
  );
}


export default DetailPage;