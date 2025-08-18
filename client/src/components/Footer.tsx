const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-avrimile-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold">AVRIMILE</div>
                <div className="text-xs text-blue-300 uppercase tracking-wide">Beyond Every Mile</div>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6">
              Delivering innovative logistics solutions across Nigeria with reliability, speed, and precision. Your trusted partner for all supply chain needs.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-last-mile"
                >
                  Last Mile Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-express"
                >
                  Express Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-warehousing"
                >
                  Warehousing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-tracking"
                >
                  Real-Time Tracking
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-blog"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faqs')}
                  className="hover:text-avrimile-primary transition-colors duration-200"
                  data-testid="footer-link-faqs"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
          <p>&copy; 2025 Avrimile Enterprises. All rights reserved. | Beyond Every Mile</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
