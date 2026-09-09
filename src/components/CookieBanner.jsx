import React from 'react';
import { motion } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner = ({ onAccept, onDecline }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-md rounded-lg p-6 border border-gold-600/20 shadow-2xl">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="w-10 h-10 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Cookie className="text-gold-400" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">Cookie Voorkeuren</h3>
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                {t('cookieText')}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onAccept}
                  className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-medium rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm shadow-lg"
                >
                  {t('cookieAccept')}
                </button>
                
                <button
                  onClick={onDecline}
                  className="px-6 py-2 border border-white/30 text-white/70 font-medium rounded-full hover:bg-white/10 hover:text-white hover:border-white/50 transition-all duration-300 text-sm"
                >
                  {t('cookieDecline')}
                </button>
                
                <button
                  onClick={() => { window.location.hash = '#privacy'; onDecline(); }}
                  className="text-gold-400 hover:text-gold-300 transition-colors underline text-sm py-2"
                >
                  {t('cookieLearn')}
                </button>
              </div>
            </div>
          </div>
          
          <button
            onClick={onDecline}
            className="text-white/50 hover:text-white transition-colors p-1 ml-4 flex-shrink-0"
            aria-label="Sluiten"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;