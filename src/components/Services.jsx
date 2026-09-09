import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Star, Shield, MessageSquare } from 'lucide-react';
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

  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gold-400 mb-8 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto" />
        </motion.div>

        {/* Arrangements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {t('arrangementsTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {arrangements.map((arrangement, index) => {
              const IconComponent = arrangement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="glass-effect rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-black" size={28} />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors">
                      {arrangement.title}
                    </h4>
                    
                    <p className="text-white/70 leading-relaxed mb-6">
                      {arrangement.description}
                    </p>

                    <ul className="space-y-2">
                      {arrangement.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white/60">
                          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Arrangements */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h5 className="text-white font-semibold mb-2">{t('arr4Title')}</h5>
              <p className="text-white/60 text-sm">{t('arr4Desc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h5 className="text-white font-semibold mb-2">{t('arr5Title')}</h5>
              <p className="text-white/60 text-sm">{t('arr5Desc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h5 className="text-white font-semibold mb-2">{t('arr6Title')}</h5>
              <p className="text-white/60 text-sm">{t('arr6Desc')}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Experiences Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {t('experiencesTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="glass-effect rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-black" size={28} />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors">
                      {experience.title}
                    </h4>
                    
                    <p className="text-white/70 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    <ul className="space-y-2">
                      {experience.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white/60">
                          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Experiences */}
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h5 className="text-white font-semibold mb-2">{t('exp4Title')}</h5>
              <p className="text-white/60 text-sm">{t('exp4Desc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h5 className="text-white font-semibold mb-2">{t('exp5Title')}</h5>
              <p className="text-white/60 text-sm">{t('exp5Desc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h5 className="text-white font-semibold mb-2">{t('exp6Title')}</h5>
              <p className="text-white/60 text-sm">{t('exp6Desc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h5 className="text-white font-semibold mb-2">{t('exp7Title')}</h5>
              <p className="text-white/60 text-sm">{t('exp7Desc')}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Qualities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {qualities.map((quality, index) => {
              const IconComponent = quality.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-gold-400" size={20} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{quality.title}</h4>
                  <p className="text-white/60 text-sm">{quality.description}</p>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('bookNow')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;