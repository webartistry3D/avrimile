import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { FaXTwitter} from react-icons/fa6;
import contactBg from "../assets/about-bg.png";

const Contact = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: '#', 
      color: 'bg-blue-600 hover:bg-blue-700',
      animation: 'hover:animate-bounce-slow'
    },
    { 
      name: 'X', 
      icon: FaXTwitter, 
      url: '#', 
      color: 'bg-blue-400 hover:bg-blue-500',
      animation: 'hover:animate-pulse-slow'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/avrimile', 
      color: 'bg-pink-600 hover:bg-pink-700',
      animation: 'hover:animate-rotate-slow'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: '#', 
      color: 'bg-blue-800 hover:bg-blue-900',
      animation: 'hover:animate-pulse-slow'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      url: 'https://wa.me/2348130416289', 
      color: 'bg-green-500 hover:bg-green-600',
      animation: 'hover:animate-bounce-slow'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-16 lg:py-24 relative bg-fixed bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${contactBg})`
      }}
    >
      <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-200">Reach out for quotes, partnerships, or inquiries.</p>
        </div>

        <div className="space-y-10 w-full">
          {/* Email */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center">
              <Mail className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-200">info.avrimile@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center">
              <Phone className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Phone</h3>
              <p className="text-gray-200">+234 813 041 6289</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center">
              <MapPin className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Address</h3>
              <p className="text-gray-200">Greenfield Estate, Ago Palace Way, Lagos, Nigeria</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-8">
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color} ${social.animation}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
