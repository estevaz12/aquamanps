'use client';

import styles from './Figure.module.css';
import Image from 'next/image';
import { useState } from 'react';
import dirty from '@/public/images/dirty-pool.jpg';
import clean from '@/public/images/clean-pool.jpg';
import { useWindowDimensions } from '@/app/lib/hooks';

export default function BeforeAfterFig({ caption }) {
  const [sliderVal, setSliderVal] = useState(50);
  const { width, height } = useWindowDimensions();
  const breakpoint = width > 768 && height <= 1080;

  function handleChange(e) {
    setSliderVal(e.target.value);
  }

  return (
    <figure className={breakpoint ? styles.responsive : 'full-width'}>
      <div className={styles.imgContainer}>
        <Image
          src={clean}
          alt='Pool'
          width={768}
          height={768}
          className={styles.after}
          loading='lazy'
        />
        <Image
          src={dirty}
          alt='Pool'
          width={768}
          height={768}
          className={styles.before}
          style={{ width: `${sliderVal}%` }}
          loading='lazy'
        />
        <input
          type='range'
          min='1'
          max='100'
          value={sliderVal}
          onChange={handleChange}
          className={styles.slider}
          name='slider'
          aria-label='Before after slider'
        />
      </div>

      <figcaption>
        <small>
          <i>{caption}</i>
        </small>
      </figcaption>
    </figure>
  );
}
