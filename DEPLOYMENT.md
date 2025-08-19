# Déploiement Runcall Landing Page

## Repository GitHub
Le projet a été poussé sur GitHub : https://github.com/RomainVelocitAI/runcall-landing

## Configuration Netlify

### Étapes pour déployer sur Netlify :

1. **Connectez-vous à Netlify**
   - Allez sur https://app.netlify.com
   - Connectez-vous avec votre compte GitHub

2. **Créez un nouveau site**
   - Cliquez sur "Add new site" → "Import an existing project"
   - Choisissez "Deploy with GitHub"
   - Autorisez Netlify à accéder à votre GitHub si nécessaire

3. **Sélectionnez le repository**
   - Cherchez et sélectionnez `runcall-landing`
   - Cliquez sur le repository pour continuer

4. **Configuration du build**
   Les paramètres sont déjà configurés dans `netlify.toml`, mais vérifiez :
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 (configuré automatiquement)

5. **Variables d'environnement (si nécessaire)**
   Ajoutez ces variables dans les settings de Netlify :
   - `NEXT_PUBLIC_SITE_URL`: L'URL de votre site (ex: https://runcall.netlify.app)
   - Toute autre variable d'environnement nécessaire

6. **Déployez**
   - Cliquez sur "Deploy site"
   - Netlify va automatiquement builder et déployer votre site

### Domaine personnalisé

Pour utiliser votre propre domaine :
1. Dans Netlify, allez dans "Domain settings"
2. Cliquez sur "Add custom domain"
3. Suivez les instructions pour configurer votre DNS

### Déploiements automatiques

Les déploiements sont automatiques à chaque push sur la branche `main` du repository GitHub.

## Structure du projet

- **Framework**: Next.js 14 avec App Router
- **UI**: Composant hero avec shader WebGL animé
- **Styling**: Tailwind CSS avec thème Runcall (cyan/bleu)
- **Logo**: Logo Runcall avec fond transparent dans le header
- **Configuration Netlify**: `netlify.toml` avec tous les paramètres optimisés

## Support

Pour toute question sur le déploiement, consultez :
- Documentation Netlify : https://docs.netlify.com
- Documentation Next.js : https://nextjs.org/docs/deployment