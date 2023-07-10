import styles from './Contact.module.css';
import Phone from '@/public/icons/telephone-fill.svg';
import Email from '@/public/icons/envelope-fill.svg';
import WABtn from '@/public/wa-btn/WhatsAppButtonGreenLarge.svg';
import WABtnES from '@/public/wa-btn/WhatsAppButtonGreenLargeES.svg';
import Link from 'next/link';
import Form from './Form';
import Wave from '@/public/wave.svg';
import { useTranslations } from 'next-intl';

export default function Contact({ locale }) {
  const t = useTranslations('Contact');
  const whatsAppT = useTranslations('WhatsApp');

  return (
    <footer className={`center-text ${styles.contact}`}>
      <div className='top-wave'>
        <Wave />
      </div>
      <h1 id='contact'>{t('title')}</h1>
      <Link
        aria-label={whatsAppT('label')}
        href={`https://wa.me/17876350366?text=${whatsAppT('text')}`}
      >
        {locale === 'en' ? <WABtn /> : <WABtnES />}
      </Link>
      <br />
      <br />
      <div className='container'>
        <p>{t('description')}</p>

        <ul className={styles.contactAddrs}>
          <li>
            <Phone />
            &emsp;
            <Link href='tel:+1(787)635-0366'>(787) 635-0366</Link>
          </li>
          {/* <li>
            <Email />
            &emsp;
            <Link href='mailto:aquamanps@gmail.com'>aquamanps@gmail.com</Link>
          </li> */}
        </ul>
      </div>
      {/* <br />
      <Form translations={t.raw('form')} /> */}
    </footer>
  );
}
