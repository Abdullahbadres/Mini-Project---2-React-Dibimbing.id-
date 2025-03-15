import { Link } from "react-router-dom";

function Services({ darkMode }) {
  const services = [
    { title: "Web Development", desc: "Modern web applications with the latest technology." },
    { title: "UI/UX Design", desc: "User-friendly and aesthetic UI/UX designs." },
    { title: "SEO Optimization", desc: "Boost your website ranking on search engines." },
    { title: "E-Commerce Solutions", desc: "High-converting online store setups." },
    { title: "Branding & Identity", desc: "Create a strong and unique brand identity." },
    { title: "Digital Marketing", desc: "Effective marketing strategies for businesses." },
  ];

  return (
    <div className={`min-h-screen px-6 py-12 transition-all duration-300 
      ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

      {/* Hero Section */}
      <div className="text-center py-16 opacity-0 animate-fadeIn">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Explore our professional web development and digital services.
        </p>
      </div>

      {/* Services List */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-transparent 
                      hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
          >
            <h3 className={`${darkMode ? "text-xl font-semibold text-pink-600" : "text-xl font-semibold text-pink-300"}`}>{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold">Ready to Work With Us?</h2>
        <p className="text-sm font-semibold">
          Let’s bring your ideas to life with our expert services!
        </p>
        <Link to="/contact" 
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 
                     transition-all transform hover:scale-105 shadow-md hover:shadow-xl"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}

export default Services;
