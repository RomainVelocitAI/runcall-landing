'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { event } from '@/lib/analytics';

export default function MerciPage() {
  useEffect(() => {
    // Track conversion completion
    event({
      action: 'conversion',
      category: 'success',
      label: 'form_submission_complete',
      value: 100,
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center"
        >
          <span className="text-5xl">✅</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl md:text-4xl font-montserrat font-bold mb-4"
        >
          Merci pour votre confiance !
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-text-secondary mb-8"
        >
          Votre demande a bien été enregistrée.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4 mb-8"
        >
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">📞 Étape 1 : Appel de qualification</h3>
            <p className="text-sm text-text-secondary">
              Un expert Runcall vous contactera dans les 24h pour comprendre vos besoins
            </p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold mb-2">📊 Étape 2 : Audit gratuit</h3>
            <p className="text-sm text-text-secondary">
              Analyse approfondie de votre processus de vente actuel
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold mb-2">🚀 Étape 3 : Démarrage</h3>
            <p className="text-sm text-text-secondary">
              Premiers appels dans les 48h suivant la validation
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            variant="outline"
            asChild
          >
            <a href="/">
              🏠 Retour à l&apos;accueil
            </a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 pt-8 border-t"
        >
          <p className="text-sm text-text-secondary">
            Une question urgente ? Appelez-nous directement :
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="text-xl font-semibold text-primary hover:text-primary/80 transition"
          >
            {process.env.NEXT_PUBLIC_PHONE_DISPLAY || '02 62 12 34 56'}
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}