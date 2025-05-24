import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    
    { icon: <Github size={20} />, url: 'https://github.com/baluprakash4' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/balu-prakash-nerella/d' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/balu_nerella/' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold">
                <span className="text-indigo-600 dark:text-indigo-400">Port</span>folio
              </a>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">
                Building beautiful digital experiences with passion and precision.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {currentYear} Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;