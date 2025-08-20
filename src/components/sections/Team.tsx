'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy, Target, Phone, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  stats?: {
    closeRate?: string;
    experience?: string;
    speciality?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Raymond Romero",
    title: "Chief Revenue Officer & Chef d'équipe",
    description: "Expert en closing avec plus de 15 ans d'expérience dans le high-ticket. Raymond a formé plus de 200 closers et développé une méthodologie qui optimise les conversions sur les leads qualifiés.",
    imageUrl: "/images/raymond-romero.jpg",
    stats: {
      closeRate: "18%",
      experience: "15 ans",
      speciality: "High-Ticket & Luxe"
    }
  },
  {
    name: "Sophie Laurent",
    title: "Senior Closer - E-commerce & Mode",
    description: "Spécialiste du closing dans l'e-commerce et la mode depuis 8 ans. Sophie excelle dans la création de connexions authentiques avec les prospects sur des paniers moyens de 2000€+.",
    imageUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
    stats: {
      closeRate: "15%",
      experience: "8 ans",
      speciality: "E-commerce & Mode"
    }
  },
  {
    name: "Marc Dubois",
    title: "Lead Closer - Services B2B",
    description: "Expert en vente B2B avec une expertise particulière dans les services professionnels et le SaaS. Marc a contribué à plus de 8M€ de revenus en 5 ans.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    stats: {
      closeRate: "12%",
      experience: "7 ans",
      speciality: "B2B & SaaS"
    }
  },
  {
    name: "Amina Benali",
    title: "Closer Expert - Formation & Coaching",
    description: "Passionnée par le développement personnel et la formation. Amina transforme les leads tièdes en clients enthousiastes avec une approche consultative éprouvée.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    stats: {
      closeRate: "20%",
      experience: "6 ans",
      speciality: "Formation & Coaching"
    }
  },
  {
    name: "Thomas Martin",
    title: "Senior Closer - Immobilier & Investissement",
    description: "Spécialiste de l'immobilier et de l'investissement avec un track record solide. Thomas a facilité plus de 300 transactions et excelle dans la gestion d'objections complexes.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    stats: {
      closeRate: "10%",
      experience: "10 ans",
      speciality: "Immobilier & Investissement"
    }
  }
];

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % teamMembers.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + teamMembers.length) % teamMembers.length
    );

  const currentMember = teamMembers[currentIndex];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Une Équipe de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Closers d'Élite</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Des experts passionnés qui transforment vos leads en clients fidèles avec des méthodes éprouvées
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full max-w-5xl mx-auto">
            {/* Desktop layout */}
            <div className='hidden md:flex relative items-center'>
              {/* Avatar */}
              <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 flex-shrink-0 shadow-2xl'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentMember.imageUrl}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className='w-full h-full'
                  >
                    {currentMember.name === "Raymond Romero" ? (
                      <img
                        src={currentMember.imageUrl}
                        alt={currentMember.name}
                        className='w-full h-full object-cover'
                        draggable={false}
                      />
                    ) : (
                      <Image
                        src={currentMember.imageUrl}
                        alt={currentMember.name}
                        width={470}
                        height={470}
                        className='w-full h-full object-cover'
                        draggable={false}
                        priority
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card */}
              <div className='bg-white rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1 border border-gray-100'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentMember.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className='mb-6'>
                      <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                        {currentMember.name}
                      </h3>
                      <p className='text-sm font-medium text-blue-600'>
                        {currentMember.title}
                      </p>
                    </div>

                    <p className='text-gray-700 text-base leading-relaxed mb-8'>
                      {currentMember.description}
                    </p>

                    {/* Stats */}
                    {currentMember.stats && (
                      <div className='grid grid-cols-3 gap-4 pt-6 border-t border-gray-200'>
                        {currentMember.stats.closeRate && (
                          <div className='text-center'>
                            <div className='flex justify-center mb-2'>
                              <Trophy className='w-5 h-5 text-yellow-500' />
                            </div>
                            <p className='text-2xl font-bold text-gray-900'>{currentMember.stats.closeRate}</p>
                            <p className='text-xs text-gray-500'>Taux de closing</p>
                          </div>
                        )}
                        {currentMember.stats.experience && (
                          <div className='text-center'>
                            <div className='flex justify-center mb-2'>
                              <TrendingUp className='w-5 h-5 text-green-500' />
                            </div>
                            <p className='text-2xl font-bold text-gray-900'>{currentMember.stats.experience}</p>
                            <p className='text-xs text-gray-500'>Expérience</p>
                          </div>
                        )}
                        {currentMember.stats.speciality && (
                          <div className='text-center'>
                            <div className='flex justify-center mb-2'>
                              <Target className='w-5 h-5 text-blue-500' />
                            </div>
                            <p className='text-sm font-bold text-gray-900 leading-tight'>{currentMember.stats.speciality}</p>
                            <p className='text-xs text-gray-500'>Spécialité</p>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile layout */}
            <div className='md:hidden max-w-sm mx-auto text-center'>
              {/* Avatar */}
              <div className='w-full aspect-square bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-xl'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentMember.imageUrl}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className='w-full h-full'
                  >
                    {currentMember.name === "Raymond Romero" ? (
                      <img
                        src={currentMember.imageUrl}
                        alt={currentMember.name}
                        className='w-full h-full object-cover'
                        draggable={false}
                      />
                    ) : (
                      <Image
                        src={currentMember.imageUrl}
                        alt={currentMember.name}
                        width={400}
                        height={400}
                        className='w-full h-full object-cover'
                        draggable={false}
                        priority
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card content */}
              <div className='px-4 bg-white rounded-2xl shadow-lg p-6'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentMember.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {currentMember.name}
                    </h3>
                    
                    <p className='text-sm font-medium text-blue-600 mb-4'>
                      {currentMember.title}
                    </p>
                    
                    <p className='text-gray-700 text-sm leading-relaxed mb-6'>
                      {currentMember.description}
                    </p>
                    
                    {/* Stats */}
                    {currentMember.stats && (
                      <div className='grid grid-cols-3 gap-2 pt-4 border-t border-gray-200'>
                        {currentMember.stats.closeRate && (
                          <div className='text-center'>
                            <Trophy className='w-4 h-4 text-yellow-500 mx-auto mb-1' />
                            <p className='text-lg font-bold text-gray-900'>{currentMember.stats.closeRate}</p>
                            <p className='text-xs text-gray-500'>Closing</p>
                          </div>
                        )}
                        {currentMember.stats.experience && (
                          <div className='text-center'>
                            <TrendingUp className='w-4 h-4 text-green-500 mx-auto mb-1' />
                            <p className='text-lg font-bold text-gray-900'>{currentMember.stats.experience}</p>
                            <p className='text-xs text-gray-500'>Exp.</p>
                          </div>
                        )}
                        {currentMember.stats.speciality && (
                          <div className='text-center'>
                            <Target className='w-4 h-4 text-blue-500 mx-auto mb-1' />
                            <p className='text-xs font-bold text-gray-900 leading-tight'>{currentMember.stats.speciality}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom navigation */}
            <div className='flex justify-center items-center gap-6 mt-8'>
              {/* Previous */}
              <button
                onClick={handlePrevious}
                aria-label='Membre précédent'
                className='w-12 h-12 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors'
              >
                <ChevronLeft className='w-6 h-6 text-gray-700' />
              </button>

              {/* Dots */}
              <div className='flex gap-2'>
                {teamMembers.map((_, memberIndex) => (
                  <button
                    key={memberIndex}
                    onClick={() => setCurrentIndex(memberIndex)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      memberIndex === currentIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Aller au membre ${memberIndex + 1}`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={handleNext}
                aria-label='Membre suivant'
                className='w-12 h-12 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors'
              >
                <ChevronRight className='w-6 h-6 text-gray-700' />
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">15%</p>
              <p className="text-sm text-gray-600">Taux de conversion moyen</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">48h</p>
              <p className="text-sm text-gray-600">Délai de démarrage</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-sm text-gray-600">Leads rappelés</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">7j/7</p>
              <p className="text-sm text-gray-600">Support disponible</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;