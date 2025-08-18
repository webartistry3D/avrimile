import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-avrimile-secondary via-blue-800 to-blue-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-avrimile-primary">AVRIMILE</span><br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Beyond Every Mile</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Reliable logistics, sourcing, and inventory management solutions for MSMEs and individuals across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="bg-avrimile-primary hover:bg-avrimile-accent text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                data-testid="button-learn-more"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="bg-transparent border-2 border-avrimile-primary text-avrimile-primary hover:bg-avrimile-primary hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                data-testid="button-request-quote"
              >
                Request a Quote
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Avrimile logistics truck on highway"
              className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              data-testid="img-hero-truck"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
