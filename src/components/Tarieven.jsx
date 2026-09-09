import React from 'react';
import { motion } from 'framer-motion';
import { Euro, Clock, Users, Heart, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Tarieven = () => {
  const { t } = useLanguage();

  // Prices with 15% discount applied and rounded up
  const pricingData = [
    { hours: 2, man: 510, couple: 553, twoMen: 1020 },
    { hours: 3, man: 680, couple: 723, twoMen: 1360 },
    { hours: 4, man: 850, couple: 893, twoMen: 1700 },
    { hours: 5, man: 1020, couple: 1063, twoMen: 2040 },
    { hours: 6, man: 1190, couple: 1233, twoMen: 2380 },
    { hours: 7, man: 1360, couple: 1403, twoMen: 2720 },
    { hours: 8, man: 1530, couple: 1573, twoMen: 3060 },
    { hours: 9, man: 1658, couple: 1700, twoMen: 3315 },
    { hours: 10, man: 1785, couple: 1828, twoMen: 3570 },
    { hours: 11, man: 1913, couple: 1955, twoMen: 3825 },
    { hours: 12, man: 2040, couple: 2083, twoMen: 4080 },
    { hours: 13, man: 2168, couple: 2210, twoMen: 4335 },
    { hours: 14, man: 2295, couple: 2338, twoMen: 4590 },
    { hours: 15, man: 2423, couple: 2465, twoMen: 4845 },
    { hours: 16, man: 2508, couple: 2550, twoMen: 5015 },
    { hours: 17, man: 2593, couple: 2635, twoMen: 5185 },
    { hours: 18, man: 2678, couple: 2720, twoMen: 5355 },
    { hours: 19, man: 2763, couple: 2805, twoMen: 5525 },
    { hours: 20, man: 2848, couple: 2890, twoMen: 5695 },
    { hours: 21, man: 2933, couple: 2975, twoMen: 5865 },
    { hours: 22, man: 3018, couple: 3060, twoMen: 6035 },
    { hours: 23, man: 3103, couple: 3145, twoMen: 6205 },
    { hours: 24, man: 3188, couple: 3230, twoMen: 6375 }
  ];

  const extraRates = {
    extraDay: { man: 1870, couple: 1913, twoMen: 3740 },
    extraHour: { man: 213, couple: 255, twoMen: 425 }
  };

  return (
    <section id="tarieven" className="py-24 md:py-32 bg-ink-900 bg-grain relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 block">{t('rates')}</span>
          <h1 className="section-title mb-6">
            {t('tarievenTitle')}
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light mb-8">
            {t('tarievenSubtitle')}
          </p>
          <div className="divider-gold" />
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-12"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <Info className="text-gold-400" size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">{t('importantInfo')}</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {t('tarievenInfoText')}
              </p>
              <div className="bg-gold-600/[0.08] border border-gold-500/15 rounded-xl p-4">
                <p className="text-gold-400 font-medium text-sm">
                  ✨ {t('tarievenDiscount')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
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
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.02 }}
                    viewport={{ once: true }}
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="glass-card p-6">
            <h3 className="font-serif text-xl font-semibold text-white mb-4 flex items-center">
              <Euro className="text-gold-400 mr-3" size={20} />
              {t('extraDay')}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80">{t('oneMan')}</span>
                <span className="text-gold-400 font-semibold">€ {extraRates.extraDay.man},-</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">{t('coupleCol')}</span>
                <span className="text-gold-400 font-semibold">€ {extraRates.extraDay.couple},-</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">{t('twoMen')}</span>
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
                <span className="text-white/80">{t('oneMan')}</span>
                <span className="text-gold-400 font-semibold">€ {extraRates.extraHour.man},-</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">{t('coupleCol')}</span>
                <span className="text-gold-400 font-semibold">€ {extraRates.extraHour.couple},-</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">{t('twoMen')}</span>
                <span className="text-gold-400 font-semibold">€ {extraRates.extraHour.twoMen},-</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <p className="text-white/45 text-xs mb-4 font-light">
              *{t('tarievenNote')}
            </p>
            <p className="text-gold-400/90 font-medium text-sm">
              {t('tarievenFooter')}
            </p>
            <div className="mt-6">
              <motion.a
                href="tel:+31616335723"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
              >
                <span>{t('contactUs')}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tarieven;