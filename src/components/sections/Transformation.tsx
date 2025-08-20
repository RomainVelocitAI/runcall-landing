'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { event } from '@/lib/analytics';
import Toggle3D from '@/components/ui/Toggle3D';
import RunCallBenefitsCard from '@/components/ui/RunCallBenefitsCard';

const Transformation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);
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

  const handleToggle = (isActive: boolean) => {
    setToggleActive(isActive);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
            Changez cela avec RunCALL
          </h2>

          <div className="mb-12">
            <Toggle3D onToggle={handleToggle} />
          </div>

          <RunCallBenefitsCard isActive={toggleActive} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="inline-block p-8 bg-white/10 backdrop-blur rounded-2xl">
              <p className="text-2xl font-bold mb-4">
                Les Nouveaux Clients Arrivent Automatiquement
              </p>
              <p className="text-xl mb-6">
                Concentrez-vous sur votre métier, on s&apos;occupe du reste
              </p>
              <Button
                size="xl"
                variant="secondary"
                onClick={handleCTAClick}
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Je Veux Plus de Clients
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;