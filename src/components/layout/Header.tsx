import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { 
    name: "Understand", 
    href: "#",
    dropdown: [
      { name: "Our Philosophy", href: "/about" },
      { name: "Why Add Life ", href: "/about" },
      { name: "Subscriptions", href: "/about" },
      { name: "Experience ", href: "/about" },
    ]
  },
  { name: "Recipes", href: "/recipes" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const topLinks = [
  { name: "At home", href: "/" },
  { name: "At the office", href: "/office" }, 
];
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-green-50 to-white backdrop-blur-sm bg-opacity-95">
      {/* Top bar */}
      <div className="border-b border-green-200/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              {topLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-green-800/70 hover:text-green-900 transition-all duration-300 hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link to="/gift" className="text-green-800/70 hover:text-green-900 transition-all duration-300 hover:scale-105">
                Gift
              </Link>
              <Link to="/contact" className="text-green-800/70 hover:text-green-900 transition-all duration-300 hover:scale-105">
                Contact
              </Link>
              <span className="text-green-800/70">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
              whileHover={{ rotate: 5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Leaf className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <span className="font-serif text-2xl font-bold italic text-green-900 leading-tight">
                Bio<br/>Organics
              </span>
              <motion.div 
                className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                initial={false}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {link.dropdown ? (
                  <motion.button 
                    className="flex items-center gap-1 px-4 py-2 rounded-full border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 text-green-900 font-medium hover:from-green-100 hover:to-emerald-100 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    <motion.div
                      animate={{ rotate: dropdownOpen === link.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      to={link.href}
                      className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                        location.pathname === link.href
                          ? "text-green-900 bg-green-50 shadow-inner"
                          : "text-green-800/70 hover:text-green-900 hover:bg-green-50/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )}
                
                <AnimatePresence>
                  {link.dropdown && dropdownOpen === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-white to-green-50 rounded-xl shadow-xl border border-green-200 overflow-hidden backdrop-blur-sm"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-green-900 hover:bg-green-100/50 transition-all duration-300 hover:pl-6 border-b border-green-100 last:border-b-0"
                          onClick={() => setDropdownOpen(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" size="lg" asChild className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Link to="/login" className="flex items-center gap-2 text-white">
                  <User className="w-4 h-4" />
                  My account
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild className="border-green-300 text-green-900 hover:bg-green-50">
                <Link to="/baskets" className="flex items-center gap-2">
                  View baskets
                  <ChevronDown className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg bg-green-50 text-green-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-white to-green-50 border-t border-green-200"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-green-100 last:border-b-0">
                  {link.dropdown ? (
                    <div className="space-y-2 py-3">
                      <span className="font-semibold text-green-900 block py-2">{link.name}</span>
                      <div className="pl-4 space-y-2">
                        {link.dropdown.map((item) => (
                          <motion.div key={item.name} whileHover={{ x: 10 }}>
                            <Link
                              to={item.href}
                              className="block py-2 text-green-700 hover:text-green-900 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <motion.div whileHover={{ x: 10 }}>
                      <Link
                        to={link.href}
                        className="block font-medium text-green-700 hover:text-green-900 py-3 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="default" size="lg" asChild className="bg-gradient-to-r from-green-600 to-emerald-600">
                  <Link to="/account" onClick={() => setMobileMenuOpen(false)}>
                    My account
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-green-300 text-green-900">
                  <Link to="/baskets" onClick={() => setMobileMenuOpen(false)}>
                    View baskets
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};