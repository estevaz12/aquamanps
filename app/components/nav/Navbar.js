'use client';

import styles from './Navbar.module.css';
import Logo from '../logo/Logo';
import Menu from '@/public/icons/list.svg';
import Close from '@/public/icons/x-lg.svg';
import { useState } from 'react';
import Link from 'next/link';
import Globe from '@/public/icons/globe2.svg';

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const toggleClass = toggled ? styles.toggled : '';

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
          <li key='language'>
            {!toggled && (
              <details role='list'>
                <summary aria-haspopup='listbox' role='link'>
                  <Globe color='#fff' />
                </summary>
                <ul role='listbox'>
                  <li>
                    <Link href='#'>Español</Link>
                  </li>
                </ul>
              </details>
            )}
          </li>
          <li key='menu' onClick={handleClick}>
            <a href='#'>{toggled ? <Close /> : <Menu />}</a>
          </li>
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
                  <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}

const items = ['CONTACT', 'SERVICES', 'EXPERIENCE', 'ABOUT'];
