'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ROICalculator from '@/components/shared/ROICalculator';

const ROICalculatorSection = () => {
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

  return (
    <section ref={sectionRef} id="roi-calculator" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Calculez Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Potentiel de Croissance</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Découvrez combien RunCALL peut vous rapporter chaque mois avec notre simulateur interactif
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <ROICalculator />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-text-secondary mb-6">
              Impressionné par les chiffres ? Passons à l&apos;action !
            </p>
            <a
              href="#contact-form"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Obtenir Mon Audit Gratuit →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;