import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const footerLinks = {
  discover: [
    { name: "Our concept", href: "/about" },
    { name: "What does imperfect mean?", href: "/about" },
    { name: "The facts about food waste", href: "/about" },
    { name: "About", href: "/about" },
  ],
  more: [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "FAQ", href: "/faq" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-lime-50 to-emerald-50 text-emerald-900 py-16 relative overflow-hidden border-t border-emerald-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <motion.div 
              className="flex items-center gap-2 mb-6 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg shadow-sm"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="w-6 h-6 text-white" />
              </motion.div>
              <span className="font-serif text-2xl font-bold italic leading-tight text-emerald-800">
                Bio<br/>Organics
              </span>
            </motion.div>
            <p className="text-emerald-700/80 text-sm leading-relaxed">
              Making organic accessible to all,<br />
              while reducing food waste.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-800">Discover</h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-emerald-700/70 hover:text-emerald-800 transition-all duration-300 hover:pl-2 block group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 mr-2 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-800">More</h4>
            <ul className="space-y-3">
              {footerLinks.more.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-emerald-700/70 hover:text-emerald-800 transition-all duration-300 hover:pl-2 block group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 mr-2 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-800">Contact Us</h4>
            <motion.div 
              className="text-emerald-700/70 text-sm space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>BioOrganics SA</p>
              <p>Chemin des Cevins 4</p>
              <p>2096 Cressier, Switzerland</p>
              <p className="pt-2">
                <motion.a 
                  href="mailto:info@bioorganics.ch" 
                  className="hover:text-emerald-800 transition-colors inline-block font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  info@bioorganics.ch
                </motion.a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="mt-12 pt-8 border-t border-emerald-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <motion.a 
                href="#" 
                className="text-emerald-700/70 hover:text-emerald-800 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-emerald-700/70 hover:text-emerald-800 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-emerald-700/70 hover:text-emerald-800 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-emerald-700/70">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/terms" className="hover:text-emerald-800 transition-colors">
                  Terms & conditions
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/privacy" className="hover:text-emerald-800 transition-colors">
                  Privacy policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/contact" className="hover:text-emerald-800 transition-colors">
                  Contact us
                </Link>
              </motion.div>
            </div>
          </div>
          
          <motion.p 
            className="text-center text-emerald-700/50 text-xs mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} BioOrganics. All rights reserved. Organic certified.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};