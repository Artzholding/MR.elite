import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Header = () => {
  const { language, t, switchLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're on booking page, go back to home first
    if (window.location.hash === '#booking') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goToBooking = () => {
    window.location.hash = '#booking';
    setIsMobileMenuOpen(false);
  };

  const goToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gold-600/20' : 'bg-black/90 backdrop-blur-sm border-b border-gold-600/20'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={goToHome}
          >
            <Logo size="medium" animated={false} />
            <div>
              <h1 className="text-lg font-bold text-white">MR. ELITE</h1>
              <p className="text-xs text-gold-400 tracking-wider">PREMIUM SERVICE</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {t('about')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {t('services')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => window.location.hash = '#tarieven'}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {t('rates')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={goToBooking}
                className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-medium rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
              >
                {t('booking')}
              </button>
            </nav>

            <motion.a
              href={`tel:${t('phone')}`}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium text-sm">{t('phone')}</span>
            </motion.a>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => switchLanguage('nl')}
                className={`px-2 py-1 text-sm transition-colors ${
                  language === 'nl' ? 'text-gold-400 font-medium' : 'text-white/60 hover:text-white'
                }`}
              >
                NL
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 text-sm transition-colors ${
                  language === 'en' ? 'text-gold-400 font-medium' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Booking Button */}
            <motion.button
              onClick={goToBooking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-medium rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm shadow-lg"
            >
              {t('booking')}
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 py-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-white/80 hover:text-white transition-colors py-2"
                >
                  {t('about')}
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-white/80 hover:text-white transition-colors py-2"
                >
                  {t('services')}
                </button>
                <button
                  onClick={() => window.location.hash = '#tarieven'}
                  className="text-left text-white/80 hover:text-white transition-colors py-2"
                >
                  {t('rates')}
                </button>
                <a
                  href={`tel:${t('phone')}`}
                  className="flex items-center space-x-2 text-gold-400 py-2"
                  onClick={closeMobileMenu}
                >
                  <Phone size={16} />
                  <span>{t('phone')}</span>
                </a>
                <div className="flex items-center space-x-4 py-2">
                  <span className="text-white/60 text-sm">{t('language')}:</span>
                  <button
                    onClick={() => switchLanguage('nl')}
                    className={`text-sm ${language === 'nl' ? 'text-gold-400 font-medium' : 'text-white/60'}`}
                  >
                    NL
                  </button>
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`text-sm ${language === 'en' ? 'text-gold-400 font-medium' : 'text-white/60'}`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;