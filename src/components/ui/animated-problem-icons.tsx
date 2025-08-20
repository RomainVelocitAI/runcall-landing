'use client';

import { motion } from 'framer-motion';

interface AnimatedIconProps {
  type: 'money' | 'chart' | 'clock';
  className?: string;
}

// Animated Money Icon
const MoneyIcon = () => {
  return (
    <motion.div className="relative w-32 h-32">
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle with gradient */}
        <motion.circle
          cx="64"
          cy="64"
          r="56"
          stroke="url(#money-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Money symbol */}
        <motion.path
          d="M64 32 C48 32 32 48 32 64 C32 80 48 96 64 96 C80 96 96 80 96 64 C96 48 80 32 64 32"
          stroke="url(#money-gradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Dollar sign */}
        <motion.text
          x="64"
          y="74"
          textAnchor="middle"
          className="text-4xl font-bold"
          fill="url(#money-gradient)"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          €
        </motion.text>
        
        {/* Falling effect */}
        <motion.g
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Small coins */}
          <motion.circle
            cx="40"
            cy="40"
            r="8"
            fill="url(#money-gradient)"
            opacity="0.4"
            animate={{
              y: [0, 15, 0],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          <motion.circle
            cx="88"
            cy="48"
            r="6"
            fill="url(#money-gradient)"
            opacity="0.3"
            animate={{
              y: [0, 12, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.circle
            cx="76"
            cy="88"
            r="7"
            fill="url(#money-gradient)"
            opacity="0.35"
            animate={{
              y: [0, 8, 0],
              opacity: [0.35, 0.55, 0.35]
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          />
        </motion.g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="money-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

// Animated Chart Icon
const ChartIcon = () => {
  return (
    <motion.div className="relative w-32 h-32">
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <motion.circle
          cx="64"
          cy="64"
          r="56"
          stroke="url(#chart-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Chart bars with descending animation */}
        <motion.rect
          x="30"
          y="48"
          width="16"
          height="40"
          rx="2"
          fill="url(#chart-gradient)"
          initial={{ height: 0, y: 88 }}
          animate={{ height: 40, y: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        <motion.rect
          x="56"
          y="58"
          width="16"
          height="30"
          rx="2"
          fill="url(#chart-gradient-2)"
          initial={{ height: 0, y: 88 }}
          animate={{ height: 30, y: 58 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        <motion.rect
          x="82"
          y="68"
          width="16"
          height="20"
          rx="2"
          fill="url(#chart-gradient-3)"
          initial={{ height: 0, y: 88 }}
          animate={{ height: 20, y: 68 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        
        {/* Trend line showing decline */}
        <motion.path
          d="M38 50 L64 65 L90 75"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="5 5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        
        {/* Arrow pointing down */}
        <motion.path
          d="M85 70 L90 75 L85 80"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        
        {/* Base line */}
        <motion.line
          x1="25"
          y1="88"
          x2="103"
          y2="88"
          stroke="#64748b"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <linearGradient id="chart-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="chart-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#f87171" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animated percentage decrease */}
      <motion.div
        className="absolute bottom-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
      >
        -40%
      </motion.div>
    </motion.div>
  );
};

// Animated Clock Icon
const ClockIcon = () => {
  return (
    <motion.div className="relative w-32 h-32">
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer circle */}
        <motion.circle
          cx="64"
          cy="64"
          r="56"
          stroke="url(#clock-gradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Inner circle */}
        <motion.circle
          cx="64"
          cy="64"
          r="48"
          stroke="url(#clock-gradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        
        {/* Clock markers */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => {
          const radian = (angle * Math.PI) / 180;
          const x1 = 64 + 48 * Math.cos(radian - Math.PI / 2);
          const y1 = 64 + 48 * Math.sin(radian - Math.PI / 2);
          const x2 = 64 + (angle % 90 === 0 ? 42 : 45) * Math.cos(radian - Math.PI / 2);
          const y2 = 64 + (angle % 90 === 0 ? 42 : 45) * Math.sin(radian - Math.PI / 2);
          
          return (
            <motion.line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#clock-gradient)"
              strokeWidth={angle % 90 === 0 ? 2 : 1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            />
          );
        })}
        
        {/* Center dot */}
        <motion.circle
          cx="64"
          cy="64"
          r="4"
          fill="url(#clock-gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        />
        
        {/* Hour hand */}
        <motion.line
          x1="64"
          y1="64"
          x2="64"
          y2="40"
          stroke="url(#clock-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "64px 64px" }}
        />
        
        {/* Minute hand */}
        <motion.line
          x1="64"
          y1="64"
          x2="64"
          y2="28"
          stroke="url(#clock-gradient-2)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "64px 64px" }}
        />
        
        {/* Second hand */}
        <motion.line
          x1="64"
          y1="64"
          x2="64"
          y2="24"
          stroke="#ef4444"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "64px 64px" }}
        />
        
        {/* Time pressure indicator */}
        <motion.g
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M100 30 L108 30 L104 38 Z"
            fill="#ef4444"
          />
          <motion.path
            d="M100 98 L108 98 L104 90 Z"
            fill="#ef4444"
          />
        </motion.g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="clock-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="clock-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Urgency badge */}
      <motion.div
        className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      >
        Urgent
      </motion.div>
    </motion.div>
  );
};

export function AnimatedIcon({ type, className = '' }: AnimatedIconProps) {
  const iconComponents = {
    money: <MoneyIcon />,
    chart: <ChartIcon />,
    clock: <ClockIcon />
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {iconComponents[type]}
      
      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}