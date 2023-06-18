import styles from './Overlay.module.css';
import UpArrow from '../../../public/icons/arrow-up.svg';
import WhatsApp from '../../../public/icons/wa-white.svg';
import Link from 'next/link';

export default function Overlay() {
  return (
    <div className={styles.overlay}>
      {/* <button className='contrast'>
        <Link href='/'>
          <UpArrow width='1.5rem' height='1.5rem' color='#fff' />
        </Link>
      </button> */}
      <button className='whatsapp'>
        <Link href='https://wa.me/17876350366?text=Hello%21%20I%20am%20looking%20for%20Aquaman%27s%20pool%20services.'>
          <WhatsApp width='1.5rem' height='1.5rem' />
        </Link>
      </button>
    </div>
  );
}

// TODO: wherever i use var(--contrast) for color, try instead adding class 'contrast' to the element
// TODO: smooth scroll up
