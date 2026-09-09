import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'medium', className = '', animated = false }) => {
  const sizes = {
    small: { container: 'w-8 h-8', text: 'text-xs', line: 'w-4' },
    medium: { container: 'w-12 h-12', text: 'text-sm', line: 'w-6' },
    large: { container: 'w-16 h-16', text: 'text-lg', line: 'w-8' },
    xl: { container: 'w-24 h-24', text: 'text-xl', line: 'w-10' },
    hero: { container: 'w-32 h-32', text: 'text-2xl', line: 'w-12' }
  };

  const currentSize = sizes[size];

  const LogoContent = () => (
    <div className={`${currentSize.container} ${className} relative`}>
      {/* Outer Ring with Gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-0.5">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
          {/* Inner Content */}
          <div className="text-center">
            {/* ME Text */}
            <div className={`${currentSize.text} font-bold text-gold-400 tracking-wider`}>
              ME
            </div>
            {/* Decorative Line */}
            <div className={`${currentSize.line} h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-1`} />
          </div>
        </div>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 blur-sm -z-10" />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
};

// Alternative SVG Logo Version
export const LogoSVG = ({ width = 48, height = 48, className = '' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Definitions for gradients and effects */}
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DAA520" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
      
      <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#DAA520" stopOpacity="0" />
      </radialGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Outer glow */}
    <circle cx="50" cy="50" r="48" fill="url(#glowGradient)" />
    
    {/* Main circle with gradient border */}
    <circle 
      cx="50" 
      cy="50" 
      r="45" 
      fill="none" 
      stroke="url(#goldGradient)" 
      strokeWidth="2"
      filter="url(#glow)"
    />
    
    {/* Inner black circle */}
    <circle cx="50" cy="50" r="40" fill="#000000" />
    
    {/* ME Text */}
    <text 
      x="50" 
      y="48" 
      textAnchor="middle" 
      dominantBaseline="middle"
      fill="url(#goldGradient)"
      fontSize="18"
      fontWeight="bold"
      fontFamily="Inter, sans-serif"
      letterSpacing="2px"
    >
      ME
    </text>
    
    {/* Decorative line under text */}
    <line 
      x1="35" 
      y1="58" 
      x2="65" 
      y2="58" 
      stroke="url(#goldGradient)" 
      strokeWidth="1"
      opacity="0.8"
    />
    
    {/* Small decorative dots */}
    <circle cx="32" cy="58" r="1" fill="url(#goldGradient)" opacity="0.6" />
    <circle cx="68" cy="58" r="1" fill="url(#goldGradient)" opacity="0.6" />
  </svg>
);

// Monogram Version (just the letters)
export const LogoMonogram = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl',
    xl: 'text-6xl'
  };

  return (
    <div className={`${className} font-bold text-gradient tracking-wider ${sizes[size]}`}>
      ME
    </div>
  );
};

export default Logo;