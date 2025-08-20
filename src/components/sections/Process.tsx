'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PROCESS_STEPS } from '@/lib/constants';

const Process = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-4 text-gray-900"
          >
            Comment Ça Marche ?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-secondary text-center mb-12"
          >
            4 étapes simples pour multiplier vos ventes
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="relative"
          >
            {/* Connection Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 transform -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div key={step.step} variants={itemVariants}>
                  <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-text-secondary text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 p-6 bg-orange-50 border-2 border-orange-200 rounded-xl">
              <div className="text-4xl">⏱️</div>
              <div className="text-left">
                <p className="text-2xl font-bold text-orange-800">
                  Démarrage en 48h
                </p>
                <p className="text-lg text-orange-700">
                  Premiers appels dans les 2 jours suivant votre inscription
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;