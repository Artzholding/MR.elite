import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Star, Shield, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const arrangements = [
    {
      icon: Heart,
      title: t('arr1Title'),
      description: t('arr1Desc'),
      features: [t('arr1F1'), t('arr1F2'), t('arr1F3')]
    },
    {
      icon: Users,
      title: t('arr2Title'),
      description: t('arr2Desc'),
      features: [t('arr2F1'), t('arr2F2'), t('arr2F3')]
    },
    {
      icon: Globe,
      title: t('arr3Title'),
      description: t('arr3Desc'),
      features: [t('arr3F1'), t('arr3F2'), t('arr3F3')]
    }
  ];

  const experiences = [
    {
      icon: Heart,
      title: t('exp1Title'),
      description: t('exp1Desc'),
      features: [t('exp1F1'), t('exp1F2'), t('exp1F3')]
    },
    {
      icon: Star,
      title: t('exp2Title'),
      description: t('exp2Desc'),
      features: [t('exp2F1'), t('exp2F2'), t('exp2F3')]
    },
    {
      icon: Users,
      title: t('exp3Title'),
      description: t('exp3Desc'),
      features: [t('exp3F1'), t('exp3F2'), t('exp3F3')]
    }
  ];

  const qualities = [
    { icon: Star, title: t('qual1Title'), description: t('qual1Desc') },
    { icon: Shield, title: t('qual2Title'), description: t('qual2Desc') },
    { icon: MessageSquare, title: t('qual3Title'), description: t('qual3Desc') }
  ];

  const goToBooking = () => {
    window.location.hash = '#booking';
  };

  const Card = ({ item, index, delayBase = 0 }) => {
    const IconComponent = item.icon;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: delayBase + index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group"
      >
        <div className="glass-card p-8 h-full">
          <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-gold-500/30 group-hover:to-gold-600/20 group-hover:border-gold-400/40 transition-all duration-300">
            <IconComponent className="text-gold-400" size={24} />
          </div>

          <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors">
            {item.title}
          </h4>

          <p className="text-white/55 leading-relaxed mb-6 text-sm font-light">
            {item.description}
          </p>

          <ul className="space-y-2.5">
            {item.features.map((feature, fi) => (
              <li key={fi} className="flex items-center text-sm text-white/50 font-light">
                <div className="w-1 h-1 bg-gold-400 rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  const MiniCard = ({ title, desc, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass-card p-6 text-center group hover:bg-white/[0.06] transition-all duration-300"
    >
      <h5 className="text-white font-medium mb-2 group-hover:text-gold-300 transition-colors">{title}</h5>
      <p className="text-white/45 text-sm font-light">{desc}</p>
    </motion.div>
  );

  return (
    <section id="services" className="py-24 md:py-32 bg-ink-900 bg-grain relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-champagne-600/[0.05] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 block">{t('services')}</span>
          <h2 className="section-title mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light mb-8">
            {t('servicesSubtitle')}
          </p>
          <div className="divider-gold" />
        </motion.div>

        {/* Arrangements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-10 text-center">
            {t('arrangementsTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {arrangements.map((arr, i) => (
              <Card key={i} item={arr} index={i} />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <MiniCard title={t('arr4Title')} desc={t('arr4Desc')} delay={0.3} />
            <MiniCard title={t('arr5Title')} desc={t('arr5Desc')} delay={0.4} />
            <MiniCard title={t('arr6Title')} desc={t('arr6Desc')} delay={0.5} />
          </div>
        </motion.div>

        {/* Experiences Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-10 text-center">
            {t('experiencesTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {experiences.map((exp, i) => (
              <Card key={i} item={exp} index={i} />
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <MiniCard title={t('exp4Title')} desc={t('exp4Desc')} delay={0.3} />
            <MiniCard title={t('exp5Title')} desc={t('exp5Desc')} delay={0.4} />
            <MiniCard title={t('exp6Title')} desc={t('exp6Desc')} delay={0.5} />
            <MiniCard title={t('exp7Title')} desc={t('exp7Desc')} delay={0.6} />
          </div>
        </motion.div>

        {/* Qualities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {qualities.map((q, index) => {
              const IconComponent = q.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gold-600/10 border border-gold-500/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-gold-400" size={20} />
                  </div>
                  <h4 className="text-white font-medium mb-2">{q.title}</h4>
                  <p className="text-white/45 text-sm font-light">{q.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={goToBooking}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
          >
            {t('bookNow')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
