'use client';

import { motion } from 'framer-motion';

interface MinimalIconProps {
  type: 'money' | 'chart' | 'clock';
  className?: string;
}

// Minimal Money Icon - Simple line art
const MoneyIcon = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Euro symbol - clean lines */}
      <motion.circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.path
        d="M22 26 H38 M22 38 H38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.path
        d="M40 20 C35 16 29 16 24 20 M24 44 C29 48 35 48 40 44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </svg>
  );
};

// Minimal Chart Icon - Clean declining graph
const ChartIcon = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Axis lines */}
      <motion.path
        d="M12 12 L12 48 L52 48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* Declining trend line */}
      <motion.path
        d="M20 20 L30 28 L40 35 L50 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      {/* Arrow pointing down */}
      <motion.path
        d="M46 42 L50 42 L50 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </svg>
  );
};

// Minimal Clock Icon - Simple time representation
const ClockIcon = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Clock circle */}
      <motion.circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {/* Clock hands */}
      <motion.path
        d="M32 32 L32 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.path
        d="M32 32 L44 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
      {/* Hour markers */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <circle cx="32" cy="12" r="1" fill="currentColor" />
        <circle cx="52" cy="32" r="1" fill="currentColor" />
        <circle cx="32" cy="52" r="1" fill="currentColor" />
        <circle cx="12" cy="32" r="1" fill="currentColor" />
      </motion.g>
    </svg>
  );
};

export function MinimalIcon({ type, className = '' }: MinimalIconProps) {
  const iconComponents = {
    money: <MoneyIcon />,
    chart: <ChartIcon />,
    clock: <ClockIcon />
  };

  return (
    <motion.div 
      className={`relative w-20 h-20 text-cyan-600 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {iconComponents[type]}
    </motion.div>
  );
}