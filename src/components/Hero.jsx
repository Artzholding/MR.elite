import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Elegant gentleman"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated Logo */}
        <motion.div className="mb-8 flex justify-center">
          <Logo size="hero" animated={true} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          MR. ELITE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gold-400 text-sm md:text-base tracking-[0.2em] mb-8 uppercase"
        >
          {t('tagline')}
        </motion.p>

        {/* Welcome Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl text-white mb-6 font-light">
            {t('welcome')}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href={`tel:${t('phone')}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg"
          >
            {t('contactNow')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;