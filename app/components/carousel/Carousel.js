import styles from './Carousel.module.css';

export default function Carousel({ elements, className = '' }) {
  return (
    <figure className={`${className} ${styles.carousel}`}>
      {elements.map((element) => element)}
    </figure>
  );
}
