import Image from 'next/image';
import styles from './Hero.module.css';
import Logo from '../logo/Logo';
import heroPic from '@/public/images/pool1.jpg';

export default function Hero() {
  return (
    <>
      <div id='#top' className={`full-width ${styles.hero}`}>
        <Image
          src={heroPic}
          alt='Pool'
          fill={true}
          className={styles.heroImage}
          priority={true}
        />
        <header className={`container center-text ${styles.heroText}`}>
          <hgroup>
            <Logo />
            <h2>Experience you can trust</h2>
          </hgroup>
        </header>
      </div>
    </>
  );
}
