import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Clock, Users, ChefHat, Search, Filter, Heart, Star, Leaf, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const recipes = [
  {
    id: 1,
    title: "Roasted Root Vegetable Medley",
    description: "A warming dish of seasonal root vegetables with rosemary and thyme",
    time: "45 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
    category: "Main",
    rating: 4.8,
    favorites: 124,
    ingredients: 8,
    tags: ["Seasonal", "Vegetarian", "Comfort Food"],
  },
  {
    id: 2,
    title: "Fresh Garden Salad",
    description: "Crisp organic greens with lemon-herb vinaigrette",
    time: "15 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    category: "Salad",
    rating: 4.5,
    favorites: 89,
    ingredients: 6,
    tags: ["Quick", "Low Carb", "Summer"],
  },
  {
    id: 3,
    title: "Organic Vegetable Stir-Fry",
    description: "Quick and healthy Asian-inspired dish with ginger and garlic",
    time: "20 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&h=400&fit=crop",
    category: "Main",
    rating: 4.7,
    favorites: 156,
    ingredients: 10,
    tags: ["Quick", "Asian", "High Protein"],
  },
  {
    id: 4,
    title: "Creamy Cauliflower Soup",
    description: "Velvety smooth soup with a hint of nutmeg and fresh herbs",
    time: "35 min",
    servings: 6,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop",
    category: "Soup",
    rating: 4.9,
    favorites: 203,
    ingredients: 7,
    tags: ["Comfort Food", "Creamy", "Winter"],
  },
  {
    id: 5,
    title: "Grilled Vegetable Skewers",
    description: "Perfect for summer barbecues with herb marinade",
    time: "30 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    category: "Appetizer",
    rating: 4.6,
    favorites: 112,
    ingredients: 9,
    tags: ["Grilled", "Summer", "Party"],
  },
  {
    id: 6,
    title: "Stuffed Bell Peppers",
    description: "Colorful peppers filled with organic quinoa and roasted vegetables",
    time: "50 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=600&h=400&fit=crop",
    category: "Main",
    rating: 4.8,
    favorites: 178,
    ingredients: 12,
    tags: ["Stuffed", "Healthy", "Colorful"],
  },
  {
    id: 7,
    title: "Farm Fresh Ratatouille",
    description: "Classic French vegetable stew with summer produce",
    time: "60 min",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    category: "Main",
    rating: 4.9,
    favorites: 231,
    ingredients: 11,
    tags: ["French", "Stew", "Summer"],
  },
  {
    id: 8,
    title: "Crispy Kale Chips",
    description: "Healthy snack with nutritional yeast and sea salt",
    time: "25 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
    category: "Snack",
    rating: 4.4,
    favorites: 97,
    ingredients: 4,
    tags: ["Snack", "Crispy", "Healthy"],
  },
  {
    id: 9,
    title: "Harvest Vegetable Curry",
    description: "Spicy curry with seasonal vegetables and coconut milk",
    time: "40 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
    category: "Main",
    rating: 4.8,
    favorites: 189,
    ingredients: 13,
    tags: ["Spicy", "Curry", "Comfort Food"],
  },
];

const categories = ["All", "Main", "Salad", "Soup", "Appetizer", "Snack"];
const difficulties = ["All", "Easy", "Medium", "Difficult"];
const timeRanges = ["All", "Quick (<30min)", "Medium (30-60min)", "Long (>60min)"];

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTime, setSelectedTime] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || recipe.difficulty === selectedDifficulty;
    const matchesTime = selectedTime === "All" || 
      (selectedTime === "Quick (<30min)" && parseInt(recipe.time) < 30) ||
      (selectedTime === "Medium (30-60min)" && parseInt(recipe.time) >= 30 && parseInt(recipe.time) <= 60) ||
      (selectedTime === "Long (>60min)" && parseInt(recipe.time) > 60);
    const matchesSearch = searchQuery === "" || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesTime && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      {/* Hero Section with 3D effect */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              <Leaf className="w-6 h-6 text-green-200/40" />
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
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Organic Recipes
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-6">
              Farm Fresh
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Recipes
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-green-800/80 mb-8"
            >
              Discover delicious ways to prepare your weekly organic basket. 
              Simple, healthy, and bursting with natural flavor.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                <Input
                  type="search"
                  placeholder="Search recipes, ingredients, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg rounded-full border-2 border-green-200 bg-white shadow-lg focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full"
                  size="sm"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <AnimatePresence>
        {showFilters && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-b from-white to-green-50 border-t border-green-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-green-900 mb-3 uppercase tracking-wider">
                    Category
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                            : "bg-green-100 text-green-800 hover:bg-green-200 border border-green-200"
                        }`}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-green-900 mb-3 uppercase tracking-wider">
                    Difficulty
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map((difficulty) => (
                      <motion.button
                        key={difficulty}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedDifficulty === difficulty
                            ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                            : "bg-green-100 text-green-800 hover:bg-green-200 border border-green-200"
                        }`}
                      >
                        {difficulty}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-green-900 mb-3 uppercase tracking-wider">
                    Time
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {timeRanges.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                            : "bg-green-100 text-green-800 hover:bg-green-200 border border-green-200"
                        }`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Stats */}
      <section className="py-8 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Recipes", value: recipes.length, icon: "📋", color: "from-green-400 to-emerald-500" },
              { label: "Avg Rating", value: "4.7", icon: "⭐", color: "from-amber-400 to-orange-500" },
              { label: "Total Favorites", value: "1,279", icon: "❤️", color: "from-rose-400 to-pink-500" },
              { label: "Ingredients Used", value: "50+", icon: "🥕", color: "from-lime-400 to-green-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.color} text-white text-2xl mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-green-900">{stat.value}</div>
                <div className="text-sm text-green-700/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-green-900">
                {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-green-700/60">
                Using ingredients from your weekly basket
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedDifficulty("All");
                setSelectedTime("All");
                setSearchQuery("");
              }}
              className="border-green-300 text-green-700 hover:bg-green-50"
            >
              Clear Filters
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredRecipes.map((recipe, index) => (
                <motion.article
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative perspective-1000"
                >
                  {/* 3D Card Container */}
                  <div className="transform-style-3d group-hover:rotate-y-5 group-hover:rotate-x-2 transition-all duration-500">
                    <div className="bg-gradient-to-b from-white to-green-50 rounded-3xl overflow-hidden border-2 border-green-200/50 shadow-lg group-hover:shadow-2xl group-hover:border-green-300 relative h-full">
                      {/* Image Container */}
                      <div className="aspect-video overflow-hidden relative">
                        <motion.img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          whileHover={{ scale: 1.1 }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <motion.span 
                          className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        >
                          {recipe.category}
                        </motion.span>
                        
                        {/* Favorite Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleFavorite(recipe.id)}
                          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white"
                        >
                          <Heart 
                            className={`w-5 h-5 ${
                              favorites.includes(recipe.id) 
                                ? "fill-rose-500 text-rose-500" 
                                : "text-green-700"
                            }`}
                          />
                        </motion.button>
                        
                        {/* Rating */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold text-green-900">{recipe.rating}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Title and Description */}
                        <h3 className="text-xl font-bold text-green-900 mb-2 group-hover:text-emerald-700 transition-colors">
                          {recipe.title}
                        </h3>
                        <p className="text-green-700/80 text-sm mb-4">
                          {recipe.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {recipe.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 text-center border-t border-green-200 pt-4">
                          <div>
                            <div className="flex items-center justify-center gap-1 text-green-900 mb-1">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm font-semibold">{recipe.time}</span>
                            </div>
                            <div className="text-xs text-green-700/60">Prep Time</div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-center gap-1 text-green-900 mb-1">
                              <Users className="w-4 h-4" />
                              <span className="text-sm font-semibold">{recipe.servings}</span>
                            </div>
                            <div className="text-xs text-green-700/60">Servings</div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-center gap-1 text-green-900 mb-1">
                              <ChefHat className="w-4 h-4" />
                              <span className="text-sm font-semibold">{recipe.difficulty}</span>
                            </div>
                            <div className="text-xs text-green-700/60">Level</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-6">
                          <Button 
                            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                            size="sm"
                          >
                            View Recipe
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-300 text-green-700 hover:bg-green-50"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          <AnimatePresence>
            {filteredRecipes.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-center py-16"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6">
                  <Search className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  No recipes found
                </h3>
                <p className="text-green-700/70 mb-6 max-w-md mx-auto">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                    setSelectedTime("All");
                    setSearchQuery("");
                  }}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Reset All Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
            >
              <Leaf className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Get Fresh Ingredients Delivered
            </h2>
            
            <p className="text-green-100/80 text-lg mb-8">
              Try our weekly organic baskets and get all the ingredients 
              you need for these recipes delivered to your door.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-green-900 hover:bg-green-50 shadow-lg"
              >
                View Baskets
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Recipe Book
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recipes;