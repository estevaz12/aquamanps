'use client';

import styles from './Navbar.module.css';
import Logo from '../logo/Logo';
import Menu from '@/public/icons/list.svg';
import Close from '@/public/icons/x-lg.svg';
import { useState } from 'react';
import Link from 'next/link';
import Globe from '@/public/icons/globe2.svg';
import { useWindowDimensions } from '@/app/lib/hooks';

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const toggleClass = toggled ? styles.toggled : '';
  const { width } = useWindowDimensions();
  const breakpoint = width >= 1024;

  function handleClick(e) {
    e.preventDefault();
    setToggled(!toggled);
  }

  return (
    <div className={`${styles.navbar} ${toggleClass}`}>
      <nav className='container-fluid'>
        <ul>
          <li key='logo'>
            <Link
              href='/#top'
              onClick={() => {
                setToggled(false);
              }}
            >
              <Logo />
            </Link>
          </li>
        </ul>
        <ul>
          {breakpoint &&
            items.map((item) => (
              <li key={item} className={styles.extendedNav}>
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          <li key='language'>
            {!toggled && (
              <details role='list'>
                <summary aria-haspopup='listbox' role='link'>
                  <Globe color='#fff' width='1rem' height='1rem' />
                </summary>
                <ul role='listbox'>
                  <li>
                    <Link href='#'>Español</Link>
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
              <Link href='#'>ESPAÑOL</Link>
            </p>
            <ul>
              {items.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setToggled(false);
                  }}
                >
                  <Link href={`#${item.toLowerCase()}`}>
                    {item.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}

const items = ['Contact', 'Services', 'Experience', 'About'];
