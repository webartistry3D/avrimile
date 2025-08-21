import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What areas do you deliver to?",
      answer: "We provide logistics services across Nigeria, with a focus on major cities including Lagos, Abuja, Port Harcourt, Kano, and surrounding areas. Our network is continuously expanding to serve more locations."
    },
    /*{
      question: "How can I track my package in real-time?",
      answer: "Use our package tracker above with your tracking ID to get real-time updates. You'll receive SMS notifications at key milestones, and our system provides live GPS tracking from pickup to delivery."
    },*/
    {
      question: "What is the average delivery time?",
      answer: "Delivery times vary by service type and distance. Express delivery: Within 24 hours. Standard delivery: 1-3 business days within major cities, 3-7 days for remote areas. Bulk haulage: Scheduled based on requirements."
    },
    {
      question: "Do you offer warehousing and inventory support?",
      answer: "Yes, we provide secure warehousing facilities with advanced inventory management systems. Our services include storage, stock monitoring, automated reordering alerts, and integration with your existing systems."
    },
    /*{
      question: "Can I integrate your services with my online store?",
      answer: "Absolutely! We offer API integration for e-commerce platforms, enabling automated order processing, tracking updates, and seamless fulfillment. Our team can help set up custom integrations for your specific needs."
    }*/
  ];

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-avrimile-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-avrimile-muted">
            Everything you need to know about Avrimile logistics and fulfillment services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                data-testid={`faq-question-${index}`}
              >
                <span className="font-semibold text-avrimile-secondary">{faq.question}</span>
                {openFAQ === index ? (
                  <Minus className="text-avrimile-primary transition-transform duration-200" />
                ) : (
                  <Plus className="text-avrimile-primary transition-transform duration-200" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4" data-testid={`faq-answer-${index}`}>
                  <p className="text-avrimile-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
