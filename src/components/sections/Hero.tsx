'use client';

import AnimatedShaderHero from '@/components/ui/animated-shader-hero';
import { SITE_CONFIG } from '@/lib/constants';
import { event } from '@/lib/analytics';

const Hero = () => {
  const handleCTAClick = () => {
    event({
      action: 'click',
      category: 'engagement',
      label: 'hero_cta',
    });
    
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    event({
      action: 'click',
      category: 'engagement',
      label: 'hero_phone',
    });
  };

  return (
    <AnimatedShaderHero
      headline={{
        line1: "RunCall convertit",
        line2: "vos prospects en clients"
      }}
      subtitle="Vous payez de la pub mais vous ne convertissez pas ? On s'occupe de transformer vos prospects en clients."
      buttons={{
        primary: {
          text: "Découvrir l'Offre Gratuite",
          onClick: handleCTAClick
        },
        secondary: {
          text: `📞 ${SITE_CONFIG.phoneDisplay}`,
          href: `tel:${SITE_CONFIG.phone}`,
          onClick: handlePhoneClick
        }
      }}
    />
  );
};

export default Hero;