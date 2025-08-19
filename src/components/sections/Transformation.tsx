'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { event } from '@/lib/analytics';

const Transformation = () => {
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

  const handleCTAClick = () => {
    event({
      action: 'click',
      category: 'engagement',
      label: 'transformation_cta',
    });
    
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const beforeAfter = [
    {
      before: 'Perdre 3h/jour au téléphone',
      after: 'Focus 100% sur votre métier',
    },
    {
      before: '2% de conversion',
      after: '8% minimum garanti',
    },
    {
      before: 'Leads froids abandonnés',
      after: '100% des leads contactés',
    },
    {
      before: 'Scripts génériques',
      after: 'Approche créolophone personnalisée',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
            Votre Transformation en 30 Jours
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold mb-4">❌ Avant Runcall</h3>
              {beforeAfter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-red-500/20 rounded-lg"
                >
                  <span className="text-2xl">😞</span>
                  <p className="text-lg">{item.before}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold mb-4">✅ Après Runcall</h3>
              {beforeAfter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-green-500/20 rounded-lg"
                >
                  <span className="text-2xl">🚀</span>
                  <p className="text-lg">{item.after}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-block p-8 bg-white/10 backdrop-blur rounded-2xl">
              <p className="text-3xl font-bold mb-4">
                = +300% de Chiffre d&apos;Affaires
              </p>
              <p className="text-xl mb-6">
                En moyenne sur les 3 premiers mois
              </p>
              <Button
                size="xl"
                variant="secondary"
                onClick={handleCTAClick}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Je Veux Cette Transformation
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;