'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { trackConversion } from '@/lib/analytics';
import { 
  Building2, 
  User, 
  Phone, 
  Briefcase, 
  TrendingUp,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';

const formSchema = z.object({
  company: z.string().min(2, 'Nom d\'entreprise requis'),
  name: z.string().min(2, 'Nom requis'),
  phone: z.string().regex(/^0[26]92[0-9]{6}$/, 'Format invalide (ex: 0692123456)'),
  sector: z.string().min(1, 'Secteur requis'),
  monthlyLeads: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const watchedFields = watch();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Track conversion
      trackConversion(100);
      
      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-12 text-center shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-teal-400/10" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
          className="relative"
        >
          <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-600" />
        </motion.div>
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-3"
        >
          Parfait ! Votre demande est envoyée
        </motion.h3>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 text-lg"
        >
          Un expert Runcall vous contactera dans les 24h pour votre audit gratuit.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Company Field */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
          focusedField === 'company' ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        }`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Building2 className={`w-5 h-5 transition-colors ${
              focusedField === 'company' ? 'text-blue-600' : 'text-gray-400'
            }`} />
          </div>
          <input
            {...register('company')}
            placeholder="Nom de votre entreprise"
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl font-medium placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-transparent ${
              errors.company ? 'border-red-300 bg-red-50' : 'border-transparent hover:bg-gray-100'
            }`}
          />
          {watchedFields.company && !errors.company && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {errors.company && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-2 ml-2"
            >
              {errors.company.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Name Field */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
          focusedField === 'name' ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        }`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <User className={`w-5 h-5 transition-colors ${
              focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'
            }`} />
          </div>
          <input
            {...register('name')}
            placeholder="Votre nom complet"
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl font-medium placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-transparent ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-transparent hover:bg-gray-100'
            }`}
          />
          {watchedFields.name && !errors.name && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-2 ml-2"
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Phone Field */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
          focusedField === 'phone' ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        }`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Phone className={`w-5 h-5 transition-colors ${
              focusedField === 'phone' ? 'text-blue-600' : 'text-gray-400'
            }`} />
          </div>
          <input
            {...register('phone')}
            placeholder="Téléphone mobile (0692...)"
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl font-medium placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-transparent ${
              errors.phone ? 'border-red-300 bg-red-50' : 'border-transparent hover:bg-gray-100'
            }`}
          />
          {watchedFields.phone && !errors.phone && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {errors.phone && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-2 ml-2"
            >
              {errors.phone.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Sector Field */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
          focusedField === 'sector' ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        }`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <Briefcase className={`w-5 h-5 transition-colors ${
              focusedField === 'sector' ? 'text-blue-600' : 'text-gray-400'
            }`} />
          </div>
          <select 
            {...register('sector')}
            onFocus={() => setFocusedField('sector')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl font-medium appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:bg-white focus:border-transparent ${
              errors.sector ? 'border-red-300 bg-red-50' : 'border-transparent hover:bg-gray-100'
            } ${!watchedFields.sector ? 'text-gray-400' : 'text-gray-900'}`}
          >
            <option value="">Sélectionnez votre secteur</option>
            <option value="immobilier">🏠 Immobilier</option>
            <option value="formation">📚 Formation</option>
            <option value="services-b2b">💼 Services B2B</option>
            <option value="ecommerce">🛒 E-commerce</option>
            <option value="sante">❤️ Santé & Bien-être</option>
            <option value="tourisme">✈️ Tourisme</option>
            <option value="autre">📋 Autre</option>
          </select>
          {watchedFields.sector && !errors.sector && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {errors.sector && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-2 ml-2"
            >
              {errors.sector.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Monthly Leads Field */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
          focusedField === 'monthlyLeads' ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        }`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <TrendingUp className={`w-5 h-5 transition-colors ${
              focusedField === 'monthlyLeads' ? 'text-blue-600' : 'text-gray-400'
            }`} />
          </div>
          <input
            {...register('monthlyLeads')}
            type="number"
            placeholder="Nombre de leads par mois (optionnel)"
            onFocus={() => setFocusedField('monthlyLeads')}
            onBlur={() => setFocusedField(null)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl font-medium placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-transparent hover:bg-gray-100"
          />
          {watchedFields.monthlyLeads && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>
          )}
        </div>
      </motion.div>
      
      {/* Submit Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full"
      >
        <AnimatedSubscribeButton
          className="w-full h-14 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          subscribeStatus={isSubmitting}
          onClick={handleSubmit(onSubmit)}
          type="button"
        >
          <span className="group inline-flex items-center">
            Recevoir Mon Audit Gratuit
            <ChevronRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="group inline-flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mr-3 w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Envoi en cours...
          </span>
        </AnimatedSubscribeButton>
      </motion.div>
      
      {/* Privacy Notice */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xs text-gray-500 text-center px-4"
      >
        🔒 Vos données sont protégées et ne seront jamais partagées.
        <br />
        En soumettant ce formulaire, vous acceptez d'être contacté par nos équipes.
      </motion.p>
    </motion.form>
  );
};

export default ContactForm;