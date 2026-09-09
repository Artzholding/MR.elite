import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '14+', label: t('yearsExperience') },
    { value: '500+', label: t('satisfiedClients') },
    { value: '24/7', label: t('availability') },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-ink-950 bg-grain relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-600/[0.06] rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 block">{t('about')}</span>
          <h2 className="section-title mb-12">
            {t('aboutIntro')}
          </h2>

          <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-3xl mx-auto font-light">
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
          className="divider-gold mb-20"
        />

        {/* Additional About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-10">
            {t('aboutTitle')}
          </h3>

          <div className="space-y-5 text-lg text-white/60 leading-relaxed max-w-3xl mx-auto font-light">
            <p>{t('aboutText1')}</p>
            <p>{t('aboutText2')}</p>
            <p>{t('aboutText3')}</p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl font-semibold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-[11px] md:text-xs uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
