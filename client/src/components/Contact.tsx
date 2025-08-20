import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import contactBg from "../assets/contact-bg.png";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: data.message,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: () => {
      toast({
        title: "Error Sending Message",
        description: "Please check all required fields and try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const updateField = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: '#', 
      color: 'bg-blue-600 hover:bg-blue-700',
      animation: 'hover:animate-bounce-slow'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
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
      className="py-16 lg:py-24 relative bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${contactBg})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-200">Reach out for quotes, partnerships, or inquiries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-white text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-200">info@avrimile.ng</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-white text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-200">+234 700 800 9000</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Address</h3>
                <p className="text-gray-200">Lagos, Nigeria</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h3 className="font-semibold text-white mb-4 text-center lg:text-left">Follow Us</h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : '_self'}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color} ${social.animation}`}
                      data-testid={`social-${social.name.toLowerCase()}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-avrimile-secondary/95 backdrop-blur-sm rounded-xl p-8 border border-white/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Get a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                <div className="w-full max-w-md">
                  <label className="block text-sm font-medium text-white mb-2 text-center">Full Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="border-white/50 bg-white/20 text-white placeholder:text-gray-300 focus:border-avrimile-primary focus:ring-avrimile-primary focus:bg-white/30 w-full"
                    placeholder="Enter your full name"
                    data-testid="input-name"
                  />
                </div>
                
                <div className="w-full max-w-md">
                  <label className="block text-sm font-medium text-white mb-2 text-center">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="border-white/50 bg-white/20 text-white placeholder:text-gray-300 focus:border-avrimile-primary focus:ring-avrimile-primary focus:bg-white/30 w-full"
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div className="w-full max-w-md">
                  <label className="block text-sm font-medium text-white mb-2 text-center">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="border-white/50 bg-white/20 text-white placeholder:text-gray-300 focus:border-avrimile-primary focus:ring-avrimile-primary focus:bg-white/30 w-full"
                    placeholder="+234 XXX XXX XXXX"
                    data-testid="input-phone"
                  />
                </div>
                
                <div className="w-full max-w-md">
                  <label className="block text-sm font-medium text-white mb-2 text-center">Service Needed</label>
                  <Select value={formData.service} onValueChange={(value) => updateField('service', value)}>
                    <SelectTrigger className="border-white/50 bg-white/20 text-white focus:border-avrimile-primary focus:ring-avrimile-primary w-full" data-testid="select-service">
                      <SelectValue placeholder="Select a service" className="text-gray-300" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-md border-white/50">
                      <SelectItem value="last-mile">Last Mile Delivery</SelectItem>
                      <SelectItem value="express">Express Delivery</SelectItem>
                      <SelectItem value="trucking">Trucking & Bulk Haulage</SelectItem>
                      <SelectItem value="warehousing">Warehousing</SelectItem>
                      <SelectItem value="inventory">Inventory Management</SelectItem>
                      <SelectItem value="procurement">Procurement Services</SelectItem>
                      <SelectItem value="ecommerce">e-Commerce Fulfillment</SelectItem>
                      <SelectItem value="tracking">Real-Time Tracking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <label className="block text-sm font-medium text-white mb-2 text-center">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  rows={4}
                  className="border-white/50 bg-white/20 text-white placeholder:text-gray-300 focus:border-avrimile-primary focus:ring-avrimile-primary focus:bg-white/30 w-full max-w-2xl resize-none"
                  placeholder="Tell us about your logistics needs..."
                  data-testid="textarea-message"
                />
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-fit bg-avrimile-primary hover:bg-avrimile-accent px-8 py-3 shadow-lg"
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
