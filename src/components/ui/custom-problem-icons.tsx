'use client';

import { motion } from 'framer-motion';

interface CustomIconProps {
  type: 'phone' | 'grid' | 'confused';
  className?: string;
}

// Phone Icon for 40% leads
const PhoneIcon = () => {
  return (
    <div className="relative">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Phone body */}
        <rect x="18" y="12" width="28" height="40" rx="4" stroke="#ef4444" strokeWidth="2" fill="white" />
        
        {/* Screen */}
        <rect x="22" y="18" width="20" height="28" fill="#fef2f2" rx="2" />
        
        {/* Missed call indicator */}
        <g>
          <path d="M28 28 L36 28 L32 24 Z" fill="#ef4444" opacity="0.8" />
          <path d="M32 32 L32 36" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* X marks for missed calls */}
        <g opacity="0.6">
          <path d="M24 38 L28 42 M28 38 L24 42" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M36 38 L40 42 M40 38 L36 42" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        
        {/* Notification badge */}
        <circle cx="42" cy="16" r="6" fill="#ef4444" />
        <text x="42" y="19" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">!</text>
        
        {/* Signal waves (crossed out) */}
        <g opacity="0.4">
          <path d="M50 20 Q52 22 50 24" stroke="#ef4444" strokeWidth="1.5" fill="none" />
          <path d="M53 18 Q56 22 53 26" stroke="#ef4444" strokeWidth="1.5" fill="none" />
          <path d="M48 16 L56 28" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

// Grid Icon for conversion rate
const GridIcon = () => {
  return (
    <div className="relative">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Create 4x4 grid = 16 squares */}
        {Array.from({ length: 16 }).map((_, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;
          const x = 16 + col * 8;
          const y = 16 + row * 8;
          const isGreen = index === 0; // Only first square is green
          
          return (
            <motion.rect
              key={index}
              x={x}
              y={y}
              width="7"
              height="7"
              rx="1"
              fill={isGreen ? "#10b981" : "#ef4444"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.03,
                duration: 0.3,
                ease: "easeOut"
              }}
            />
          );
        })}
        
        {/* Success checkmark on green square */}
        <motion.path
          d="M18 20 L20 22 L24 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />
        
        {/* Small X marks on some red squares */}
        <g stroke="white" strokeWidth="1.5" opacity="0.7">
          <path d="M33 25 L35 27 M35 25 L33 27" strokeLinecap="round" />
          <path d="M25 33 L27 35 M27 33 L25 35" strokeLinecap="round" />
          <path d="M41 41 L43 43 M43 41 L41 43" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

// Confused Person Icon for time dilemma
const ConfusedIcon = () => {
  return (
    <div className="relative">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Person head */}
        <circle cx="32" cy="28" r="8" stroke="#64748b" strokeWidth="2" fill="white" />
        
        {/* Person body */}
        <path 
          d="M32 36 L32 48 M32 36 L24 44 M32 36 L40 44 M24 56 L32 48 L40 56" 
          stroke="#64748b" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Confused face */}
        <g>
          {/* Eyes */}
          <circle cx="29" cy="27" r="1.5" fill="#64748b" />
          <circle cx="35" cy="27" r="1.5" fill="#64748b" />
          
          {/* Confused mouth */}
          <path d="M28 31 Q32 33 36 31" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>
        
        {/* Question mark above head */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <text 
            x="32" 
            y="14" 
            textAnchor="middle" 
            fontSize="16" 
            fontWeight="bold"
            fill="#f59e0b"
          >
            ?
          </text>
          {/* Additional smaller question marks */}
          <text x="22" y="10" fontSize="10" fill="#fbbf24" opacity="0.6">?</text>
          <text x="42" y="10" fontSize="10" fill="#fbbf24" opacity="0.6">?</text>
        </motion.g>
        
        {/* Thought bubbles */}
        <g opacity="0.3">
          <circle cx="18" cy="20" r="2" fill="#94a3b8" />
          <circle cx="14" cy="16" r="3" fill="#94a3b8" />
          <circle cx="46" cy="20" r="2" fill="#94a3b8" />
          <circle cx="50" cy="16" r="3" fill="#94a3b8" />
        </g>
      </svg>
    </div>
  );
};

export function CustomIcon({ type, className = '' }: CustomIconProps) {
  const iconComponents = {
    phone: <PhoneIcon />,
    grid: <GridIcon />,
    confused: <ConfusedIcon />
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {iconComponents[type]}
    </motion.div>
  );
}