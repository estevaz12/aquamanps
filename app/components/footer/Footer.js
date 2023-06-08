import NavItems from '../nav/NavItems';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={'container center-text ' + styles.footer}>
        <NavItems />
        <h1>Aquaman</h1>
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
