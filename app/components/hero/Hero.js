import Image from 'next/image';
import styles from './Hero.module.css';
import Logo from '../logo/Logo';

export default function Hero() {
  return (
    <>
      <div id='#top' className={styles.hero}>
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
            <h2>Experience you can trust</h2>
          </hgroup>
        </header>
      </div>
      <div className={styles.heroMargin}></div>
    </>
  );
}
