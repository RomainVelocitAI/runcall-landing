'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { RunCallStaggerTestimonials } from '@/components/ui/runcall-stagger-testimonials';

const SocialProof = () => {
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
    <section ref={sectionRef} className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-4">
            Ils Ont <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Multiplié Leurs Ventes</span>
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12">
            Découvrez comment RunCall a transformé leur business
          </p>

          {/* Interactive Stagger Testimonials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RunCallStaggerTestimonials />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;