import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, Clock, User, Tag, BookOpen, TrendingUp, Search, Filter, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "The Hidden Benefits of Organic Produce",
    excerpt: "Discover why choosing organic isn't just about avoiding pesticides — it's about maximizing nutrition, flavor, and supporting sustainable ecosystems.",
    content: "Organic farming methods enhance soil health, increase biodiversity, and produce crops with higher antioxidant content...",
    date: "December 15, 2025",
    readTime: "5 min read",
    author: "Dr. Maria Schmidt",
    authorRole: "Nutrition Scientist",
    category: "Health",
    tags: ["Nutrition", "Organic Science", "Wellness"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop",
    featured: true,
    views: 2543,
    likes: 189,
    comments: 42,
  },
  {
    id: 2,
    title: "Meet Our Farmers: The Müller Family Legacy",
    excerpt: "Three generations of sustainable farming in the Swiss Alps. Discover their commitment to organic practices.",
    content: "For over 50 years, the Müller family has been practicing sustainable agriculture in the heart of Switzerland...",
    date: "December 10, 2025",
    readTime: "8 min read",
    author: "Hans Müller",
    authorRole: "Third-Generation Farmer",
    category: "Community",
    tags: ["Farmers", "Sustainability", "Swiss Alps"],
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&h=600&fit=crop",
    views: 1892,
    likes: 156,
    comments: 28,
  },
  {
    id: 3,
    title: "Winter Vegetables: A Complete Seasonal Guide",
    excerpt: "Master the art of cooking with root vegetables, squash, and winter greens. Tips, recipes, and storage advice.",
    content: "Winter brings a bounty of hearty vegetables that are perfect for comforting, nutrient-dense meals...",
    date: "December 5, 2025",
    readTime: "6 min read",
    author: "Chef Elena Rossi",
    authorRole: "Seasonal Cooking Expert",
    category: "Seasonal",
    tags: ["Winter", "Recipes", "Seasonal Eating"],
    image: "https://images.unsplash.com/photo-1518977676601-b53f82bef903?w=800&h=600&fit=crop",
    views: 3210,
    likes: 234,
    comments: 56,
  },
  {
    id: 4,
    title: "Food Waste: The Global Challenge & Solutions",
    excerpt: "Understanding the scale of food waste and how innovative solutions are making a real difference.",
    content: "One-third of all food produced globally is wasted. Here's how we're tackling this challenge...",
    date: "November 28, 2025",
    readTime: "7 min read",
    author: "Dr. Thomas Weber",
    authorRole: "Environmental Scientist",
    category: "Sustainability",
    tags: ["Zero Waste", "Innovation", "Impact"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    views: 2876,
    likes: 201,
    comments: 39,
  },
  {
    id: 5,
    title: "5 Quick Weeknight Dinner Ideas Under 30 Minutes",
    excerpt: "Busy schedule? These simple recipes use your weekly basket to create delicious, healthy meals fast.",
    content: "Transform your weekly organic basket into quick, satisfying dinners that the whole family will love...",
    date: "November 20, 2025",
    readTime: "4 min read",
    author: "Sarah Chen",
    authorRole: "Home Cooking Specialist",
    category: "Recipes",
    tags: ["Quick Meals", "Family Dinner", "Time-Saving"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop",
    views: 4123,
    likes: 312,
    comments: 67,
  },
  {
    id: 6,
    title: "The Soil Health Revolution",
    excerpt: "How regenerative agriculture is transforming farming and fighting climate change.",
    content: "Healthy soil is the foundation of our food system. Discover the practices that are rebuilding soil health...",
    date: "November 15, 2025",
    readTime: "9 min read",
    author: "Dr. Lisa Park",
    authorRole: "Soil Scientist",
    category: "Science",
    tags: ["Regenerative", "Soil Health", "Climate"],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129fe?w=800&h=600&fit=crop",
    views: 1987,
    likes: 145,
    comments: 31,
  },
];

const categories = ["All", "Health", "Community", "Seasonal", "Sustainability", "Recipes", "Science"];
const popularTags = ["Nutrition", "Sustainability", "Recipes", "Farmers", "Seasonal", "Organic", "Wellness", "Innovation"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesTag && matchesSearch;
  });

  const toggleLike = (id: number) => {
    setLikedPosts(prev => 
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    );
  };

  const trendingPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section with 3D effects */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 py-24">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }} />
        </div>

        {/* Floating leaves */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 40}px`,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              🍃
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
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
                Organic Stories
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8">
              The Organic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Journal
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-green-100/80 mb-12"
            >
              Stories about organic farming, sustainability, delicious recipes, 
              and the passionate people behind your food.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-300" />
                <Input
                  type="search"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg rounded-full border-2 border-green-300/30 bg-white/10 backdrop-blur-sm text-white placeholder-green-200/50 focus:border-green-300 focus:ring-2 focus:ring-green-300/30"
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-green-900 mb-4 uppercase tracking-wider">
                    Categories
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
                  <h3 className="text-sm font-semibold text-green-900 mb-4 uppercase tracking-wider">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <motion.button
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedTag === tag
                            ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md"
                            : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                        }`}
                      >
                        #{tag}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Featured Post - 3D Enhanced */}
      {featuredPost && (
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                  Featured Story
                </span>
              </div>
              <h2 className="text-3xl font-bold text-green-900">
                Editor's Pick
              </h2>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative perspective-1000 group"
            >
              {/* 3D Card Effect */}
              <div className="transform-style-3d group-hover:rotate-y-2 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-2xl border-2 border-green-200/50">
                  {/* Image with 3D effect */}
                  <motion.div
                    className="relative"
                    whileHover={{ 
                      rotateY: 10,
                      rotateX: 5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent rounded-2xl" />
                    </div>
                    
                    {/* Floating badges */}
                    <motion.div
                      className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow-2xl"
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
                      <span className="text-sm font-bold">🔥 Trending</span>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-green-700/80 text-lg mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 text-green-700">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{featuredPost.author}</span>
                          <span className="text-green-700/60 text-sm">{featuredPost.authorRole}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-700">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-700">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 pt-4 border-t border-green-200">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Eye className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-green-900">{featuredPost.views.toLocaleString()}</div>
                            <div className="text-xs text-green-700/60">Views</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleLike(featuredPost.id)}
                            className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200"
                          >
                            <Heart 
                              className={`w-4 h-4 ${
                                likedPosts.includes(featuredPost.id)
                                  ? "fill-rose-500 text-rose-500"
                                  : "text-green-600"
                              }`}
                            />
                          </motion.button>
                          <div>
                            <div className="text-sm font-bold text-green-900">{featuredPost.likes}</div>
                            <div className="text-xs text-green-700/60">Likes</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-green-900">{featuredPost.comments}</div>
                            <div className="text-xs text-green-700/60">Comments</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-3 group/cta"
                    >
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.article>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Blog Grid */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-2">
                    Latest Articles
                  </h2>
                  <p className="text-green-700/60">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedTag(null);
                    setSearchQuery("");
                  }}
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  Clear Filters
                </Button>
              </motion.div>

              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="group perspective-1000"
                    >
                      <div className="transform-style-3d group-hover:rotate-y-1 transition-all duration-500">
                        <div className="grid md:grid-cols-3 gap-8 bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-green-200/50 hover:border-green-300">
                          {/* Image */}
                          <div className="md:col-span-1">
                            <div className="aspect-square rounded-2xl overflow-hidden relative">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent" />
                              <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold rounded-full">
                                {post.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="md:col-span-2 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-green-900 group-hover:text-emerald-700 transition-colors mb-2">
                                {post.title}
                              </h3>
                              <p className="text-green-700/80 text-sm mb-4">
                                {post.excerpt}
                              </p>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center gap-4 flex-wrap text-sm">
                              <div className="flex items-center gap-2 text-green-700">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-2 text-green-700">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-green-700">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            {/* Tags & Actions */}
                            <div className="flex items-center justify-between pt-4 border-t border-green-200">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-3">
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => toggleLike(post.id)}
                                  className="p-2 hover:bg-green-100 rounded-full"
                                >
                                  <Heart 
                                    className={`w-4 h-4 ${
                                      likedPosts.includes(post.id)
                                        ? "fill-rose-500 text-rose-500"
                                        : "text-green-600"
                                    }`}
                                  />
                                </motion.button>
                                <Button
                                  asChild
                                  variant="ghost"
                                  size="sm"
                                  className="text-green-700 hover:text-green-900"
                                >
                                  <Link to={`/blog/${post.id}`}>
                                    Read
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>

                {/* No Results */}
                <AnimatePresence>
                  {filteredPosts.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16"
                    >
                      <div className="inline-flex p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6">
                        <Search className="w-12 h-12 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-900 mb-2">
                        No articles found
                      </h3>
                      <p className="text-green-700/70 mb-6">
                        Try adjusting your search or filters
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-6 shadow-lg border border-green-200/50"
              >
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-green-900">Trending Now</h3>
                </div>
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="group block"
                    >
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-100/50 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-green-900 group-hover:text-emerald-700 transition-colors text-sm">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-green-700/60">
                            <span>{post.category}</span>
                            <span>•</span>
                            <span>{post.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-6 shadow-lg border border-green-200/50"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Tag className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-green-900">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-900"
                          : "hover:bg-green-100/50 text-green-700"
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                      <span className="text-sm text-green-600">
                        {blogPosts.filter(p => p.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-6 text-white"
              >
                <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                <p className="text-green-100/80 text-sm mb-4">
                  Get the latest organic living tips and recipes delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-green-300/30 text-white placeholder-green-200/50"
                  />
                  <Button className="w-full bg-white text-green-900 hover:bg-green-50">
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6"
            >
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">
              Want to Write for Us?
            </h2>
            
            <p className="text-green-700/80 text-lg mb-8">
              Are you passionate about organic living, sustainable farming, or healthy cooking?
              We're always looking for talented writers to contribute to our blog.
            </p>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
            >
              Become a Contributor
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper components
const Eye = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export default Blog;