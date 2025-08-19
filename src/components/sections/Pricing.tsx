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
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const PricingCard = ({
  title,
  subtitle,
  price,
  priceDetail,
  features,
  cta,
  highlighted,
  badge,
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
      animated
      className={`h-full ${
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
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-text-secondary">{subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-4xl font-bold text-primary">{price}</p>
          <p className="text-sm text-text-secondary mt-1">{priceDetail}</p>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant={highlighted ? 'default' : 'outline'}
          size="lg"
          className="w-full"
          onClick={handleClick}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
};

const Pricing = () => {
  const [billingMode, setBillingMode] = useState<'commission' | 'hybrid'>('commission');
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-center mb-4">
            Tarification Simple et Transparente
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12">
            Payez uniquement sur les résultats ou optez pour notre formule hybride
          </p>
          
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg shadow-md p-1 flex">
              <button 
                onClick={() => setBillingMode('commission')}
                className={`px-6 py-3 rounded transition-all duration-200 ${
                  billingMode === 'commission' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Commission Pure
              </button>
              <button 
                onClick={() => setBillingMode('hybrid')}
                className={`px-6 py-3 rounded transition-all duration-200 ${
                  billingMode === 'hybrid' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Forfait + Commission
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            key={billingMode}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {billingMode === 'commission' ? (
              <>
                <PricingCard 
                  title="Starter"
                  subtitle="Pour tester sans risque"
                  price="15-20%"
                  priceDetail="de commission sur ventes"
                  features={[
                    "0€ d'avance",
                    "Closers créolophones experts",
                    "Rapport hebdomadaire",
                    "30 jours d'essai satisfaction",
                    "Sans engagement"
                  ]}
                  cta="Démarrer Gratuitement"
                  highlighted={false}
                />
                <PricingCard 
                  title="Scale"
                  subtitle="Pour maximiser vos ventes"
                  price="20-25%"
                  priceDetail="de commission sur ventes"
                  features={[
                    "0€ d'avance",
                    "Closers dédiés à votre secteur",
                    "Dashboard temps réel",
                    "Formation de vos scripts",
                    "Support prioritaire 7j/7",
                    "Garantie 8% conversion"
                  ]}
                  cta="Accélérer Ma Croissance"
                  highlighted={true}
                  badge="Plus Populaire"
                />
              </>
            ) : (
              <>
                <PricingCard 
                  title="Hybrid Start"
                  subtitle="Budget maîtrisé"
                  price="800€"
                  priceDetail="/mois + 8% commission"
                  features={[
                    "Jusqu'à 200 appels/mois",
                    "1 closer attitré",
                    "Rapport hebdomadaire",
                    "Scripts optimisés",
                    "Support email"
                  ]}
                  cta="Choisir Hybrid Start"
                  highlighted={false}
                />
                <PricingCard 
                  title="Hybrid Scale"
                  subtitle="Volume important"
                  price="1500€"
                  priceDetail="/mois + 12% commission"
                  features={[
                    "Appels illimités",
                    "2-3 closers dédiés",
                    "Dashboard temps réel",
                    "A/B testing scripts",
                    "Support prioritaire 24/7",
                    "Account manager dédié"
                  ]}
                  cta="Passer à l'Échelle"
                  highlighted={true}
                  badge="Meilleur ROI"
                />
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-text-secondary mb-4">
              💳 Paiement sécurisé • 🔒 Données protégées • 📞 Support local
            </p>
            <p className="text-sm text-text-secondary">
              Pas de frais cachés. Annulation à tout moment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;