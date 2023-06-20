'use client';

import styles from './Figure.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function BeforeAfterFig({ className }) {
  const [sliderVal, setSliderVal] = useState(50);

  function handleChange(e) {
    setSliderVal(e.target.value);
  }

  return (
    <figure className={className}>
      <div className={`${styles.imgContainer} ${styles.after}`}>
        <Image src='/images/pool2.jpg' alt='Pool' fill={true} />
        <div className={`${styles.before}`} style={{ width: `${sliderVal}%` }}>
          <Image src='/images/pool2.jpg' alt='Pool' fill={true} />
        </div>
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
          <i>Drag to see before and after</i>
        </small>
      </figcaption>
    </figure>
  );
}
