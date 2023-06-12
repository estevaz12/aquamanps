import styles from './Carousel.module.css';

export default function Carousel({ children }) {
  return (
    <div className={styles.carousel}>
      {children}
    </div>
  );
}
