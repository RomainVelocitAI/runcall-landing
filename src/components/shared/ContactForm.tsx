'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { trackConversion } from '@/lib/analytics';

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
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

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
        
        // Optional: Redirect to thank you page
        setTimeout(() => {
          window.location.href = '/merci';
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Merci pour votre demande !
        </h3>
        <p className="text-green-700">
          Un de nos experts vous contactera dans les 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register('company')}
          placeholder="Nom de votre entreprise *"
          error={!!errors.company}
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('name')}
          placeholder="Votre nom *"
          error={!!errors.name}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('phone')}
          placeholder="Téléphone (0692...) *"
          error={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      
      <div>
        <select 
          {...register('sector')}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.sector ? 'border-red-500' : ''
          }`}
        >
          <option value="">Votre secteur *</option>
          <option value="immobilier">Immobilier</option>
          <option value="formation">Formation</option>
          <option value="services-b2b">Services B2B</option>
          <option value="ecommerce">E-commerce</option>
          <option value="sante">Santé & Bien-être</option>
          <option value="tourisme">Tourisme</option>
          <option value="autre">Autre</option>
        </select>
        {errors.sector && (
          <p className="text-red-500 text-sm mt-1">{errors.sector.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('monthlyLeads')}
          type="number"
          placeholder="Nombre de leads/mois (optionnel)"
        />
      </div>
      
      <Button
        type="submit"
        size="xl"
        variant="default"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-xl transform hover:scale-105 transition-all duration-200"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Recevoir Mon Audit Gratuit'}
      </Button>
      
      <p className="text-xs text-text-secondary text-center">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté par nos équipes.
        Vos données sont protégées et ne seront jamais partagées.
      </p>
    </form>
  );
};

export default ContactForm;