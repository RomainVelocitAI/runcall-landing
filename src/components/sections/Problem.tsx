'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PAIN_POINTS } from '@/lib/constants';

const Problem = () => {
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
    <section ref={sectionRef} className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-4"
          >
            Vous Gaspillez Votre Argent en Pub
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-secondary text-center mb-12"
          >
            Ces 3 erreurs coûtent cher aux entreprises réunionnaises
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {PAIN_POINTS.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4 animate-pulse-slow">{point.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-text-secondary">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 bg-red-50 border-2 border-red-200 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">
              Le Pire Dans Tout Ça ?
            </h3>
            <p className="text-lg text-red-700 text-center">
              Ce temps passé au téléphone, c'est du temps en moins pour votre métier et vos clients actuels.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;