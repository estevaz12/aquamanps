'use client';

import styles from './Navbar.module.css';
import Logo from '../logo/Logo';
import Menu from '@/public/icons/list.svg';
import Close from '@/public/icons/x-lg.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Globe from '@/public/icons/globe2.svg';
import { useWindowDimensions } from '@/app/lib/hooks';

export default function Navbar({ locale, nextLang, navItems }) {
  const [toggled, setToggled] = useState(false);
  const toggleClass = toggled ? styles.toggled : '';
  const { width } = useWindowDimensions();
  const breakpoint = width >= 1024;
  const nextLocale = locale === 'en' ? 'es' : 'en';

  useEffect(() => {
    if (breakpoint) {
      setToggled(false);
    }
  }, [breakpoint]);

  function handleClick(e) {
    e.preventDefault();
    setToggled(!toggled);
  }

  return (
    <div className={`${styles.navbar} ${toggleClass}`}>
      <nav className='container-fluid'>
        <ul>
          <li key='logo'>
            <a
              href='#top'
              onClick={() => {
                setToggled(false);
              }}
            >
              <Logo />
            </a>
          </li>
        </ul>
        <ul>
          {breakpoint &&
            navItems.map((item, i) => (
              <li key={item} className={styles.extendedNav}>
                <a href={`#${navIds[i]}`}>{item}</a>
              </li>
            ))}
          <li key='language'>
            {!toggled && (
              <details role='list'>
                <summary
                  aria-haspopup='listbox'
                  role='button'
                  className='outline'
                >
                  <Globe color='#fff' width='1rem' height='1rem' />
                </summary>
                <ul role='listbox'>
                  <li>
                    <Link href={`/${nextLocale}`}>{nextLang}</Link>
                  </li>
                </ul>
              </details>
            )}
          </li>
          {!breakpoint && (
            <li key='menu' onClick={handleClick}>
              <a href='#'>
                {toggled ? (
                  <Close width='1.25rem' height='1.25rem' />
                ) : (
                  <Menu width='1.25rem' height='1.25rem' />
                )}
              </a>
            </li>
          )}
        </ul>
      </nav>

      {toggled && (
        <aside className={`container center-text`}>
          <nav>
            <p>
              <Link href={`/${nextLocale}`}>{nextLang.toUpperCase()}</Link>
            </p>
            <ul>
              {navItems.map((item, i) => (
                <li
                  key={item}
                  onClick={() => {
                    setToggled(false);
                  }}
                >
                  <a href={`#${navIds[i]}`}>{item.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}

const navIds = ['contact', 'services', 'experience', 'about'];
