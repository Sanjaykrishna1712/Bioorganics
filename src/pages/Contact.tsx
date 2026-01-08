import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Home, Building, Globe, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@bioorganics.ch",
    link: "mailto:info@bioorganics.ch",
    description: "General inquiries & support",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+41 32 123 45 67",
    link: "tel:+41321234567",
    description: "Mon-Fri: 9am-5pm",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Chemin des Cevins 4, 2096 Cressier, Switzerland",
    link: "https://maps.google.com/?q=Chemin+des+Cevins+4,+2096+Cressier",
    description: "Our headquarters",
    color: "from-lime-400 to-green-500"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Friday: 9am-5pm",
    link: null,
    description: "Customer support available",
    color: "from-amber-400 to-orange-500"
  },
];

const faqs = [
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We typically respond within 2-4 hours during business days, and within 24 hours on weekends.",
  },
  {
    question: "Can I visit your farm?",
    answer: "Yes! We offer farm tours by appointment. Contact us to schedule a visit.",
  },
  {
    question: "Do you offer corporate partnerships?",
    answer: "Absolutely! We work with businesses for corporate gifting, wellness programs, and sustainable initiatives.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-300/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 40}px`,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 15,
              }}
            >
              ✉️
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8">
              Let's Connect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                & Grow Together
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-green-100/80"
            >
              Have questions about our organic baskets, delivery, or partnerships? 
              We're here to help and would love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-8 shadow-2xl border-2 border-green-200/50"
                >
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6"
                    >
                      <CheckCircle className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-green-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    
                    <p className="text-green-700/80 text-lg mb-8">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-8 shadow-2xl border-2 border-green-200/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-green-900">
                        Send us a Message
                      </h2>
                      <p className="text-green-700/70">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                          <Input 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First name" 
                            className="pl-10 border-green-300 focus:border-green-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                          <Input 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last name" 
                            className="pl-10 border-green-300 focus:border-green-500"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                          <Input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com" 
                            className="pl-10 border-green-300 focus:border-green-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                          <Input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+41 32 123 45 67" 
                            className="pl-10 border-green-300 focus:border-green-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Company (Optional)
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                        <Input 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company name" 
                          className="pl-10 border-green-300 focus:border-green-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Subject *
                      </label>
                      <Input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help you?" 
                        className="border-green-300 focus:border-green-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry, question, or partnership idea..."
                        rows={6}
                        className="border-green-300 focus:border-green-500"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-green-900">
                  Contact Information
                </h2>
                <p className="text-green-700/80">
                  Reach out to us through any of these channels. We're here to help!
                </p>

                <div className="grid gap-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-b from-white to-green-50 rounded-2xl p-6 border-2 border-green-200/50 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <item.icon className="w-6 h-6" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="font-bold text-green-900 mb-1">
                              {item.title}
                            </h3>
                            {item.link ? (
                              <a
                                href={item.link}
                                className="text-green-700 hover:text-emerald-700 transition-colors block group-hover:underline"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <span className="text-green-700">{item.value}</span>
                            )}
                            <p className="text-green-700/60 text-sm mt-1">
                              {item.description}
                            </p>
                          </div>
                          
                          {item.link && (
                            <ChevronRight className="w-5 h-5 text-green-400 group-hover:text-emerald-600 transition-colors" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden border-2 border-green-200/50 shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-green-700/80 text-sm">
                      Chemin des Cevins 4, 2096 Cressier, Switzerland
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 border-green-300 text-green-700 hover:bg-green-50"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/?q=Chemin+des+Cevins+4,+2096+Cressier"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400 rounded-tl" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400 rounded-tr" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400 rounded-bl" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 rounded-br" />
              </motion.div>

              {/* Quick FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border-2 border-green-200/50"
              >
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-green-200 last:border-b-0 last:pb-0">
                      <h4 className="font-medium text-green-900 mb-2">{faq.question}</h4>
                      <p className="text-green-700/80 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-green-500" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Departments
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-6">
              Reach the Right Team
            </h2>
            <p className="text-green-700/70 text-lg max-w-2xl mx-auto">
              Connect with specific departments for faster assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Customer Support",
                email: "support@bioorganics.ch",
                phone: "+41 32 123 45 68",
                description: "Order issues, delivery questions, account help",
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Farm Partnerships",
                email: "farmers@bioorganics.ch",
                phone: "+41 32 123 45 69",
                description: "Joining our network, supply inquiries",
                color: "from-emerald-500 to-green-600"
              },
              {
                title: "Business & Corporate",
                email: "b2b@bioorganics.ch",
                phone: "+41 32 123 45 70",
                description: "Corporate gifting, bulk orders, partnerships",
                color: "from-lime-400 to-green-500"
              },
            ].map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-8 shadow-lg border-2 border-green-200/50 hover:border-green-300 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${dept.color} text-white mb-6`}>
                  <Mail className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  {dept.title}
                </h3>
                
                <p className="text-green-700/80 text-sm mb-6">
                  {dept.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-green-700/60 mb-1">Email</div>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-green-700 hover:text-emerald-700 font-medium"
                    >
                      {dept.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-green-700/60 mb-1">Phone</div>
                    <a 
                      href={`tel:${dept.phone.replace(/\s+/g, '')}`}
                      className="text-green-700 hover:text-emerald-700 font-medium"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2-4h", label: "Avg Response Time", icon: "⚡", color: "from-green-400 to-emerald-500" },
              { value: "98%", label: "Satisfaction Rate", icon: "😊", color: "from-lime-400 to-green-500" },
              { value: "24/7", label: "Support Available", icon: "🌙", color: "from-amber-400 to-orange-500" },
              { value: "10k+", label: "Happy Customers", icon: "❤️", color: "from-rose-400 to-pink-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white text-3xl mb-4`}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-green-100/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">
              Stay Connected
            </h2>
            
            <p className="text-green-700/80 text-lg mb-8">
              Subscribe to our newsletter for organic living tips, seasonal recipes, 
              and exclusive offers delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 border-green-300 focus:border-green-500"
                />
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-green-700/60 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;