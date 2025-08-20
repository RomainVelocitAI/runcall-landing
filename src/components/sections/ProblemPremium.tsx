'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ShineBorder } from '@/components/magicui/shine-border';

const PAIN_POINTS = [
  {
    icon: '/appel.png',
    title: "Leads non convertis",
    stat: "40%",
    subtitle: "prospects perdus",
    description: "Chaque lead ignoré représente de l'argent jeté par la fenêtre. Votre investissement publicitaire part en fumée.",
    color: "from-red-50 to-orange-50",
    borderColor: "border-red-100",
    statColor: "text-red-600"
  },
  {
    icon: '/faible-niveau-de-rendement.png',
    title: "Taux de conversion faible",
    stat: "6%",
    subtitle: "taux de conversion",
    description: "Sans expertise commerciale, vos appels échouent. 15 prospects sur 16 ne deviennent jamais clients.",
    color: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-100",
    statColor: "text-amber-600"
  },
  {
    icon: '/moralite.png',
    title: "Dilemme impossible",
    stat: "24h",
    subtitle: "/jour seulement",
    description: "Vous ne pouvez pas être au four et au moulin. Choisir entre prospecter et gérer votre entreprise est un choix impossible.",
    color: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-100",
    statColor: "text-blue-600"
  }
];

const ProblemPremium = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Premium headline */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <p className="text-sm font-sora font-semibold uppercase tracking-wider text-red-600 mb-4">
              Le Problème Invisible
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-plus-jakarta font-bold text-gray-900 leading-tight mb-6">
              Votre Budget Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Part en Fumée
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-plus-jakarta font-light max-w-3xl mx-auto">
              Découvrez les 3 fuites silencieuses qui drainent vos ressources et sabotent votre croissance
            </p>
          </motion.div>

          {/* Professional cards grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            {PAIN_POINTS.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative rounded-2xl">
                  <div className={`relative bg-gradient-to-br ${point.color} rounded-2xl border ${point.borderColor} p-8 h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden`}>
                    <ShineBorder 
                      borderWidth={2}
                      duration={8}
                      shineColor={[
                        point.statColor === 'text-red-600' ? '#dc2626' : 
                        point.statColor === 'text-amber-600' ? '#d97706' : 
                        '#2563eb',
                        '#ffffff',
                        point.statColor === 'text-red-600' ? '#ea580c' : 
                        point.statColor === 'text-amber-600' ? '#f59e0b' : 
                        '#0ea5e9'
                      ]}
                    />
                    {/* Icon container */}
                    <motion.div 
                      className="mb-6 relative z-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={point.icon} 
                        alt={point.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </motion.div>
                    
                    {/* Stat emphasis */}
                    <div className="mb-6 relative z-10">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-5xl font-plus-jakarta font-bold ${point.statColor}`}>
                          {point.stat}
                        </span>
                        <span className="text-lg font-plus-jakarta font-medium text-gray-600">
                          {point.subtitle}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-plus-jakarta font-bold mb-3 text-gray-900 relative z-10">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 font-plus-jakarta leading-relaxed relative z-10">
                      {point.description}
                    </p>

                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-gray-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact statement */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-plus-jakarta font-light text-white mb-6">
                Résultat : Vous travaillez 
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> 2x plus dur </span>
                pour 
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> 2x moins </span>
                de résultats
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemPremium;