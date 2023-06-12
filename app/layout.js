import '@picocss/pico';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Overlay from './components/overlay/Overlay';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aquaman Pool Services',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='light'>
      <body className={inter.className}>
        <Hero />
        <Navbar />

        {children}

        <Overlay />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
