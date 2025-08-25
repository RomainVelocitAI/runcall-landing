'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Toggle3DProps {
  onToggle?: (isActive: boolean) => void;
}

export default function Toggle3D({ onToggle }: Toggle3DProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    onToggle?.(newState);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Toggle 3D Only */}
      <div className="flex items-center gap-6">
        <span className="text-xl font-semibold text-white">Mode RunCall</span>
        <div 
          className="relative w-[120px] h-[60px] cursor-pointer select-none"
          onClick={handleToggle}
          style={{ perspective: '500px' }}
        >
          {/* Track */}
          <div 
            className={`absolute w-full h-full rounded-[30px] transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-br from-emerald-700 to-emerald-800' 
                : 'bg-gradient-to-br from-gray-800 to-gray-900'
            }`}
            style={{
              boxShadow: 'inset 0 5px 10px rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.2)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Text OFF */}
            <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold transition-all duration-300 pointer-events-none z-10 ${
              isActive ? 'text-gray-300 opacity-50' : 'text-white opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
            }`}>
              OFF
            </span>
            {/* Text ON */}
            <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold transition-all duration-300 pointer-events-none z-10 ${
              isActive ? 'text-emerald-300 opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : 'text-gray-300 opacity-50'
            }`}>
              ON
            </span>
          </div>
          
          {/* Slider */}
          <div 
            className={`absolute w-[52px] h-[52px] rounded-full top-1 transition-all duration-300 ${
              isActive 
                ? 'left-[64px] bg-gradient-to-br from-emerald-400 to-emerald-500' 
                : 'left-1 bg-gradient-to-br from-white to-gray-200'
            }`}
            style={{
              boxShadow: isActive 
                ? '0 5px 15px rgba(52, 211, 153, 0.4), inset 0 -2px 5px rgba(0,0,0,0.2)'
                : '0 5px 15px rgba(0,0,0,0.3), inset 0 -2px 5px rgba(0,0,0,0.1)',
              transform: 'translateZ(20px)'
            }}
          />
        </div>
      </div>
    </div>
  );
}