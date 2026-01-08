import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Shield, Target, Globe, Recycle, Leaf, Truck, Calendar, Star, Package, Clock, Check, Plus } from "lucide-react";
import freshProduce from "@/assets/fresh-produce.jpg";
import farmerImage from "@/assets/farmer-portrait.png";
import heroBasket from "@/assets/hero-basket.png";
import luxuryProduce from "@/assets/luxury-produce.png";
import familyWellness from "@/assets/family-wellness.png";

const farmingCards = [
  {
    title: "Conventional Farming",
    description: "Conventional farming driven by scale and speed, often leaves behind chemical residues that threaten our well-being.",
    color: "from-amber-500 to-red-400",
    bgColor: "bg-gradient-to-br from-amber-50 to-red-50",
    borderColor: "border-amber-200",
    icon: "⚠️"
  },
  {
    title: "Organic Farming",
    description: "Organic farming, while a step toward purity, frequently struggles to deliver true nutrition when soils are depleted of vitality. There had to be a better way.",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
    icon: "🌿"
  },
  {
    title: "Beyond Ordinary (ADD LIFE)",
    description: "At ADD LIFE, we blend the wisdom of nature with modern biological science—cultivating food in biologically alive soils, built not on chemicals, but on life itself.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    icon: "🌟",
    highlight: true
  }
];

const experienceImage = "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const impactImage = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const lifestyleImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const valueCards = [
  {
    title: "The Experience",
    features: [
      {
        title: "Uncompromised Nutrition",
        description: "Nutrition that works deep within the body."
      },
      {
        title: "Freshness That Goes Beyond",
        description: "Each bite tastes as fresh as the first."
      },
      {
        title: "Flavor, Elevated Beyond Ordinary",
        description: "This is flavor, grown—not engineered."
      }
    ],
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-50 to-purple-50",
    icon: "✨",
    image: experienceImage,
    imageAlt: "Fresh vibrant vegetables showcasing quality and nutrition"
  },
  {
    title: "The Impact",
    features: [
      {
        title: "Anti-Aging Power",
        description: "Nature at work inside you."
      },
      {
        title: "Wellness Rooted in Nature",
        description: "Cellular-level protection."
      },
      {
        title: "Systemic Wellness Beyond Compare",
        description: "Nature's pharmacy in every bite."
      },
      {
        title: "Beyond Physical Health",
        description: "Cultivating joy and longevity."
      }
    ],
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    icon: "💫",
    image: impactImage,
    imageAlt: "Healthy lifestyle and wellness through nutrition"
  },
  {
    title: "The Lifestyle",
    features: [
      {
        title: "More Than Vegetables",
        description: "ADD LIFE isn't merely vegetables."
      },
      {
        title: "A Lifestyle Transformation",
        description: "For families who value health, beauty, and longevity."
      },
      {
        title: "Beyond Ordinary",
        description: "Why settle for ordinary when you can experience the extraordinary?"
      }
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
    icon: "🌅",
    image: lifestyleImage,
    imageAlt: "Family enjoying healthy lifestyle and meals together"
  }
];

const benefits = [
  "100% biologically alive soils",
  "Chemical-free cultivation",
  "Support regenerative farming",
  "Limited volume production",
  "Carbon-positive delivery",
  "Weekly vitality insights"
];

const features = [
  {
    title: "Vitality",
    description: "Nutrition that works deep within the body, fueling cellular vitality.",
    icon: "💎",
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Taste",
    description: "Each bite tastes as fresh as the first—flavor grown, not engineered.",
    icon: "👑",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Extended Freshness",
    description: "Nature's preservation at work—stays fresh days longer.",
    icon: "🕰️",
    color: "from-emerald-500 to-teal-600"
  }
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Sparkles className="w-4 h-4 text-emerald-200/40" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Redefining
                </span>
                <br />
                <span className="text-emerald-900">Freshness,</span>
                <br />
                <span className="text-teal-700">Nutrition,</span>
                <br />
                <span className="text-green-800">and Luxury</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-emerald-800">
                  Food that nourishes life itself.
                </h2>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Imagine a world where every bite does more than satisfy hunger. 
                  A world where food nourishes the body, fuels vitality, and 
                  quietly protects long-term health.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <Button 
                variant="default" 
                size="xl" 
                asChild 
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/baskets" className="flex items-center gap-3 text-lg font-semibold">
                  <Plus className="w-6 h-6" />
                  Choose ADD LIFE
                </Link>
              </Button>
              
              <p className="text-emerald-700 text-sm font-medium">
                Living nutrition, delivered thoughtfully.
              </p>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-1000"
          >
            <div className="relative transform-style-3d group">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ rotateY: 10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={luxuryProduce}
                  alt="ADD LIFE luxury produce"
                  className="w-full h-auto rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent rounded-3xl" />
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider shadow-2xl rounded-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                Beyond Organic
              </motion.div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 to-green-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const FarmingEvolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {farmingCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`p-8 rounded-3xl ${card.bgColor} border ${card.borderColor} shadow-lg h-full relative overflow-hidden group`}>
                <div className="text-4xl mb-4">{card.icon}</div>
                
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                  {card.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>

                {card.highlight && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-600" />
                )}
              </div>

              {card.highlight && (
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  A Journey Beyond Ordinary
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const EditorialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Food,{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Clean food was not enough, because living nutrition was 
                missing—and conventional farming, driven by scale and 
                speed, often leaves behind chemical residues that threaten 
                long-term well-being.
              </p>
              <p>
                There had to be a better way, one that blends the wisdom 
                of nature with modern biological science to go beyond the 
                ordinary. What emerges is not just food, but life itself: 
                rich in nutrients, bursting with flavor, and full of vitality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={familyWellness}
                alt="Family embracing wellness through nutrition"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const StatementDivider = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-violet-50 to-purple-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
            Designed exclusively for families who care deeply about their health.
          </h3>
          <p className="text-gray-700 text-lg">
            ADD LIFE is grown in limited volumes to preserve soil vitality 
            and nutritional integrity. Subscriptions are offered in limited slots only.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const BasketPreviewSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            For Those Who{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Seek More
            </span>
          </h2>
          
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            Designed exclusively for families who care deeply about their health.
          </p>

          {/* Reassurance chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.span
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${feature.color} text-white font-medium shadow-lg`}
              >
                {feature.icon} {feature.title}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Product display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative">
              <img
                src={freshProduce}
                alt="ADD LIFE produce basket"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ADD LIFE Weekly Basket
                </h3>
                <p className="text-gray-700 mb-6">
                  For Those Who Seek More. Designed exclusively for families who care deeply about their health.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <p className="text-sm text-violet-600 mb-1">Limited Subscription</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">From $85</span>
                      <span className="text-gray-700">/week</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-3 py-1 rounded-full text-sm">
                      🍃 Limited Volume
                    </span>
                    <span className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      🌱 Living Soils
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg"
                    asChild
                  >
                    <Link to="/baskets" className="flex items-center justify-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      Experience ADD LIFE
                    </Link>
                  </Button>
                  
                  <p className="text-center text-sm text-gray-600">
                    ADD LIFE is grown in limited volumes to preserve soil vitality 
                    and nutritional integrity. Subscriptions are offered in limited slots only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const ValuePropsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Why This Is{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover what sets ADD LIFE apart—where every aspect of our produce 
            contributes to a holistic experience of health and vitality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-20`} />
                  <div className="absolute top-4 right-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} text-white shadow-lg`}>
                      <span className="text-xl">{card.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    {card.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${card.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Card-specific CTA */}
                  {card.title === "The Lifestyle" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 pt-6 border-t border-gray-100"
                    >
                      <p className="text-sm text-gray-700 italic">
                        "Why settle for ordinary when you can experience the extraordinary?"
                      </p>
                    </motion.div>
                  )}

                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 rounded-3xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience the ADD LIFE Difference
            </h3>
            <p className="text-gray-700 mb-6">
              Join families who have transformed their approach to nutrition and wellness.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg"
            >
              <Link to="/baskets" className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Start Your Journey
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-50 to-green-100 text-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Your food should nourish more than hunger.
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              It should nourish life itself.
            </span>
          </h2>
          
          <Button 
            variant="default" 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-xl transition-all duration-300"
          >
            <Link to="/baskets" className="text-lg font-semibold">
              Choose ADD LIFE
            </Link>
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};