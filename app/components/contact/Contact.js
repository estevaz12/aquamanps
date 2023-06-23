import styles from './Contact.module.css';
import Form from './Form';
import Phone from '@/public/icons/telephone-fill.svg';
import Email from '@/public/icons/envelope-fill.svg';
import WABtn from '@/public/wa-btn/WhatsAppButtonGreenLarge.svg';
import Link from 'next/link';

export default function Contact() {
  return (
    <footer className={`center-text ${styles.contact}`}>
      <h1 id='contact'>Contact Us</h1>
      <Link
        aria-label='Chat on WhatsApp'
        href='https://wa.me/17876350366?text=Hello%21%20I%20am%20looking%20for%20Aquaman%27s%20pool%20services.'
      >
        <WABtn />
      </Link>
      <br />
      <br />
      <div className='container'>
        <p>
          Our main contact channel is WhatsApp, but you can also reach us at:
        </p>

        <ul className={styles.contactAddrs}>
          <li>
            <Phone />
            &emsp;
            <Link href='tel:+1(787)635-0366'>(787) 635-0366</Link>
          </li>
          <li>
            <Email />
            &emsp;
            <Link href='mailto:aquamanps@gmail.com'>aquamanps@gmail.com</Link>
          </li>
        </ul>
      </div>
      <br />
      <Form />
    </footer>
  );
}
