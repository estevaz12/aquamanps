import Image from 'next/image';
import Language from './Language';
import NavItems from './NavItems';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.fixedTop}>
      <nav className='container-fluid'>
        <ul>
          <li key='logo'>
            <strong>Aquaman</strong>
          </li>
        </ul>
        <ul>
          <li key='language'>
            <Language />
          </li>
          <li key='menu'>
            <a href='#'>
              <Image
                src='/icons/list.svg'
                width={16}
                height={16}
                alt='Nav menu'
              />
            </a>
          </li>
        </ul>
      </nav>

      <aside className='container center-text'>
        <nav>
          <div>
            <a href='#'>ESPAÑOL</a>
          </div>
          <NavItems />
        </nav>
      </aside>
    </div>
  );
}
