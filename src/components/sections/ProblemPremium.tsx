'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import for 3D icons to prevent SSR issues
const Icon3D = dynamic(
  () => import('@/components/ui/problem-icons-3d').then((mod) => ({ default: mod.Icon3D })),
  { 
    ssr: false,
    loading: () => (
      <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl animate-pulse" />
    )
  }
);

const PAIN_POINTS = [
  {
    type: 'money' as const,
    title: "40% de leads jamais rappelés",
    description: "Vous payez pour des leads que vous n'avez pas le temps de traiter"
  },
  {
    type: 'chart' as const,
    title: "Taux de conversion dérisoire",
    description: "Sans technique de vente, vos appels ne convertissent pas"
  },
  {
    type: 'clock' as const,
    title: "Téléphoner ou travailler ?",
    description: "Pendant que vous prospectez, votre activité principale prend du retard"
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Title with premium gradient */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold text-center mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent"
          >
            Vous Gaspillez Votre Argent en Pub
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 text-center mb-16 font-light"
          >
            Ces 3 erreurs coûtent cher aux entreprises réunionnaises
          </motion.p>

          {/* Premium glassmorphism cards */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {PAIN_POINTS.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group h-full relative">
                  {/* Glassmorphism card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20" />
                  <div className="relative p-8 h-full flex flex-col items-center text-center">
                    {/* 3D Icon */}
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      <Suspense fallback={
                        <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl animate-pulse" />
                      }>
                        <Icon3D type={point.type} />
                      </Suspense>
                    </div>
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Aspirational closing with premium design */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-cyan-400/5 blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-montserrat font-light mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Et si vous pouviez signer de nouveaux clients
                </h3>
                <p className="text-2xl md:text-3xl font-montserrat font-semibold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                  sans vous en occuper ?
                </p>
                {/* Subtle decorative elements */}
                <div className="mt-8 flex justify-center gap-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemPremium;