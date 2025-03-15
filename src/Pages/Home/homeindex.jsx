import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCode, FaRocket, FaBolt, FaChevronLeft, FaChevronRight, FaRobot, FaGlobe, FaUsers, FaGlobeAmericas, FaReact, FaGithub, FaCss3Alt, FaCloud } from "react-icons/fa"; 


function Home({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { name: "Michael Lawson", role: "Fullstack Developer", img: "https://reqres.in/img/faces/7-image.jpg" },
    { name: "Lindsay Ferguson", role: "Backend Developer", img: "https://reqres.in/img/faces/8-image.jpg" },
    { name: "Tobias Funke", role: "UI/UX Designer", img: "https://reqres.in/img/faces/9-image.jpg" },
    { name: "Byron Fields", role: "SEO Specialist", img: "https://reqres.in/img/faces/10-image.jpg" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  {console.log("isLoggedIn State:", isLoggedIn)}

  

  useEffect(() => {
    const checkAuth = () => {
      const accessToken = localStorage.getItem("accessToken");
      console.log("Access Token:", accessToken); 
      setIsLoggedIn(accessToken !== null); 
    };
  
    checkAuth(); 
  
    window.addEventListener("storage", checkAuth); 
    return () => window.removeEventListener("storage", checkAuth); 
  }, []);

  return (
    <div className={`relative min-h-screen px-6 transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>

      
      <div className="relative flex flex-col items-center justify-center text-center max-w-3xl mx-auto pt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build the Future of Web Development
        </h1>
        <p className="mt-4 text-lg opacity-80">
          {isLoggedIn
            ? "Explore the best developers and connect with them."
            : "Join now to discover the best developers in the industry."}
        </p>

      </div>

      
      <div className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">WebDev's Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center opacity-50 backdrop-blur-md" 
                  style = {{ backgroundImage: "url('https://i.ibb.co.com/MkNmYNCT/web-design.jpg')" }}>
            </div>
            <div className="relative flex flex-col justify-center items-center text-center px-6 py-10">
              <br/><h3 className={`${darkMode ? "text-xl font-bold text-gray-100" : "text-xl font-bold text-gray-900 mt-2"}`}>Web Design</h3>
              <p className={`${darkMode ? "text-xl text-gray-100" : "text-xl text-gray-900 mt-2"}`}>Modern design practices & UI/UX.</p>
              <Link to="/services" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
              </Link>
            </div>
          </div>

          
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-fit opacity-50 backdrop-blur-md" 
                  style = {{ backgroundImage: "url('https://i.ibb.co.com/qF76R4mF/SEO.jpg')" }}>
            </div>
            <div className="relative flex flex-col justify-center items-center text-center px-6 py-10">
              <br/><h3 className={`${darkMode ? "text-xl font-bold text-gray-100" : "text-xl font-bold text-gray-900 mt-2"}`}>SEO</h3>
              <p className={`${darkMode ? "text-xl text-gray-100" : "text-xl text-gray-900 mt-2"}`}>Optimize websites to rank better on search engines.</p>
              <Link to="/services" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
              </Link>
            </div>
          </div>

          
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center opacity-50 backdrop-blur-md" 
                  style = {{ backgroundImage: "url('https://i.ibb.co.com/5WxMgy8R/e-com.jpg')" }}>
            </div>
            <div className="relative flex flex-col justify-center items-center text-center px-6 py-10">
              <br/><h3 className={`${darkMode ? "text-xl font-bold text-gray-100" : "text-xl font-bold text-gray-900 mt-2"}`}>E-Commerce</h3>
              <p className={`${darkMode ? "text-xl text-gray-100" : "text-xl text-gray-900 mt-2"}`}>Build online stores with high conversion rates.</p>
              <Link to="/services" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
              </Link>
            </div>
          </div>

          
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center opacity-50 backdrop-blur-md" 
                  style = {{ backgroundImage: "url('https://i.ibb.co.com/HTVW9kS4/copywrite.jpg')" }}>
            </div>
            <div className="relative flex flex-col justify-center items-center text-center px-6 py-10">
              <br/><h3 className={`${darkMode ? "text-xl font-bold text-gray-100" : "text-xl font-bold text-gray-900 mt-2"}`}>Copy Writing</h3>
              <p className={`${darkMode ? "text-xl text-gray-100" : "text-xl text-gray-900 mt-2"}`}>Engaging content & marketing strategies.</p>
              <Link to="/services" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
              </Link>
            </div>
          </div>
          
          
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center opacity-50 backdrop-blur-md" 
                  style = {{ backgroundImage: "url('https://i.ibb.co.com/TqbKyPjr/branding.jpg')" }}>
            </div>
            <div className="relative flex flex-col justify-center items-center text-center px-6 py-10">
              <br/><h3 className={`${darkMode ? "text-xl font-bold text-gray-100" : "text-xl font-bold text-gray-900 mt-2"}`}>Branding</h3>
              <p className={`${darkMode ? "text-xl text-gray-100" : "text-xl text-gray-900 mt-2"}`}>Create strong & memorable brand identities.</p>
              <Link to="/services" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
              </Link>
            </div>
          </div>


          
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center opacity-50 backdrop-blur-md" 
                  style = {{ backgroundImage: "url('https://i.ibb.co.com/m5jCtzf2/content-marketing.jpg')" }}>
            </div>
            <div className="relative flex flex-col justify-center items-center text-center px-6 py-10">
              <br/><h3 className={`${darkMode ? "text-xl font-bold text-gray-100" : "text-xl font-bold text-gray-900 mt-2"}`}>Content Marketing</h3>
              <p className={`${darkMode ? "text-xl text-gray-100" : "text-xl text-gray-900 mt-2"}`}>Drive traffic with strategic content plans.</p>
              <Link to="/services" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>


      
      <div className={`${darkMode? "bg-slate-500 py-20 px-6" : "bg-emerald-700 py-20 px-6"}`}>
        <h2 className={`${darkMode ? "text-3xl text-center mb-10 font-bold text-gray-900" : "text-3xl text-center mb-10 font-bold text-gray-100"}`}>Why Choose WebDev?</h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          <div className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg">
            <FaCode className="text-blue-500 dark:text-blue-400 text-6xl mx-auto" />
            <h3 className={`${darkMode ? "text-xl font-bold text-blue-300 mt-4" : "text-xl font-bold text-blue-300 mt-4"}`}>Professional Experts</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Our team consists of industry-leading professionals.</p>
          </div>

          
          <div className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg">
            <FaRocket className="text-green-500 dark:text-green-400 text-6xl mx-auto" />
            <h3 className={`${darkMode ? "text-xl font-bold text-emerald-300 mt-4" : "text-xl font-bold text-emerald-300 mt-4"}`}>High-Quality Projects</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">We deliver top-tier projects that exceed expectations.</p>
          </div>

          
          <div className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg">
            <FaBolt className="text-yellow-500 dark:text-yellow-400 text-6xl mx-auto" />
            <h3 className={`${darkMode ? "text-xl font-bold text-amber-300 mt-4" : "text-xl font-bold text-amber-300 mt-4"}`}>24/7 Support</h3>
            {/*  */}
            <p className="text-gray-600 dark:text-gray-300 mt-2">Get assistance anytime with our dedicated support team.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Blog & News</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <div className={`${darkMode ? "bg-gray-900 shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105" : "bg-gray-900 shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105"}`}>
            <FaGlobe className="text-blue-500 text-6xl mx-auto mb-4 mt-2" />
            <div className="p-6">
              <h3 className={`${darkMode ? "text-xl font-semibold text-gray-100" : "text-xl font-semibold text-gray-100 mt-4"}`}>The Future of Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Discover the latest trends shaping the web development industry...</p>
              <Link to="/blog/1" className="mt-4 inline-block text-blue-500 hover:underline">
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className={`${darkMode ? "bg-gray-900 shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105" : "bg-gray-900 shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105"}`}>
            <FaCode className="text-green-500 text-6xl mx-auto mb-4 mt-2" />
            <div className="p-6">
              <h3 className={`${darkMode ? "text-xl font-semibold text-gray-100" : "text-xl font-semibold text-gray-100 mt-4"}`}>Best JavaScript Frameworks in 2025</h3>
              {/* "text-xl font-semibold" */}
              <p className="text-gray-600 dark:text-gray-300 mt-2">Explore the top JavaScript frameworks that are revolutionizing web apps...</p>
              <Link to="/blog/2" className="mt-4 inline-block text-blue-500 hover:underline">
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className={`${darkMode ? "bg-gray-900 shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105" : "bg-gray-900 shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105"}`}>
          {/* {`${darkMode ? "text-xl font-semibold text-gray-100" : "text-xl font-semibold text-gray-100 mt-4"}`} */}
            <FaRobot className="text-purple-500 text-6xl mx-auto mb-4 mt-2" />
            <div className="p-6">
              <h3 className={`${darkMode ? "text-xl font-semibold text-gray-100" : "text-xl font-semibold text-gray-100 mt-4"}`}>How AI is Changing Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Artificial Intelligence is transforming the way websites are built...</p>
              <Link to="/blog/3" className="mt-4 inline-block text-blue-500 hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>





      <div className="bg-white dark:bg-gray-900 py-20 px-6">
        <h2 className={`${darkMode ? "text-3xl mb-10 font-bold text-center text-amber-500" : "text-3xl mb-10 font-bold text-center text-amber-300"}`}>Meet Our Team</h2>
        {/*  */}
        {/* "text-3xl font-bold text-center mb-10" */}

        <div className="relative flex items-center justify-center">
          {/* Tombol Prev */}
          <button onClick={handlePrev} className="absolute left-0 md:-left-10 bg-gray-500 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">
            <FaChevronLeft size={20} />
          </button>

          {/* Card Team */}
          <div className="w-80 bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center transition-all">
            <img
              src={teamMembers[currentIndex].img}
              alt={teamMembers[currentIndex].name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 dark:border-gray-600"
            />
            <h3 className={`${darkMode ? "text-xl font-semibold text-pink-500 mt-4" : "text-xl font-semibold text-pink-500 mt-4"}`}>{teamMembers[currentIndex].name}</h3>
            {/* text-xl font-semibold mt-4" */}
            <p className="text-gray-600 dark:text-gray-300">{teamMembers[currentIndex].role}</p>
          </div>

          {/* Tombol Next */}
          <button onClick={handleNext} className="absolute right-0 md:-right-10 bg-gray-500 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    

      {/* Testimonials Section */}
<div className={`${darkMode? "bg-slate-500 py-20 px-6" : "bg-emerald-700 py-20 px-6"}`}>
  <h2 className={`${darkMode ? "text-3xl text-center mb-10 font-bold text-gray-900" : "text-3xl text-center mb-10 font-bold text-gray-100"}`}>What Our Clients Say</h2>
  
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Testimonial 1 */}
    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center">
      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Client 1" className="w-16 h-16 mx-auto rounded-full border-4 border-blue-500" />
      <h3 className={`${darkMode ? "text-lg font-semibold mt-4 text-cyan-600" : "text-lg font-semibold mt-4 text-cyan-600" }`}>James Anderson</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">"WebDev transformed my business with an outstanding website. Highly recommended!"</p>
      <div className="mt-3 flex justify-center gap-1 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center">
      <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="Client 2" className="w-16 h-16 mx-auto rounded-full border-4 border-blue-500" />
      <h3 className={`${darkMode ? "text-lg font-semibold mt-4 text-cyan-600" : "text-lg font-semibold mt-4 text-cyan-600" }`}>Sophia Williams</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">"Their team is very professional and delivered beyond expectations. Amazing!"</p>
      <div className="mt-3 flex justify-center gap-1 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center">
      <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="Client 3" className="w-16 h-16 mx-auto rounded-full border-4 border-blue-500" />
      <h3 className={`${darkMode ? "text-lg font-semibold mt-4 text-cyan-600" : "text-lg font-semibold mt-4 text-cyan-600" }`}>Michael Brown</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">"Fantastic experience working with WebDev. Their expertise is top-notch!"</p>
      <div className="mt-3 flex justify-center gap-1 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </div>
    </div>

    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center">
      <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="Client 3" className="w-16 h-16 mx-auto rounded-full border-4 border-blue-500" />
      <h3 className={`${darkMode ? "text-lg font-semibold mt-4 text-cyan-600" : "text-lg font-semibold mt-4 text-cyan-600" }`}>Millie Bobbie Brown</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">"Lorem ipsum dolor sit amet"</p>
      <div className="mt-3 flex justify-center gap-1 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </div>
    </div>

    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center">
      <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Client 3" className="w-16 h-16 mx-auto rounded-full border-4 border-blue-500" />
      <h3 className={`${darkMode ? "text-lg font-semibold mt-4 text-cyan-600" : "text-lg font-semibold mt-4 text-cyan-600" }`}>Chris Nolan</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">"Consectetur adipiscing elit. Nam aliquam tristique malesuada. Donec ac felis sapien."</p>
      <div className="mt-3 flex justify-center gap-1 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </div>
    </div>

    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center">
      <img src="https://randomuser.me/api/portraits/women/15.jpg" alt="Client 3" className="w-16 h-16 mx-auto rounded-full border-4 border-blue-500" />
      <h3 className={`${darkMode ? "text-lg font-semibold mt-4 text-cyan-600" : "text-lg font-semibold mt-4 text-cyan-600" }`}>Sasha Baron Cohen</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">"Vivamus ultricies ornare tincidunt. Quisque convallis mauris id dignissim scelerisque."</p>
      <div className="mt-3 flex justify-center gap-1 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </div>
    </div>



    

  </div>
</div>
    <div className="container mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* Stat 1 */}
        <div className="flex flex-col items-center">
      <FaUsers className="text-blue-500 text-6xl mb-3" />
      <h3 className="text-2xl font-bold">10,000+</h3>
      <p className={`${darkMode ? "text-sm font-semibold mt-4 text-white" : "text-sm font-semibold mt-4 text-black" }`}>Active Developers</p>
        </div>

    {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <FaGlobeAmericas className="text-green-500 text-6xl mb-3" />
          <h3 className="text-2xl font-bold">50+</h3>
          <p className={`${darkMode ? "text-sm font-semibold mt-4 text-white" : "text-sm font-semibold mt-4 text-black" }`}>Countries Supported</p>
        </div>

    {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <FaRocket className="text-purple-500 text-6xl mb-3" />
          <h3 className="text-2xl font-bold">5+</h3>
          <p className={`${darkMode ? "text-sm font-semibold mt-4 text-white" : "text-sm font-semibold mt-4 text-black" }`}>Years of Experience</p>
        </div>
      </div>
    </div>
    <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Partners & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <FaReact className="text-6xl text-blue-400 hover:text-blue-600 transition-all" />
          <FaGithub className="text-6xl text-gray-500 hover:text-black transition-all" />
          <FaCss3Alt className="text-6xl text-blue-600 hover:text-blue-800 transition-all" />
          <FaCloud className="text-6xl text-gray-400 hover:text-gray-700 transition-all" />
        </div>
      </div>


      
      {!isLoggedIn && (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
        <p className="text-lg opacity-80 mt-2">Join our platform and take your web development to the next level.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/register" className="mt-4 inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
          Sign Up Now
        </Link>
        <Link to="/login" className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition mt-4 inline-block">
              Login
        </Link>
        </div>
        </div>
      )}

    </div>
  );
}

export default Home;
