import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Runcall - Protection des Données',
  description: 'Politique de confidentialité et protection des données personnelles de RunCall - Service de closing téléphonique à La Réunion.',
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Politique de Confidentialité
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-600 mb-8">
                RunCall – marque exploitée par ARA CORP.<br />
                Version en vigueur au 26 août 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du traitement</h2>
                  <p className="mb-3">Les données personnelles collectées sur le site runcall.re sont traitées par :</p>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="mb-1">
                      <strong>ARA CORP.</strong>, SAS au capital de 1 000 €
                    </p>
                    <p className="mb-1">RCS Saint-Denis n° 941 181 232</p>
                    <p className="mb-1">Siège social : 8 ruelle Boulot, 97400 Saint-Denis, La Réunion</p>
                    <p className="mt-2">
                      <strong>Contact :</strong>{' '}
                      <a href="mailto:contact@runcall.re" className="text-blue-600 hover:text-blue-800 underline">
                        contact@runcall.re
                      </a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
                  <p className="mb-3">RunCall collecte des données personnelles via :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Formulaire de contact (nom, prénom, entreprise, email, téléphone, message).</li>
                    <li>Campagnes publicitaires (si Pixel Meta activé).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
                  <p className="mb-3">Les données collectées sont utilisées pour :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Répondre aux demandes de contact et établir une relation commerciale.</li>
                    <li>Fournir des informations sur nos services de closing.</li>
                    <li>Améliorer nos campagnes publicitaires et mesurer leur performance (via Pixel Meta si activé).</li>
                  </ul>
                  <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong>Note :</strong> En soumettant un formulaire, l'Utilisateur accepte d'être recontacté par RunCall.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale du traitement</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Exécution contractuelle :</strong> traitement des demandes entrantes.</li>
                    <li><strong>Consentement :</strong> communications commerciales et suivi publicitaire (Pixel Meta).</li>
                    <li><strong>Intérêt légitime :</strong> développement de la relation client et optimisation des campagnes.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Destinataires des données</h2>
                  <p className="mb-3">
                    Les données personnelles sont exclusivement accessibles à l'équipe RunCall et à ses
                    prestataires techniques de confiance :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>HubSpot</strong> (CRM, gestion des leads et automatisations marketing).</li>
                    <li><strong>Meta Platforms Ireland Ltd.</strong> (si Pixel Meta actif).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Prospects :</strong> 3 ans à compter du dernier contact.</li>
                    <li><strong>Clients :</strong> 10 ans à compter de la fin de la relation commerciale (obligations comptables et fiscales).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Droits des personnes</h2>
                  <p className="mb-3">Conformément au RGPD, chaque utilisateur dispose des droits suivants :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Accès, rectification, suppression.</li>
                    <li>Limitation ou opposition au traitement.</li>
                    <li>Portabilité des données.</li>
                    <li>Retrait du consentement à tout moment.</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2">
                      <strong>Pour exercer vos droits :</strong>{' '}
                      <a href="mailto:contact@runcall.re" className="text-blue-600 hover:text-blue-800 underline">
                        contact@runcall.re
                      </a>
                    </p>
                    <p>
                      Vous pouvez également introduire une réclamation auprès de la CNIL{' '}
                      <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        (www.cnil.fr)
                      </a>.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
                  <p>
                    RunCall met en œuvre des mesures techniques et organisationnelles pour assurer la sécurité et
                    la confidentialité des données (authentification sécurisée, accès restreints, sauvegarde).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Transferts hors UE</h2>
                  <p>
                    Certaines données peuvent être transférées hors Union européenne (HubSpot, Meta). Ces
                    transferts sont encadrés par des clauses contractuelles types (SCC) validées par la
                    Commission européenne afin de garantir un niveau de protection adéquat.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Mise à jour de la politique</h2>
                  <p>
                    La présente politique pourra être mise à jour en fonction de l'évolution des traitements ou de la
                    réglementation. La version en vigueur est toujours disponible sur runcall.re.
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