import Image from 'next/image';
import Language from './Language';
import NavItems from './NavItems';
import styles from './Navbar.module.css';
import Logo from '../logo/Logo';
import Menu from '../../../public/icons/list.svg';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className='container-fluid'>
        <ul>
          <li key='logo'>
            <Logo />
          </li>
        </ul>
        <ul>
          <li key='language'>
            <Language />
          </li>
          <li key='menu'>
            <a href='#'>
              <Menu />
            </a>
          </li>
        </ul>
      </nav>

      <aside className='container center-text'>
        <nav>
          <p>
            <a href='#'>ESPAÑOL</a>
          </p>
          <NavItems />
        </nav>
      </aside>
    </div>
  );
}
