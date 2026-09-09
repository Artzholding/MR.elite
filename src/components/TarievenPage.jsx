import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Euro, Clock, Users, Heart } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

const TarievenPage = () => {
  const { t } = useLanguage();
  const goBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prices with 15% discount applied and rounded up
  const pricingData = [
    { hours: 2, man: 510, couple: 600, twoMen: 1050 },
    { hours: 3, man: 700, couple: 750, twoMen: 1400 },
    { hours: 4, man: 850, couple: 900, twoMen: 1700 },
    { hours: 5, man: 1050, couple: 1100, twoMen: 2050 },
    { hours: 6, man: 1200, couple: 1250, twoMen: 2400 },
    { hours: 7, man: 1400, couple: 1450, twoMen: 2750 },
    { hours: 8, man: 1550, couple: 1600, twoMen: 3100 },
    { hours: 9, man: 1700, couple: 1700, twoMen: 3350 },
    { hours: 10, man: 1800, couple: 1850, twoMen: 3600 },
    { hours: 11, man: 1950, couple: 2000, twoMen: 3850 },
    { hours: 12, man: 2050, couple: 2100, twoMen: 4100 },
    { hours: 13, man: 2200, couple: 2250, twoMen: 4350 },
    { hours: 14, man: 2300, couple: 2350, twoMen: 4600 },
    { hours: 15, man: 2450, couple: 2500, twoMen: 4850 },
    { hours: 16, man: 2550, couple: 2600, twoMen: 5050 },
    { hours: 17, man: 2600, couple: 2650, twoMen: 5200 },
    { hours: 18, man: 2700, couple: 2750, twoMen: 5400 },
    { hours: 19, man: 2800, couple: 2850, twoMen: 5550 },
    { hours: 20, man: 2850, couple: 2900, twoMen: 5700 },
    { hours: 21, man: 2950, couple: 3000, twoMen: 5900 },
    { hours: 22, man: 3050, couple: 3100, twoMen: 6050 },
    { hours: 23, man: 3150, couple: 3150, twoMen: 6250 },
    { hours: 24, man: 3200, couple: 3250, twoMen: 6400 }
  ];

  const extraRates = {
    extraDay: { man: 1850, couple: 1900, twoMen: 3750 },
    extraHour: { man: 200, couple: 250, twoMen: 450 }
  };

  return (
    <div className="min-h-screen bg-ink-950 text-white bg-grain">
      <Header />
      
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <motion.button
              onClick={goBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>{t('backToHome')}</span>
            </motion.button>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-6 block">{t('rates')}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              {t('tarievenTitle')}
            </h1>
            <div className="divider-gold mb-8" />
            
            {/* Introduction */}
            <div className="glass-card p-6 max-w-4xl mx-auto mb-12">
              <p className="text-white/60 text-base leading-relaxed font-light">
                {t('tarievenInfoText')}
              </p>
            </div>
          </motion.div>

          {/* Main Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card overflow-hidden mb-12"
          >
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-6">
              <h2 className="font-serif text-2xl font-semibold text-ink-950 text-center">{t('hourlyRates')}</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left p-4 text-white font-semibold">
                      <div className="flex items-center space-x-2">
                        <Clock size={18} className="text-gold-400" />
                        <span>{t('hoursCol')}</span>
                      </div>
                    </th>
                    <th className="text-center p-4 text-white font-semibold">
                      <div className="flex items-center justify-center space-x-2">
                        <Users size={18} className="text-gold-400" />
                        <span>{t('oneMan')}</span>
                      </div>
                    </th>
                    <th className="text-center p-4 text-white font-semibold">
                      <div className="flex items-center justify-center space-x-2">
                        <Heart size={18} className="text-gold-400" />
                        <span>{t('coupleCol')}</span>
                      </div>
                    </th>
                    <th className="text-center p-4 text-white font-semibold">
                      <div className="flex items-center justify-center space-x-2">
                        <Users size={18} className="text-gold-400" />
                        <span>{t('twoMen')}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <motion.tr
                      key={row.hours}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.02 }}
                      className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="p-4">
                        <span className="text-white font-medium">{row.hours} {t('hourUnit')}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-gold-400 font-semibold">€ {row.man},-</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-gold-400 font-semibold">€ {row.couple},-</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-gold-400 font-semibold">€ {row.twoMen},-</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Extra Rates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl font-semibold text-white mb-4 flex items-center">
                <Euro className="text-gold-400 mr-3" size={20} />
                {t('extraDay')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm font-light">{t('oneMan')}</span>
                  <span className="text-gold-400 font-semibold">€ {extraRates.extraDay.man},-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm font-light">{t('coupleCol')}</span>
                  <span className="text-gold-400 font-semibold">€ {extraRates.extraDay.couple},-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm font-light">{t('twoMen')}</span>
                  <span className="text-gold-400 font-semibold">€ {extraRates.extraDay.twoMen},-</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-serif text-xl font-semibold text-white mb-4 flex items-center">
                <Clock className="text-gold-400 mr-3" size={20} />
                {t('extraHour')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm font-light">{t('oneMan')}</span>
                  <span className="text-gold-400 font-semibold">€ {extraRates.extraHour.man},-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm font-light">{t('coupleCol')}</span>
                  <span className="text-gold-400 font-semibold">€ {extraRates.extraHour.couple},-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm font-light">{t('twoMen')}</span>
                  <span className="text-gold-400 font-semibold">€ {extraRates.extraHour.twoMen},-</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <p className="text-white/45 text-xs mb-4 font-light">
                *{t('tarievenNote')}
              </p>
              <p className="text-gold-400/90 font-medium text-sm mb-6">
                {t('tarievenFooter')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+31616335723"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
                >
                  <span>{t('contactUs')}</span>
                </motion.a>
                <motion.button
                  onClick={() => window.location.hash = '#booking'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-gold-400/50 text-gold-400 font-semibold rounded-full hover:bg-gold-400 hover:text-ink-950 hover:border-gold-400 transition-all duration-300"
                >
                  <span>{t('bookNow')}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TarievenPage;