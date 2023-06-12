import Image from 'next/image';
import styles from './Contact.module.css';
import Form from './Form';
import Phone from '../../../public/icons/telephone-fill.svg';
import Email from '../../../public/icons/envelope-fill.svg';
import WABtn from '../../../public/wa-btn/WhatsAppButtonGreenLarge.svg';

export default function Contact() {
  return (
    <footer className={'container center-text ' + styles.contact}>
      <h1 id='contact'>Contact Us</h1>
      <a
        aria-label='Chat on WhatsApp'
        href='https://wa.me/1XXXXXXXXXX?text=Hello%21%20I%20am%20looking%20for%20Aquaman%27s%20pool%20services.'
      >
        <WABtn />
      </a>
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
            <a href='tel:+1(787)635-0366'>(787) 635-0366</a>
          </li>
          <li>
            <Email />
            &emsp;
            <a href='mailto:aquamanps@gmail.com'>aquamanps@gmail.com</a>
          </li>
        </ul>
      </div>
      <br />
      <button className='contrast'>Contact Form</button>
      <Form />
    </footer>
  );
}
// TODO: change all SVGs to svg tag and size to rem
