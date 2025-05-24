import { User, Briefcase, GraduationCap, Link, Building } from 'lucide-react';
import { useState, useEffect } from 'react';
import profilePic from '../assets/profile pic.jpg';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      name: "Java Full Stack Certification from Wipro Talent next",
      url: "https://cert.diceid.com/csr/cid/ric6j5?verify=true"
    },
    {
      name: "Java Programming Certification from Infosys Spring Board",
      url: "https://drive.google.com/file/d/1ztWgmtpUMXOsqqSahcLUcqLBXJJVjJrO/view?usp=drive_link"
    },
    {
      name: "Spring boot Framework certification from udemy",
     
    },
    {
      name: "Frontend Development Certification from udemey",
    
    }
  ];

  const internships = [
    {
      company: "Data Valley",
      position: "Full Stack Developer Intern",
      duration: "6 months"
    },
    {
      company: "Internshala",
      position: "Python Programming",
      duration: "3 months"
    }
  ];

  const hobbies = [
    "Listening to Music",
    "Playing Chess",
    "Travelling"
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
              Get To Know
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-xl overflow-hidden">
                  <img 
                    src={profilePic}
                    alt="Professional portrait" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-200 dark:bg-indigo-900/50 rounded-3xl -z-10"></div>
              </div>
            </div>
            
            <div 
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transform hover:-translate-y-1 transition-transform">
                    <User className="text-indigo-600 dark:text-indigo-400 mb-4" size={28} />
                    <h3 className="text-xl font-semibold mb-2">Profile</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nerella Balu Prakash
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transform hover:-translate-y-1 transition-transform">
                    <Briefcase className="text-indigo-600 dark:text-indigo-400 mb-4" size={28} />
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Full Stack Java Developer
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Internships</h3>
                  <div className="space-y-3">
                    {internships.map((internship, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                        <div className="flex items-center mb-2">
                          <Building className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
                          <span className="font-medium">{internship.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm ml-7">
                          {internship.position} • {internship.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="space-y-2">
                    {certifications.map((cert, index) => (
                      <a 
                        key={index}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                      >
                        <GraduationCap className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {cert.name}
                        </span>
                        <Link size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm a Full Stack Java Developer with hands-on experience through two internships. 
                  I specialize in building robust web applications and have successfully completed 
                  several team projects including a school management system, hotel management backend, 
                  and stock price prediction application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;