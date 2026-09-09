import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import BookingFormSimple from './BookingFormSimple';

const BookingPage = () => {
  const goBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ink-950 pt-20 bg-grain">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <motion.button
          onClick={goBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Terug naar Home</span>
        </motion.button>
      </div>

      {/* Booking Form */}
      <BookingFormSimple />
    </div>
  );
};

export default BookingPage;