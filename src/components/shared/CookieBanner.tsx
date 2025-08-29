'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Cookie, Settings, Check } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Attendre un peu avant d'afficher la bannière
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Appliquer les préférences sauvegardées
      const savedPreferences = JSON.parse(cookieConsent);
      applyPreferences(savedPreferences);
    }
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    // Ici vous pouvez activer/désactiver Google Analytics et Meta Pixel
    if (prefs.analytics) {
      // Activer Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
    
    if (prefs.marketing) {
      // Activer Meta Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('consent', 'grant');
      }
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    applyPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    savePreferences(onlyNecessary);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay sombre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
            onClick={() => {}}
          />

          {/* Bannière principale */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {!showSettings ? (
                  /* Vue principale */
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Cookie className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Nous utilisons des cookies 🍪
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. 
                          En cliquant sur "Accepter tout", vous consentez à notre utilisation des cookies.
                        </p>
                        <Link 
                          href="/politique-cookies" 
                          className="text-blue-600 hover:text-blue-800 underline text-sm"
                          target="_blank"
                        >
                          En savoir plus sur notre politique de cookies
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={rejectAll}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Refuser tout
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <Settings className="w-5 h-5" />
                        Personnaliser
                      </button>
                      <button
                        onClick={acceptAll}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl flex-1 sm:flex-initial"
                      >
                        Accepter tout
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Vue des paramètres */
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        Personnaliser les cookies
                      </h3>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      {/* Cookies nécessaires */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Cookies nécessaires</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-not-allowed opacity-75">
                              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cookies analytiques */}
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Cookies analytiques</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site (Google Analytics).
                            </p>
                          </div>
                          <button
                            onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                            className={`w-12 h-6 rounded-full relative transition-colors ${
                              preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      </div>

                      {/* Cookies marketing */}
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Cookies marketing</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Ces cookies sont utilisés pour personnaliser les publicités et mesurer leur efficacité (Meta Pixel).
                            </p>
                          </div>
                          <button
                            onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                            className={`w-12 h-6 rounded-full relative transition-colors ${
                              preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setShowSettings(false)}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Annuler
                      </button>
                      <button
                        onClick={saveCustomPreferences}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl flex-1 sm:flex-initial flex items-center justify-center gap-2"
                      >
                        <Check className="w-5 h-5" />
                        Enregistrer mes préférences
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}