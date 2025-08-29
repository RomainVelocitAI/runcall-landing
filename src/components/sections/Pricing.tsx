'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { event } from '@/lib/analytics';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceDetail: string;
  commission?: string;
  targetBasket?: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
  validation?: boolean;
}

const PricingCard = ({
  title,
  subtitle,
  price,
  priceDetail,
  commission,
  targetBasket,
  features,
  cta,
  highlighted,
  badge,
  validation,
}: PricingCardProps) => {
  const handleClick = () => {
    event({
      action: 'click',
      category: 'engagement',
      label: `pricing_${title.toLowerCase()}`,
    });
    
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card 
      className={`h-full flex flex-col ${
        highlighted 
          ? 'border-2 border-primary shadow-2xl scale-105' 
          : 'border-gray-200'
      }`}
    >
      {badge && (
        <div className="bg-primary text-white text-center py-2 px-4 rounded-t-xl text-sm font-semibold">
          {badge}
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-900">{title}</CardTitle>
        <p className="text-gray-600">{subtitle}</p>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow space-y-6">
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">{price}</p>
          <p className="text-sm text-gray-600 mt-1">{priceDetail}</p>
          {commission && (
            <p className="text-lg font-semibold text-orange-600 mt-2">+ {commission} commission</p>
          )}
          {targetBasket && (
            <p className="text-xs text-gray-600 mt-1">Idéal pour paniers {targetBasket}</p>
          )}
          {validation && (
            <div className="mt-3 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
              Sur validation du dossier
            </div>
          )}
        </div>
        
        <ul className="space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant={highlighted ? 'default' : 'outline'}
          size="lg"
          className={`w-full mt-auto ${
            highlighted 
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-lg' 
              : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold'
          }`}
          onClick={handleClick}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
};

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const scrollToCalculator = () => {
    const element = document.getElementById('roi-calculator');
    element?.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-4">
            Une Formule <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Pour Chaque Entreprise</span>
          </h2>
          <p className="text-xl text-text-secondary text-center mb-8">
            Startup ou entreprise établie, découvrez nos 4 formules adaptées
          </p>
          
          {/* Calculateur CTA */}
          <div className="text-center mb-12">
            <button
              onClick={scrollToCalculator}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <span>Découvrir ma formule optimale avec le calculateur</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          
          {/* Pricing Cards */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <PricingCard 
              title="PIONEER"
              subtitle="Startups"
              price="0€"
              priceDetail="Aucun frais fixe"
              commission="20%"
              targetBasket="< 800€"
              features={[
                "Idéal pour startups",
                "Appels illimités",
                "Closers experts locaux",
                "Dashboard temps réel",
                "Rapport hebdomadaire",
                "Formation scripts incluse",
                "Support prioritaire 7j/7",
                "Garantie satisfaction 30j"
              ]}
              cta="Démarrer avec Pioneer"
              highlighted={false}
              badge="Spécial Startups"
              validation={true}
            />
            <PricingCard 
              title="STARTER"
              subtitle="Petits paniers"
              price="497€"
              priceDetail="par mois"
              commission="14%"
              targetBasket="800€ - 2000€"
              features={[
                "Appels illimités",
                "Closer attitré expert",
                "Dashboard basique",
                "Rapport hebdomadaire",
                "Scripts optimisés",
                "Support email prioritaire",
                "Rentable dès 6 ventes/mois"
              ]}
              cta="Choisir Starter"
              highlighted={false}
            />
            <PricingCard 
              title="GROWTH"
              subtitle="Paniers moyens"
              price="1497€"
              priceDetail="par mois"
              commission="12%"
              targetBasket="2000€ - 5000€"
              features={[
                "Appels illimités",
                "Équipe 2-3 closers",
                "Dashboard avancé",
                "Analytics détaillés",
                "A/B testing scripts",
                "Support WhatsApp",
                "Formation équipe",
                "Rentable dès 8 ventes/mois"
              ]}
              cta="Accélérer avec Growth"
              highlighted={true}
              badge="Plus Populaire"
            />
            <PricingCard 
              title="ENTERPRISE"
              subtitle="Gros paniers"
              price="2997€"
              priceDetail="par mois"
              commission="10%"
              targetBasket="> 5000€"
              features={[
                "Appels illimités",
                "Équipe 5+ closers",
                "Dashboard personnalisé",
                "BI & reporting",
                "Stratégie dédiée",
                "Account manager",
                "Formation continue",
                "Intégration CRM",
                "Rentable dès 11 ventes/mois"
              ]}
              cta="Passer à Enterprise"
              highlighted={false}
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;