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
    <section id="contact" className="py-20 bg-black">
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
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gold-400 mb-8 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-black" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                <p className="text-gold-400 font-medium mb-2">{info.value}</p>
                <p className="text-white/60 text-sm">{info.description}</p>
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
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('contactCtaTitle')}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t('contactCtaText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${t('phone')}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg"
              >
                <Phone size={18} />
                <span>{t('contactNow')}</span>
              </motion.a>
              <motion.a
                href={`mailto:${t('email')}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-gold-400 text-gold-400 font-semibold rounded-full hover:bg-gold-400 hover:text-black transition-all duration-300"
              >
                <Mail size={18} />
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