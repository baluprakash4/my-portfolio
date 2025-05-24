import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  const isScrolled = scrollY > 50;
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-indigo-600 dark:text-indigo-400">Port</span>folio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.title}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900/90 dark:bg-black/90 z-50 md:hidden">
            <div className="flex flex-col h-full justify-center items-center">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-2xl font-medium text-white my-4 hover:text-indigo-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;