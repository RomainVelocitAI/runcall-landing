import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Sora } from 'next/font/google';
import Script from 'next/script';
import { GA_TRACKING_ID, FB_PIXEL_ID } from '@/lib/analytics';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RunCall » Closing Téléphonique Réunion | +300% Ventes',
  description: 'Transformez vos leads en clients avec RunCall. Closers experts réunionnais. ✓ 0€ fixe pour startups ✓ Garantie résultats ✓ ROI x4',
  keywords: 'closing téléphonique réunion, closer 974, conversion leads réunion, vente b2b réunion, prospection commerciale 974, télévente la réunion, closer réunionnais, équipe locale 974',
  authors: [{ name: 'RunCall' }],
  creator: 'RunCall',
  publisher: 'RunCall',
  metadataBase: new URL('https://runcall.re'),
  alternates: {
    canonical: 'https://runcall.re',
    languages: {
      'fr-FR': 'https://runcall.re',
      'fr-RE': 'https://runcall.re',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'RunCall - Closing Téléphonique Expert à La Réunion',
    description: 'Multipliez vos ventes par 3 avec nos closers réunionnais. Service 100% local, 100% résultats. Démarrez gratuitement.',
    url: 'https://runcall.re',
    siteName: 'RunCall',
    images: [
      {
        url: 'https://runcall.re/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RunCall - Service de closing téléphonique à La Réunion',
      }
    ],
    locale: 'fr_RE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RunCall - Closing Téléphonique La Réunion',
    description: 'Multipliez vos ventes par 3 avec nos closers experts réunionnais',
    images: ['https://runcall.re/og-image.jpg'],
    creator: '@runcall974',
    site: '@runcall974',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification',
    bing: 'msvalidate.01',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable} ${sora.variable}`}>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://runcall.re" />
        
        {/* Hreflang pour le SEO local */}
        <link rel="alternate" hrefLang="fr-FR" href="https://runcall.re" />
        <link rel="alternate" hrefLang="fr-RE" href="https://runcall.re" />
        <link rel="alternate" hrefLang="x-default" href="https://runcall.re" />
        
        {/* Preconnect pour optimisation performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Données structurées Schema.org - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://runcall.re/#business",
              "name": "RunCall",
              "alternateName": "RunCall Réunion",
              "description": "Service de closing téléphonique expert pour entreprises à La Réunion. Transformation de leads en clients avec closers réunionnais.",
              "url": "https://runcall.re",
              "logo": "https://runcall.re/logo.png",
              "image": "https://runcall.re/og-image.jpg",
              "telephone": "+262 262 02 51 02",
              "email": "contact@runcall.re",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Denis",
                "addressRegion": "La Réunion",
                "postalCode": "97400",
                "addressCountry": "RE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-20.8823",
                "longitude": "55.4504"
              },
              "areaServed": [
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "-21.1151",
                    "longitude": "55.5364"
                  },
                  "geoRadius": "100000"
                }
              ],
              "priceRange": "€€-€€€",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "12:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/runcall974",
                "https://www.linkedin.com/company/runcall",
                "https://twitter.com/runcall974"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
        
        {/* Données structurées - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Closing Téléphonique",
              "provider": {
                "@id": "https://runcall.re/#business"
              },
              "areaServed": {
                "@type": "State",
                "name": "La Réunion"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Formules Closing RunCall",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Pioneer - Startups",
                    "price": "0",
                    "priceCurrency": "EUR",
                    "description": "0€ fixe + 20% commission. Idéal pour startups."
                  },
                  {
                    "@type": "Offer",
                    "name": "Starter",
                    "price": "497",
                    "priceCurrency": "EUR",
                    "description": "497€/mois + 14% commission. Paniers 800-2000€."
                  },
                  {
                    "@type": "Offer",
                    "name": "Growth",
                    "price": "1497",
                    "priceCurrency": "EUR",
                    "description": "1497€/mois + 12% commission. Paniers 2000-5000€."
                  },
                  {
                    "@type": "Offer",
                    "name": "Enterprise",
                    "price": "2997",
                    "priceCurrency": "EUR",
                    "description": "2997€/mois + 10% commission. Paniers >5000€."
                  }
                ]
              }
            })
          }}
        />
        
        {/* Données structurées - WebSite avec SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://runcall.re/#website",
              "url": "https://runcall.re",
              "name": "RunCall",
              "description": "Service de closing téléphonique expert à La Réunion",
              "publisher": {
                "@id": "https://runcall.re/#business"
              },
              "inLanguage": "fr-FR"
            })
          }}
        />
        
        {/* Données structurées - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://runcall.re"
                }
              ]
            })
          }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}