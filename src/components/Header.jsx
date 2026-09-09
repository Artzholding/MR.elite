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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-ink-950/80 backdrop-blur-xl border-b border-gold-600/10'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-14' : 'h-20'}`}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={goToHome}
          >
            <Logo size="medium" animated={false} />
            <div>
              <h1 className="text-base font-bold text-white tracking-wide group-hover:text-gold-300 transition-colors">MR. ELITE</h1>
              <p className="text-[10px] text-gold-400/70 tracking-[0.2em] uppercase">Premium Service</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-7">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {t('about')}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {t('services')}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => window.location.hash = '#tarieven'}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {t('rates')}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <motion.button
                onClick={goToBooking}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-medium rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm shadow-lg hover:shadow-gold-500/25"
              >
                {t('booking')}
              </motion.button>
            </nav>

            <div className="h-6 w-px bg-white/10" />

            <motion.a
              href={`tel:${t('phone')}`}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone size={15} />
              <span className="font-medium text-sm">{t('phone')}</span>
            </motion.a>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => switchLanguage('nl')}
                className={`px-2 py-1 text-xs tracking-wide transition-colors ${
                  language === 'nl' ? 'text-gold-400 font-semibold' : 'text-white/40 hover:text-white/70'
                }`}
              >
                NL
              </button>
              <span className="text-white/20 text-xs">/</span>
              <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 text-xs tracking-wide transition-colors ${
                  language === 'en' ? 'text-gold-400 font-semibold' : 'text-white/40 hover:text-white/70'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={goToBooking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-medium rounded-full text-sm shadow-lg"
            >
              {t('booking')}
            </motion.button>

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
              className="md:hidden border-t border-white/[0.06] py-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-white/80 hover:text-gold-300 transition-colors py-2.5 text-sm"
                >
                  {t('about')}
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-white/80 hover:text-gold-300 transition-colors py-2.5 text-sm"
                >
                  {t('services')}
                </button>
                <button
                  onClick={() => window.location.hash = '#tarieven'}
                  className="text-left text-white/80 hover:text-gold-300 transition-colors py-2.5 text-sm"
                >
                  {t('rates')}
                </button>
                <a
                  href={`tel:${t('phone')}`}
                  className="flex items-center space-x-2 text-gold-400 py-2.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  <Phone size={15} />
                  <span>{t('phone')}</span>
                </a>
                <div className="flex items-center space-x-4 py-2.5">
                  <span className="text-white/40 text-xs uppercase tracking-wider">{t('language')}:</span>
                  <button
                    onClick={() => switchLanguage('nl')}
                    className={`text-sm ${language === 'nl' ? 'text-gold-400 font-semibold' : 'text-white/50'}`}
                  >
                    NL
                  </button>
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`text-sm ${language === 'en' ? 'text-gold-400 font-semibold' : 'text-white/50'}`}
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
