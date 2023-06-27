import styles from './Overlay.module.css';
import UpArrow from '@/public/icons/arrow-up.svg';
import WhatsApp from '@/public/icons/wa-white.svg';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Overlay() {
  const t = useTranslations('WhatsApp');

  return (
    <div className={styles.overlay}>
      {/* <button className='contrast'>
        <Link href='/'>
          <UpArrow width='1.5rem' height='1.5rem' color='#fff' />
        </Link>
      </button> */}
      <button className='whatsapp'>
        <Link href={`https://wa.me/17876350366?text=${t('text')}`}>
          <WhatsApp width='1.5rem' height='1.5rem' />
        </Link>
      </button>
    </div>
  );
}
