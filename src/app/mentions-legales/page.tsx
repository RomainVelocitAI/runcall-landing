import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Runcall - Closing Téléphonique à La Réunion',
  description: 'Mentions légales du site Runcall.re - Service de closing téléphonique à La Réunion exploité par ARA CORP.',
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Mentions Légales
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-600 mb-8">
                RunCall – marque exploitée par ARA CORP.<br />
                Version en vigueur au 26 août 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
                  <p className="mb-2">Le site runcall.re est édité par :</p>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="mb-1"><strong>ARA CORP.</strong>, société par actions simplifiée au capital de 1 000 €</p>
                    <p className="mb-1"><strong>Siège social :</strong> 8, ruelle Boulot, 97400 Saint-Denis, La Réunion</p>
                    <p className="mb-1"><strong>RCS Saint-Denis :</strong> 941 181 232</p>
                    <p className="mb-1"><strong>SIREN :</strong> 941 181 232</p>
                    <p className="mb-1"><strong>TVA intracommunautaire :</strong> FR02941181232</p>
                    <p className="mt-3 italic">RunCall est une marque exploitée par ARA CORP.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de la publication</h2>
                  <p>Monsieur Rodolphe Le Houx, en qualité de Président de la société ARA CORP.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="mb-2">
                      <strong>Adresse électronique :</strong>{' '}
                      <a href="mailto:contact@runcall.re" className="text-blue-600 hover:text-blue-800 underline">
                        contact@runcall.re
                      </a>
                    </p>
                    <p>
                      <strong>Téléphone :</strong>{' '}
                      <a href="tel:0262025102" className="text-blue-600 hover:text-blue-800 underline">
                        02 62 02 51 02
                      </a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergeur</h2>
                  <p className="mb-2">Le site est hébergé par :</p>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="mb-1"><strong>Hostinger International Ltd.</strong></p>
                    <p className="mb-1">61 Lordou Vironos Street, Lumiel Building, 4ᵉ étage</p>
                    <p className="mb-1">6023 Larnaca, Chypre</p>
                    <p className="mt-2"><strong>Support :</strong> assistance via centre d'aide / live-chat</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
                  <p className="mb-3">
                    Les contenus (textes, images, logos, éléments graphiques, code) présents sur ce site sont
                    protégés par le droit de la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans
                    autorisation écrite préalable, est interdite.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Liens externes</h2>
                  <p>
                    Les liens vers d'autres sites sont fournis à titre informatif. ARA CORP. – RunCall ne peut être
                    tenue pour responsable du contenu de ces sites tiers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Données personnelles</h2>
                  <p>
                    Pour toute information sur le traitement des données personnelles et l'exercice de vos droits
                    (accès, rectification, opposition, suppression), veuillez consulter la{' '}
                    <a href="/politique-confidentialite" className="text-blue-600 hover:text-blue-800 underline">
                      Politique de confidentialité
                    </a>{' '}
                    disponible sur ce site.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}