import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Runcall - Closing Téléphonique',
  description: "Conditions Générales de Vente des services RunCall - Agence de closing téléphonique spécialisée pour les entreprises à La Réunion.",
};

export default function CGV() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Conditions Générales de Vente (CGV)
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-600 mb-8">
                RunCall – marque exploitée par ARA CORP.<br />
                Version en vigueur au 26 août 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Champ d'application</h2>
                  <p className="mb-3">
                    Les présentes Conditions Générales de Vente (CGV) s'appliquent à l'ensemble des prestations
                    de services proposées sous la marque RunCall, exploitée par ARA CORP., SAS au capital de
                    1 000 €, immatriculée au RCS de Saint-Denis sous le n° 941 181 232, siège social : 8 ruelle
                    Boulot, 97400 Saint-Denis, La Réunion.
                  </p>
                  <p>
                    Elles concernent exclusivement les clients professionnels (auto-entrepreneurs, TPE, PME,
                    grandes entreprises). Toute commande implique l'acceptation pleine et entière des présentes CGV.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Prestations proposées</h2>
                  <p className="mb-3">RunCall est une agence de closing spécialisée dans :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>La gestion d'appels commerciaux entrants ou sortants.</li>
                    <li>La qualification et transformation de leads fournis par le client ou générés via Digiqo/ARA CORP.</li>
                    <li>La relance et le suivi commercial.</li>
                    <li>Le reporting de performance (taux de transformation, RDV conclus, etc.).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Commande et contractualisation</h2>
                  <p className="mb-3">Les prestations peuvent être souscrites via :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>devis ou contrat signé,</li>
                    <li>facture validée,</li>
                    <li>ou tout autre moyen expressément accepté par RunCall.</li>
                  </ul>
                  <p>La validation de la commande vaut acceptation des présentes CGV.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Modalités financières</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold mb-2">Forfait / Commissionnement :</p>
                      <p className="mb-2">Selon la formule convenue, les prestations RunCall peuvent être facturées :</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>au forfait mensuel,</li>
                        <li>ou en commissionnement (% sur les ventes réalisées, montant fixé dans le devis/contrat).</li>
                      </ul>
                    </div>
                    <p>• Les paiements se font par virement bancaire ou via Stripe/HubSpot Payments.</p>
                    <p>• Les factures sont exigibles à réception, sauf mention contraire.</p>
                    <p>• En cas de non-paiement, RunCall se réserve le droit de suspendre immédiatement la
                    prestation jusqu'au règlement complet. Aucun remboursement n'est dû pour les
                    périodes suspendues.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Obligations du client</h2>
                  <p className="mb-3">Le Client s'engage à :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir des leads ou fichiers prospects conformes, licites et exploitables.</li>
                    <li>Mettre à disposition les informations nécessaires à la bonne exécution de la prestation
                    (scripts, offres, tarifs, conditions commerciales).</li>
                    <li>Ne pas demander aux closers de RunCall d'exécuter des tâches en dehors du périmètre
                    contractuel.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propriété intellectuelle et données</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Les scripts, argumentaires et documents fournis par RunCall restent la propriété de
                    RunCall, sauf accord écrit de cession.</li>
                    <li>Les données clients et prospects traitées dans le cadre de la mission restent la propriété
                    du Client.</li>
                    <li>RunCall agit en qualité de sous-traitant au sens du RGPD pour les données
                    prospects/leads fournies par le Client.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilités</h2>
                  <p className="mb-3">
                    RunCall s'engage à mettre en œuvre tous les moyens nécessaires pour maximiser la
                    performance commerciale, sans obligation de résultat.
                  </p>
                  <p className="mb-2">RunCall ne pourra être tenu responsable :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>de la qualité des leads fournis par le Client,</li>
                    <li>des décisions commerciales finales prises par le Client,</li>
                    <li>des interruptions dues à un défaut de paiement du Client.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Confidentialité et données personnelles</h2>
                  <p className="mb-3">
                    Chaque partie s'engage à maintenir la confidentialité des informations échangées.
                  </p>
                  <p>
                    Le traitement des données personnelles est régi par la{' '}
                    <a href="/politique-confidentialite" className="text-blue-600 hover:text-blue-800 underline">
                      Politique de confidentialité
                    </a>{' '}
                    du site runcall.re.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Résiliation</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Les prestations peuvent être résiliées par l'une ou l'autre des parties avec un préavis de
                    30 jours.</li>
                    <li>En cas de manquement grave (non-paiement, non-collaboration active, fourniture de
                    leads frauduleux), RunCall pourra mettre fin à la prestation sans préavis.</li>
                    <li>Les prestations entamées ou facturées restent intégralement dues.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Force majeure</h2>
                  <p>
                    Aucune des parties ne pourra être tenue responsable en cas d'événement de force majeure
                    rendant impossible l'exécution du contrat (catastrophes, pannes globales, grèves, etc.).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Droit applicable et juridiction compétente</h2>
                  <p>
                    Les présentes CGV sont régies par le droit français. Tout litige sera soumis aux juridictions
                    compétentes du ressort du siège social de RunCall (Tribunal de commerce de Saint-Denis, La
                    Réunion).
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