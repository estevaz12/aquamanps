import '@picocss/pico';
import '../lib/pico-bootstrap-grid.min.css';
import './globals.css';
import { Inter, Familjen_Grotesk } from 'next/font/google';
import Navbar from '../components/nav/Navbar';
import Hero from '../components/hero/Hero';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Overlay from '../components/overlay/Overlay';
import { useLocale, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });
const grotesk = Familjen_Grotesk({ subsets: ['latin'], variable: '--grotesk' });

export const metadata = {
  metadataBase: new URL('https://aquamanps.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      es: '/es',
    },
  },
  title:
    'CPO Certified Pool and Equipment Maintenance in Puerto Rico | Aquaman Pool Services',
  description:
    'As Certified Pool Operators, Aquaman Pool Services provides quality pool and equipment maintenance in Puerto Rico. Official Hayward and Pentair warranty servicing. With 20+ years of experience and 250+ satisfied customers, trust us to keep your pool in top condition.',
  openGraph: {
    title:
      'CPO Certified Pool and Equipment Maintenance in Puerto Rico | Aquaman Pool Services',
    description:
      'As Certified Pool Operators, Aquaman Pool Services provides quality pool and equipment maintenance in Puerto Rico. Official Hayward and Pentair warranty servicing. With 20+ years of experience and 250+ satisfied customers, trust us to keep your pool in top condition.',
    url: 'https://aquamanps.vercel.app',
    siteName: 'Aquaman Pool Services',
    images: '/api/og',
    type: 'website',
  },
  themeColor: '#121b21',
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if a user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const t = useTranslations();
  const navItems = [
    t('Nav.contact'),
    t('Nav.services'),
    t('Nav.experience'),
    t('Nav.about'),
  ];

  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aquaman Pool Services',
    telephone: '(787) 635-0366',
    email: 'aquamanps@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Puerto Rico',
      addressCountry: 'US',
    },
    url: 'https://aquamanps.vercel.app/',
  };

  return (
    <html
      lang={locale}
      data-theme='light'
      className={`${inter.className} ${grotesk.variable}`}
    >
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Suspense fallback={<Loading />}>
          <Hero />
          <Navbar
            locale={locale}
            nextLang={t('Nav.language')}
            navItems={navItems}
          />

          {children}

          <Overlay />
          <Contact locale={locale} />
          <Footer navItems={navItems} />
        </Suspense>
      </body>
    </html>
  );
}
