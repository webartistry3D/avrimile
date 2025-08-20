import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";


const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const typingTexts = [
    "Reliable logistics solutions\nfor modern businesses",
    "Fast delivery across Nigeria\nwith real-time tracking",
    "Professional supply chain\nmanagement services",
    "Your trusted logistics partner\nfor seamless operations",
  ];

  const carouselImages = [
    { src: hero1, alt: "Truck" },
    { src: hero2, alt: "Warehouse" },
    { src: hero3, alt: "Delivery" },
    { src: hero4, alt: "Supply chain" },
  ];


  // Typing effect
  useEffect(() => {
    const currentText = typingTexts[currentWordIndex];
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setTypedText("");
        setCurrentWordIndex((prev) => (prev + 1) % typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentWordIndex]);

  // Carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-avrimile-secondary via-blue-800 to-blue-900 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-black leading-tight mb-6">
              <span className="text-avrimile-primary">AVRIMILE</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                Beyond Every Mile
              </span>
            </h1>
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-100 min-h-[5rem] md:min-h-[6rem] flex items-center whitespace-pre-line leading-relaxed">
                {typedText}
                <span className="animate-pulse text-avrimile-primary ml-1">|</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive logistics, sourcing, and inventory management
              solutions for MSMEs and individuals across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToServices}
                className="bg-avrimile-primary hover:bg-avrimile-accent text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center w-fit"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="bg-transparent border-2 border-avrimile-primary text-avrimile-primary hover:bg-avrimile-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-fit"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Right side carousel */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-[400px] object-cover transition-all duration-500 transform ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 absolute inset-0"
                  }`}
                />
              ))}

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-avrimile-primary"
                        : "bg-white bg-opacity-50 hover:bg-opacity-75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
