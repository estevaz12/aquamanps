import styles from './LoopSlider.module.css';
import Image from 'next/image';

export default function LoopSlider({ imgData }) {
  return (
    <div className='full-width'>
      <div className={styles.slider}>
        {imgData.map((img, i) => {
          <Image
            key={i}
            src={img.src}
            alt={img.name}
            width={img.width}
            height={img.height}
            loading='lazy'
          />;
        })}
        {imgData.map((img, i) => {
          <Image
            key={i + imgData.length}
            src={img.src}
            alt={img.name}
            width={img.width}
            height={img.height}
            loading='lazy'
          />;
        })}
      </div>
    </div>
  );
}
