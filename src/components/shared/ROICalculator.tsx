'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ROIInputs {
  monthlyLeads: number;
  currentConversionRate: number;
  averageOrderValue: number;
}

const ROICalculator = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    monthlyLeads: 100,
    currentConversionRate: 2,
    averageOrderValue: 500,
  });

  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  
  const currentRevenue = (inputs.monthlyLeads * inputs.currentConversionRate / 100) * inputs.averageOrderValue;
  const projectedRevenue = (inputs.monthlyLeads * 8 / 100) * inputs.averageOrderValue; // 8% avec Runcall
  const gain = projectedRevenue - currentRevenue;
  const roi = gain > 0 ? ((gain / (projectedRevenue * 0.2)) * 100).toFixed(0) : '0'; // Assuming 20% commission

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedRevenue(projectedRevenue);
    }, 500);
    return () => clearTimeout(timer);
  }, [projectedRevenue]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Calculez Votre ROI</h3>
      
      {/* Sliders interactifs */}
      <div className="space-y-6">
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
            <span className="font-medium">Taux de conversion actuel</span>
            <span className="font-bold text-primary">{inputs.currentConversionRate}%</span>
          </label>
          <input 
            type="range" 
            min="1" 
            max="10" 
            step="0.5"
            value={inputs.currentConversionRate}
            onChange={(e) => setInputs({...inputs, currentConversionRate: Number(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1E40AF 0%, #1E40AF ${((inputs.currentConversionRate - 1) / 9) * 100}%, #E5E7EB ${((inputs.currentConversionRate - 1) / 9) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>10%</span>
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
      </div>
      
      {/* Résultats */}
      <motion.div 
        className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">CA actuel/mois</p>
            <p className="text-2xl font-bold text-gray-900">
              {currentRevenue.toLocaleString('fr-FR')}€
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">CA avec Runcall</p>
            <motion.p 
              className="text-2xl font-bold text-green-600"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
              key={projectedRevenue}
            >
              {projectedRevenue.toLocaleString('fr-FR')}€
            </motion.p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600">Gain mensuel supplémentaire</p>
          <motion.p 
            className="text-3xl font-bold text-orange-600"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
            key={gain}
          >
            +{gain.toLocaleString('fr-FR')}€
          </motion.p>
          <p className="text-lg mt-2">
            ROI de <span className="font-bold text-green-600">{roi}%</span>
          </p>
        </div>
        
        {gain > 10000 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg"
          >
            <p className="text-green-800 font-semibold text-center">
              🎉 Potentiel exceptionnel détecté !
            </p>
          </motion.div>
        )}
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