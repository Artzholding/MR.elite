import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-ink-950 flex items-center justify-center z-50 bg-grain"
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #DAA520, #FFD700, #DAA520, #B8860B, #DAA520)'
              }}
            />
            <div className="absolute inset-2 bg-ink-950 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-gold-400 text-xl font-serif font-bold">ME</div>
                <div className="w-6 h-0.5 bg-gold-400 mx-auto mt-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Name with Typewriter Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl font-serif font-semibold text-white mb-4 tracking-tight"
        >
          MR. ELITE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gold-400/80 text-xs tracking-[0.35em] mb-8"
        >
          PREMIUM COMPANION SERVICE
        </motion.p>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-gold-400 rounded-full"
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-white/40 text-[10px] mt-4 tracking-[0.3em]"
        >
          PREPARING EXCELLENCE
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;