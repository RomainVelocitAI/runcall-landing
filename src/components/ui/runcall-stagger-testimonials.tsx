"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "En 3 mois, RunCALL a multiplié par 3 nos ventes. Leur approche locale fait toute la différence.",
    by: "Marie L., Directrice Commerciale",
    company: "Tech Solutions Réunion",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "Les closers de RunCALL connaissent parfaitement le marché réunionnais. Résultats exceptionnels !",
    by: "Jean-Paul M., CEO",
    company: "Import Export OI",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "40% de taux de conversion sur nos leads qualifiés. RunCALL a dépassé toutes nos attentes.",
    by: "Sophie R., Responsable Marketing",
    company: "E-commerce 974",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "Enfin une équipe qui comprend les spécificités du marché local. ROI multiplié par 5 !",
    by: "Patrick D., Directeur Commercial",
    company: "Services Pro Réunion",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "RunCALL nous a permis de nous concentrer sur notre cœur de métier. Ventes +250% en 6 mois.",
    by: "Nathalie B., Fondatrice",
    company: "Beauté Créole",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "La flexibilité du service est remarquable. On peut ajuster selon nos besoins. Parfait !",
    by: "Thomas L., Gérant",
    company: "BTP Innovation",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "Les scripts personnalisés et l'approche locale font vraiment la différence. +180% de CA !",
    by: "Céline M., Directrice",
    company: "Formation Pro OI",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    tempId: 7,
    testimonial: "RunCALL a transformé notre approche commerciale. Le paiement au résultat, c'est l'idéal.",
    by: "David F., PDG",
    company: "Solar Réunion",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    tempId: 8,
    testimonial: "6 nouveaux clients grands comptes en 2 mois. L'expertise de RunCALL est indéniable.",
    by: "Isabelle P., Commerciale",
    company: "Logistique 974",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    tempId: 9,
    testimonial: "Le suivi en temps réel et la transparence totale nous ont convaincus. Excellent partenaire !",
    by: "Alexandre T., Directeur",
    company: "Digital Agency OI",
    imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out rounded-xl",
        isCenter 
          ? "z-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white border-blue-400 shadow-2xl" 
          : "z-0 bg-white/90 backdrop-blur text-gray-800 border-gray-200 hover:border-blue-300 shadow-lg"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          scale(${isCenter ? 1 : 0.9})
        `,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.imgSrc}
          alt={testimonial.by.split(',')[0]}
          className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
        />
        <div className="flex-1">
          <p className={cn(
            "font-semibold text-sm",
            isCenter ? "text-white" : "text-gray-800"
          )}>
            {testimonial.by}
          </p>
          <p className={cn(
            "text-xs",
            isCenter ? "text-blue-100" : "text-gray-600"
          )}>
            {testimonial.company}
          </p>
        </div>
      </div>
      
      <div className="relative">
        <svg className={cn(
          "absolute -top-2 -left-2 w-6 h-6",
          isCenter ? "text-blue-300/50" : "text-gray-300"
        )} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <p className={cn(
          "text-sm leading-relaxed italic pl-4",
          isCenter ? "text-white/95 font-medium" : "text-gray-700"
        )}>
          {testimonial.testimonial}
        </p>
      </div>
      
      <div className="absolute bottom-4 left-6 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-4 h-4",
              isCenter ? "text-yellow-300" : "text-yellow-500"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export const RunCallStaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(320);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardSize(280);
      } else if (width < 768) {
        setCardSize(300);
      } else {
        setCardSize(320);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleMove(1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonialsList]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white" style={{ height: 550 }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200",
            "bg-white border-2 border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600",
            "shadow-lg hover:shadow-xl transform hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          )}
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200",
            "bg-white border-2 border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600",
            "shadow-lg hover:shadow-xl transform hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          )}
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};