'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS } from '@/lib/constants';
import TestimonialCard from '@/components/shared/TestimonialCard';

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-4">
            Ils Ont <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Multiplié Leurs Ventes</span>
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12">
            Découvrez comment Runcall a transformé leur business
          </p>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative h-[300px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">+250</p>
              <p className="text-text-secondary">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">12K+</p>
              <p className="text-text-secondary">Appels Réalisés</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">3.2M€</p>
              <p className="text-text-secondary">CA Généré</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">4.8/5</p>
              <p className="text-text-secondary">Note Moyenne</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;