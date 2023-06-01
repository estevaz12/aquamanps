import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <Image
          src='/images/pool1.jpg'
          alt='Pool'
          fill={true}
          className={styles.heroImage}
        />
        <header className={'container center-text ' + styles.heroText}>
          <hgroup>
            <h1>Aquaman Pool Services</h1>
            <h2>Slogan</h2>
          </hgroup>
        </header>
      </div>
      <div className={styles.heroMargin}></div>
    </>
  );
}
