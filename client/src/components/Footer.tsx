const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-avrimile-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-avrimile-primary mb-4">AVRIMILE</h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond Every Mile - Your trusted logistics partner for reliable delivery and supply chain solutions across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-avrimile-primary transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-avrimile-primary transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-avrimile-primary transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="hover:text-avrimile-primary transition-colors text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-avrimile-primary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📧</span> info.avrimile@gmail.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span> +234 813 041 6289
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> Greenfield Estate, Ago Palace Way, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Avrimile Enterprises. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Created by <span className="text-avrimile-primary font-medium">WebArtistry Creations</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;