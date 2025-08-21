import { useState } from "react";
import { Truck, Zap, Package, Warehouse, Box, ShoppingCart, Store, MapPin, X, Clock, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesBg from "../assets/services-bg.png";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <MapPin className="w-8 h-8 animate-bounce-slow" />,
      color: "from-blue-500 to-blue-700",
      title: "Last Mile Delivery",
      description: "Fast, reliable final-leg delivery solutions ensuring your packages reach customers efficiently across urban and rural areas.",
      details: {
        features: [
          "Same-day delivery in within Lagos",
          "Door-to-door service",
          "SMS and email notifications",
          "Proof of delivery with photos",
          "Flexible delivery windows"
        ],
        benefits: [
          "99.5% delivery success rate",
          "Average delivery time: 2-4 hours",
          //"Coverage in 20+ states across Nigeria",
          "24/7 customer support"
        ],
        pricing: "Starting from ₦3,000 per delivery within Lagos"
      }
    },
    {
      icon: <Zap className="w-8 h-8 animate-pulse-slow" />,
      color: "from-red-500 to-pink-600",
      title: "Express Delivery",
      //description: "Lightning-fast delivery service for urgent shipments with real-time tracking and priority handling.",
      description: "Lightning-fast delivery service for urgent shipments with priority handling.",
      details: {
        features: [
          //"1-hour pickup guarantee",
          "Priority routing system",
          //"Real-time GPS tracking",
          "Temperature-controlled options",
          "Fragile item handling"
        ],
        benefits: [
          "Fastest delivery network in Nigeria",
          "99.8% on-time delivery rate",
          //"Insurance coverage up to ₦500,000",
          "Dedicated customer manager"
        ],
        pricing: "Starting from ₦6,000 for express service"
      }
    },
    {
      icon: <Package className="w-8 h-8 animate-rotate-slow" />,
      color: "from-green-500 to-emerald-700",
      title: "Haulage",
      description: "Heavy-duty transportation solutions for bulk goods and large-scale shipments across Nigeria.",
      details: {
        features: [
          //"Fleet of 50+ trucks",
          "Fleet of trucks",
          "Dry and refrigerated options",
          "Cross-country transport",
          "Load optimization",
          "Scheduled pickups"
        ],
        benefits: [
          "Capacity from 1-40 tons",
          "Nationwide coverage",
          "Fuel-efficient routes",
          "Professional drivers"
        ],
        pricing: "Custom quotes based on weight and distance"
      }
    },
    {
      icon: <Warehouse className="w-8 h-8 animate-pulse-slow" />,
      color: "from-purple-500 to-indigo-700",
      title: "Warehousing",
      description: "Secure storage facilities with advanced inventory management systems and flexible storage solutions.",
      details: {
        features: [
          "Climate-controlled facilities",
          "24/7 security monitoring",
          "Inventory management system",
          "Pick and pack services",
          "Cross-docking capabilities"
        ],
        benefits: [
          //"5 warehouse locations",
          "10,000+ sq ft total space",
          "99.9% inventory accuracy",
          "Flexible storage terms"
        ],
        pricing: "Starting from ₦20,000 per sq ft per month"
      }
    },
    {
      icon: <Box className="w-8 h-8 animate-bounce-slow" />,
      color: "from-yellow-400 to-orange-600",
      title: "Inventory Management",
      description: "Smart inventory solutions with real-time tracking, automated reordering, and comprehensive reporting.",
      details: {
        features: [
          "Real-time stock monitoring",
          "Automated reorder alerts",
          "Barcode scanning",
          "Demand forecasting",
          "Multi-location tracking"
        ],
        benefits: [
          "Reduce stock-outs by 85%",
          "Lower inventory costs by 30%",
          //"Real-time reporting dashboard",
          //"Integration with major platforms"
        ],
        pricing: "Starting from ₦25,000 per month"
      }
    },
    {
      icon: <ShoppingCart className="w-8 h-8 animate-pulse-slow" />,
      color: "from-pink-400 to-rose-600",
      title: "Procurement",
      description: "Strategic sourcing and procurement solutions to optimize your supply chain and reduce costs.",
      details: {
        features: [
          "Supplier network of 500+",
          "Quality assurance programs",
          "Bulk purchasing power",
          "Vendor management",
          "Cost optimization analysis"
        ],
        benefits: [
          "Save 15-40% on procurement costs",
          "Verified supplier network",
          "Quality guarantee",
          "Streamlined ordering process"
        ],
        pricing: "Commission-based: 5-10% of order value"
      }
    },
    {
      icon: <Store className="w-8 h-8 animate-rotate-slow" />,
      color: "from-teal-400 to-cyan-600",
      title: "E-Commerce",
      description: "End-to-end e-commerce solutions from order processing to final delivery for online businesses.",
      details: {
        features: [
          //"Order processing automation",
          "Multi-channel integration",
          "Returns management",
          "Gift wrapping services",
          "Branded packaging options"
        ],
        benefits: [
          "99.5% order accuracy",
          "Same-day fulfillment",
          "Integration with Shopify, WooCommerce",
          "Scalable solutions"
        ],
        pricing: "Starting from ₦3000 per order + storage"
      }
    },
    /*{
      icon: <MapPin className="w-8 h-8 animate-bounce-slow" />,
      color: "from-gray-500 to-slate-700",
      title: "Real-Time Tracking",
      description: "Advanced GPS tracking system providing live updates on shipment location and delivery status.",
      details: {
        features: [
          "Live GPS tracking",
          "Delivery time estimates",
          "Route optimization",
          "Proof of delivery",
          "Customer notifications"
        ],
        benefits: [
          "100% visibility",
          "Reduced customer inquiries",
          "Improved delivery accuracy",
          "Enhanced customer satisfaction"
        ],
        pricing: "Included with all delivery services"
      }
    }*/
  ];

  const closeModal = () => setSelectedService(null);

  return (
    <section 
      id="services" 
      className="py-16 lg:py-24 relative bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${servicesBg})`
      }}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to meet the evolving needs of businesses across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-white/20 transform hover:scale-105 hover:bg-white/20"
              data-testid={`service-${index}`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 text-white shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-200 leading-relaxed mb-4">{service.description}</p>
              <div className="flex justify-end">
                <Button
                  onClick={() => setSelectedService(index)}
                  className="w-fit bg-avrimile-primary hover:bg-avrimile-accent text-white text-sm py-2 px-4 transition-all duration-300 shadow-lg"
                  data-testid={`service-learn-more-${index}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Modal */}
        {selectedService !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
            onClick={closeModal}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <div 
              className="bg-white/95 backdrop-blur-md rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/30 shadow-2xl transform translate-y-0"
              onClick={(e) => e.stopPropagation()}
              style={{ margin: 'auto' }}
            >
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-white/30 p-6 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center mr-4 text-white">
                    {services[selectedService].icon}
                  </div>
                  <h2 className="text-2xl font-bold text-avrimile-secondary">
                    {services[selectedService].title}
                  </h2>
                </div>
                <Button
                  onClick={closeModal}
                  variant="ghost"
                  className="p-2"
                  data-testid="modal-close"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <div className="p-6 space-y-8">
                <p className="text-lg text-avrimile-muted leading-relaxed">
                  {services[selectedService].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-avrimile-secondary mb-4 flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-avrimile-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {services[selectedService].details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-avrimile-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-avrimile-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-avrimile-secondary mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5 text-avrimile-primary" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {services[selectedService].details.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-avrimile-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-avrimile-muted">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-avrimile-secondary mb-4 flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-avrimile-primary" />
                    Pricing
                  </h3>
                  <p className="text-lg text-avrimile-primary font-semibold">
                    {services[selectedService].details.pricing}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={() => {
                      closeModal();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-avrimile-primary hover:bg-avrimile-accent text-white w-fit"
                    data-testid="modal-get-quote"
                  >
                    Get Quote
                  </Button>
                  <Button
                    onClick={closeModal}
                    variant="outline"
                    className="border-avrimile-primary text-avrimile-primary hover:bg-avrimile-primary hover:text-white w-fit"
                    data-testid="modal-close-bottom"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
