'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface RunCallBenefitsCardProps {
  isActive?: boolean;
}

export default function RunCallBenefitsCard({ isActive = false }: RunCallBenefitsCardProps) {
  const benefitsOn = [
    {
      title: "Réactivité",
      description: "Rappel rapide et professionnel"
    },
    {
      title: "Expertise Commerciale",
      description: "Techniques de conversion éprouvées"
    },
    {
      title: "Disponibilité",
      description: "Service adapté à vos horaires"
    },
    {
      title: "Équipe Locale",
      description: "100% Réunionnaise"
    }
  ];

  const problemsOff = [
    {
      title: "Temps Monopolisé",
      description: "Journées interrompues par le téléphone"
    },
    {
      title: "Conversions Faibles",
      description: "Manque d'expertise commerciale"
    },
    {
      title: "Leads Non Traités",
      description: "Prospects qui ne rappellent jamais"
    },
    {
      title: "Approche Générique",
      description: "Scripts non adaptés localement"
    }
  ];

  const mainBenefits = [
    "Concentrez-vous sur votre cœur de métier",
    "Chaque lead est pris en charge",
    "Développez votre activité sereinement"
  ];

  const mainProblems = [
    "Votre temps est monopolisé par le téléphone",
    "Vos conversions restent insuffisantes",
    "Des opportunités vous échappent chaque jour"
  ];

  return (
    <AnimatePresence mode="wait">
      {!isActive ? (
        <motion.div
          key="off"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl">
            {/* Header */}
            <div className="relative p-8 pb-0">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Mode RunCall Désactivé</h3>
                  <p className="text-red-400 text-sm font-medium">Pertes en cours...</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-400 text-sm font-medium">INACTIF</span>
                </div>
              </div>

              {/* Main Problems */}
              <div className="space-y-4 mb-8">
                {mainProblems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <p className="text-lg text-white font-medium">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="relative p-8 pt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {problemsOff.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-red-900/20 rounded-xl p-4 border border-red-800/30"
                  >
                    <h4 className="text-white font-semibold text-sm mb-1">{problem.title}</h4>
                    <p className="text-red-400 text-xs">{problem.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="relative p-8 pt-0">
              <div className="bg-red-900/20 rounded-xl p-6 border border-red-800/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-lg">Impact sur votre activité</p>
                    <p className="text-red-400 text-sm">Potentiel commercial inexploité</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-red-400">Croissance limitée</p>
                      <p className="text-xs text-red-300">par manque de ressources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/10 to-transparent pointer-events-none" />
            
            {/* Logo and Header */}
            <div className="relative p-8 pb-0">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 bg-white rounded-2xl p-2 shadow-lg">
                    <Image 
                      src="/logo.png" 
                      alt="RunCall" 
                      width={48} 
                      height={48} 
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">RunCall Activé</h3>
                    <p className="text-cyan-300 text-sm">Transformation en cours...</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-sm font-medium">ACTIF</span>
                </div>
              </div>

              {/* Main Benefits */}
              <div className="space-y-4 mb-8">
                {mainBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <p className="text-lg text-white font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="relative p-8 pt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefitsOn.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="text-white font-semibold text-sm mb-1">{benefit.title}</h4>
                    <p className="text-cyan-300 text-xs">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="relative p-8 pt-0">
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-500/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-lg">Votre Potentiel avec RunCall</p>
                    <p className="text-cyan-300 text-sm">Croissance commerciale optimisée</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">Développement</p>
                      <p className="text-xs text-cyan-300">de votre activité</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}