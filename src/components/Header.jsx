import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ficLogo from '../assets/fic-logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(30, 64, 175, 0.95)', 'rgba(30, 64, 175, 1)']
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg backdrop-blur-sm' : 'shadow-md'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center py-3">
            {/* Logo Section */}
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:bg-white/30 transition-all" />
                <img 
                  src={ficLogo} 
                  alt="FIC Logo" 
                  className="h-12 w-12 rounded-full border-2 border-white/50 relative z-10 object-cover shadow-lg"
                />
              </motion.div>
              <div className="ml-3">
                <motion.span 
                  className="text-xl lg:text-2xl font-bold text-white tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  FIC Quakers
                </motion.span>
                <p className="text-xs text-blue-100 hidden sm:block">Friends Church Community</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="relative px-4 py-2 text-white font-medium group"
                    >
                      <span className="relative z-10 transition-colors group-hover:text-blue-100">
                        {item.label}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-white/20 rounded-lg"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-colors" />
                      
                      {/* Bottom border on hover */}
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 transform -translate-x-1/2" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-blue-900/95 backdrop-blur-sm"
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20
                  }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'bg-white/20 text-white font-semibold'
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={18} className={`transition-transform ${isActive(item.path) ? 'translate-x-1' : ''}`} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </motion.header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;