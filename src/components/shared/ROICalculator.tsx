'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ROIInputs {
  monthlyLeads: number;
  percentLeadsNotCalled: number;
  averageOrderValue: number;
  currentMonthlySales: number;
}

interface PricingPlan {
  name: string;
  monthlyFee: number;
  commission: number;
  minBasket: number;
  maxBasket: number;
  breakEvenSales: number;
  color: string;
}

const ROICalculator = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    monthlyLeads: 100,
    percentLeadsNotCalled: 40,
    averageOrderValue: 500,
    currentMonthlySales: 10,
  });

  const pricingPlans: PricingPlan[] = [
    { name: 'PIONEER', monthlyFee: 0, commission: 0.20, minBasket: 0, maxBasket: 800, breakEvenSales: 0, color: 'purple' },
    { name: 'STARTER', monthlyFee: 497, commission: 0.14, minBasket: 800, maxBasket: 2000, breakEvenSales: 6, color: 'blue' },
    { name: 'GROWTH', monthlyFee: 1497, commission: 0.12, minBasket: 2000, maxBasket: 5000, breakEvenSales: 8, color: 'green' },
    { name: 'ENTERPRISE', monthlyFee: 2997, commission: 0.10, minBasket: 5000, maxBasket: 999999, breakEvenSales: 11, color: 'orange' }
  ];

  // Calculs basés sur les leads fantômes (ceux que vous ne rappelez pas ou trop tard)
  const ghostLeads = Math.round(inputs.monthlyLeads * inputs.percentLeadsNotCalled / 100);
  const currentRevenue = inputs.currentMonthlySales * inputs.averageOrderValue;
  
  // RunCall rappelle 100% des leads fantômes rapidement et avec persévérance
  // Taux de conversion réaliste sur les leads rappelés rapidement : 10-15%
  const conversionRate = 0.10; // 10% de conversion (conservateur)
  const potentialNewSales = Math.round(ghostLeads * conversionRate);
  const potentialAdditionalRevenue = potentialNewSales * inputs.averageOrderValue;
  
  // Temps perdu à prospecter (15 min par lead en moyenne : appels, rappels, RDV...)
  const timeWastedHours = Math.round((inputs.monthlyLeads * 15) / 60);
  const timeWastedDays = Math.round(timeWastedHours / 8); // journées de 8h
  
  // Recommandation de formule basée sur la comparaison avec PIONEER
  const getRecommendedPlan = () => {
    const basket = inputs.averageOrderValue;
    const currentSales = inputs.currentMonthlySales;
    
    // Filtrer les plans possibles selon le panier moyen
    const eligiblePlans = pricingPlans.filter(plan => 
      basket >= plan.minBasket && basket <= plan.maxBasket
    );
    
    // Calculer les métriques pour chaque plan
    const plansWithMetrics = eligiblePlans.map(plan => {
      // Coût avec PIONEER (référence sans abonnement)
      const costWithPioneer = currentSales * basket * 0.20;
      
      // Coût avec ce plan
      const totalMonthlyCost = plan.monthlyFee + (currentSales * basket * plan.commission);
      
      // Économie par rapport à PIONEER (positif = économie, négatif = surcoût)
      const savingsVsPioneer = costWithPioneer - totalMonthlyCost;
      
      // Point de rentabilité : à partir de combien de ventes ce plan devient moins cher que PIONEER
      // Si commission >= 20%, ce plan n'est jamais rentable par rapport à PIONEER
      const breakEvenVsPioneer = plan.commission >= 0.20 
        ? Infinity 
        : plan.monthlyFee / (basket * (0.20 - plan.commission));
      
      // Est-ce déjà rentable avec les ventes actuelles ?
      const isAlreadyProfitable = currentSales >= breakEvenVsPioneer;
      
      return {
        ...plan,
        totalMonthlyCost,
        costPerSale: currentSales > 0 ? Math.round(totalMonthlyCost / currentSales) : 0,
        savingsVsPioneer: Math.round(savingsVsPioneer),
        breakEvenVsPioneer: Math.ceil(breakEvenVsPioneer),
        isAlreadyProfitable
      };
    });
    
    // Recommander basé sur les économies réelles
    if (currentSales === 0) {
      // Sans ventes, PIONEER est le meilleur choix (pas d'abonnement)
      return plansWithMetrics.find(p => p.name === 'PIONEER') || plansWithMetrics[0];
    }
    
    // Avec des ventes, prendre celui qui fait le plus d'économies par rapport à PIONEER
    // Mais ne pas recommander un plan avec un surcoût sauf si c'est PIONEER lui-même
    const profitablePlans = plansWithMetrics.filter(p => p.savingsVsPioneer >= 0 || p.name === 'PIONEER');
    
    if (profitablePlans.length === 0) {
      // Si aucun plan n'est rentable, recommander PIONEER
      return plansWithMetrics.find(p => p.name === 'PIONEER') || plansWithMetrics[0];
    }
    
    // Recommander celui avec les meilleures économies
    return profitablePlans.reduce((best, current) => 
      current.savingsVsPioneer > best.savingsVsPioneer ? current : best
    );
  };
  
  const recommendedPlan = getRecommendedPlan();


  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-full">
      <h3 className="text-2xl font-bold mb-6 text-center">Trouvez Votre Formule Optimale</h3>
      
      {/* Layout horizontal sur desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section 1 : Sliders interactifs */}
        <div className="lg:col-span-1 space-y-4 bg-gray-50 rounded-lg p-4">
        <div>
          <label className="flex justify-between mb-2">
            <span className="font-medium">Leads mensuels</span>
            <span className="font-bold text-primary">{inputs.monthlyLeads}</span>
          </label>
          <input 
            type="range" 
            min="50" 
            max="500" 
            step="10"
            value={inputs.monthlyLeads}
            onChange={(e) => setInputs({...inputs, monthlyLeads: Number(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #1E40AF 0%, #1E40AF ${((inputs.monthlyLeads - 50) / 450) * 100}%, #E5E7EB ${((inputs.monthlyLeads - 50) / 450) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50</span>
            <span>500</span>
          </div>
        </div>
        
        <div>
          <label className="flex justify-between mb-2">
            <span className="font-medium">Leads fantômes</span>
            <span className="font-bold text-primary">{inputs.percentLeadsNotCalled}%</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="80" 
            step="5"
            value={inputs.percentLeadsNotCalled}
            onChange={(e) => setInputs({...inputs, percentLeadsNotCalled: Number(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1E40AF 0%, #1E40AF ${(inputs.percentLeadsNotCalled / 80) * 100}%, #E5E7EB ${(inputs.percentLeadsNotCalled / 80) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>80%</span>
          </div>
        </div>
        
        <div>
          <label className="flex justify-between mb-2">
            <span className="font-medium">Panier moyen</span>
            <span className="font-bold text-primary">{inputs.averageOrderValue}€</span>
          </label>
          <input 
            type="range" 
            min="100" 
            max="5000" 
            step="50"
            value={inputs.averageOrderValue}
            onChange={(e) => setInputs({...inputs, averageOrderValue: Number(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1E40AF 0%, #1E40AF ${((inputs.averageOrderValue - 100) / 4900) * 100}%, #E5E7EB ${((inputs.averageOrderValue - 100) / 4900) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>100€</span>
            <span>5000€</span>
          </div>
        </div>
        
        <div>
          <label className="flex justify-between mb-2">
            <span className="font-medium">Ventes mensuelles actuelles</span>
            <span className="font-bold text-primary">{inputs.currentMonthlySales}</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="50" 
            step="1"
            value={inputs.currentMonthlySales}
            onChange={(e) => setInputs({...inputs, currentMonthlySales: Number(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1E40AF 0%, #1E40AF ${(inputs.currentMonthlySales / 50) * 100}%, #E5E7EB ${(inputs.currentMonthlySales / 50) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>50 ventes/mois</span>
          </div>
        </div>
      </div>
        
        {/* Section 2 : Résultats et recommandations */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recommandation de formule */}
          {recommendedPlan && (
        <motion.div 
          className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-2 border-indigo-200 h-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-900">Formule Recommandée</h4>
            <span className={`px-4 py-2 rounded-full font-bold text-white bg-gradient-to-r ${
              recommendedPlan.name === 'PIONEER' ? 'from-purple-500 to-pink-500' :
              recommendedPlan.name === 'STARTER' ? 'from-blue-500 to-cyan-500' :
              recommendedPlan.name === 'GROWTH' ? 'from-green-500 to-emerald-500' :
              'from-orange-500 to-red-500'
            }`}>
              {recommendedPlan.name}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Par rapport à PIONEER</p>
              <p className="text-xl font-bold text-gray-900">
                {recommendedPlan.savingsVsPioneer > 0 ? (
                  <span className="text-green-600">
                    -{recommendedPlan.savingsVsPioneer}€
                    <span className="text-sm font-normal text-gray-600 block">
                      d'économie / mois
                    </span>
                  </span>
                ) : recommendedPlan.savingsVsPioneer < 0 ? (
                  <span className="text-red-600">
                    +{Math.abs(recommendedPlan.savingsVsPioneer)}€
                    <span className="text-sm font-normal text-gray-600 block">
                      de surcoût / mois
                    </span>
                  </span>
                ) : (
                  <span>
                    Identique
                    <span className="text-sm font-normal text-gray-600 block">
                      (formule de base)
                    </span>
                  </span>
                )}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Rentabilité</p>
              <p className="text-xl font-bold text-gray-900">
                {recommendedPlan.isAlreadyProfitable ? (
                  <span className="text-green-600">
                    Déjà rentable
                    <span className="text-sm font-normal text-gray-600 block">
                      avec vos {inputs.currentMonthlySales} ventes
                    </span>
                  </span>
                ) : recommendedPlan.name === 'PIONEER' ? (
                  <span>
                    Sans risque
                    <span className="text-sm font-normal text-gray-600 block">
                      pay per use
                    </span>
                  </span>
                ) : (
                  <span>
                    Dès {recommendedPlan.breakEvenVsPioneer} ventes
                    <span className="text-sm font-normal text-gray-600 block">
                      par mois au total
                    </span>
                  </span>
                )}
              </p>
            </div>
          </div>
          
          <div className="text-sm text-gray-700">
            {recommendedPlan.name === 'PIONEER' && (
              <p>Parfait pour débuter ! RunCall rappelle vos {ghostLeads} leads fantômes/mois sans risque.</p>
            )}
            {recommendedPlan.name === 'STARTER' && (
              <p>Récupérez {potentialNewSales} ventes/mois sur vos {ghostLeads} leads fantômes, 
              tout en économisant {((0.20 - recommendedPlan.commission) * 100).toFixed(0)}% de commission !</p>
            )}
            {recommendedPlan.name === 'GROWTH' && (
              <p>Commission à {(recommendedPlan.commission * 100).toFixed(0)}% seulement ! 
              Équipe dédiée qui rappelle 100% de vos leads rapidement.</p>
            )}
            {recommendedPlan.name === 'ENTERPRISE' && (
              <p>Solution premium : {(recommendedPlan.commission * 100).toFixed(0)}% de commission, 
              {timeWastedHours}h/mois libérées, {potentialNewSales} ventes récupérées.</p>
            )}
          </div>
        </motion.div>
          )}
      
          {/* Résultats */}
          <motion.div 
            className="p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg h-fit"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-lg font-bold mb-3">Votre Situation Actuelle</h4>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Leads fantômes:</span>
            <span className="font-bold text-red-600">{ghostLeads} /mois</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Temps perdu à prospecter:</span>
            <span className="font-bold text-orange-600">{timeWastedHours}h ({timeWastedDays} jours)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">CA mensuel actuel:</span>
            <span className="font-bold">{currentRevenue.toLocaleString('fr-FR')}€</span>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-2">🚀 Ce que RunCall récupère pour vous</p>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Leads fantômes rappelés rapidement :</span>
              <span className="font-bold text-green-600">{ghostLeads} leads</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Persévérance jusqu'au contact (10% conversion) :</span>
              <span className="font-bold text-green-600">{potentialNewSales} ventes</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Temps libéré pour vous :</span>
              <span className="font-bold text-blue-600">{timeWastedHours}h/mois</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="font-medium">CA additionnel potentiel :</span>
              <span className="text-xl font-bold text-green-600">
                +{potentialAdditionalRevenue.toLocaleString('fr-FR')}€/mois
              </span>
            </div>
          </div>
          
          {ghostLeads > 20 && (
            <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
              <p className="text-sm text-red-700 font-medium">
                ⚠️ Vous perdez {ghostLeads} leads fantômes chaque mois !
              </p>
              <p className="text-xs text-red-600 mt-1">
                Ces prospects disparaissent car rappelés trop tard ou pas du tout.
                RunCall les rappelle rapidement et avec persévérance.
              </p>
            </div>
          )}
        </div>
        
        {potentialNewSales >= 3 && recommendedPlan && !recommendedPlan.isAlreadyProfitable && recommendedPlan.name !== 'PIONEER' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg"
          >
            <p className="text-yellow-800 font-semibold text-center">
              {inputs.currentMonthlySales + potentialNewSales >= recommendedPlan.breakEvenVsPioneer ? (
                <>Avec {potentialNewSales} ventes récupérées, vous économiserez 
                {Math.round((inputs.currentMonthlySales + potentialNewSales) * inputs.averageOrderValue * 0.20 - 
                (recommendedPlan.monthlyFee + (inputs.currentMonthlySales + potentialNewSales) * inputs.averageOrderValue * recommendedPlan.commission))}€/mois !</>
              ) : (
                <>Avec les {potentialNewSales} ventes récupérées sur vos leads fantômes, 
                {recommendedPlan.name} sera {recommendedPlan.breakEvenVsPioneer - inputs.currentMonthlySales - potentialNewSales <= 0 ? 'déjà rentable !' : 
                `à ${recommendedPlan.breakEvenVsPioneer - inputs.currentMonthlySales - potentialNewSales} vente${recommendedPlan.breakEvenVsPioneer - inputs.currentMonthlySales - potentialNewSales > 1 ? 's' : ''} de la rentabilité`}</>
              )}
            </p>
          </motion.div>
        )}
          </motion.div>
        </div>
      </div>
      
      {/* Comparaison des formules - Pleine largeur en dessous */}
      <motion.div 
        className="mt-6 p-6 bg-white border-2 border-gray-200 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold">Analyse Coût-Bénéfice par Formule</h4>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Éligible
            </span>
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              Recommandée
            </span>
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              Non éligible
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingPlans.map(plan => {
              const isEligible = inputs.averageOrderValue >= plan.minBasket && inputs.averageOrderValue <= plan.maxBasket;
              const isRecommended = recommendedPlan && plan.name === recommendedPlan.name;
              const monthlyFee = plan.monthlyFee;
              const commissionCost = inputs.currentMonthlySales * inputs.averageOrderValue * plan.commission;
              const totalCost = monthlyFee + commissionCost;
              
              // Comparaison avec PIONEER
              const costWithPioneer = inputs.currentMonthlySales * inputs.averageOrderValue * 0.20;
              const savingsVsPioneer = costWithPioneer - totalCost;
              const breakEvenVsPioneer = plan.commission >= 0.20 
                ? Infinity 
                : plan.monthlyFee / (inputs.averageOrderValue * (0.20 - plan.commission));
              const isAlreadyProfitable = inputs.currentMonthlySales >= breakEvenVsPioneer;
              
              return (
                <div 
                  key={plan.name}
                  className={`p-4 rounded-lg border-2 transition-all relative ${
                    isRecommended 
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                      : isEligible
                      ? 'border-green-400 bg-white'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  {/* Badges */}
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    {isRecommended && (
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-semibold">
                        ★ Recommandée
                      </span>
                    )}
                    {!isEligible && (
                      <span className="px-3 py-1 bg-gray-400 text-white text-xs rounded-full">
                        Panier incompatible
                      </span>
                    )}
                  </div>

                  <div className="mt-2">
                    {/* En-tête de la carte */}
                    <div className="text-center mb-3">
                      <h5 className={`font-bold text-lg ${
                        isRecommended ? 'text-blue-700' : isEligible ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {plan.name}
                      </h5>
                      <p className="text-xs text-gray-500">
                        Panier {plan.minBasket}€ - {plan.maxBasket > 10000 ? '∞' : `${plan.maxBasket}€`}
                      </p>
                    </div>
                    
                    {/* Détails des coûts */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Abonnement:</span>
                        <span className="font-semibold">{monthlyFee}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Commission ({(plan.commission * 100).toFixed(0)}%):</span>
                        <span className="font-semibold">{Math.round(commissionCost)}€</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-600 font-medium">Total/mois:</span>
                        <span className={`font-bold text-lg ${
                          isRecommended ? 'text-blue-700' : isEligible ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {Math.round(totalCost)}€
                        </span>
                      </div>
                    </div>
                    
                    {/* Comparaison avec PIONEER */}
                    {isEligible && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        {plan.name === 'PIONEER' ? (
                          <p className="text-xs text-center">
                            <span className="font-medium text-gray-700">Formule de base</span>
                            <br />
                            <span className="font-bold text-sm text-blue-600">
                              Sans engagement
                            </span>
                          </p>
                        ) : isAlreadyProfitable ? (
                          <p className="text-xs text-center">
                            <span className="font-medium text-gray-700">Économie vs PIONEER</span>
                            <br />
                            <span className="font-bold text-sm text-green-600">
                              -{Math.round(savingsVsPioneer)}€/mois
                            </span>
                          </p>
                        ) : (
                          <p className="text-xs text-center">
                            <span className="font-medium text-gray-700">Rentable dès</span>
                            <br />
                            <span className="font-bold text-sm text-orange-600">
                              {Math.ceil(breakEvenVsPioneer)} ventes/mois
                            </span>
                          </p>
                        )}
                      </div>
                    )}

                    {/* Message pour non éligible */}
                    {!isEligible && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-center text-gray-500">
                          Votre panier moyen de {inputs.averageOrderValue}€ ne correspond pas à cette formule
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Note explicative */}
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800">
            💡 <strong>La vraie valeur de RunCall :</strong> Nous rappelons 100% de vos {ghostLeads} leads fantômes rapidement, 
            avec persévérance jusqu'au contact. Résultat : {potentialNewSales} ventes supplémentaires et {timeWastedHours}h de prospection économisées !
            {inputs.currentMonthlySales > 0 && (
              <span className="block mt-1 font-semibold">
                Impact total : {inputs.currentMonthlySales} ventes actuelles + {potentialNewSales} ventes récupérées = 
                {inputs.currentMonthlySales + potentialNewSales} ventes/mois, soit {((inputs.currentMonthlySales + potentialNewSales) * inputs.averageOrderValue).toLocaleString('fr-FR')}€ de CA.
              </span>
            )}
          </p>
        </div>
      </motion.div>
      
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1E40AF;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1E40AF;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          border: none;
        }
      `}</style>
    </div>
  );
};

export default ROICalculator;