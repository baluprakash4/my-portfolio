import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
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
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'Bootstrap', level: 90, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3', level: 90, category: 'frontend' },
    { name: 'Java', level: 85, category: 'backend' },
    { name: 'Spring Boot', level: 80, category: 'backend' },
    { name: 'MySQL', level: 85, category: 'backend' },
    { name: 'Maven', level: 75, category: 'tools' },
    { name: 'Postman', level: 80, category: 'tools' },
    { name: 'Git/GitHub', level: 85, category: 'tools' },
    { name: 'Java 21', level: 85, category: 'tools' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
              What I Know
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          </div>
          
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transform hover:-translate-y-1 transition-transform"
                  style={{ 
                    transitionDelay: `${(index % 9) * 100}ms` 
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-full"
                      style={{ 
                        width: `${skill.level}%`,
                        transition: 'width 1s ease-in-out',
                      }}
                    />
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

export default Skills;