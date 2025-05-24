import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
 
}

const Projects = () => {
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
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'EAZY School Web Application',
      description: 'A comprehensive school management system with features for student management, attendance tracking, and grade management.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
      githubUrl: 'https://github.com',
     
    },
    {
      id: 2,
      title: 'Hotel Management System',
      description: 'Backend system for hotel operations including reservation management, room service, and billing.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com',
    
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      description: 'Machine learning application for predicting stock prices using historical data and market indicators.',
      image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Machine Learning', 'React'],
      githubUrl: 'https://github.com',
      
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
              My Recent Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          </div>
          
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  style={{ 
                    transitionDelay: `${(index % 6) * 100}ms` 
                  }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <div className="flex gap-3">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} className="text-white" />
                        </a>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={`${project.id}-${tag}`}
                          className="text-xs px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;