import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, Clock, User, Tag, BookOpen, TrendingUp, Search, Filter, Heart, Share2, Eye, MessageCircle, ChevronRight, Bookmark, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=100&h=100&fit=crop",
    category: "Health & Nutrition",
    tags: ["Nutrition", "Organic Science", "Wellness", "Health Benefits"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=500&fit=crop",
    featured: true,
    views: 2543,
    likes: 189,
    comments: 42,
    trending: true,
    color: "from-[#CD98ED] to-purple-500"
  },
  {
    id: 2,
    title: "Meet Our Farmers: The Müller Family Legacy",
    excerpt: "Three generations of sustainable farming in the Swiss Alps. Discover their commitment to organic practices and community building.",
    content: "For over 50 years, the Müller family has been practicing sustainable agriculture in the heart of Switzerland...",
    date: "December 10, 2025",
    readTime: "8 min read",
    author: "Hans Müller",
    authorRole: "Third-Generation Farmer",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    category: "Community Stories",
    tags: ["Farmers", "Sustainability", "Swiss Alps", "Family Business"],
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&h=500&fit=crop",
    views: 1892,
    likes: 156,
    comments: 28,
    trending: false,
    color: "from-[#CD98ED]/80 to-purple-400"
  },
  {
    id: 3,
    title: "Winter Vegetables: A Complete Seasonal Guide",
    excerpt: "Master the art of cooking with root vegetables, squash, and winter greens. Tips, recipes, and storage advice for seasonal eating.",
    content: "Winter brings a bounty of hearty vegetables that are perfect for comforting, nutrient-dense meals...",
    date: "December 5, 2025",
    readTime: "6 min read",
    author: "Chef Elena Rossi",
    authorRole: "Seasonal Cooking Expert",
    authorImage: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop",
    category: "Seasonal Cooking",
    tags: ["Winter", "Recipes", "Seasonal Eating", "Vegetables"],
    image: "https://images.unsplash.com/photo-1518977676601-b53f82bef903?w=800&h=500&fit=crop",
    views: 3210,
    likes: 234,
    comments: 56,
    trending: true,
    color: "from-[#CD98ED]/90 to-purple-400"
  },
  {
    id: 4,
    title: "Food Waste: The Global Challenge & Solutions",
    excerpt: "Understanding the scale of food waste and how innovative solutions are making a real difference in our communities.",
    content: "One-third of all food produced globally is wasted. Here's how we're tackling this challenge...",
    date: "November 28, 2025",
    readTime: "7 min read",
    author: "Dr. Thomas Weber",
    authorRole: "Environmental Scientist",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    category: "Sustainability",
    tags: ["Zero Waste", "Innovation", "Impact", "Environment"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop",
    views: 2876,
    likes: 201,
    comments: 39,
    trending: false,
    color: "from-[#CD98ED]/70 to-purple-400"
  },
  {
    id: 5,
    title: "5 Quick Weeknight Dinner Ideas Under 30 Minutes",
    excerpt: "Busy schedule? These simple recipes use your weekly basket to create delicious, healthy meals fast without compromising on nutrition.",
    content: "Transform your weekly organic basket into quick, satisfying dinners that the whole family will love...",
    date: "November 20, 2025",
    readTime: "4 min read",
    author: "Sarah Chen",
    authorRole: "Home Cooking Specialist",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    category: "Quick Recipes",
    tags: ["Quick Meals", "Family Dinner", "Time-Saving", "Healthy"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=500&fit=crop",
    views: 4123,
    likes: 312,
    comments: 67,
    trending: true,
    color: "from-[#CD98ED]/80 to-purple-500"
  },
  {
    id: 6,
    title: "The Soil Health Revolution",
    excerpt: "How regenerative agriculture is transforming farming and fighting climate change while producing healthier food.",
    content: "Healthy soil is the foundation of our food system. Discover the practices that are rebuilding soil health...",
    date: "November 15, 2025",
    readTime: "9 min read",
    author: "Dr. Lisa Park",
    authorRole: "Soil Scientist",
    authorImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop",
    category: "Science & Research",
    tags: ["Regenerative", "Soil Health", "Climate", "Research"],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129fe?w=800&h=500&fit=crop",
    views: 1987,
    likes: 145,
    comments: 31,
    trending: false,
    color: "from-[#CD98ED]/60 to-purple-400"
  },
  {
    id: 7,
    title: "Urban Farming: Growing Food in Small Spaces",
    excerpt: "Learn how to grow your own organic produce even in the smallest urban spaces with these innovative gardening techniques.",
    content: "Urban farming is revolutionizing how city dwellers access fresh, organic produce...",
    date: "December 1, 2025",
    readTime: "6 min read",
    author: "Michael Rodriguez",
    authorRole: "Urban Agriculture Expert",
    authorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=100&h=100&fit=crop",
    category: "Urban Gardening",
    tags: ["Urban Farming", "Gardening", "Sustainability", "DIY"],
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop",
    views: 2890,
    likes: 198,
    comments: 45,
    trending: true,
    color: "from-[#CD98ED]/90 to-purple-500"
  },
  {
    id: 8,
    title: "The Art of Fermentation: Preserving Nutrients Naturally",
    excerpt: "Discover how fermentation can enhance the nutritional value of your food while creating delicious flavors.",
    content: "Fermentation is an ancient preservation method that boosts probiotic content and nutrient availability...",
    date: "November 25, 2025",
    readTime: "7 min read",
    author: "Ana Silva",
    authorRole: "Fermentation Specialist",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    category: "Food Preservation",
    tags: ["Fermentation", "Probiotics", "Preservation", "Healthy"],
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=500&fit=crop",
    views: 2345,
    likes: 167,
    comments: 38,
    trending: false,
    color: "from-[#CD98ED]/70 to-purple-400"
  },
  {
    id: 9,
    title: "Herbal Remedies from Your Garden",
    excerpt: "Common garden herbs and their medicinal properties. Learn to create natural remedies for everyday ailments.",
    content: "Your garden can be your pharmacy. Many common herbs have powerful healing properties...",
    date: "November 18, 2025",
    readTime: "8 min read",
    author: "Dr. James Wilson",
    authorRole: "Herbal Medicine Practitioner",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    category: "Natural Remedies",
    tags: ["Herbs", "Medicine", "Natural", "Wellness"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    views: 3123,
    likes: 245,
    comments: 52,
    trending: true,
    color: "from-[#CD98ED]/80 to-purple-500"
  },
];

const categories = ["All", "Health & Nutrition", "Community Stories", "Seasonal Cooking", "Sustainability", "Quick Recipes", "Science & Research", "Urban Gardening", "Food Preservation", "Natural Remedies"];
const popularTags = ["Nutrition", "Sustainability", "Recipes", "Farmers", "Seasonal", "Organic", "Wellness", "Innovation", "Health", "Cooking", "Gardening", "Natural"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [showPostModal, setShowPostModal] = useState(false);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesTag && matchesSearch;
  });

  const toggleLike = (id: number) => {
    setLikedPosts(prev => 
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    );
  };

  const toggleSave = (id: number) => {
    setSavedPosts(prev => 
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    );
  };

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setShowPostModal(true);
  };

  const trendingPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  const PostModal = () => {
    if (!selectedPost) return null;

    return (
      <AnimatePresence>
        {showPostModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPostModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-10 z-50 overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white z-10 border-b border-purple-200">
                <div className="flex justify-between items-center p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-10 rounded-full bg-gradient-to-b ${selectedPost.color}`} />
                    <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                  </div>
                  <Button
                    onClick={() => setShowPostModal(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8">
                  {/* Hero Section */}
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-2">
                      <div className="mb-8">
                        
                        <p className="text-gray-600 text-lg">
                          {selectedPost.excerpt}
                        </p>
                      </div>

                      {/* Post Details */}
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-[#CD98ED]/10 to-purple-50 rounded-2xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-5 h-5 text-[#CD98ED]" />
                            <span className="font-semibold text-gray-900">Read Time</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{selectedPost.readTime}</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-[#CD98ED]/10 to-purple-50 rounded-2xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-5 h-5 text-[#CD98ED]" />
                            <span className="font-semibold text-gray-900">Published</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{selectedPost.date}</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-[#CD98ED]/10 to-purple-50 rounded-2xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <User className="w-5 h-5 text-[#CD98ED]" />
                            <span className="font-semibold text-gray-900">Author</span>
                          </div>
                          <div className="text-xl font-bold text-gray-900">{selectedPost.author}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="prose max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Article Content</h3>
                        <p className="text-gray-700 mb-4">
                          {selectedPost.content}
                        </p>
                        <p className="text-gray-700">
                          Organic living goes beyond just food choices—it's a holistic approach to life that considers the impact of our decisions on the environment, our health, and future generations. By choosing organic, we support farming practices that work in harmony with nature rather than against it.
                        </p>
                      </div>
                    </div>
                    
                    {/* Image on Right Side */}
                    <div className="md:col-span-1">
                      <div className="sticky top-8">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl mb-6">
                          <img 
                            src={selectedPost.image} 
                            alt={selectedPost.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <span className={`bg-gradient-to-r ${selectedPost.color} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                              {selectedPost.category}
                            </span>
                            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                              <Eye className="w-4 h-4 text-[#CD98ED]" />
                              <span className="text-sm font-bold text-gray-900">{selectedPost.views.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="bg-gradient-to-br from-[#CD98ED]/10 to-purple-50 rounded-2xl p-4 mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#CD98ED]/30">
                              <img src={selectedPost.authorImage} alt={selectedPost.author} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">{selectedPost.author}</div>
                              <div className="text-sm text-gray-600">{selectedPost.authorRole}</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">
                            Expert in {selectedPost.category.toLowerCase()} with years of experience in sustainable practices.
                          </p>
                        </div>

                        
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedPost.tags.map((tag: string) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[#CD98ED]/10 text-[#CD98ED] border border-[#CD98ED]/30 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-[#CD98ED] to-purple-500 hover:from-[#CD98ED]/90 hover:to-purple-600">
                      Read Full Article
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#CD98ED]/30 text-[#CD98ED] hover:bg-[#CD98ED]/10"
                      onClick={() => toggleSave(selectedPost.id)}
                    >
                      <Bookmark 
                        className={`w-4 h-4 mr-2 ${
                          savedPosts.includes(selectedPost.id) 
                            ? "fill-amber-400 text-amber-400" 
                            : ""
                        }`}
                      />
                      {savedPosts.includes(selectedPost.id) ? "Saved" : "Save for Later"}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F694C3] to-[#F694C3] py-12 rounded-b-[60px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight grid justify-center">
                <span className="text-[#3A0F2E]">The Organic</span>
                <span className="text-white">Knowledge Base</span>
              </h1>
              
             <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="text-black text-3xl md:text-4xl font-serif italic leading-tight mb-8"
>
  "Sharing knowledge about organic living and sustainable practices for a healthier planet"
</motion.p>

            </motion.div>

            
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <AnimatePresence>
        {showFilters && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-b from-white to-[#CD98ED]/5 border-t border-[#CD98ED]/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#CD98ED]" />
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
                            ? "bg-gradient-to-r from-[#CD98ED] to-purple-500 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-[#CD98ED]/10 border border-[#CD98ED]/30"
                        }`}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#CD98ED]" />
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
                            ? "bg-gradient-to-r from-[#CD98ED] to-purple-500 text-white shadow-md"
                            : "bg-[#CD98ED]/10 text-[#CD98ED] hover:bg-[#CD98ED]/20 border border-[#CD98ED]/30"
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

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredPosts.length} Article{filteredPosts.length !== 1 ? 's' : ''} Found
                </h2>{/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#CD98ED]" />
                <Input
                  type="search"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg rounded-full border-2 border-[#CD98ED]/30 bg-white/10 backdrop-blur-sm text-white placeholder-[#CD98ED]/50 focus:border-[#CD98ED] focus:ring-2 focus:ring-[#CD98ED]/30"
                />
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#CD98ED] to-purple-500 hover:from-[#CD98ED]/90 hover:to-purple-600 rounded-full"
                  size="sm"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </motion.div>
                <p className="text-gray-600">
                  Expert insights on organic living and sustainable practices
                </p>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-[#CD98ED]">
                  {selectedCategory !== "All" ? `Category: ${selectedCategory}` : "All Categories"}
                </span>
                {selectedTag && ` • Tagged: #${selectedTag}`}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
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
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg group-hover:shadow-xl group-hover:border-gray-300 relative h-full cursor-pointer transition-all duration-300">
                    {/* Image Container */}
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                      
                      {/* Category Badge with #CD98ED */}
                      <motion.span 
                        className={`absolute top-4 left-4 bg-gradient-to-r ${post.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      >
                        {post.category}
                      </motion.span>
                      
                      {/* Trending Badge */}
                      {post.trending && (
                        <span className="absolute top-4 right-4 bg-gradient-to-r from-[#CD98ED] to-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                          <Star className="w-3 h-3 inline mr-1" />
                          Trending
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#CD98ED]/30">
                          <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.date}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {post.tags.slice(0, 3).map((tag: string) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-[#CD98ED]/10 text-[#CD98ED] text-xs rounded-full border border-[#CD98ED]/30"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 text-center border-t border-gray-200 pt-4">
                        <div>
                          <div className="flex items-center justify-center gap-1 text-gray-900 mb-1">
                            <Clock className="w-4 h-4 text-[#CD98ED]" />
                            <span className="text-sm font-semibold">{post.readTime}</span>
                          </div>
                          <div className="text-xs text-gray-600">Read Time</div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-center gap-1 text-gray-900 mb-1">
                            <Eye className="w-4 h-4 text-[#CD98ED]" />
                            <span className="text-sm font-semibold">{post.views.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-600">Views</div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-center gap-1 text-gray-900 mb-1">
                            <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? "fill-rose-500 text-rose-500" : "text-[#CD98ED]"}`} />
                            <span className="text-sm font-semibold">{post.likes}</span>
                          </div>
                          <div className="text-xs text-gray-600">Likes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          <AnimatePresence>
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-center py-16"
              >
                <div className="inline-flex p-6 bg-gradient-to-br from-[#CD98ED]/10 to-purple-50 rounded-3xl mb-6">
                  <Search className="w-16 h-16 text-[#CD98ED]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Try adjusting your search or filters. Maybe try a different category or search term.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={() => setSearchQuery("")}
                    variant="outline"
                    className="border-[#CD98ED]/30 text-[#CD98ED] hover:bg-[#CD98ED]/10"
                  >
                    Clear Search
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedTag(null);
                      setSearchQuery("");
                    }}
                    className="bg-gradient-to-r from-[#CD98ED] to-purple-500 hover:from-[#CD98ED]/90 hover:to-purple-600"
                  >
                    Reset All Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Post Modal */}
      <PostModal />
    </Layout>
  );
};

export default Blog;