export const SITE_CONFIG = {
  name: 'Runcall',
  description: 'Service de closing téléphonique pour entreprises réunionnaises',
  url: 'https://runcall.re',
  phone: process.env.NEXT_PUBLIC_PHONE || '0262123456',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '02 62 12 34 56',
  email: 'contact@runcall.re',
}

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Jean-Marc Payet",
    company: "Immobilier Saint-Denis",
    avatar: "/testimonials/jm-payet.jpg",
    text: "Runcall a transformé notre approche commerciale. Mi conné bien sa, 3 fois plus de ventes en 2 mois !",
    rating: 5,
    sector: "immobilier"
  },
  {
    id: 2,
    name: "Marie Lafleur", 
    company: "Formation Pro 974",
    avatar: "/testimonials/m-lafleur.jpg",
    text: "L'équipe locale fait toute la différence. Nos prospects se sentent compris, le taux de closing a explosé.",
    rating: 5,
    sector: "formation"
  },
  {
    id: 3,
    name: "Thomas Rivière",
    company: "E-commerce Réunion",
    avatar: "/testimonials/t-riviere.jpg",
    text: "Avant Runcall, on perdait 40% de nos leads. Maintenant, notre taux de conversion a doublé. Un vrai game-changer !",
    rating: 5,
    sector: "ecommerce"
  },
  {
    id: 4,
    name: "Sophie Chen",
    company: "Services B2B Ocean Indien",
    avatar: "/testimonials/s-chen.jpg",
    text: "Le ROI est incroyable. Pour chaque euro investi, on récupère 4€. L'équipe est professionnelle et comprend vraiment le marché local.",
    rating: 5,
    sector: "services-b2b"
  }
]

export const PAIN_POINTS = [
  {
    icon: "💸",
    title: "40% de leads jamais rappelés",
    description: "Vous payez pour des leads que vous n'avez pas le temps de traiter"
  },
  {
    icon: "📉",
    title: "Taux de conversion dérisoire",
    description: "Sans technique de vente, vos appels ne convertissent pas"
  },
  {
    icon: "⏰",
    title: "Téléphoner ou travailler ?",
    description: "Pendant que vous prospectez, votre activité principale prend du retard"
  }
]

export const SOLUTIONS = [
  {
    title: "Closers 100% Créolophones",
    description: "Nos experts parlent le langage de vos clients, créent la confiance instantanément",
    icon: "🎯"
  },
  {
    title: "Focus 100% sur la Vente",
    description: "Pas de génération de leads, uniquement du closing expert sur VOS prospects chauds",
    icon: "💎"
  },
  {
    title: "Résultats Garantis ou Remboursé",
    description: "8% de conversion minimum ou on vous rembourse. Simple et transparent.",
    icon: "✅"
  }
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Audit Gratuit",
    description: "On analyse vos besoins et votre processus de vente actuel"
  },
  {
    step: 2,
    title: "Script Personnalisé",
    description: "Création d'un script sur-mesure adapté à votre secteur"
  },
  {
    step: 3,
    title: "Closers Dédiés",
    description: "Attribution de closers experts dans votre domaine"
  },
  {
    step: 4,
    title: "Résultats Garantis",
    description: "Suivi en temps réel et optimisation continue"
  }
]