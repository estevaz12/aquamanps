import Image from 'next/image';
import styles from './Contact.module.css';
import Form from './Form';

export default function Contact() {
  return (
    <footer className={'container center-text ' + styles.contact}>
      <h1>Contact Us</h1>
      <a
        aria-label='Chat on WhatsApp'
        href='https://wa.me/1XXXXXXXXXX?text=Hello%21%20I%20am%20looking%20for%20Aquaman%27s%20pool%20services.'
      >
        <Image
          alt='Chat on WhatsApp'
          src='/wa-btn/WhatsAppButtonGreenLarge.svg'
          width={207}
          height={48}
          loading='lazy'
        />
      </a>
      <br />
      <br />
      <div className='container'>
        <p>
          Our main contact channel is WhatsApp, but you can also reach us at:
        </p>

        <ul className={styles.contactAddrs}>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1rem'
              height='1rem'
              fill='#fff'
              className='bi bi-telephone-fill'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
              />
            </svg>
            &emsp;
            <a href='tel:+1(787)635-0366'>(787) 635-0366</a>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1rem'
              height='1rem'
              fill='#fff'
              className='bi bi-envelope-fill'
              viewBox='0 0 16 16'
            >
              <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
            </svg>
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
