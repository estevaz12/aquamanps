import styles from './Figure.module.css';
import Image from 'next/image';

export default function BeforeAfterFig() {
  return (
    <figure>
      <Image
        src='/images/pool2.jpg'
        alt='Pool'
        width={320}
        height={320}
        loading='lazy'
        className={styles.img}
      />
      <figcaption>
        <small>
          <i>Drag the slider to see before and after</i>
        </small>
      </figcaption>
    </figure>
  );
}
