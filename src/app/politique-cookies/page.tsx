import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Cookies | Runcall - Gestion des Cookies',
  description: 'Politique de cookies du site RunCall - Informations sur l\'utilisation des cookies et vos droits concernant leur gestion.',
};

export default function PolitiqueCookies() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Politique de Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-600 mb-8">
                RunCall – marque exploitée par ARA CORP.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
                  <p className="mb-3">
                    Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, smartphone,
                    tablette) lors de la visite du site runcall.re.
                  </p>
                  <p>
                    Il permet de reconnaître votre navigateur et de collecter certaines informations afin d'améliorer
                    l'expérience utilisateur, mesurer l'audience et optimiser nos campagnes publicitaires.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types de cookies utilisés</h2>
                  <p className="mb-3">Sur notre site, nous utilisons les catégories suivantes :</p>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold text-green-900 mb-2">Cookies strictement nécessaires</h3>
                      <p className="text-green-800">
                        Indispensables au fonctionnement du site (sécurité, navigation, gestion des sessions). 
                        Ils ne nécessitent pas de consentement.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold text-blue-900 mb-2">Cookies analytiques (Google Analytics, si activé)</h3>
                      <p className="text-blue-800">
                        Permettent de mesurer l'audience, analyser la navigation et améliorer la performance du site.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h3 className="font-semibold text-purple-900 mb-2">Cookies marketing/publicitaires (Pixel Meta, si activé)</h3>
                      <p className="text-purple-800">
                        Permettent de personnaliser nos campagnes publicitaires, mesurer leur efficacité et recibler les visiteurs du site.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Gestion du consentement</h2>
                  <p className="mb-3">Lors de votre première visite, une bannière vous permet de :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Accepter tout :</strong> autoriser l'ensemble des cookies.</li>
                    <li><strong>Refuser tout sauf nécessaires :</strong> seuls les cookies essentiels seront utilisés.</li>
                    <li><strong>Personnaliser :</strong> choisir par catégorie les cookies que vous souhaitez activer ou désactiver.</li>
                  </ul>
                  <p className="bg-gray-50 p-4 rounded-lg">
                    Vous pouvez à tout moment modifier vos préférences en cliquant sur le lien{' '}
                    <strong>"Gérer mes cookies"</strong> disponible en bas de page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Durée de conservation</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cookies analytiques (Google Analytics) :</strong> maximum 13 mois.</li>
                    <li><strong>Cookies marketing (Pixel Meta) :</strong> durée conforme aux règles fixées par Meta Platforms, Inc.</li>
                    <li><strong>Cookies nécessaires :</strong> supprimés dès la fin de la session.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partage des données</h2>
                  <p className="mb-3">
                    Les données collectées via les cookies analytiques et marketing peuvent être transmises à nos
                    partenaires techniques :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Google Ireland Ltd. (Google Analytics)</li>
                    <li>Meta Platforms Ireland Ltd. (Pixel Meta)</li>
                  </ul>
                  <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <strong>Note :</strong> Ces transferts peuvent impliquer un traitement hors Union européenne. 
                    Ils sont encadrés par des clauses contractuelles types (SCC) validées par la Commission européenne.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos droits</h2>
                  <p className="mb-3">
                    Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès,
                    de rectification, d'opposition et de suppression de vos données personnelles.
                  </p>
                  <p className="font-semibold">
                    Pour exercer vos droits :{' '}
                    <a href="mailto:contact@runcall.re" className="text-blue-600 hover:text-blue-800 underline">
                      contact@runcall.re
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
                  <p>
                    Pour toute question relative à l'utilisation des cookies sur ce site, vous pouvez nous écrire à :{' '}
                    <a href="mailto:contact@runcall.re" className="text-blue-600 hover:text-blue-800 underline">
                      contact@runcall.re
                    </a>
                  </p>
                </section>

                <section className="mt-12 p-6 bg-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Comment gérer les cookies dans votre navigateur ?</h3>
                  <p className="mb-3">
                    Vous pouvez également configurer votre navigateur pour accepter ou refuser les cookies :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Chrome</a></li>
                    <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Firefox</a></li>
                    <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Edge</a></li>
                  </ul>
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