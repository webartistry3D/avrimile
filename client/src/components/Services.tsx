import { Truck, Zap, Package, Warehouse, Box, ShoppingCart, Store, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck className="text-2xl" />,
      title: "Last Mile Delivery",
      description: "Fast, reliable final-leg delivery solutions ensuring your packages reach customers efficiently across urban and rural areas."
    },
    {
      icon: <Zap className="text-2xl" />,
      title: "Express Delivery",
      description: "Lightning-fast delivery service for urgent shipments with real-time tracking and priority handling."
    },
    {
      icon: <Package className="text-2xl" />,
      title: "Trucking & Bulk Haulage",
      description: "Heavy-duty transportation solutions for bulk goods and large-scale shipments across Nigeria."
    },
    {
      icon: <Warehouse className="text-2xl" />,
      title: "Warehousing",
      description: "Secure storage facilities with advanced inventory management systems and flexible storage solutions."
    },
    {
      icon: <Box className="text-2xl" />,
      title: "Inventory Management",
      description: "Smart inventory solutions with real-time tracking, automated reordering, and comprehensive reporting."
    },
    {
      icon: <ShoppingCart className="text-2xl" />,
      title: "Procurement Services",
      description: "Strategic sourcing and procurement solutions to optimize your supply chain and reduce costs."
    },
    {
      icon: <Store className="text-2xl" />,
      title: "e-Commerce Fulfillment",
      description: "End-to-end e-commerce solutions from order processing to final delivery for online businesses."
    },
    {
      icon: <MapPin className="text-2xl" />,
      title: "Real-Time Tracking",
      description: "Advanced GPS tracking system providing live updates on shipment location and delivery status."
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-avrimile-secondary mb-4">Our Services</h2>
          <p className="text-xl text-avrimile-muted max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to meet the evolving needs of businesses across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              data-testid={`service-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-avrimile-secondary mb-3">{service.title}</h3>
              <p className="text-avrimile-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
