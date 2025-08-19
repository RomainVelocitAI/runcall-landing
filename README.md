# Runcall Landing Page

Landing page haute conversion pour Runcall, service de closing téléphonique à La Réunion.

## 🚀 Technologies

- **Next.js 14** avec App Router
- **TypeScript** pour la robustesse du code
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Hook Form + Zod** pour la validation des formulaires
- **Radix UI** pour les composants accessibles
- **Chart.js** pour le calculateur ROI

## 📦 Installation

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build pour production
npm run build

# Lancement en production
npm start
```

## 🔧 Configuration

Créer un fichier `.env.local` avec les variables suivantes :

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL=123456789012345
NEXT_PUBLIC_PHONE=0262123456
NEXT_PUBLIC_PHONE_DISPLAY=02 62 12 34 56
SLACK_WEBHOOK=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

## 🎨 Design System

### Couleurs

- **Primary (Bleu océan)**: #1E40AF - Confiance et professionnalisme
- **Secondary (Orange tropical)**: #F97316 - Énergie et appel à l'action
- **Accent (Vert)**: #059669 - Validation et conversion

### Typographie

- **Headlines**: Montserrat (700, 800)
- **Body**: Inter (400, 500, 600)
- **CTA**: Poppins (600)

## 📱 Fonctionnalités

### Sections

1. **Hero**: Accroche principale avec CTA fort
2. **Problem**: Points de douleur des prospects
3. **Solution**: Présentation de l'offre Runcall
4. **Social Proof**: Témoignages clients
5. **Transformation**: Avant/Après avec Runcall
6. **Process**: Étapes de collaboration
7. **Pricing**: Tarification transparente
8. **Urgency**: Formulaire de contact + Calculateur ROI
9. **Footer**: Liens et informations

### Composants Interactifs

- **Calculateur ROI**: Simulation interactive des gains potentiels
- **Formulaire de Contact**: Validation en temps réel avec Zod
- **Pricing Toggle**: Basculement entre modes de tarification
- **Testimonials Carousel**: Défilement automatique sur mobile

### Analytics & Tracking

- **Google Analytics 4**: Suivi des conversions
- **Facebook Pixel**: Remarketing et audiences
- **Events Tracking**: Actions utilisateur détaillées
- **Slack Notifications**: Alertes temps réel pour nouveaux leads

## 🚀 Performance

### Optimisations

- Images WebP avec next/image
- Lazy loading des sections
- Font display swap
- CSS critique inline
- Prefetch des liens internes
- Bundle splitting automatique

### Scores Lighthouse Cibles

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 📊 API Endpoints

### `/api/contact`
Réception et traitement des formulaires de contact

### `/api/calculate-roi`
Calcul du ROI basé sur les paramètres fournis

### `/api/track`
Tracking des événements utilisateur

## 🔒 Sécurité

- Validation des données côté serveur
- Protection CSRF native Next.js
- Headers de sécurité configurés
- Sanitization des inputs

## 📈 Métriques de Conversion

### KPIs Principaux

- **Taux de conversion formulaire**: Objectif >5%
- **Temps sur page**: Objectif >2 minutes
- **Taux de rebond**: Objectif <40%
- **Score engagement**: Interactions/visiteur

### A/B Testing Recommandé

- Headlines du Hero
- Couleurs des CTA
- Ordre des sections
- Prix et packaging

## 🌴 Adaptations Locales

- **Langue créole**: Intégration dans les témoignages
- **Références locales**: Saint-Denis, 974, etc.
- **Horaires Réunion**: Fuseau UTC+4
- **Culture locale**: Approche relationnelle

## 📝 Maintenance

### Checklist Mensuelle

- [ ] Mise à jour des témoignages
- [ ] Actualisation des statistiques
- [ ] Vérification des formulaires
- [ ] Analyse des performances
- [ ] Revue des conversions

## 💡 Améliorations Futures

- [ ] Chat en direct
- [ ] Booking calendar intégré
- [ ] Dashboard client
- [ ] Blog avec conseils vente
- [ ] Espace ressources
- [ ] Version PWA

## 📞 Support

Pour toute question technique :
- Email: dev@runcall.re
- Documentation: /docs

---

Made with ❤️ in La Réunion 🌴