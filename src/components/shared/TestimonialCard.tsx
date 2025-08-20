'use client';

import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  sector: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-text-secondary">{testimonial.company}</p>
            <div className="flex gap-1 mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
          </div>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            {testimonial.sector}
          </span>
        </div>
        
        <p className="text-gray-700 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;