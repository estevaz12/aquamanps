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
          className={styles.after}
          priority={true}
        />
        <Image
          src={dirty}
          alt='Pool'
          className={styles.before}
          style={{ width: `${sliderVal}%` }}
          priority={true}
        />
        <input
          type='range'
          min='1'
          max='100'
          value={sliderVal}
          onChange={handleChange}
          className={styles.slider}
          name='slider'
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

// TODO: open graph images and all
// TODO: make it search engine optimized
// TODO: about page
