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
  title: 'Runcall - Multipliez vos ventes par 3 avec nos closers experts | La Réunion',
  description: 'Service de closing téléphonique pour entreprises réunionnaises. Transformez vos leads en clients avec nos experts locaux. 100% sur résultats.',
  keywords: 'closing téléphonique réunion, closer expert, conversion leads, vente b2b réunion, prospection commerciale 974',
  authors: [{ name: 'Runcall' }],
  creator: 'Runcall',
  publisher: 'Runcall',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Runcall - Closing Téléphonique La Réunion',
    description: 'Multipliez vos ventes par 3 avec nos closers experts',
    url: 'https://runcall.re',
    siteName: 'Runcall',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Runcall - Service de closing téléphonique à La Réunion',
      }
    ],
    locale: 'fr_RE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Runcall - Closing Téléphonique La Réunion',
    description: 'Multipliez vos ventes par 3 avec nos closers experts',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
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