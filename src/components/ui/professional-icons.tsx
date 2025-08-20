'use client';

import { motion } from 'framer-motion';

interface ProfessionalIconProps {
  type: 'money' | 'chart' | 'clock';
  className?: string;
}

// Professional Money Loss Icon
const MoneyIcon = () => {
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
        {/* Background circle with gradient */}
        <circle cx="32" cy="32" r="30" fill="url(#money-bg)" opacity="0.1" />
        
        {/* Euro bills falling */}
        <g>
          <rect x="20" y="18" width="24" height="16" rx="2" stroke="#94a3b8" strokeWidth="1.5" fill="white" />
          <text x="32" y="28" textAnchor="middle" fontSize="10" fill="#64748b">€</text>
          
          <rect x="18" y="26" width="24" height="16" rx="2" stroke="#94a3b8" strokeWidth="1.5" fill="white" opacity="0.7" />
          <text x="30" y="36" textAnchor="middle" fontSize="10" fill="#94a3b8">€</text>
          
          <rect x="22" y="34" width="24" height="16" rx="2" stroke="#94a3b8" strokeWidth="1.5" fill="white" opacity="0.5" />
          <text x="34" y="44" textAnchor="middle" fontSize="10" fill="#cbd5e1">€</text>
        </g>
        
        {/* Downward arrow */}
        <path d="M32 50 L32 55 M32 55 L28 51 M32 55 L36 51" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        <defs>
          <linearGradient id="money-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#f87171" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Professional Chart Decline Icon
const ChartIcon = () => {
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
        {/* Background circle */}
        <circle cx="32" cy="32" r="30" fill="url(#chart-bg)" opacity="0.1" />
        
        {/* Chart grid */}
        <g opacity="0.3">
          <line x1="16" y1="20" x2="16" y2="44" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="16" y1="44" x2="48" y2="44" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="16" y1="32" x2="48" y2="32" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="32" y1="20" x2="32" y2="44" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" />
        </g>
        
        {/* Declining line chart */}
        <path d="M20 24 L28 30 L36 36 L44 40" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Data points */}
        <circle cx="20" cy="24" r="3" fill="white" stroke="#ef4444" strokeWidth="2" />
        <circle cx="28" cy="30" r="3" fill="white" stroke="#ef4444" strokeWidth="2" />
        <circle cx="36" cy="36" r="3" fill="white" stroke="#ef4444" strokeWidth="2" />
        <circle cx="44" cy="40" r="3" fill="white" stroke="#ef4444" strokeWidth="2" />
        
        {/* Percentage indicator */}
        <rect x="38" y="14" width="20" height="10" rx="5" fill="#ef4444" />
        <text x="48" y="21" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">-60%</text>
        
        <defs>
          <linearGradient id="chart-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#fca5a5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Professional Time Pressure Icon
const ClockIcon = () => {
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
        {/* Background circle */}
        <circle cx="32" cy="32" r="30" fill="url(#clock-bg)" opacity="0.1" />
        
        {/* Clock face */}
        <circle cx="32" cy="32" r="20" stroke="#64748b" strokeWidth="2" fill="white" />
        
        {/* Clock markers */}
        <g>
          <rect x="31" y="14" width="2" height="4" rx="1" fill="#94a3b8" />
          <rect x="31" y="46" width="2" height="4" rx="1" fill="#94a3b8" />
          <rect x="46" y="31" width="4" height="2" rx="1" fill="#94a3b8" />
          <rect x="14" y="31" width="4" height="2" rx="1" fill="#94a3b8" />
        </g>
        
        {/* Clock hands showing pressure */}
        <line x1="32" y1="32" x2="32" y2="22" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="32" x2="40" y2="32" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        
        {/* Center dot */}
        <circle cx="32" cy="32" r="2" fill="#1e293b" />
        
        {/* Warning indicator */}
        <g>
          <circle cx="44" cy="20" r="8" fill="#ef4444" />
          <text x="44" y="23" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">!</text>
        </g>
        
        {/* Time running out visual */}
        <path d="M 32 12 A 20 20 0 0 1 44 20" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
        
        <defs>
          <linearGradient id="clock-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export function ProfessionalIcon({ type, className = '' }: ProfessionalIconProps) {
  const iconComponents = {
    money: <MoneyIcon />,
    chart: <ChartIcon />,
    clock: <ClockIcon />
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      {iconComponents[type]}
    </motion.div>
  );
}