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

  // Calculs honnêtes basés sur les leads non rappelés
  const leadsNotCalled = Math.round(inputs.monthlyLeads * inputs.percentLeadsNotCalled / 100);
  const currentRevenue = inputs.currentMonthlySales * inputs.averageOrderValue;
  
  // Potentiel de récupération (pas une promesse, juste le potentiel)
  // Si on récupère 30% des leads non rappelés (estimation conservative)
  const potentialRecoveryRate = 0.3;
  const potentialNewSales = Math.round(leadsNotCalled * potentialRecoveryRate * 0.1); // 10% de conversion sur les leads récupérés
  const potentialAdditionalRevenue = potentialNewSales * inputs.averageOrderValue;
  
  // Recommandation de formule basée sur le seuil de rentabilité
  const getRecommendedPlan = () => {
    const basket = inputs.averageOrderValue;
    const currentSales = inputs.currentMonthlySales;
    
    // Filtrer les plans possibles selon le panier moyen
    const eligiblePlans = pricingPlans.filter(plan => 
      basket >= plan.minBasket && basket <= plan.maxBasket
    );
    
    // Calculer le seuil de rentabilité pour chaque plan
    const plansWithBreakeven = eligiblePlans.map(plan => {
      // Combien de ventes supplémentaires pour rentabiliser ?
      const breakEvenSales = plan.monthlyFee > 0 
        ? Math.ceil(plan.monthlyFee / (basket * (1 - plan.commission)))
        : 0;
      
      const totalMonthlyCost = plan.monthlyFee + (currentSales * basket * plan.commission);
      
      return {
        ...plan,
        breakEvenSales,
        totalMonthlyCost,
        costPerSale: currentSales > 0 ? Math.round(totalMonthlyCost / currentSales) : 0
      };
    });
    
    // Recommander basé sur le volume actuel
    if (currentSales < 5) {
      return plansWithBreakeven.find(p => p.name === 'PIONEER') || plansWithBreakeven[0];
    }
    
    // Sinon, prendre celui avec le meilleur coût par vente
    return plansWithBreakeven.reduce((best, current) => 
      current.costPerSale < best.costPerSale ? current : best
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
            <span className="font-medium">Leads non rappelés</span>
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
              <p className="text-sm text-gray-600">Seuil de rentabilité</p>
              <p className="text-xl font-bold text-gray-900">
                {recommendedPlan.breakEvenSales} vente{recommendedPlan.breakEvenSales > 1 ? 's' : ''}
                <span className="text-sm font-normal text-gray-600 block">
                  supplémentaire{recommendedPlan.breakEvenSales > 1 ? 's' : ''} / mois
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Coût par vente</p>
              <p className="text-xl font-bold text-gray-900">
                {recommendedPlan.costPerSale}€
                <span className="text-sm font-normal text-gray-600 block">
                  tout compris
                </span>
              </p>
            </div>
          </div>
          
          <div className="text-sm text-gray-700">
            {recommendedPlan.name === 'PIONEER' && (
              <p>Parfait pour débuter ! Aucun risque, vous ne payez que sur les ventes réalisées.</p>
            )}
            {recommendedPlan.name === 'STARTER' && (
              <p>Avec votre panier moyen de {inputs.averageOrderValue}€ et {inputs.currentMonthlySales} ventes/mois, 
              vous économisez {((0.20 - recommendedPlan.commission) * 100).toFixed(0)}% de commission par rapport à Pioneer.</p>
            )}
            {recommendedPlan.name === 'GROWTH' && (
              <p>Idéal pour votre volume ! Commission optimisée à {(recommendedPlan.commission * 100).toFixed(0)}% 
              avec une équipe dédiée de 2-3 closers experts.</p>
            )}
            {recommendedPlan.name === 'ENTERPRISE' && (
              <p>La solution premium avec {(recommendedPlan.commission * 100).toFixed(0)}% 
              de commission et un accompagnement complet sur mesure.</p>
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
            <span className="text-sm text-gray-600">Leads non rappelés:</span>
            <span className="font-bold text-red-600">{leadsNotCalled} ({inputs.percentLeadsNotCalled}%)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">CA mensuel:</span>
            <span className="font-bold">{currentRevenue.toLocaleString('fr-FR')}€</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Ventes actuelles:</span>
            <span className="font-bold">{inputs.currentMonthlySales} × {inputs.averageOrderValue}€</span>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-2">Potentiel de récupération estimé</p>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Si nous récupérons 30% de ces leads perdus :</span>
              <span className="font-bold">{Math.round(leadsNotCalled * 0.3)} leads</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Avec 10% de conversion :</span>
              <span className="font-bold">{potentialNewSales} ventes</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="font-medium">Potentiel de CA additionnel :</span>
              <span className="text-xl font-bold text-green-600">
                +{potentialAdditionalRevenue.toLocaleString('fr-FR')}€/mois
              </span>
            </div>
          </div>
          
          {leadsNotCalled > 20 && (
            <p className="text-sm text-orange-600 mt-3 font-medium">
              ⚠️ Vous perdez actuellement {leadsNotCalled} opportunités commerciales par mois
            </p>
          )}
        </div>
        
        {potentialNewSales >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg"
          >
            <p className="text-yellow-800 font-semibold text-center">
              Avec seulement {potentialNewSales} ventes supplémentaires, 
              la formule {recommendedPlan.name} devient rentable !
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
              const breakEvenSales = monthlyFee > 0 
                ? Math.ceil(monthlyFee / (inputs.averageOrderValue * (1 - plan.commission)))
                : 0;
              
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
                    
                    {/* Seuil de rentabilité */}
                    {isEligible && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-center">
                          <span className="font-medium text-gray-700">Rentable dès</span>
                          <br />
                          <span className="font-bold text-sm text-green-600">
                            {breakEvenSales} vente{breakEvenSales > 1 ? 's' : ''} en plus
                          </span>
                        </p>
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
            💡 <strong>Conseil :</strong> La formule recommandée optimise vos coûts selon votre panier moyen actuel de {inputs.averageOrderValue}€. 
            Vous pouvez choisir n'importe quelle formule éligible selon vos préférences.
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