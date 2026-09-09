import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-900 border-t border-gold-600/20 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Logo size="small" />
            <div>
              <h3 className="text-lg font-bold text-white">MR. ELITE</h3>
            </div>
          </div>
          <p className="text-white/60 text-sm mb-6">
            International high class companion service
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a
            href="#privacy"
            className="text-white/60 hover:text-white transition-colors"
          >
            {t('privacyPolicy')}
          </a>
          <span className="text-white/30">|</span>
          <a
            href="#terms"
            className="text-white/60 hover:text-white transition-colors"
          >
            {t('termsConditions')}
          </a>
          <span className="text-white/30">|</span>
          <a
            href={`tel:${t('phone')}`}
            className="text-gold-400 hover:text-gold-300 transition-colors"
          >
            {t('phone')}
          </a>
        </div>

        <div className="text-center">
          <p className="text-white/40 text-xs">
            © 2025 Mr. Elite. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;