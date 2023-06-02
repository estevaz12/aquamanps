import styles from './Carousel.module.css';

export default function Carousel({ elements }) {
  return (
    <figure className={styles.carousel}>
      {elements.map((element) => element)}
    </figure>
  );
}
