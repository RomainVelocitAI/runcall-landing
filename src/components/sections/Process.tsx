'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { PROCESS_STEPS } from '@/lib/constants';
import { ArcTimeline } from '@/components/magicui/arc-timeline';
import { Phone, Users, ChartBar, Trophy, Calendar, FileText, Rocket, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Map currentStep to timeline data structure
  const getTimelinePosition = (step: number) => {
    // We have 7 steps distributed across 4 time periods
    // Jour 1: steps 0-1
    // Semaine 1: steps 2-3  
    // Semaine 2: steps 4-5
    // En continu: step 6
    if (step <= 1) return { time: "Jour 1", stepIndex: step };
    if (step <= 3) return { time: "Semaine 1", stepIndex: step - 2 };
    if (step <= 5) return { time: "Semaine 2", stepIndex: step - 4 };
    return { time: "En continu", stepIndex: 0 };
  };

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
            Un processus éprouvé en 7 étapes pour multiplier vos ventes
          </motion.p>

          {/* Arc Timeline pour affichage desktop */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:block relative"
          >
            {/* Flèches de navigation */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={() => {
                  const prevStep = currentStep > 0 ? currentStep - 1 : 6;
                  setCurrentStep(prevStep);
                }}
                className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-blue-500"
                aria-label="Étape précédente"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </button>
              <div className="mt-2 text-center">
                <span className="text-xs text-gray-500 font-medium">Précédent</span>
              </div>
            </div>
            
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={() => {
                  const nextStep = currentStep < 6 ? currentStep + 1 : 0;
                  setCurrentStep(nextStep);
                }}
                className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-blue-500"
                aria-label="Étape suivante"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </button>
              <div className="mt-2 text-center">
                <span className="text-xs text-gray-500 font-medium">Suivant</span>
              </div>
            </div>

            {/* Indicateur d'étape actuelle */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-white rounded-full px-6 py-2 shadow-lg border-2 border-blue-500">
                <span className="text-sm font-medium text-gray-700">
                  Étape {currentStep + 1} sur 7
                </span>
              </div>
            </div>


            <div
              style={{
                '--step-line-active-color': '#3B82F6',
                '--step-line-inactive-color': '#E5E7EB',
                '--icon-active-color': '#1F2937',
                '--icon-inactive-color': '#9CA3AF',
                '--description-color': '#374151',
                '--time-active-color': '#1E40AF',
                '--time-inactive-color': '#6B7280',
                '--placeholder-line-color': '#F3F4F6'
              } as React.CSSProperties}
            >
            <ArcTimeline
              key={currentStep}
              defaultActiveStep={getTimelinePosition(currentStep)}
              data={[
                {
                  time: "Jour 1",
                  steps: [
                    {
                      icon: (
                        <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg">
                          <Phone className="w-8 h-8 text-white" />
                        </div>
                      ),
                      content: (
                        <div className="mt-12 px-2">
                          <span className="text-gray-800 font-medium text-sm">Audit gratuit de votre processus commercial</span>
                        </div>
                      )
                    },
                    {
                      icon: (
                        <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                      ),
                      content: (
                        <div className="mt-12 px-2">
                          <span className="text-gray-800 font-medium text-sm">Analyse de vos scripts et leads actuels</span>
                        </div>
                      )
                    }
                  ]
                },
                {
                  time: "Semaine 1",
                  steps: [
                    {
                      icon: (
                        <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                      ),
                      content: (
                        <div className="mt-12 px-2">
                          <span className="text-gray-800 font-medium text-sm">Attribution de closers experts dans votre domaine</span>
                        </div>
                      )
                    },
                    {
                      icon: (
                        <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-lg">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                      ),
                      content: (
                        <div className="mt-12 px-2">
                          <span className="text-gray-800 font-medium text-sm">Formation personnalisée sur vos produits</span>
                        </div>
                      )
                    }
                  ]
                },
                {
                  time: "Semaine 2",
                  steps: [
                    {
                      icon: (
                        <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full shadow-lg">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                      ),
                      content: (
                        <div className="mt-12 px-2">
                          <span className="text-gray-800 font-medium text-sm">Lancement des appels avec suivi temps réel</span>
                        </div>
                      )
                    },
                    {
                      icon: (
                        <div className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full shadow-lg">
                          <ChartBar className="w-8 h-8 text-white" />
                        </div>
                      ),
                      content: (
                        <div className="mt-12 px-2">
                          <span className="text-gray-800 font-medium text-sm">Dashboard et analytics détaillés</span>
                        </div>
                      )
                    }
                  ]
                },
                {
                  time: "En continu",
                  steps: [
                    {
                      icon: (
                        <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-lg">
                          <Trophy className="w-8 h-8 text-white" />
                        </div>
                      ),
                      content: (
                        <div className="mt-12 px-2">
                          <span className="text-gray-800 font-medium text-sm">Optimisation continue et amélioration des résultats</span>
                        </div>
                      )
                    }
                  ]
                }
              ]}
              arcConfig={{
                circleWidth: 4000,
                angleBetweenMinorSteps: 0.6,
                lineCountFillBetweenSteps: 12,
                boundaryPlaceholderLinesCount: 40
              }}
              className="max-w-6xl mx-auto"
            />
            </div>
          </motion.div>

          {/* Version mobile/tablette avec cards */}
          <motion.div 
            variants={containerVariants}
            className="md:hidden relative"
          >
            <div className="grid grid-cols-1 gap-6">
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

        </motion.div>
      </div>
    </section>
  );
};

export default Process;