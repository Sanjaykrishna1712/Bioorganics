import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Trophy, 
  Star, 
  Shield, 
  CheckCircle, 
  ChevronRight,
  Package,
  Leaf,
  Heart,
  Zap,
  TrendingUp,
  Globe,
  Clock,
  Sparkles,
  Award,
  ThumbsUp,
  Smile,
  Target,
  BarChart3,
  RefreshCw,
  Truck,
  Calendar,
  ShieldCheck,
  Gift,MessageCircle,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    price: "299",
    period: "month",
    description: "Perfect for small teams",
    features: [
      "Up to 10 employees",
      "Weekly fruit delivery",
      "Basic snacks selection",
      "Office wellness tips",
      "Email support",
      "Eco-friendly packaging"
    ],
    color: "from-blue-100 via-cyan-50 to-white",
    borderColor: "border-blue-200",
    icon: <Package className="w-6 h-6" />,
    popular: false,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    name: "Business",
    price: "599",
    period: "month",
    description: "Best for growing companies",
    features: [
      "Up to 50 employees",
      "Twice weekly delivery",
      "Premium organic selection",
      "Customizable preferences",
      "Health workshops",
      "Priority support",
      "Monthly wellness reports",
      "Dedicated account manager"
    ],
    color: "from-cyan-100 via-blue-50 to-white",
    borderColor: "border-cyan-300",
    icon: <Trophy className="w-6 h-6" />,
    popular: true,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "For large organizations",
    features: [
      "Unlimited employees",
      "Daily fresh deliveries",
      "Full customization",
      "Dedicated account manager",
      "Nutrition consulting",
      "24/7 premium support",
      "Monthly wellness reports",
      "Custom fruit displays",
      "Wellness program integration"
    ],
    color: "from-blue-50 via-white to-cyan-50",
    borderColor: "border-blue-300",
    icon: <Building2 className="w-6 h-6" />,
    popular: false,
    gradient: "from-blue-600 to-cyan-700"
  },
];

const benefits = [
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Healthier Workforce",
    description: "Reduce sick days by up to 30% with regular fruit consumption",
    color: "bg-gradient-to-br from-pink-50 to-rose-100",
    iconColor: "text-rose-500",
    stat: "30% Reduction"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Increased Productivity",
    description: "Natural energy boost for better focus and performance",
    color: "bg-gradient-to-br from-amber-50 to-yellow-100",
    iconColor: "text-amber-500",
    stat: "15% More Productive"
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Team Satisfaction",
    description: "Boost morale with delicious, healthy treats",
    color: "bg-gradient-to-br from-blue-50 to-sky-100",
    iconColor: "text-blue-500",
    stat: "94% Satisfaction"
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Sustainability",
    description: "100% organic, eco-friendly packaging",
    color: "bg-gradient-to-br from-cyan-50 to-blue-100",
    iconColor: "text-cyan-500",
    stat: "Carbon Neutral"
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Office Manager",
    company: "TechCorp Inc.",
    content: "Our team's productivity has increased noticeably since we started with BioOrganics. The fresh fruit deliveries are always the highlight of the week!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content: "The wellness workshops have transformed our office culture. Employees are happier, healthier, and more engaged than ever before.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "HR Director",
    company: "Global Solutions",
    content: "BioOrganics made our office return-to-work initiative a huge success. The daily fresh deliveries keep everyone energized and motivated.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
];

const processSteps = [
  {
    step: "1",
    title: "Choose Your Plan",
    description: "Select from our flexible office plans tailored to your team size",
    icon: <Target className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-500"
  },
  {
    step: "2",
    title: "Customize Selection",
    description: "Pick your favorite fruits, snacks, and delivery schedule",
    icon: <RefreshCw className="w-8 h-8" />,
    color: "from-cyan-400 to-blue-500"
  },
  {
    step: "3",
    title: "Schedule Delivery",
    description: "Choose delivery days and times that work for your office",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-sky-400 to-cyan-500"
  },
  {
    step: "4",
    title: "Enjoy Freshness",
    description: "Receive fresh, organic fruits delivered right to your office",
    icon: <Truck className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600"
  },
];

export const OfficeHome = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 font-serif leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Fresh Organic Fruits
              </span>
              <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-2 md:mt-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-sky-200 bg-clip-text text-transparent">
                for Your Office
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Boost productivity by 15%, reduce sick days by 30%, and create a 
              healthier, happier workplace with weekly deliveries of premium organic fruits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4">
              
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                
              </motion.div>
            </div>
            
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 text-blue-200 text-sm md:text-base px-4">
              <div className="flex items-center gap-2 md:gap-3">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Gift className="w-4 h-4 md:w-5 md:h-5" />
                <span>Free setup</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-blue-900/20 to-transparent" />
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-sky-50/50" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
              Transform Your Workplace Culture
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              More than just fruit delivery - a comprehensive wellness solution that drives results
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="flex"
              >
                <Card className={`flex flex-col h-full border-0 shadow-lg md:shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ${benefit.color} flex-grow`}>
                  <CardContent className="p-4 md:p-6 lg:p-8 relative flex flex-col flex-grow">
                    <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-5">
                      <Leaf className="w-full h-full" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col flex-grow">
                      <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl ${benefit.color} flex items-center justify-center ${benefit.iconColor} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {benefit.icon}
                      </div>
                      
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed flex-grow">
                        {benefit.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{benefit.stat}</span>
                        <TrendingUp className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Plans Section */}
      <section id="plans" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 md:h-24 lg:h-32 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 bg-gradient-to-t from-cyan-50/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Most Popular Choice
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
              Flexible Office Plans
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your team size and needs. 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex flex-col"
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 md:px-6 py-1 md:py-2 rounded-full shadow-lg text-xs md:text-sm">
                      <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 fill-current" /> Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`flex flex-col h-full bg-gradient-to-b ${plan.color} ${plan.borderColor} border-2 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl flex-grow`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <CardContent className="p-4 md:p-6 lg:p-8 relative flex flex-col flex-grow">
                    <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white mb-4 md:mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                      {plan.icon}
                    </div>
                    
                    <div className="text-center mb-6 md:mb-8">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                        {plan.name}
                      </h3>
                      
                      <div className="flex items-baseline justify-center mb-3 md:mb-4">
                        {plan.price === "Custom" ? (
                          <div>
                            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Custom</span>
                            <span className="text-blue-600 ml-1 md:ml-2 text-sm md:text-base lg:text-lg">Pricing</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">${plan.price}</span>
                            <span className="text-blue-600 ml-1 md:ml-2 text-base md:text-lg lg:text-xl">/{plan.period}</span>
                          </>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm md:text-base lg:text-lg">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-2 md:space-y-3 lg:space-y-4 mb-6 md:mb-8 lg:mb-10 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start group/feature"
                        >
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-500 mr-2 md:mr-3 flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform" />
                          <span className="text-gray-700 text-sm md:text-base lg:text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto"
                    >
                      <Button 
                        className={`w-full py-4 md:py-5 lg:py-7 text-base md:text-lg lg:text-xl rounded-lg md:rounded-xl bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        onClick={() => setSelectedPlan(plan.name)}
                        asChild
                      >
                        <Link to="/office/order" className="flex items-center justify-center gap-2">
                          <span>Start</span>
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        </Link>
                      </Button>
                    </motion.div>
                    
                    <div className="text-center mt-4">
                      <span className="text-blue-600 text-xs md:text-sm">
                        {plan.popular ? "✓ Most popular choice" : "✓ Start"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-10 lg:mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 md:gap-3 lg:gap-4 bg-blue-50 rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-3 md:py-4 border border-blue-200">
              <ThumbsUp className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <span className="text-gray-600 text-sm md:text-base lg:text-lg text-center">
                <span className="font-semibold">All plans include:</span> Free delivery • Eco-friendly packaging • 24/7 support • No contracts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
              Loved by Companies Like Yours
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              See what other companies are saying about their experience with BioOrganics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="flex flex-col h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex-grow">
                  <CardContent className="p-4 md:p-6 lg:p-8 flex flex-col flex-grow">
                    <div className="flex mb-4 md:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg italic mb-6 md:mb-8 leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-3 md:gap-4 mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                        <div className="text-gray-600 text-xs md:text-sm">{testimonial.role}</div>
                        <div className="text-gray-700 font-medium text-xs md:text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Everything you need to know about office delivery
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {[
              {
                question: "How does the delivery work?",
                answer: "We deliver fresh organic fruits directly to your office on a schedule that works for you. Choose between weekly, twice weekly, or daily deliveries. Our delivery team will coordinate with your office manager for smooth drop-offs."
              },
              {
                question: "Can we customize our fruit selection?",
                answer: "Absolutely! Our Business and Enterprise plans include full customization. You can choose specific fruits, add healthy snacks, accommodate dietary restrictions, and even request seasonal specialties."
              },
              {
                question: "What if our employee count changes?",
                answer: "You can easily adjust your plan at any time. Simply contact your account manager or update your preferences in your company dashboard. We're flexible and will adjust deliveries accordingly."
              },
              {
                question: "Do you provide serving supplies?",
                answer: "Yes! We provide eco-friendly serving bowls, utensils, and napkins with every delivery. For larger offices, we can also provide fruit display stands and signage."
              },
              {
                question: "Is there a minimum contract period?",
                answer: "No minimum contracts! All our plans are month-to-month, and you can cancel anytime. We believe in earning your business every month."
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 bg-white rounded-xl md:rounded-2xl px-4 md:px-6 hover:border-blue-300 transition-colors">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-gray-900 hover:text-gray-700 py-4 md:py-6 hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 md:pb-6 text-sm md:text-base lg:text-lg leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-400/20 rounded-full blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-cyan-400/20 rounded-full blur-2xl md:blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-sky-200 bg-clip-text text-transparent">
                Office Culture?
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Join thousands of forward-thinking companies investing in employee wellness.
              Start today—no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-10 lg:mb-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                
              </motion.div>
              
              
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-8 text-blue-200 text-sm md:text-base lg:text-lg">
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <BarChart3 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span>Productivity reports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};