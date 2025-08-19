export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL || '';

// Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Facebook Pixel
export const fbEvent = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', name, options);
  }
};

// Track conversion
export const trackConversion = (value: number = 100) => {
  event({
    action: 'generate_lead',
    category: 'engagement',
    value: value,
  });
  
  fbEvent('Lead', {
    value: value,
    currency: 'EUR',
  });
};