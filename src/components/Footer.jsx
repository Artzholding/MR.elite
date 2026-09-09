import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink-950 border-t border-gold-600/10 py-14 bg-grain">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Logo size="small" />
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">MR. ELITE</h3>
            </div>
          </div>
          <p className="text-white/40 text-sm font-light tracking-wide">
            International high class companion service
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-sm">
          <a
            href="#privacy"
            className="text-white/50 hover:text-gold-300 transition-colors"
          >
            {t('privacyPolicy')}
          </a>
          <span className="text-white/15">|</span>
          <a
            href="#terms"
            className="text-white/50 hover:text-gold-300 transition-colors"
          >
            {t('termsConditions')}
          </a>
          <span className="text-white/15">|</span>
          <a
            href={`tel:${t('phone')}`}
            className="text-gold-400/80 hover:text-gold-300 transition-colors"
          >
            {t('phone')}
          </a>
        </div>

        <div className="text-center">
          <p className="text-white/30 text-xs font-light tracking-wide">
            © 2025 Mr. Elite. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
