import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Leaf, Heart, Users, Truck, Target, Globe, Award, Clock, TrendingUp, ChevronRight } from "lucide-react";
import farmerImage from "@/assets/farmer-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Every product is certified organic. No pesticides, no chemicals — just nature's best.",
    color: "from-green-400 to-emerald-500",
    stat: "500+ Products"
  },
  {
    icon: Heart,
    title: "Fighting Food Waste",
    description: "We save produce that would otherwise go to waste, giving it the appreciation it deserves.",
    color: "from-rose-400 to-pink-500",
    stat: "30% Less Waste"
  },
  {
    icon: Users,
    title: "Supporting Local Farmers",
    description: "Fair prices for farmers, fresh produce for you. We build lasting partnerships.",
    color: "from-amber-400 to-orange-500",
    stat: "120+ Farmers"
  },
  {
    icon: Truck,
    title: "Carbon Neutral Delivery",
    description: "Straight to your door, on your schedule. Our delivery fleet is 100% carbon neutral.",
    color: "from-blue-400 to-cyan-500",
    stat: "Zero Emissions"
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started with a simple idea: save ugly produce and deliver organic food to doorsteps.",
    icon: "🌱",
    achievements: ["First 50 customers", "5 local farm partners", "Zurich pilot"]
  },
  {
    year: "2020",
    title: "Growing Strong",
    description: "Expanded to 5 Swiss cities and partnered with over 50 local organic farmers.",
    icon: "📈",
    achievements: ["5 cities covered", "50+ farm partners", "1,000+ customers"]
  },
  {
    year: "2023",
    title: "Nationwide Impact",
    description: "Now delivering across all of Switzerland, serving over 7,900 happy customers.",
    icon: "🏔️",
    achievements: ["National coverage", "100+ employees", "Food waste award"]
  },
  {
    year: "2025",
    title: "The Future Vision",
    description: "Continuing to innovate sustainable food delivery while reducing waste at every step.",
    icon: "🚀",
    achievements: ["European expansion", "AI optimization", "Carbon negative goal"]
  },
];

const teamMembers = [
  {
    name: "Dr. Maria Schmidt",
    role: "Founder & CEO",
    bio: "Former agricultural scientist turned entrepreneur",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    quote: "Every vegetable has a story worth telling."
  },
  {
    name: "Hans Müller",
    role: "Head of Farming",
    bio: "Third-generation organic farmer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    quote: "The soil speaks to those who listen."
  },
  {
    name: "Elena Rossi",
    role: "Sustainability Director",
    bio: "Environmental policy expert",
    image: "https://images.unsplash.com/photo-1551836026-d5c2c0b4d5a9?w=400&h=400&fit=crop",
    quote: "Sustainability isn't a trend, it's a responsibility."
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section with 3D effect */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 py-24">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px',
            }} />
          </div>
          
          {/* Floating elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-300/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${30 + Math.random() * 50}px`,
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
              🍃
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-3"
              >
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Food that nourishes
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                  life itself
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-green-100/80"
              >
                We blend the wisdom of nature with modern biological science — cultivating 
                food in biologically alive soils, built not on chemicals, but on life itself.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg"
                >
                  Meet Our Team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-300 text-green-100 hover:bg-white/10"
                >
                  Watch Our Story
                </Button>
              </motion.div>
            </motion.div>

            {/* Right 3D Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative perspective-1000"
            >
              <div className="relative group">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ 
                    rotateY: 10,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={farmerImage}
                    alt="Our farmers"
                    className="w-full h-auto rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" />
                </motion.div>

                {/* Floating stats */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">7,900+</div>
                    <div className="text-xs text-green-600 font-medium">Happy Customers</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-2xl"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [5, -5, 5]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">120+</div>
                    <div className="text-xs font-medium">Local Farms</div>
                  </div>
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image with 3D effect */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative perspective-1000"
            >
              <div className="relative group">
                <motion.div
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ 
                    rotateY: 15,
                    rotateX: 5
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={farmerImage}
                    alt="Our mission in action"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent" />
                </motion.div>

                {/* Floating mission statement */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-2xl w-4/5"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="text-sm font-bold text-green-900">Our Mission</div>
                      <div className="text-xs text-green-700/70">Nourishing communities sustainably</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                    Our Vision
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-6">
                  Redefining
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Food Systems
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-green-800/80 leading-relaxed"
                >
                  Imagine a world where every bite does more than satisfy hunger. A world where 
                  food nourishes the body, fuels vitality, and quietly protects long-term health.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200/50"
                >
                  <div className="flex items-start gap-4">
                    <Leaf className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-green-900">
                        Clean food was not enough
                      </h3>
                      <p className="text-green-800/80">
                        Because living nutrition was missing. Conventional farming, driven by 
                        scale and speed, often leaves behind chemical residues that threaten 
                        long-term well-being.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-green-800/80 leading-relaxed"
                >
                  There had to be a better way — one that blends the wisdom of nature with modern 
                  biological science. What emerges is not just food, but life itself: rich in 
                  nutrients, bursting with flavor, and full of vitality.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  asChild
                >
                  <Link to="/impact" className="flex items-center gap-3">
                    See Our Impact Report
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-green-500" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-6">
              What We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Stand For
              </span>
            </h2>
            <p className="text-green-700/70 text-lg max-w-2xl mx-auto">
              Four pillars that guide everything we do, from farm to table
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-green-200/50 hover:border-green-300 h-full relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${value.color} text-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-green-700/80 text-sm mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="pt-4 border-t border-green-200">
                    <div className="text-lg font-bold text-green-900">{value.stat}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-green-500" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-6">
              From Small Roots to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                National Impact
              </span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-emerald-500 to-green-400" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16 last:mb-0`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-8 shadow-lg border border-green-200/50 relative group">
                      {/* Connecting dot */}
                      <div className={`absolute top-8 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {item.icon}
                      </div>

                      <div className="mb-4">
                        <div className="text-2xl font-bold text-green-900 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-green-900 mb-3">{item.title}</h3>
                        <p className="text-green-700/80 mb-4">{item.description}</p>
                      </div>

                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-green-700">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-green-500" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-6">
              Meet the People
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Behind the Produce
              </span>
            </h2>
            <p className="text-green-700/70 text-lg max-w-2xl mx-auto">
              Passionate individuals committed to sustainable agriculture and community wellbeing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-green-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-green-200/50 hover:border-green-300 h-full">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-green-900 mb-1">{member.name}</h3>
                      <div className="text-emerald-600 font-medium mb-2">{member.role}</div>
                      <p className="text-green-700/70 text-sm mb-4">{member.bio}</p>
                    </div>

                    {/* Quote */}
                    <div className="border-t border-green-200 pt-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl text-green-400">"</div>
                        <p className="text-green-800/80 italic text-sm">{member.quote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "7,900+", label: "Happy Families", icon: "🏡", color: "from-green-400 to-emerald-500" },
              { value: "120+", label: "Local Farms", icon: "🚜", color: "from-lime-400 to-green-500" },
              { value: "500+", label: "Organic Products", icon: "🥕", color: "from-amber-400 to-orange-500" },
              { value: "30%", label: "Less Food Waste", icon: "♻️", color: "from-cyan-400 to-blue-500" },
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">
              Join Our Growing Community
            </h2>
            
            <p className="text-green-700/80 text-lg mb-8">
              Be part of the movement towards sustainable, organic living. 
              Together, we're building a healthier future for people and planet.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-50"
              >
                View Career Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;