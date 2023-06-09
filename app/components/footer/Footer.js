import Logo from '../logo/Logo';
import NavItems from '../nav/NavItems';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer id='footer' className={'container center-text ' + styles.footer}>
        <NavItems />
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
