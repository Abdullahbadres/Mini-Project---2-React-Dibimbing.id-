import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaWhatsapp, FaBriefcase } from "react-icons/fa";

function ProfilePage({ darkMode }) {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("User not found");
        setLoading(false);
      });
  }, [id]);
  
  const userProfiles = {
    1: {
      title: "Fullstack Developper",
      description:
        "George Bluth is a Fullstack Developer with expertise in both front-end and back-end development, capable of building end-to-end applications. With 8+ years of experience, he have worked on a wide range of technologies and are skilled at integrating cloud services and designing scalable systems.",
      skills: ["JavaScript", "Node.js", "React", "AWS", "GraphQL", "MongoDB", "Docker"],
      experience: "8+ years in Web Development & Cloud",
      jobHistory: [
        {company: "Tech Solutions Ltd.", role: "Senior Fullstack Developer", year: "2018-now"},
        {company: "Web Dev Co.", role: "Fullstack Developer", year: "2015-2018"},
      ],
      whatsapp: "+628989394097",
    },
    2: {
      title: "Frontend Developper",
      description:
        "Janet Weaver is a passionate Frontend Developer with a focus on building interactive and responsive user interfaces. With 6+ years of experience, she specialized in modern frontend technologies and design principles.",
      skills: ["HTML", "CSS", "React.js", "JavaScript", "Redux", "Figma", "Responsive Design"],
      experience: "6+ years in UI/UX & React.js.",
      jobHistory: [
        {company: "Web Innovations", role: "Frontend Developer", year: "2020-now"},
        {company: "Design Studio", role: "Junior Frontend Developer", year: "2018-2020"},
      ],
      whatsapp: "+628989394097",
    },
    3: {
      title: "Backend Developper",
      description:
        "Emma Wong is a skilled Backend Developer with expertise in building scalable APIs and managing databases. With 7+ years of experience, she have been involved in designing the architecture and optimizing the performance of web services.",
      skills: ["Node.js", "Python", "Express", "SQL", "MongoDB", "Docker", "REST APIs"],
      experience: "7+ years in APIs & Databases.",
      jobHistory: [
        {company: "CodeWorks", role: "Backend Developer", year: "2017-now"},
        {company: "Tech Corp", role: "Junior Backend Developer", year: "2014-2017"},
      ],
      whatsapp: "+628989394097",
    },
    4: {
      title: "AI Specialist",
      description:
        "Eve Holt is an AI Specialist with a focus on machine learning and natural language processing (NLP). With 5+ years of experience, he have worked on several high-impact projects, developing intelligent systems that enhance user experience.",
      skills: ["Python", "TensorFlow", "NLP", "Deep Learning", "Scikit-learn", "Data Analysis"],
      experience: "5+ years in Machine Learning & NLP.",
      jobHistory: [
        {company: "Deepseek Inc", role: "AI Engineer", year: "2019-now"},
        {company: "Chatgpt Inc", role: "Junior AI Developer", year: "2017-2019"},
      ],
      whatsapp: "+628989394097",
    },
    5: {
      title: "Cybersecurity Analyst",
      description:
        "Charles Morris is a Cybersecurity Analyst with a strong background in securing network infrastructure and applications. With 4+ years of experience, he have been actively involved in identifying vulnerabilities and enhancing security protocols.",
      skills: ["Python", "TensorFlow", "NLP", "Deep Learning", "Scikit-learn", "Data Analysis"],
      experience: "5+ years in Network Security.",
      jobHistory: [
        {company: "SecureNet Solutions", role: "Cybersecurity Analyst", year: "2021-now"},
        {company: "TechSafe Inc.", role: "Security Specialist", year: "2019-2021"},
      ],
      whatsapp: "+628989394097",
    },
    6: {
      title: "Mobile Developer",
      description:
        "Tracey Ramos is a Mobile Developer specializing in building high-performance iOS and Android applications. With 6+ years of experience, they have developed several successful apps, focusing on smooth user experiences and performance.",
      skills: ["Swift", "Kotlin", "React Native", "Firebase", "App Store Optimization", "UX/UI Design"],
      experience: "6+ years in iOS & Android Development.",
      jobHistory: [
        {company: "MobileTech", role: "Senior Mobile Developer", year: "2018-now"},
        {company: "AppDev Studios", role: "Junior Mobile Developer", year: "2016-2018"},
      ],
      whatsapp: "+628989394097",
    },
    7: {
      title: "Cloud Engineer",
      description:
        "Michael Lawson is a highly skilled expertise in cloud platforms such as AWS, Azure, and GCP. With 9+ years of experience, they have managed cloud infrastructure, automation, and security at scale.",
      skills: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD"],
      experience: "9+ years in AWS, Azure & GCP.",
      jobHistory: [
        {company: "CloudsOps", role: "Senior Cloud Engineer", year: "2018-2023"},
        {company: "DevSolutions", role: "Cloud Administrator", year: "2014-2018"},
      ],
      whatsapp: "+628989394097",
    },
    8: {
      title: "Data Scientist",
      description:
        "Lindsay Ferguson is a Data Scientist with expertise in big data analysis, AI analytics, and statistical modeling. With 5+ years of experience, they have helped companies leverage data to drive strategic decisions and business growth.",
      skills: ["Python", "R", "Machine Learning", "Data Analysis", "SQL", "Hadoop", "Big Data"],
      experience: "5+ years of experience in backend and API development.",
      jobHistory: [
        {company: "Analytics Corp", role: "Data Scientist", year: "2019-2023" },
        {company: "Insights Lab", role: "Junior Data Scientist", year: "2016-2019"},
      ],
      whatsapp: "+6289512834808",
    },
    9: {
      title: "Software Engineer",
      description:
        "Tobias Funke is a Software Engineer with a focus on software architecture and system design. With 10+ years of experience, they have built complex systems and applications across various industries, ensuring robust performance and scalability.",
      skills: ["C#", "Java", "Python", "System Architecture", "Microservices", "Agile Development"],
      experience: "10+ years in Software Architecture.",
      jobHistory: [
        {company: "TechPioneers", role: "Software Architect", year: "2015-2023"},
        {company: "DevWorks", role: "Software Engineer", year: "2011-2015"},
      ],
      whatsapp: "+6289512834808",
    },
    10: {
      title: "DevOps Engineer",
      description:
        "Bryon Fields is a DevOps Engineer with expertise in continuous integration, continuous deployment (CI/CD), and container orchestration. With 7+ years of experience, they have streamlined the development-to-production pipeline and implemented DevOps best practices.",
      skills: ["CI/CD", "Kubernetes", "Docker", "Jenkins", "Terraform", "AWS", "Ansible"],
      experience: "7+ years in CI/CD & Kubernetes.",
      jobHistory: [
        {company: "Cloud Systems Inc.", role: "DevOps Engineer", year: "2018-2023"},
        {company: "Tech Devs", role: "Junior DevOps Engineer", year: "2015-2018"},
      ],
      whatsapp: "+628989394097",
    },
    11: {
      title: "UI/UX Designer",
      description:
        "George Edwards is a UI/UX Designer with a keen eye for creating visually appealing and user-friendly designs. With 6+ years of experience, they specialize in crafting intuitive interfaces and improving user experiences across web and mobile platforms..",
      skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Research"],
      experience: "6+ years in Figma & Adobe XD.",
      jobHistory: [
        {company: "Design Innovators", role: "Senior UI/UX Designer", year: "2019-2023"},
        {company: "Creative Studios", role: "Junior UI/UX Designer", year: "2016-2019"},
      ],
      whatsapp: "+628989394097",
    },
  };

  if (loading) return <p className="text-center mt-10">Loading user profile...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;


  const profileData = userProfiles[user.id] || {
    title: "System Administrator",
    description:
      "This user is a System Administrator with expertise in managing Linux systems and ensuring cloud security. With 8+ years of experience, she have been responsible for optimizing system performance, securing infrastructures, and managing large-scale deployments.",
    skills: ["Linux", "Cloud Security", "Bash", "AWS", "Virtualization", "Network Configuration"],
    experience: "8+ years in Linux & Cloud Security.",
    jobHistory: [
        {company: "CloudSecurity Ltd.", role: "Senior System Administrator", year: "2018-2023"},
      ],
      whatsapp: "+628989394097",
  };

  return (
    <div className={`min-h-screen flex flex-col items-center p-6 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

      {/* Summary Profile Card */}
      <div className={`w-full max-w-4xl p-6 rounded-lg shadow-lg transition-all ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={user.avatar} alt={user.first_name} className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-600" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">{user.first_name} {user.last_name}</h2>
            <p className="text-md mt-2">{profileData.title}</p>
            <p className={`text-md ${darkMode ? "text-gray-100" : "text-gray-600"}`}>{profileData.experience}</p>
          </div>
        </div>
      </div>

      {/* Skills Breakdown */}
      <div className={`w-full max-w-4xl p-6 mt-6 rounded-lg shadow-lg transition-all ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}>
        <h3 className="text-xl font-semibold mb-2">Skills & Services</h3>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      {/* Job Experience */}
      <div className={`w-full max-w-4xl p-6 mt-6 rounded-lg shadow-lg transition-all ${darkMode ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-950"}`}>
        <h3 className="text-xl font-bold flex items-center gap-2"><FaBriefcase /> Job Experience</h3>
        <div className="mt-4 space-y-4">
          {profileData.jobHistory.map((job, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold">{job.role}</h4>
              <p className={`${darkMode ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-950"}`}>{job.company} ({job.year})</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full max-w-4xl p-6 mt-6 rounded-lg shadow-lg transition-all ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-950"}`}>
        <h3 className="text-xl font-bold">Description</h3>
        <p className="mt-2">{profileData.description}</p>
      </div>
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* WhatsApp Button */}
        <a href={`https://wa.me/${profileData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
          <FaWhatsapp className="text-lg" /> Contact via WhatsApp
        </a>
        
        {/* Email Button */}
        <a href={`mailto:${user.email}`} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          <FaEnvelope className="text-lg" /> Send an Email
        </a>
      </div>
    </div>
  );
}

export default ProfilePage;

