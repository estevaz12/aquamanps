import { useTranslations } from 'next-intl';
import Logo from '../logo/Logo';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer({ navItems }) {
  const t = useTranslations('Footer');
  return (
    <>
      <footer id='footer' className={`center-text ${styles.footer}`}>
        <ul>
          {navItems.map((item, i) => (
            <li key={item}>
              <a href={`#${navIds[i]}`}>{item.toUpperCase()}</a>
            </li>
          ))}
        </ul>

        <Logo />
      </footer>

      <footer className={`center-text ${styles.copyright}`}>
        <small>
          &copy; 2023 Aquaman Pool Services |{' '}
          <Link href='mailto:estebanvazquez1607@gmail.com'>
            {t('webmaster')}
          </Link>
        </small>
      </footer>
    </>
  );
}

const navIds = ['contact', 'services', 'experience', 'about'];
