'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComparisonCardProps {
  onToggle?: (isActive: boolean) => void;
}

export default function ComparisonCard({ onToggle }: ComparisonCardProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    onToggle?.(newState);
  };

  const sansRuncall = [
    "Perdre 3h/jour au téléphone",
    "2% de conversion seulement",
    "Leads froids abandonnés",
    "Scripts génériques inefficaces"
  ];

  const avecRuncall = [
    "Focus 100% sur votre métier",
    "Rappel Immédiat des leads entrants",
    "100% des leads contactés",
    "Équipe 100% Réunionnaise"
  ];

  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
      {/* Toggle Switch */}
      <div className="flex items-center gap-6">
        <span className={`text-xl font-semibold transition-all duration-300 ${!isActive ? 'text-white' : 'text-white/50'}`}>
          Sans RunCALL
        </span>
        
        <button
          onClick={handleToggle}
          className="relative w-20 h-10 rounded-full p-1 transition-all duration-300 hover:scale-105 shadow-inner"
          style={{
            background: isActive 
              ? 'linear-gradient(to right, #10b981, #059669)' 
              : 'linear-gradient(to right, #374151, #1f2937)',
            boxShadow: isActive
              ? 'inset 0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(16, 185, 129, 0.3)'
              : 'inset 0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          <motion.div
            className="w-8 h-8 rounded-full shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #ffffff, #f3f4f6)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3), 0 0 2px rgba(0,0,0,0.1)'
            }}
            animate={{ x: isActive ? 40 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </button>

        <span className={`text-xl font-semibold transition-all duration-300 ${isActive ? 'text-white' : 'text-white/50'}`}>
          Avec RunCALL
        </span>
      </div>

      {/* Comparison Card */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          {!isActive ? (
            <motion.div
              key="sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Vos Problèmes Actuels
              </h3>
              <div className="grid gap-4">
                {sansRuncall.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-950/40 to-red-900/30 rounded-xl border-l-4 border-red-500"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-lg text-white/90 font-medium">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="avec"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Votre Solution RunCALL
              </h3>
              <div className="grid gap-4">
                {avecRuncall.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-950/40 to-emerald-900/30 rounded-xl border-l-4 border-emerald-500"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <p className="text-lg text-white/90 font-medium">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result Indicator */}
      <motion.div
        animate={{ scale: isActive ? 1.1 : 1 }}
        className="text-center"
      >
        <p className={`text-3xl font-bold transition-all duration-300 ${
          isActive ? 'text-emerald-400' : 'text-red-400'
        }`}>
          {isActive ? '+300% de Chiffre d\'Affaires' : 'Pertes de Revenus'}
        </p>
        <p className="text-white/70 mt-2">
          {isActive ? 'En moyenne sur 3 mois' : 'Opportunités manquées chaque jour'}
        </p>
      </motion.div>
    </div>
  );
}