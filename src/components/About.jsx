import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            {t('aboutIntro')}
          </h2>
          
          <div className="space-y-8 text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            <p>{t('aboutIntro1')}</p>
            <p>{t('aboutIntro2')}</p>
            <p>{t('aboutIntro3')}</p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-16"
        />

        {/* Additional About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t('aboutTitle')}
          </h3>
          
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>{t('aboutText1')}</p>
            <p>{t('aboutText2')}</p>
            <p>{t('aboutText3')}</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">14+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">{t('yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">{t('satisfiedClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">{t('availability')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;