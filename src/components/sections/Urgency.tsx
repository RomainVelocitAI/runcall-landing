'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import ContactForm from '@/components/shared/ContactForm';
import ROICalculator from '@/components/shared/ROICalculator';
import { event } from '@/lib/analytics';

const Urgency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
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
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = { ...prev };
        
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
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
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              🔥 Offre Limitée : Audit Gratuit + 30 Jours d&apos;Essai
            </h3>
            <div className="flex justify-center gap-4 mb-4">
              <div className="text-center">
                <p className="text-3xl font-bold">{timeLeft.days}</p>
                <p className="text-sm">Jours</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{timeLeft.hours}</p>
                <p className="text-sm">Heures</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{timeLeft.minutes}</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{timeLeft.seconds}</p>
                <p className="text-sm">Secondes</p>
              </div>
            </div>
            <p className="text-lg">
              Plus que 5 places disponibles ce mois-ci !
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ROICalculator />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              id="contact-form"
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
          </div>

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