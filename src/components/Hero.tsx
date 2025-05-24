import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Nerella Balu Prakash <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Full Stack Java Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              A passionate developer with experience in building robust web applications
              and a track record of successful internships and team projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 mt-24 animate-bounce"
          >
            <a 
              href="#about" 
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
              aria-label="Scroll down"
            >
              <ArrowDown size={20} className="text-indigo-600 dark:text-indigo-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;