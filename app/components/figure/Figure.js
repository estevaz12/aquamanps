'use client';

import styles from './Figure.module.css';
import Image from 'next/image';
import { useState } from 'react';
import beforePic from '@/public/images/pool2.jpg';
import { useWindowDimensions } from '@/app/lib/hooks';

export default function BeforeAfterFig() {
  const [sliderVal, setSliderVal] = useState(50);
  const { width, height } = useWindowDimensions();
  const breakpoint = width > 768 && height <= 1080;
  const makeResponsive = {
    position: 'static',
    margin: '0 auto',
    width: '70%',
  };

  function handleChange(e) {
    setSliderVal(e.target.value);
  }

  return (
    <figure className='full-width' style={breakpoint ? makeResponsive : {}}>
      <div className={styles.imgContainer}>
        <Image src={beforePic} alt='Pool' className={styles.after} />
        <Image
          src={beforePic}
          alt='Pool'
          className={styles.before}
          style={{ width: `${sliderVal}%` }}
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
          <i>Drag to see before and after</i>
        </small>
      </figcaption>
    </figure>
  );
}

// TODO: make page responsive
// TODO: make compatible accross browsers and devices
// TODO: make it search engine optimized
// TODO: i18n routing
// TODO: redisign with Tailwind
// TODO: fonts
// TODO: about page
