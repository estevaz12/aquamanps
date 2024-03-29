import Image from 'next/image';
import styles from './Hero.module.css';
import Logo from '../logo/Logo';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <>
      <div id='#top' className={`full-width ${styles.hero}`}>
        <Image
          src='/images/pool1.jpg'
          alt='Pool'
          fill={true}
          className={styles.heroImage}
          priority={true}
        />
        <header className={`container center-text ${styles.heroText}`}>
          <hgroup>
            <Logo />
            <h2>{t('subtitle')}</h2>
          </hgroup>
        </header>
      </div>
    </>
  );
}
