import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div>
      <Image
        src='/images/pool-cleaning.jpg'
        alt='Man cleaning pool'
        width={500}
        height={500}
        loading='lazy'
      />
      <header className='container'>
        <hgroup>
          <h1>Aquaman Pool Services</h1>
          <h2>Slogan</h2>
        </hgroup>
      </header>
    </div>
  );
}
