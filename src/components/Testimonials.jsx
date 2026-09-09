import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Alexander M.',
      location: 'Amsterdam',
      rating: 5,
      text: t('testimonial1'),
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Victoria S.',
      location: 'London',
      rating: 5,
      text: t('testimonial2'),
      image: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Marcus R.',
      location: 'Dubai',
      rating: 5,
      text: t('testimonial3'),
      image: 'https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-ink-900 bg-grain relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-champagne-600/[0.05] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 block">Testimonials</span>
          <h2 className="section-title mb-6">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-white/50 font-light mb-8">
            {t('testimonialsSubtitle')}
          </p>
          <div className="divider-gold" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card p-8 h-full">
                {/* Quote Icon */}
                <div className="text-gold-400/20 mb-6">
                  <Quote size={36} />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold-400 fill-current" size={14} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/65 mb-8 leading-relaxed font-light text-[15px]">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-gold-500/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-gold-400/80 text-xs">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
