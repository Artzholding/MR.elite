import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contactPhone'),
      value: t('phone'),
      href: `tel:${t('phone')}`,
      description: t('contactPhoneDesc')
    },
    {
      icon: Mail,
      title: t('contactEmail'),
      value: t('email'),
      href: `mailto:${t('email')}`,
      description: t('contactEmailDesc')
    },
    {
      icon: MapPin,
      title: t('contactLocation'),
      value: t('contactLocationValue'),
      href: null,
      description: t('contactLocationDesc')
    },
    {
      icon: Clock,
      title: t('contactAvailability'),
      value: t('contactAvailabilityValue'),
      href: null,
      description: t('contactAvailabilityDesc')
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-ink-950 bg-grain relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-600/[0.06] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 block">{t('contactTitle').split(' ')[0]}</span>
          <h2 className="section-title mb-6">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light mb-8">
            {t('contactDescription')}
          </p>
          <div className="divider-gold" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center group h-full"
              >
                <div className="w-13 h-13 p-3 bg-gold-500/10 border border-gold-500/15 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 group-hover:border-gold-400/30 transition-all duration-300">
                  <IconComponent className="text-gold-400" size={22} />
                </div>
                <h3 className="text-white font-medium text-sm mb-2 tracking-wide">{info.title}</h3>
                <p className="text-gold-400/90 font-medium mb-2 text-sm">{info.value}</p>
                <p className="text-white/40 text-xs font-light leading-relaxed">{info.description}</p>
              </motion.div>
            );

            return info.href ? (
              <a key={index} href={info.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
              {t('contactCtaTitle')}
            </h3>
            <p className="text-white/55 mb-8 leading-relaxed font-light">
              {t('contactCtaText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${t('phone')}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
              >
                <Phone size={17} />
                <span>{t('contactNow')}</span>
              </motion.a>
              <motion.a
                href={`mailto:${t('email')}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 border border-gold-400/50 text-gold-400 font-semibold rounded-full hover:bg-gold-400 hover:text-ink-950 hover:border-gold-400 transition-all duration-300"
              >
                <Mail size={17} />
                <span>{t('sendEmail')}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
