'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import ContactForm from '@/components/shared/ContactForm';
import { event } from '@/lib/analytics';

const Urgency = () => {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="contact-form"
            className="max-w-xl mx-auto"
          >
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">
                Réservez Votre Audit Gratuit
              </h3>
              <p className="text-text-secondary mb-6">
                Découvrez comment multiplier vos ventes en 30 jours
              </p>
              <ContactForm />
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
              <div className="text-4xl">⚠️</div>
              <div className="text-left">
                <p className="text-xl font-bold text-yellow-900">
                  Chaque jour sans Runcall = 500€ perdus
                </p>
                <p className="text-yellow-800">
                  Vos concurrents récupèrent vos clients pendant que vous hésitez
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Urgency;