'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { SOLUTIONS } from '@/lib/constants';

const Solution = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-4"
          >
            La Solution <span className="text-gradient">Runcall</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-secondary text-center mb-12"
          >
            Concentrez-vous sur votre métier, on s&apos;occupe de vos ventes
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {SOLUTIONS.map((solution, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="h-full bg-gradient-to-br from-white to-blue-50 border-blue-200"
                >
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {solution.title}
                    </h3>
                    <p className="text-text-secondary">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 p-6 bg-green-50 border-2 border-green-200 rounded-xl">
              <div className="text-4xl">🎯</div>
              <div className="text-left">
                <p className="text-2xl font-bold text-green-800">
                  Résultat Garanti : 8% de Conversion Minimum
                </p>
                <p className="text-lg text-green-700">
                  Ou on vous rembourse intégralement. Sans discussion.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;