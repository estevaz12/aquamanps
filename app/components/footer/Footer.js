import Logo from '../logo/Logo';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer id='footer' className={'container center-text ' + styles.footer}>
        <ul>
          {items.map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        <Logo />
      </footer>

      <footer className={'container-fluid center-text ' + styles.copyright}>
        <small>
          &copy; 2023 Aquaman Pool Services |{' '}
          <a href='mailto:estebanvazquez1607@gmail.com'>Contact Webmaster</a>
        </small>
      </footer>
    </>
  );
}

const items = ['CONTACT', 'SERVICES', 'EXPERIENCE', 'ABOUT'];
