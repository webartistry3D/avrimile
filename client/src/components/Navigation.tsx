import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // Vite resolves the alias


const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add fade out animation to current section
      const currentSection = document.querySelector('section.animate-in');
      if (currentSection) {
        currentSection.classList.remove('animate-in');
        currentSection.classList.add('animate-out');
      }

      const offsetTop = (section as HTMLElement).offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Add fade in animation to target section after scroll
      setTimeout(() => {
        section.classList.remove('animate-out');
        section.classList.add('animate-in');
      }, 100);
      
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'tracker', label: 'Package Tracker' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-20 h-20 bg-gradient-to-br rounded-lg flex items-center justify-center">
                <img 
                  src={logo}   // <-- replace with your actual path
                  alt="Avrimile Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-3">
                {/*<div className="text-xl font-bold text-avrimile-secondary">AVRIMILE</div>
                <div className="text-xs text-avrimile-muted uppercase tracking-wide">Beyond Every Mile</div>*/}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-avrimile-primary'
                      : 'text-avrimile-muted hover:text-avrimile-primary'
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-avrimile-primary"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="text-lg" />
              ) : (
                <Menu className="text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full right-0 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
      }`} style={{ minWidth: 'max-content' }}>
        <div className="px-3 py-2 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 font-medium transition-all duration-300 transform whitespace-nowrap ${
                mobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              } ${
                activeSection === item.id
                  ? 'text-avrimile-primary'
                  : 'text-avrimile-muted hover:text-avrimile-primary'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              data-testid={`mobile-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
